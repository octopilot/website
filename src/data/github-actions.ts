export interface ActionInput {
  name: string;
  description: string;
  required: boolean;
  default?: string;
}

export interface ActionOutput {
  name: string;
  description: string;
}

export interface ActionGotcha {
  language?: string; // e.g. "Go", "Rust" — shown as a badge
  title: string;
  symptom: string;   // what you see when it fails
  fix: string;       // prose explanation of the fix
  code?: string;     // optional shell / yaml snippet
}

export interface GithubAction {
  id: string;
  title: string;
  path: string;
  version: string;
  description: string;
  features: string[];
  inputs: ActionInput[];
  outputs?: ActionOutput[];
  example: string;
  gotchas?: ActionGotcha[];
  icon: string;
  iconColor: string;
  iconBg: string; // Tailwind class
}

export const githubActions: GithubAction[] = [
  {
    id: "octopilot",
    title: "Octopilot Build",
    path: "octopilot/actions/octopilot@main",
    version: "v1",
    description: "Builds and pushes multi-architecture container images using Octopilot Pipeline Tools. Reads skaffold.yaml, builds all artifacts with Cloud Native Buildpacks or Dockerfile builders, assembles OCI manifest lists, and writes build_result.json. Supports either a target registry (e.g. ghcr.io/org) or ephemeral ttl.sh builds via ttl-uuid. Outputs digest and full image tag for downstream attestation and promotion.",
    features: [
      "Multi-arch manifest list (amd64 + arm64)",
      "Registry or ttl.sh ephemeral (ttl-uuid / ttl-tag)",
      "Single-artifact fan-out (artifact input for matrix)",
      "SBOM generation; build bypass for bootstrapping"
    ],
    inputs: [
      { name: "registry", description: "Target registry and org (e.g. ghcr.io/octopilot). Ignored when ttl-uuid is set.", required: false },
      { name: "ttl-uuid", description: "When set, push to ttl.sh/<ttl-uuid>-<suffix>:<ttl-tag> and write build_result.json (ephemeral). Overrides registry.", required: false },
      { name: "ttl-tag", description: "Tag for ttl.sh when ttl-uuid is set (e.g. 1h, 24h)", required: false, default: "1h" },
      { name: "version", description: "Version tag applied to pushed images (defaults to GITHUB_REF_NAME)", required: false },
      { name: "platforms", description: "Comma-separated platform list (e.g. linux/amd64,linux/arm64)", required: false, default: "linux/amd64" },
      { name: "artifact", description: "Build only this artifact (exact image name from skaffold) — for matrix/fan-out integration builds", required: false },
      { name: "op_version", description: "Version of the ghcr.io/octopilot/op image to use", required: false, default: "v1.0.4" },
      { name: "sbom_output", description: "Directory for SBOM output; packaged as sbom_output.tar.gz when non-empty", required: false, default: "dist/sbom" },
      { name: "op_binary", description: "Path to a pre-built op binary (only used when build_bypass is true)", required: false, default: "op" },
      { name: "build_bypass", description: "Run op directly instead of inside a container — used for bootstrapping", required: false, default: "false" }
    ],
    outputs: [
      { name: "digest", description: "sha256 digest of the application image — ready for actions/attest-build-provenance" },
      { name: "tag", description: "Full image ref from build_result.json (e.g. ttl.sh/<uuid>-<suffix>:<tag>@sha256:... or registry/image:tag@sha256:...)" }
    ],
    example: `name: Release

on:
  push:
    tags: ["v*"]

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      id-token: write
      attestations: write
    steps:
      - uses: actions/checkout@v4

      - uses: docker/setup-qemu-action@v3

      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Build and Push
        id: push
        uses: octopilot/actions/octopilot@main
        with:
          version: \${{ github.ref_name }}
          registry: ghcr.io/\${{ github.repository_owner }}
          platforms: linux/amd64,linux/arm64

      - name: Attest Build Provenance
        uses: actions/attest-build-provenance@v2
        with:
          subject-name: ghcr.io/\${{ github.repository_owner }}/my-app
          subject-digest: \${{ steps.push.outputs.digest }}
          push-to-registry: true`,
    gotchas: [
      {
        language: "Container mode",
        title: "GHCR DENIED on first push (or any private registry)",
        symptom: "Pack's ANALYZE phase fails with: DENIED: requested access to the resource is denied — even though docker/login-action ran successfully in the same job.",
        fix: "In container mode (build_bypass: false), op build runs inside ghcr.io/octopilot/op. docker/login-action stores credentials in ~/.docker/config.json on the host runner, but that file is not inside the container. Pack makes direct HTTPS calls to the registry API during ANALYZE — without credentials it gets DENIED even for an existence check. This is fixed: the action now mounts ${HOME}/.docker read-only into the container. If you see this error, upgrade to the latest octopilot/actions/octopilot@main. With build_bypass: true the binary runs on the host which already has the credentials — this issue does not apply.",
        code: `# Bypass mode avoids the issue entirely and is preferred when you
# already have a pre-built op binary from a prior job:
- uses: octopilot/actions/octopilot@main
  with:
    registry: ghcr.io/my-org
    build_bypass: true
    op_binary: ./dist/op-linux-amd64`
      }
    ],
    icon: "fa-rocket",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10"
  },
  {
    id: "lint",
    title: "Lint",
    path: "octopilot/actions/lint@main",
    version: "v1",
    description: "Runs pre-commit linting across the workspace. Language toolchains (Go, Rust, Node, Python, Java) are set up automatically based on the languages detected in the pipeline-context from detect-contexts, so language-specific hooks such as rustfmt and golangci-lint work without any extra configuration.",
    features: [
      "Language-aware toolchain setup",
      "pre-commit hook runner",
      "Environment caching",
      "Zero config — reads pipeline-context"
    ],
    inputs: [
      {
        name: "pipeline-context",
        description: "Consolidated CI context JSON produced by detect-contexts. Determines which toolchains to install before running pre-commit.",
        required: true
      },
      {
        name: "golangci-lint-timeout",
        description: "Timeout passed to golangci-lint via --timeout. Increase for projects with large vendor trees. golangci-lint-action@v6 overrides .golangci.yml run.timeout, so this must be set explicitly.",
        required: false,
        default: "10m"
      }
    ],
    example: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  detect:
    runs-on: ubuntu-latest
    outputs:
      pipeline-context: \${{ steps.detect.outputs.pipeline-context }}
    steps:
      - uses: actions/checkout@v4
      - id: detect
        uses: octopilot/actions/detect-contexts@main

  lint:
    needs: detect
    if: toJSON(fromJson(needs.detect.outputs.pipeline-context).languages) != '[]'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/lint@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}
          # Optional: increase for large vendor trees (default: 10m)
          # golangci-lint-timeout: 15m`,
    gotchas: [
      {
        language: "Go",
        title: "golangci-lint timeout — use .golangci.yml",
        symptom: "golangci-lint exits with code 4: context deadline exceeded / Timeout exceeded. The pre-commit golangci-lint hook does not reliably read .golangci.yml, so the timeout directive is silently ignored on large vendor trees.",
        fix: "This action runs golangci-lint via golangci/golangci-lint-action@v6 and passes --timeout=10m explicitly via its args input. golangci-lint-action@v6 passes --timeout internally and overrides the run.timeout value in .golangci.yml, so the config file alone is not sufficient — the explicit arg is required. The pre-commit golangci-lint hook is automatically skipped to avoid double-running.",
        code: `# In the action: args: --timeout=10m is passed explicitly.
# .golangci.yml is still useful for local 'pre-commit run' and direct
# 'golangci-lint run' invocations:
run:
  timeout: 10m`
      },
      {
        language: "Go",
        title: "golangci-lint pre-built binary compiled with older Go than project requires",
        symptom: "golangci-lint exits with: the Go language version (goX.Y) used to build golangci-lint is lower than the targeted Go version (X.Y.Z). In CI this happens when golangci-lint-action downloads a pre-built binary release that was compiled with an older Go.",
        fix: "This action uses install-mode: goinstall, which compiles golangci-lint from source using the Go toolchain already set up by actions/setup-go. The compiled binary inherits the project's Go version, so the mismatch cannot occur. Locally, use GOTOOLCHAIN when installing.",
        code: `# Install locally (run once after cloning or upgrading Go)
GOTOOLCHAIN="go$(grep '^go ' go.mod | awk '{print $2}')" \\
  go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest`
      }
    ],
    icon: "fa-magnifying-glass",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10"
  },
  {
    id: "kotlin-lint",
    title: "Kotlin lint (ktlint)",
    path: "octopilot/actions/kotlin-lint@main",
    version: "v1",
    description:
      "Standalone ktlint for plain Kotlin repositories: installs the ktlint binary, writes a Checkstyle XML report, and publishes GitHub annotations via yutailang0119/action-ktlint. Does not require detect-contexts, pre-commit, or Gradle — only checkout and this action. Use optional working-directory for monorepo packages.",
    features: [
      "No pipeline-context or Octopilot wiring",
      "PR annotations from Checkstyle XML",
      "Optional subfolder (working-directory)",
      "Configurable ktlint version and fail-on-error"
    ],
    inputs: [
      {
        name: "working-directory",
        description:
          "Directory where ktlint runs (`.` for repo root, or a subfolder such as a Kotlin package in a monorepo).",
        required: false,
        default: "."
      },
      {
        name: "ktlint-version",
        description: "ktlint release tag from pinterest/ktlint (e.g. 1.7.1).",
        required: false,
        default: "1.7.1"
      },
      {
        name: "ignore-warnings",
        description: "Ignore warning-severity findings in action-ktlint annotations.",
        required: false,
        default: "true"
      },
      {
        name: "report-directory",
        description: "Directory for the Checkstyle XML report, relative to working-directory.",
        required: false,
        default: "build"
      },
      {
        name: "report-filename",
        description: "Report filename under report-directory.",
        required: false,
        default: "ktlint-report.xml"
      },
      {
        name: "kotlin-extra-args",
        description: "Extra arguments passed to ktlint (space-separated).",
        required: false,
        default: ""
      },
      {
        name: "fail-on-error",
        description:
          "When true, the annotation step fails the job if the report contains error-severity issues.",
        required: false,
        default: "true"
      }
    ],
    example: `name: ktlint

on:
  push:
    branches: [main]
    paths:
      - '**.kt'
      - '**.kts'
      - '.github/workflows/ktlint.yml'
  pull_request:
    paths:
      - '**.kt'
      - '**.kts'

permissions:
  contents: read
  checks: write

jobs:
  ktlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: octopilot/actions/kotlin-lint@main
        # Optional:
        # with:
        #   working-directory: packages/my-lib
        #   ktlint-version: '1.7.1'`,
    gotchas: [
      {
        language: "Android / Gradle",
        title: "Prefer ./gradlew ktlintCheck when the project uses the ktlint Gradle plugin",
        symptom:
          "Standalone ktlint disagrees with local or CI results that use org.jlleitschuh.gradle.ktlint because rules or classpath differ.",
        fix: "For Gradle-first Android/Kotlin projects, run ./gradlew ktlintCheck in CI so the same plugin configuration and baselines apply. Use kotlin-lint for raw Kotlin repos or when you only need the binary plus annotations.",
        code: `- uses: gradle/actions/setup-gradle@v4
- run: ./gradlew ktlintCheck`
      },
      {
        language: "GitHub Actions",
        title: "Invalid Argument — ref missing after @ (octopilot/actions/kotlin-lint@)",
        symptom:
          "Workflow parse fails: Expected format {org}/{repo}[/path]@ref. Actual 'octopilot/actions/kotlin-lint@' with nothing after @.",
        fix: "The branch or tag after @ is required. Use a literal ref (e.g. octopilot/actions/kotlin-lint@main). If you use ${{ inputs.x }} or a repository variable for the ref, ensure it is never empty — empty overrides can drop the default.",
        code: `# Good
uses: octopilot/actions/kotlin-lint@main

# Risky — only if inputs.ref defaults to main and callers never pass ''
uses: octopilot/actions/kotlin-lint@\${{ inputs.ref || 'main' }}`
      }
    ],
    icon: "fa-code",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10"
  },
  {
    id: "test",
    title: "Test",
    path: "octopilot/actions/test@main",
    version: "v1",
    description: "Runs tests for a single language context item from the pipeline-context matrix. Supports Go, Rust, Python, and Node. The matrix fan-out is declared in the calling workflow; this action handles per-item toolchain setup and test execution, with an optional custom command override.",
    features: [
      "Go, Rust, Python, Node support",
      "Custom command override",
      "Matrix-native — one item per call",
      "Working directory from context"
    ],
    inputs: [
      {
        name: "pipeline-context",
        description: "A single matrix item JSON from detect-contexts pipeline-context.matrix. Pass with: pipeline-context: ${{ toJson(matrix) }}",
        required: true
      }
    ],
    example: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  detect:
    runs-on: ubuntu-latest
    outputs:
      pipeline-context: \${{ steps.detect.outputs.pipeline-context }}
    steps:
      - uses: actions/checkout@v4
      - id: detect
        uses: octopilot/actions/detect-contexts@main

  test:
    needs: detect
    if: toJSON(fromJson(needs.detect.outputs.pipeline-context).matrix) != '[]'
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include: \${{ fromJson(needs.detect.outputs.pipeline-context).matrix }}
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/test@main
        with:
          pipeline-context: \${{ toJson(matrix) }}`,
    icon: "fa-flask",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10"
  },
  {
    id: "release",
    title: "Release Notes Generator",
    path: "octopilot/actions/release@main",
    version: "v1",
    description: "Generates automated, AI-summarized release notes from your commit history. It categorizes changes (Features, Fixes, Chores) and produces a clean Markdown output ready for GitHub Releases.",
    features: [
      "LLM-powered context awareness",
      "Customizable Markdown templates",
      "Smart categorization of changes"
    ],
    inputs: [
      { name: "version", description: "Release version (e.g. 1.2.3)", required: true },
      { name: "since_tag", description: "Git ref (tag or commit) to list commits after. Default: previous tag from git describe", required: false },
      { name: "template_path", description: "Path to a Markdown template (relative to repo root). Placeholder {{VERSION}} is replaced.", required: false },
      { name: "template", description: "Inline template content. Ignored if template_path is set.", required: false },
      { name: "provider", description: "LLM provider (anthropic, openai)", required: false, default: "anthropic" },
      { name: "model", description: "Model name (e.g. gpt-4o-mini, claude-sonnet). Optional; action uses defaults.", required: false },
      { name: "output_filename", description: "Output file name under repo root", required: false, default: "release_notes.md" }
    ],
    outputs: [
      { name: "body_file", description: "Path to the generated release notes file (relative to repo root)" },
      { name: "body", description: "Release notes body content" }
    ],
    example: `name: Release
on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate release notes
        id: notes
        uses: octopilot/actions/release@main
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        with:
          version: \${{ github.ref_name }}
          provider: anthropic

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          body_path: \${{ steps.notes.outputs.body_file }}
          generate_release_notes: false`,
    gotchas: [
      {
        title: "Release workflow requires REPO_PAT, not GITHUB_TOKEN",
        symptom: "The version bump commit is pushed but downstream CI (the build job that creates container images) never triggers. The release completes but no new images are published.",
        fix: "GITHUB_TOKEN cannot push commits back to the repo in a way that triggers downstream CI workflows — GitHub blocks this to prevent infinite loops. Use REPO_PAT (a Personal Access Token with contents:write scope). The octopilot org has REPO_PAT configured as an org-level secret. Pass it when calling the reusable workflow:",
        code: `# In your release.yml
jobs:
  release:
    uses: octopilot/octopilot-workflows/.github/workflows/workflow-release.yml@main
    with:
      mode: rust
      bump: \${{ inputs.bump }}
    secrets:
      repo_token: \${{ secrets.REPO_PAT }}   # NOT secrets.GITHUB_TOKEN`
      }
    ],
    icon: "fa-note-sticky",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10"
  },
  {
    id: "sops-decrypt",
    title: "SOPS Decrypt",
    path: "octopilot/actions/sops-decrypt@main",
    version: "v1",
    description: "Decrypts SOPS-encrypted files (YAML, JSON, dotenv) using GPG or AGE keys. Essential for secure GitOps workflows.",
    features: [
      "Supports GPG & AGE",
      "Multiple output formats (json, yaml, dotenv)",
      "Secure env var handling"
    ],
    inputs: [
      { name: "file", description: "Path to the encrypted file", required: true },
      { name: "age_key", description: "AGE private key", required: false },
      { name: "gpg_key", description: "GPG private key (base64)", required: false },
      { name: "output_type", description: "Output format", required: false, default: "json" },
      { name: "version", description: "Version of SOPS to use", required: false, default: "latest" }
    ],
    outputs: [
      { name: "data", description: "Decrypted content" }
    ],
    example: `steps:
  - uses: actions/checkout@v4
  
  - name: Decrypt secrets
    id: secrets
    uses: octopilot/actions/sops-decrypt@main
    with:
      file: secrets.enc.yaml
      age_key: \${{ secrets.SOPS_AGE_KEY }}
      output_type: json

  - name: Use secrets
    run: echo "Secret is \${{ fromJson(steps.secrets.outputs.data).my_secret }}"`,
    icon: "fa-lock",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10"
  },
  {
    id: "detect-contexts",
    title: "Detect Contexts",
    path: "octopilot/actions/detect-contexts@main",
    version: "v1",
    description: "Parses skaffold.yaml to auto-detect build contexts, languages, and versions. Outputs a pipeline-context JSON object consumed by the lint, test, janitor, and build actions — the foundation of the octopilot CI pipeline.",
    features: [
      "Detects Go, Rust, Node, Python, Java",
      "Generates strategy.matrix from artifacts",
      "Outputs consolidated pipeline-context JSON",
      "Reads skaffold.yaml automatically"
    ],
    inputs: [
      { name: "skaffold-file", description: "Path to skaffold.yaml", required: false, default: "skaffold.yaml" }
    ],
    outputs: [
      { name: "pipeline-context", description: "Consolidated CI context JSON — pass to lint, test, janitor, and build actions" },
      { name: "matrix", description: "JSON matrix for strategy.matrix.include" },
      { name: "languages", description: "Comma-separated list of detected languages" }
    ],
    example: `name: CI
on:
  push:
    branches: [main]

jobs:
  detect:
    runs-on: ubuntu-latest
    outputs:
      pipeline-context: \${{ steps.detect.outputs.pipeline-context }}
    steps:
      - uses: actions/checkout@v4
      - id: detect
        uses: octopilot/actions/detect-contexts@main

  lint:
    needs: detect
    if: toJSON(fromJson(needs.detect.outputs.pipeline-context).languages) != '[]'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/lint@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}`,
    icon: "fa-magnifying-glass-chart",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10"
  },
  {
    id: "bump-version",
    title: "Bump Version",
    path: "octopilot/actions/bump-version@main",
    version: "v1",
    description: "Bumps the semantic version in a project's version file (Cargo.toml, package.json, go version file, pom.xml, etc.) and outputs the new and old version strings. Used by the release workflow before tagging.",
    features: [
      "Go, Rust, Node, Python, Java, .NET",
      "major / minor / patch bump types",
      "Custom file path support",
      "Outputs old and new version"
    ],
    inputs: [
      { name: "mode", description: "Language mode: go, rust, node, python, maven, gradle, dotnet, text", required: false, default: "go" },
      { name: "bump", description: "Bump type: major, minor, or patch", required: false, default: "patch" },
      { name: "file", description: "Path to version file. Defaults: go → internal/cmd/version.go, rust → Cargo.toml", required: false }
    ],
    outputs: [
      { name: "version", description: "The new version string (without v prefix)" },
      { name: "old_version", description: "The previous version string" }
    ],
    example: `- name: Bump version
  id: bump
  uses: octopilot/actions/bump-version@main
  with:
    mode: rust
    bump: patch
    file: api/Cargo.toml

- name: Tag and push
  run: |
    git tag "v\${{ steps.bump.outputs.version }}"
    git push origin "v\${{ steps.bump.outputs.version }}"`,
    icon: "fa-code-branch",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10"
  },
  {
    id: "previous-tag",
    title: "Previous Tag",
    path: "octopilot/actions/previous-tag@main",
    version: "v1",
    description: "Finds the most recent git tag before the current commit. Used in release pipelines to determine the range for changelog and release note generation.",
    features: [
      "Works with shallow and full clones",
      "Configurable fallback value",
      "Skips the current tag automatically"
    ],
    inputs: [
      { name: "fallback", description: "Value to return if no previous tag exists (e.g. v0.0.0)", required: false, default: "" }
    ],
    outputs: [
      { name: "tag", description: "The previous tag, or the fallback value if none found" }
    ],
    example: `- name: Find Previous Tag
  id: prev_tag
  uses: octopilot/actions/previous-tag@main
  with:
    fallback: "v0.0.0"

- name: Generate Release Notes
  uses: octopilot/actions/release@main
  with:
    version: \${{ github.ref_name }}
    since_tag: \${{ steps.prev_tag.outputs.tag }}
    provider: anthropic`,
    icon: "fa-tag",
    iconColor: "text-slate-400",
    iconBg: "bg-slate-500/10"
  },
  {
    id: "is-tag",
    title: "Is Tag",
    path: "octopilot/actions/is-tag@main",
    version: "v1",
    description: "Checks whether the current commit is a git tag. Useful for conditionally running release steps — works from both GITHUB_REF and git describe, so it functions in CI and locally triggered workflows.",
    features: [
      "Checks GITHUB_REF and git describe",
      "Returns tag name when true",
      "Zero inputs required"
    ],
    inputs: [],
    outputs: [
      { name: "is_tag", description: "true if the current commit is tagged, false otherwise" },
      { name: "tag", description: "The tag name if is_tag is true, empty otherwise" }
    ],
    example: `- name: Check if tag
  id: tag_check
  uses: octopilot/actions/is-tag@main

- name: Publish release
  if: steps.tag_check.outputs.is_tag == 'true'
  run: echo "Publishing \${{ steps.tag_check.outputs.tag }}"`,
    icon: "fa-circle-check",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10"
  },
  {
    id: "build-ephemeral",
    title: "Build Ephemeral",
    path: "octopilot/actions/build-ephemeral@main",
    version: "v1",
    description: "Builds and pushes a container image to ttl.sh (a free ephemeral registry) for short-lived use in preview environments, integration tests, or PR review deployments. Images expire automatically after the configured TTL.",
    features: [
      "Pushes to ttl.sh (no auth needed)",
      "Configurable TTL (2h, 1d, etc.)",
      "Auto-generates image name from repo + SHA",
      "Returns full image reference"
    ],
    inputs: [
      { name: "ttl", description: "Time to live for the image (e.g. 2h, 1d)", required: false, default: "2h" },
      { name: "platform", description: "Target platform (e.g. linux/amd64)", required: false, default: "linux/amd64" },
      { name: "registry", description: "Override the default ttl.sh image name (defaults to ttl.sh/owner-repo-sha)", required: false, default: "" },
      { name: "op_version", description: "Version of the op image to use", required: false, default: "v1.0.4" }
    ],
    outputs: [
      { name: "image_ref", description: "Full reference to the pushed ephemeral image (e.g. ttl.sh/org-repo-abc1234:2h)" }
    ],
    example: `- name: Build ephemeral image for PR review
  id: ephemeral
  uses: octopilot/actions/build-ephemeral@main
  with:
    ttl: "4h"
    platform: linux/amd64

- name: Deploy to preview environment
  run: |
    echo "Image: \${{ steps.ephemeral.outputs.image_ref }}"
    # deploy to preview using the ephemeral ref`,
    icon: "fa-clock-rotate-left",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10"
  },
  {
    id: "read-properties",
    title: "Read Properties",
    path: "octopilot/actions/read-properties@main",
    version: "v1",
    description: "Reads a .properties file (key=value format) and exports all entries as GITHUB_ENV environment variables, making them available to subsequent steps. Useful for sharing pipeline configuration across jobs.",
    features: [
      "Exports to GITHUB_ENV automatically",
      "Standard key=value format",
      "Works with pipeline.properties files"
    ],
    inputs: [
      { name: "file", description: "Path to the .properties file to read", required: true }
    ],
    example: `# pipeline.properties contains:
# REGISTRY=ghcr.io/my-org
# NAMESPACE=production

- name: Load pipeline config
  uses: octopilot/actions/read-properties@main
  with:
    file: .github/pipeline.properties

- name: Use the values
  run: echo "Deploying to \${{ env.REGISTRY }}"`,
    icon: "fa-file-lines",
    iconColor: "text-slate-400",
    iconBg: "bg-slate-500/10"
  },
  {
    id: "janitor",
    title: "Janitor",
    path: "octopilot/actions/janitor@main",
    version: "v1",
    description: "Frees ~15 GB of pre-installed but unused toolchains from GitHub-hosted ubuntu-latest runners. When pipeline-context (from detect-contexts) is provided, toolcaches for detected languages are automatically preserved so subsequent setup steps in the same job still work. Omit pipeline-context for Docker-only jobs to remove all toolcaches. Logs disk usage before and after.",
    features: [
      "~15 GB freed on ubuntu-latest",
      "Context-aware — keeps detected language toolcaches",
      "Before/after disk usage report",
      "Safe — skips missing paths silently"
    ],
    inputs: [
      {
        name: "pipeline-context",
        description: "Optional consolidated CI context JSON from detect-contexts. Toolcaches for detected languages are automatically preserved. Omit for Docker-only jobs to remove all toolcaches.",
        required: false,
        default: ""
      }
    ],
    example: `name: CI

on:
  push:
    tags: ["v*"]

jobs:
  detect:
    runs-on: ubuntu-latest
    outputs:
      pipeline-context: \${{ steps.detect.outputs.pipeline-context }}
    steps:
      - uses: actions/checkout@v4
      - id: detect
        uses: octopilot/actions/detect-contexts@main

  # Docker-only job: no pipeline-context → all toolcaches removed
  build:
    needs: detect
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/janitor@main
      - uses: docker/setup-qemu-action@v3
      - name: Build and Push
        uses: octopilot/actions/octopilot@main
        with:
          registry: ghcr.io/\${{ github.repository_owner }}
          platforms: linux/amd64,linux/arm64

  # Job that also runs tests: pass pipeline-context so Go toolcache is kept
  test:
    needs: detect
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/janitor@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}
      - uses: octopilot/actions/test@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}`,
    icon: "fa-broom",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10"
  },
  {
    id: "setup-tools",
    title: "Setup DevOps Tools",
    path: "octopilot/actions/setup-tools@main",
    version: "v1",
    description: "Installs standard DevOps CLIs: kubectl, sops, kustomize, and yq. Ensures consistent tooling across runners.",
    features: [
      "Installs kubectl, sops, kustomize, yq",
      "Version pinning support",
      "Multi-platform support"
    ],
    inputs: [
      { name: "kubectl_version", description: "Kubectl version", required: false, default: "1.32.2" },
      { name: "sops_version", description: "SOPS version", required: false, default: "3.8.1" },
      { name: "kustomize_version", description: "Kustomize version", required: false, default: "5.3.0" },
      { name: "yq_version", description: "Yq version", required: false, default: "4.40.5" }
    ],
    example: `steps:
  - name: Install Tools
    uses: octopilot/actions/setup-tools@main
    with:
      kubectl_version: v1.28.0

  - name: Check tools
    run: |
      kubectl version --client
      sops --version`,
    icon: "fa-toolbox",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10"
  },
  {
    id: "rotate-secret",
    title: "Rotate Repo Secret",
    path: "octopilot/actions/rotate-secret@main",
    version: "v1",
    description: "Securely rotates GitHub Actions secrets using LibSodium encryption. Ideal for automated token rotation jobs.",
    features: [
      "PyNaCl Encryption",
      "Secure Key Fetching",
      "Zero-leak logging"
    ],
    inputs: [
      { name: "secret_name", description: "Name of the secret to update", required: true },
      { name: "secret_value", description: "New value for the secret", required: true },
      { name: "repository", description: "Repository (owner/repo)", required: true },
      { name: "token", description: "GitHub Token with repo scope", required: true }
    ],
    example: `steps:
  - name: Rotate Secret
    uses: octopilot/actions/rotate-secret@main
    with:
      secret_name: MY_SECRET
      secret_value: \${{ steps.generate-token.outputs.token }}
      repository: \${{ github.repository }}
      token: \${{ secrets.PERSONAL_ACCESS_TOKEN }}`,
    icon: "fa-rotate",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10"
  },
  {
    id: "kubernetes-auth",
    title: "Kubernetes Auth",
    path: "octopilot/actions/kubernetes-auth@main",
    version: "v1",
    description: "Authenticates with Kubernetes using OIDC (ROPC flow) and sets up KUBECONFIG.",
    features: [
      "OIDC Authentication (ROPC)",
      "Kubeconfig Generation",
      "Secure token handling"
    ],
    inputs: [
      { name: "oidc_url", description: "OIDC Provider URL", required: true },
      { name: "oidc_username", description: "OIDC Client ID/User", required: true },
      { name: "oidc_password", description: "OIDC Secret/Pass", required: true },
      { name: "k8s_url", description: "K8s API URL", required: true },
      { name: "k8s_namespace", description: "Default namespace", required: false, default: "default" },
      { name: "k8s_skip_tls_verify", description: "Skip TLS verification", required: false, default: "false" }
    ],
    example: `steps:
  - name: Authenticate to K8s
    uses: octopilot/actions/kubernetes-auth@main
    with:
      oidc_url: https://oidc.example.com/token
      oidc_username: \${{ secrets.OIDC_CLIENT_ID }}
      oidc_password: \${{ secrets.OIDC_CLIENT_SECRET }}
      k8s_url: https://k8s.example.com

  - name: Run kubectl
    run: kubectl get pods`,
    icon: "fa-key",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10"
  },
  {
    id: "gke-allow-runner",
    title: "GKE Network Access",
    path: "octopilot/actions/network-access/gke-allow-runner@main",
    version: "v1",
    description: "Whitelists GitHub Runner IPs in GKE Control Plane authorized networks. Ensures secure, temporary access for CI/CD jobs.",
    features: [
      "Dynamic IP Fetching",
      "Safe Add/Remove (preserves existing)",
      "Supports Regional & Zonal Clusters"
    ],
    inputs: [
      { name: "project_id", description: "GCP Project ID", required: true },
      { name: "location", description: "Cluster Location (region/zone)", required: true },
      { name: "cluster_name", description: "Cluster Name", required: true },
      { name: "mode", description: "Operation: add | remove", required: false, default: "add" },
      { name: "description", description: "Entry description", required: false, default: "GitHub Action runner" },
      { name: "service_account_key", description: "GCP SA Key (JSON)", required: false }
    ],
    example: `steps:
  - name: Whitelist Runner IP
    uses: octopilot/actions/network-access/gke-allow-runner@main
    with:
      project_id: my-project
      location: europe-west1
      cluster_name: my-cluster
      mode: add
      service_account_key: \${{ secrets.GCP_SA_KEY }}

  - name: Run kubectl
    run: kubectl get pods

  - name: Remove Whitelist
    if: always()
    uses: octopilot/actions/network-access/gke-allow-runner@main
    with:
      project_id: my-project
      location: europe-west1
      cluster_name: my-cluster
      mode: remove
      service_account_key: \${{ secrets.GCP_SA_KEY }}`,
    icon: "fa-google",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10"
  },
  {
    id: "eks-allow-runner",
    title: "EKS Network Access",
    path: "octopilot/actions/network-access/eks-allow-runner@main",
    version: "v1",
    description: "Whitelists GitHub Runner IPs in AWS EKS Control Plane public access CIDRs. Manages secure access without opening 0.0.0.0/0.",
    features: [
      "Dynamic IP Fetching",
      "Updates VPC Config",
      "Maintains existing CIDRs"
    ],
    inputs: [
      { name: "cluster_name", description: "EKS Cluster Name", required: true },
      { name: "region", description: "AWS Region", required: true },
      { name: "mode", description: "Operation: add | remove", required: false, default: "add" }
    ],
    example: `steps:
  - name: Configure AWS Credentials
    uses: aws-actions/configure-aws-credentials@v4
    with:
      aws-region: us-east-1
      role-to-assume: arn:aws:iam::123456789012:role/my-role

  - name: Whitelist Runner IP
    uses: octopilot/actions/network-access/eks-allow-runner@main
    with:
      cluster_name: my-cluster
      region: us-east-1
      mode: add

  - name: Remove Whitelist
    if: always()
    uses: octopilot/actions/network-access/eks-allow-runner@main
    with:
      cluster_name: my-cluster
      region: us-east-1
      mode: remove`,
    icon: "fa-aws",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10"
  },
  {
    id: "aks-allow-runner",
    title: "AKS Network Access",
    path: "octopilot/actions/network-access/aks-allow-runner@main",
    version: "v1",
    description: "Whitelists GitHub Runner IPs in Azure AKS API Server authorized IP ranges. Supports managed clusters with public endpoints.",
    features: [
      "Dynamic IP Fetching",
      "Updates Account Profile",
      "Safe Add/Remove"
    ],
    inputs: [
      { name: "resource_group", description: "Azure Resource Group", required: true },
      { name: "cluster_name", description: "AKS Cluster Name", required: true },
      { name: "subscription_id", description: "Azure Subscription ID", required: true },
      { name: "mode", description: "Operation: add | remove", required: false, default: "add" }
    ],
    example: `steps:
  - name: Azure Login
    uses: azure/login@v1
    with:
      creds: \${{ secrets.AZURE_CREDENTIALS }}

  - name: Whitelist Runner IP
    uses: octopilot/actions/network-access/aks-allow-runner@main
    with:
      resource_group: my-rg
      cluster_name: my-cluster
      subscription_id: \${{ secrets.AZURE_SUBSCRIPTION_ID }}
      mode: add

  - name: Remove Whitelist
    if: always()
    uses: octopilot/actions/network-access/aks-allow-runner@main
    with:
      resource_group: my-rg
      cluster_name: my-cluster
      subscription_id: \${{ secrets.AZURE_SUBSCRIPTION_ID }}
      mode: remove`,
    icon: "fa-microsoft",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-600/10"
  },
  {
    id: "integration-build-artifact",
    title: "Integration Build Artifact",
    path: "octopilot/actions/integration-build-artifact@main",
    version: "v1",
    description: "Builds one integration matrix item (Docker or Buildpack image, or Helm chart) and writes the resulting image/chart ref to an output file. Used by integration workflows that fan out over a matrix: each job builds one artifact via the Octopilot action and writes key=value lines for the workflow to upload and merge.",
    features: [
      "Matrix-friendly: one artifact per call",
      "Supports type image (docker/pack) and chart (helm via octopilot)",
      "Writes output_key=tag to a file for merge-build-results",
      "Uses ttl.sh when ttl-uuid is provided"
    ],
    inputs: [
      { name: "artifact", description: "JSON object for one matrix item (type, build_method, context, suffix, output_key, image, path?, dockerfile?, builder?, build_env?)", required: true },
      { name: "ttl-uuid", description: "UUID for ttl.sh image/chart naming", required: true },
      { name: "output-path", description: "Path to write key=value lines (e.g. outputs.txt)", required: false, default: "outputs.txt" },
      { name: "op_version", description: "Op image version (e.g. v1.0.4)", required: false, default: "v1.0.4" }
    ],
    example: `# Typically used from a matrix job that receives one artifact per strategy item
- name: Build one artifact
  id: build
  uses: octopilot/actions/integration-build-artifact@main
  with:
    artifact: \${{ toJson(matrix.artifact) }}
    ttl-uuid: \${{ needs.validate.outputs.uuid }}

- name: Upload artifact ref
  uses: actions/upload-artifact@v4
  with:
    name: build-\${{ matrix.artifact.output_key }}
    path: \${{ inputs.output-path }}`,
    icon: "fa-puzzle-piece",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10"
  },
  {
    id: "integration-validate",
    title: "Integration Validate",
    path: "octopilot/actions/integration-validate@main",
    version: "v1",
    description: "Validates the primary build artifact for integration: uses pipeline-context from detect-contexts, sets up the toolchain (Rust/Go), builds release, optionally runs a smoke check, and outputs a UUID for ephemeral artifact naming (e.g. ttl.sh). Use before fan-out integration-build-artifact jobs.",
    features: [
      "Resolves primary build context from pipeline-context.matrix",
      "Rust and Go toolchain setup and release build",
      "Optional smoke run with expected pattern",
      "Outputs UUID for ttl.sh naming"
    ],
    inputs: [
      { name: "pipeline-context", description: "Consolidated CI context (JSON) from detect-contexts", required: true },
      { name: "validate-context-index", description: "Index into pipeline-context.matrix (default 0). First non-helm artifact used.", required: false, default: "0" },
      { name: "smoke-binary-path", description: "Path to built binary for smoke run (e.g. target/release/myapp)", required: false },
      { name: "smoke-expect-pattern", description: "Pattern to grep for in smoke output; requires smoke-binary-path", required: false }
    ],
    outputs: [
      { name: "uuid", description: "Generated UUID for ephemeral artifact naming (e.g. ttl.sh)" }
    ],
    example: `jobs:
  validate:
    runs-on: ubuntu-latest
    outputs:
      uuid: \${{ steps.validate.outputs.uuid }}
    steps:
      - uses: actions/checkout@v4
      - id: detect
        uses: octopilot/actions/detect-contexts@main
      - id: validate
        uses: octopilot/actions/integration-validate@main
        with:
          pipeline-context: \${{ steps.detect.outputs.pipeline-context }}

  build:
    needs: validate
    strategy:
      matrix: \${{ fromJson(needs.detect.outputs.pipeline-context).matrix }}
    steps:
      - uses: octopilot/actions/integration-build-artifact@main
        with:
          artifact: \${{ toJson(matrix) }}
          ttl-uuid: \${{ needs.validate.outputs.uuid }}`,
    icon: "fa-check-double",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10"
  },
  {
    id: "merge-build-results",
    title: "Merge Build Results",
    path: "octopilot/actions/merge-build-results@main",
    version: "v1",
    description: "Finds all build_result.json files under a directory (e.g. after downloading integration job artifacts) and merges them into a single build_result.json without data loss. Preserves every build entry in order. Use after fan-out integration builds to produce one contract file.",
    features: [
      "Scans directory for build_result.json files",
      "Merges all .builds[] into one array (order preserved)",
      "Outputs path and count for downstream steps"
    ],
    inputs: [
      { name: "directory", description: "Directory to search for build_result.json (e.g. artifact-outputs)", required: false, default: "artifact-outputs" },
      { name: "output-path", description: "Path for the merged build_result.json", required: false, default: "build_result.json" }
    ],
    outputs: [
      { name: "path", description: "Path to the merged build_result.json (empty if no files found)" },
      { name: "count", description: "Number of build entries in the merged result" }
    ],
    example: `- name: Download all build artifacts
  uses: actions/download-artifact@v4
  with:
    pattern: build-*

- name: Merge build results
  id: merge
  uses: octopilot/actions/merge-build-results@main
  with:
    directory: artifact-outputs

- name: Use merged result
  run: echo "Merged \${{ steps.merge.outputs.count }} builds to \${{ steps.merge.outputs.path }}"`,
    icon: "fa-code-merge",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10"
  },
  {
    id: "verify-registry",
    title: "Verify Registry TLS",
    path: "octopilot/actions/verify-registry@main",
    version: "v1",
    description: "Waits for the octopilot registry-tls service container to become ready, configures the Docker daemon to trust its self-signed certificate (insecure-registries), and optionally validates push/pull. Use in any job that declares the registry as a GitHub Actions service container.",
    features: [
      "Configures Docker daemon for self-signed TLS",
      "Waits for registry-tls health or v2/ endpoint",
      "Optional test push/pull validation",
      "Outputs registry_url for downstream steps"
    ],
    inputs: [
      { name: "port", description: "Host port the registry is exposed on (must match service ports)", required: false, default: "5001" },
      { name: "max_attempts", description: "Health-check retries before failing", required: false, default: "15" },
      { name: "retry_delay", description: "Seconds between attempts", required: false, default: "2" },
      { name: "test_push", description: "Push a small test image to verify write access", required: false, default: "true" }
    ],
    outputs: [
      { name: "registry_url", description: "Full registry URL (e.g. localhost:5001)" }
    ],
    example: `jobs:
  integration:
    runs-on: ubuntu-latest
    services:
      registry:
        image: ghcr.io/octopilot/registry-tls:latest
        ports:
          - 5001:5000
    steps:
      - uses: actions/checkout@v4
      - id: reg
        uses: octopilot/actions/verify-registry@main
      - name: Build and push to local registry
        run: op build --repo \${{ steps.reg.outputs.registry_url }} --push`,
    icon: "fa-shield-halved",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10"
  },
  {
    id: "setup-flux",
    title: "Setup Flux",
    path: "octopilot/actions/setup-flux@main",
    version: "v1",
    description: "Sets up the Flux CLI, installs Flux in the cluster, and exports the installed components to a file (e.g. for GitOps manifests). Use in workflows that need Flux for deployment or reconciliation.",
    features: [
      "Flux CLI via fluxcd/flux2/action",
      "flux install --export to a file",
      "kubectl apply and wait for source/helm controllers"
    ],
    inputs: [
      { name: "export_path", description: "Path to write flux install --export output (e.g. k8s/deployment/flux-system/gotk-components.yaml)", required: true },
      { name: "version", description: "Flux CLI version", required: false, default: "latest" }
    ],
    example: `steps:
  - uses: actions/checkout@v4

  - name: Setup Flux
    uses: octopilot/actions/setup-flux@main
    with:
      export_path: k8s/flux-system/gotk-components.yaml

  - name: Commit Flux manifests
    run: |
      git add k8s/flux-system
      git commit -m "chore: update Flux components" || true`,
    icon: "fa-bolt",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10"
  }
];
