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
  icon: string;
  iconColor: string;
  iconBg: string; // Tailwind class
}

export const githubActions: GithubAction[] = [
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
      { name: "provider", description: "LLM provider (anthropic, openai)", required: true },
      { name: "api_key", description: "API Key for the provider", required: true }
    ],
    outputs: [
      { name: "body_file", description: "Path to the generated release notes file" }
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
      { name: "kubectl_version", description: "Kubectl version", required: false, default: "v1.29.1" },
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
  }
];
