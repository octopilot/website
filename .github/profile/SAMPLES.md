# OctoPilot samples: one repo per frontend–backend pairing

This org uses **one repository per frontend+backend pairing** for reference apps. Each sample is self-contained with its own **Skaffold** setup so adoption is straightforward.

## Why this layout?

- **Replaces the legacy `octopilot-samples` repo**, which held many backends and one paired app in a single repo. Samples are now broken out into separate `sample-{frontend}-{backend}` repos in this workspace.
- **Idiot-proof adoption:** Pick the repo that matches your stack; each has a README with build, run, and deploy steps.
- **Each pairing has its own `skaffold.yaml`:** Two artifacts (frontend image + API image), build with Skaffold or [OctoPilot pipeline tools](https://github.com/octopilot/octopilot-pipeline-tools) `op build` / `op build-push`.

## Where the samples live

In this workspace (the repo that manages the org landing page and profile), sample repos live as sibling directories:

- **`sample-static-go`** — Static HTML/JS (NGINX) + Go (Gin). Buildpacks for both.
- **`sample-react-go`** — React (Vite) + Go (Gin)
- **`sample-react-node`** — React (Vite) + Node (Express)
- **`sample-react-python`** — React (Vite) + Python (FastAPI)
- **`sample-react-dotnet`** — React (Vite) + ASP.NET Core 8
- **`sample-vue-go`** — Vue 3 (Vite) + Go (Gin)
- **`sample-svelte-go`** — Svelte (Vite) + Go (Gin)
- **`sample-solid-go`** — SolidJS (Vite) + Go (Gin)
- **`sample-next-go`** — Next.js 14 + Go (Gin). Next standalone server in Docker.
- **`sample-angular-go`** — Angular 17 + Go (Gin)

**Static + other backends** (breakout from octopilot-samples; each has static frontend + api):

- **`sample-static-go-chi`**, **`sample-static-go-echo`**, **`sample-static-go-gin`** — Static + Go (Chi / Echo / Gin)
- **`sample-static-node`**, **`sample-static-node-ts`**, **`sample-static-node-fastify`** — Static + Node (Express JS/TS, Fastify TS)
- **`sample-static-python`**, **`sample-static-python-django`** — Static + Python (FastAPI, Django)
- **`sample-static-dotnet`** — Static + ASP.NET Core
- **`sample-static-ruby`** — Static + Ruby (Rails)
- **`sample-static-rust-actix`**, **`sample-static-rust-axum`** — Static + Rust (Actix, Axum; API built with Dockerfile)
- **`sample-static-spring`**, **`sample-static-spring-kotlin`** — Static + Spring Boot (Java/Gradle, Kotlin/Gradle)

## Shared contract

- **API:** `GET /greet?name=...&birth_year=...` → JSON  
  `{ "greeting": "Hello, <name>!", "age_confirmation": "You are <age> years old." }`
- **Run:** API on port **8081**, frontend on **8080**. Set “API URL” in the app to `http://localhost:8081` when running both containers.
- **Build:** From each sample dir: `skaffold build` or `op build-push` (see each sample's README). Requires [octopilot-pipeline-tools](https://github.com/octopilot/octopilot-pipeline-tools) installed (`op` CLI) for `op` commands.
- **Deploy:** `skaffold build --file-output build.json` and use the image refs with your GitOps tool.

## Frontend coverage

| Frontend   | Sample(s) |
|-----------|-----------|
| Static    | sample-static-go |
| React     | sample-react-go, sample-react-node, sample-react-python, sample-react-dotnet |
| Vue       | sample-vue-go |
| Svelte    | sample-svelte-go |
| SolidJS   | sample-solid-go |
| Next.js   | sample-next-go |
| Angular   | sample-angular-go |

## Retiring octopilot-samples

The **octopilot-samples** repo has been **broken out**: all apps were moved (filesystem `mv`) into the pairings above. **sample-static-go** was replaced with **apps/demo-greet**; every other backend (go-chi, go-echo, go-gin, node-express, python-fastapi, etc.) was moved into **sample-static-{name}** with a static frontend and skaffold added. The octopilot-samples directory now only contains leftover empty dirs, rust-loco (README), and config; it can be archived or removed.

## Tooling

- **Skaffold** — build and tag images; optional `--file-output build.json` for CD.
- **OctoPilot pipeline tools (`op`)** — `op build`, `op build-push`, `op push`. See [octopilot-pipeline-tools](https://github.com/octopilot/octopilot-pipeline-tools).
