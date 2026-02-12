export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: 'Developer' | 'Team' | 'Enterprise';
    readTime: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    painPoint?: string;
    solution?: string;
    slug: string;
    content?: string; // Full HTML content for the blog post
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The .env File Trap: Why Plain-Text Secrets Break Isolated Workflows',
        excerpt: 'As a solo developer, you start with .env files. Then you need to share code, deploy to staging, or onboard a contractor—and suddenly your secret management strategy falls apart. This post explores why .env files are a trap and how to escape.',
        category: 'Developer',
        readTime: '7 min read',
        image: '/assets/blog/env-file-trap.png',
        author: {
            name: 'Alex Rivera',
            role: 'Solo Dev Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        painPoint: 'No encryption, secrets in Git history, impossible to rotate without breaking deployments',
        slug: 'env-file-trap',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    We've all been there. You start a new project, create a <code>.env</code> file, and add your API keys. It's simple, standard, and supported by every framework from Next.js to Docker. But as your project grows, this simplicity becomes your biggest liability.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        <code>.env</code> files are excellent for local configuration but catastrophic for secret management. Transitioning to encrypted, repository-local secrets preserves the developer experience while securing your supply chain.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Anatomy of the Trap</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The ".env trap" isn't immediate; it's a slow creep. It usually progresses through three stages:
                </p>
                <ol class="list-decimal list-inside space-y-4 text-gray-300 mb-8">
                    <li><strong>The "Ignore" Phase:</strong> You add <code>.env</code> to <code>.gitignore</code>. Secure, right? Until you need to deploy.</li>
                    <li><strong>The "Share" Phase:</strong> A teammate joins. You DM them the file via Slack. Now your secrets are in chat logs.</li>
                    <li><strong>The "Panic" Phase:</strong> You accidentally commit the file. You use <code>git filter-branch</code> to scrub it, but the key is compromised. You have to rotate it, breaking the app for everyone who hasn't updated their local file.</li>
                </ol>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Escape Route: Encrypting the Environment</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The solution isn't to abandon the environment variable pattern—it's to <strong>encrypt the source of truth</strong>. By using tools like SOPS (Secrets OPerationS) alongside Octopilot, you can check encrypted <code>.env</code> files directly into Git.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">How It Works</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <div><strong>Secrets in Git:</strong> The file <code>.env.enc.yaml</code> lives in your repo. It's safe to push.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <div><strong>Decrypted on Demand:</strong> Your local development environment decrypts these into environment variables automatically using a local GPG key.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <div><strong>No Sharing Passwords:</strong> You grant access by adding a teammate's GPG public key to the file. They pull, and it just works.</div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Implementation Guide</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Refactoring from plain text to encrypted secrets takes less than 10 minutes with Octopilot.
                </p>
                
                <div class="bg-black/50 border border-slate-800 rounded-lg p-6 font-mono text-sm mb-6">
                    <div class="flex gap-2 mb-2">
                        <span class="text-purple-400">$</span>
                        <span class="text-white">op secrets encrypt .env --output .env.enc.yaml</span>
                    </div>
                    <div class="text-gray-500"># Encrypt your existing .env file</div>
                    <br/>
                     <div class="flex gap-2 mb-2">
                        <span class="text-purple-400">$</span>
                        <span class="text-white">git add .env.enc.yaml</span>
                    </div>
                     <div class="flex gap-2 mb-2">
                        <span class="text-purple-400">$</span>
                        <span class="text-white">git rm .env</span>
                    </div>
                    <div class="text-gray-500"># Safely remove the plain text version</div>
                </div>

                <p class="text-gray-300 text-lg leading-relaxed">
                    Now, your application workflow remains unchanged. Octopilot injects the decrypted values into your process environment, meaning you don't rewrite application code to fetch secrets from a vault API. <code>process.env.API_KEY</code> works exactly as before.
                </p>
            </section>
        `
    },
    {
        id: '2',
        title: 'Repository-Local Encryption: Keep Control Without External Dependencies',
        excerpt: 'Learn how secret-controller-manager lets you encrypt secrets directly in your repo using GPG—no external vault, no network calls, complete isolation.',
        category: 'Developer',
        readTime: '9 min read',
        image: '/assets/blog/repo-local-encryption.png',
        author: {
            name: 'Jordan Kim',
            role: 'Security Engineer',
            avatar: '/assets/blog/avatar-jordan.jpg'
        },
        solution: 'Repo-scoped GPG keys, no centralization, secrets stay with code, GitOps-native',
        slug: 'repo-local-encryption',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   Centralized vaults like HashiCorp Vault are powerful, but they introduce a "blast radius" problem. If the central vault is compromised, every service is at risk. Furthermore, they add a runtime dependency: if the vault is down, your pods don't start.
                </p>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Dependency Dilemma</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   In a microservices architecture, coupling every service's startup to a central secret store creates a single point of failure. Network latency, authentication timeouts, or simple misconfiguration can cascade into a complete system outage.
                </p>
                <div class="p-6 bg-red-900/20 border-l-4 border-red-500 rounded-r-lg mb-8">
                    <h4 class="text-red-400 font-bold mb-2">The Vault Downside</h4>
                    <p class="text-gray-300">
                        "I can't deploy because the Vault authentication webhook is timing out." — A common complaint in Kubernetes environments.
                    </p>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Repository-Local Encryption</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Octopilot advocates for <strong>Repository-Local Encryption</strong>. Each repository acts as its own secure vault. Secrets are encrypted using keys specific to that repository's scope and stored alongside the code.
                </p>
                 <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Architecture Benefits</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-server text-blue-400 mt-1"></i>
                            <div><strong>Offline Capable:</strong> Deployments don't need to talk to an external service to decrypt secrets; the controller handles it within the cluster.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-shield-halved text-blue-400 mt-1"></i>
                            <div><strong>Blast Radius Containment:</strong> Compromising one repo's key does not grant access to others.</div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">GitOps Native Workflow</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This approach aligns perfectly with GitOps tools like FluxCD and ArgoCD. Since the encrypted secret is a standard Kubernetes manifest (sealed or plain SOPS), the state of your secrets is managed exactly like your Deployments and Services.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
apiVersion: v1
kind: Secret
metadata:
    name: database-creds
stringData:
    password: ENC[AES256_GCM,data:superSecretPassword...]
sops:
    mac: ENC[AES256_GCM,data:...]
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The <code>secret-manager-controller</code> watches for these resources, decrypts them using the cluster's private key (or retrieving the key from a KMS), and creates the native Kubernetes Secret.
                </p>
            </section>
        `
    },
    {
        id: '3',
        title: 'CI/CD Secret Injection: Automate Without Exposing Credentials',
        excerpt: 'How to inject encrypted secrets into your CI/CD pipeline at runtime—GitHub Actions, GitLab CI, or Jenkins—without hardcoding anything.',
        category: 'Developer',
        readTime: '6 min read',
        image: '/assets/blog/cicd-injection.png',
        author: {
            name: 'Sam Patel',
            role: 'DevOps Engineer',
            avatar: '/assets/blog/avatar-sam.jpg'
        },
        painPoint: 'CI/CD secrets in repo settings create vendor lock-in, no audit trail, manual rotation',
        slug: 'cicd-secret-injection',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   Modern CI/CD pipelines are secret-hungry. They need tokens to pull code, push artifacts, deploy to staging, and notify Slack. The standard practice—using GitHub Repository Secrets or equivalent—hides these values from the developer, making debugging impossible and rotation a manual click-ops nightmare.
                </p>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The "Repo Settings" Black Hole</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   When you store secrets in CI provider settings, you lose context.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-300 mb-6">
                    <li>Who added this secret?</li>
                    <li>When was it last rotated?</li>
                    <li>Is it still used by the pipeline?</li>
                </ul>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Worse, migrating from GitHub Actions to GitLab CI (or vice-versa) means manually copying hundreds of secrets.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Runtime Injection</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    With Octopilot's pipeline tools, secrets are injected at runtime from the encrypted file in the repository. The CI runner possesses a single identity key (standardized across the organization), which allows it to decrypt the specific secrets needed for the job.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">How It Works in GitHub Actions</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Instead of populating <code>STAGING_DB_PASSWORD</code> in Repo Settings, you simply ensure your runner has the <code>OCTOPILOT_KEY</code>.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
steps:
  - name: Checkout
    uses: actions/checkout@v3
    
  - name: Decrypt Secrets
    run: op secrets decrypt .env.ci.enc --output .env
    
  - name: Run Integration Tests
    run: npm test
    env:
      # Secrets are now available from the file
      source: .env
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    This makes your pipeline portable. The definition of <em>what</em> secrets are needed lives with the pipeline code, not the platform configuration.
                </p>
            </section>
        `
    },
    {
        id: '4',
        title: 'Multi-Team Workflows: When 5 Developers Need Different Access Levels',
        excerpt: 'Your team grows to 5+ engineers working on shared services. Frontend devs need API keys, backend needs DB credentials, ops needs infrastructure secrets—how do you manage this without a central vault?',
        category: 'Team',
        readTime: '11 min read',
        image: '/assets/blog/multi-team-workflows.png',
        author: {
            name: 'Maya Johnson',
            role: 'Team Lead',
            avatar: '/assets/blog/avatar-maya.jpg'
        },
        painPoint: 'Everyone gets all secrets or nobody gets any—no granular access control',
        slug: 'multi-team-workflows',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Scaling secret management isn't just about the number of secrets; it's about the number of <em>people</em>. When your engineering team splits into squads—frontend, backend, data, ops—the "share the gpg key" model breaks down. You don't want the frontend intern to have read access to the production database credentials.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        Octopilot links GPG keys to GitHub Teams. This means access control is managed via the identity provider you already use (GitHub), not a separate ACL system in a vault.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Access Control Nightmare</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    In traditional setups, you have two bad choices:
                </p>
                <ol class="list-decimal list-inside space-y-4 text-gray-300 mb-8">
                    <li><strong>Broad Access:</strong> Everyone shares a generic "engineering" access token. Easy, but insecure.</li>
                    <li><strong>Manual Provisioning:</strong> DevOps manually grants user X access to path Y in Vault. Secure, but becomes a bottleneck.</li>
                </ol>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">GitHub Teams as the Source of Truth</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    With Octopilot's Probot integration, we map encryption keys to GitHub Teams.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Example Workflow</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-users text-blue-400 mt-1"></i>
                            <div><strong>Frontend Team:</strong> Has access to <code>apps/web/.secrets</code>.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-database text-blue-400 mt-1"></i>
                            <div><strong>Backend Team:</strong> Has access to <code>apps/api/.secrets</code>.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-user-plus text-green-400 mt-1"></i>
                            <div><strong>Onboarding:</strong> You add a new hire to the "Backend" team in GitHub. Octopilot automatically re-encrypts the backend secrets to include their key.</div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Configuration</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This is defined in your <code>.octopilot.yaml</code> configuration file.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
access_rules:
  - path: apps/web/**
    allow_teams: ["frontend-engineers", "tech-leads"]
  
  - path: apps/api/**
    allow_teams: ["backend-engineers", "tech-leads"]
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The bot enforces these rules. If someone from the frontend team tries to decrypt backend secrets, they simply can't—their private key won't work on the file.
                </p>
            </section>
        `
    },
    {
        id: '5',
        title: 'Least-Privilege Access: Per-Service Secret Isolation for Growing Teams',
        excerpt: 'Implement least-privilege principles with repository-scoped GPG keys—each service gets its own encryption key, developers only decrypt what they need.',
        category: 'Team',
        readTime: '10 min read',
        image: '/assets/blog/least-privilege.png',
        author: {
            name: 'Chris Anderson',
            role: 'Platform Engineer',
            avatar: '/assets/blog/avatar-chris.jpg'
        },
        solution: 'Repo-scoped keys, role-based GPG key distribution, zero-trust by default',
        slug: 'least-privilege-access',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   "Zero Trust" is a buzzword, but in secret management, it's a necessity. Why should the payment service have access to the email marketing service's API keys? It shouldn't. Yet, in many monolithic secret stores, technical debt leads to over-privileged service accounts spanning the entire cluster.
                </p>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Flat Network Fallacy</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   Assuming internal services are "safe" and can share secrets leads to lateral movement vulnerabilities. If an attacker compromises one service, they shouldn't find keys to the kingdom.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Cryptographic Isolation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Octopilot implements isolation at the cryptographic level. We generate a unique keypair for every service (or repository).
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">How It Differs from Vault Policies</h3>
                    <p class="text-gray-300 mb-4">
                        In HashiCorp Vault, isolation is logical—enforced by policy checks at runtime. In Octopilot, isolation is mathematical—enforced by encryption keys at rest.
                    </p>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-lock text-purple-400 mt-1"></i>
                            <div><strong>Service A's Key:</strong> Can only decrypt Service A's secrets.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-ban text-red-400 mt-1"></i>
                            <div><strong>Service B:</strong> Cannot mathematically decrypt Service A's secrets, even if it stole the encrypted file.</div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Service Identity</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    When a service is deployed to Kubernetes, the \`secret-manager-controller\` ensures that the specific Kubernetes ServiceAccount is bound to the correct decryption key in Google Secret Manager or AWS Secrets Manager. This leverages cloud-native Workload Identity (IRSA), meaning no long-lived credentials exist in your cluster to bootstrap this trust.
                </p>
            </section>
        `
    },
    {
        id: '6',
        title: 'Key Rotation Without Downtime: Strategies for Production Teams',
        excerpt: 'How to rotate GPG keys and re-encrypt secrets in production without breaking running services—backward compatibility patterns and rollback strategies.',
        category: 'Team',
        readTime: '12 min read',
        image: '/assets/blog/key-rotation.png',
        author: {
            name: 'Lisa Martinez',
            role: 'SRE Lead',
            avatar: '/assets/blog/avatar-lisa.jpg'
        },
        painPoint: 'Manual rotation takes hours, requires coordination, high risk of breaking production',
        slug: 'key-rotation-strategies',
        content: `
             <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   Key rotation is the vegetables of security: everyone knows they should do it, but few do it often enough because it's unpleasant. Rotating a master encryption key usually involves downtime: stopping the world, re-encrypting data, and restarting services.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        Octopilot treats key rotation as a routine, automated non-event using a dual-key validation strategy.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Catch-22 of Rotation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   If you rotate the key, the running pods can no longer decrypt the secrets if they restart. You have to redeploy everything simultaneously. But if you don't rotate, a leaked key is catastrophic.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Zero-Downtime Strategy</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Our controller supports multi-key encryption. A secret can be encrypted with both the <em>Old Key</em> and the <em>New Key</em> simultaneously during a transition period.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The Rotation Lifecycle</h3>
                    <ol class="list-decimal list-inside space-y-4 text-gray-300">
                        <li><strong>Phase 1 (Introduction):</strong> Generate New Key. Add it to the SOPS config. Secrets are now encrypted to <code>[Old, New]</code>.</li>
                        <li><strong>Phase 2 (Propagation):</strong> CI/CD and Kubernetes clusters are updated to accept the New Key.</li>
                        <li><strong>Phase 3 (Revocation):</strong> Remove Old Key from SOPS config. Secrets are re-encrypted to <code>[New]</code> only.</li>
                        <li><strong>Phase 4 (Cleanup):</strong> Revoke Old Key access from clusters.</li>
                    </ol>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Automation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>octopilot-probot</code> automates this. You trigger a rotation event:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# In .github/octopilot.yaml
rotation:
  schedule: "0 0 1 * *" # Rotate monthly
  strategy: dual-key
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The bot opens a PR that adds the new key and re-encrypts all files. Once merged and deployed, a subsequent PR removes the old key. No downtime, no coordination meetings.
                </p>
            </section>
        `
    },
    {
        id: '7',
        title: 'Multiple Product Verticals: Secret Isolation Across Business Units',
        excerpt: 'Managing secrets for 10+ product teams building different verticals—payments, analytics, customer portal—each with independent secret lifecycles and compliance requirements.',
        category: 'Enterprise',
        readTime: '15 min read',
        image: '/assets/blog/product-verticals.png',
        author: {
            name: 'Marcus Chen',
            role: 'Platform Architect',
            avatar: '/assets/blog/avatar-marcus.jpg'
        },
        painPoint: 'Central vault creates cross-contamination risk, compliance nightmare, single point of failure',
        slug: 'multi-product-verticals',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   When you reach enterprise scale—dozens of teams, hundreds of microservices—a single "central secret store" becomes a liability. Managing permissions for Business Unit A versus Business Unit B in one giant ACL table is a recipe for privilege escalation incidents.
                </p>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Multi-Tenancy Headache</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   If the Payments team shares the same secret backend as the internal Hackathon team, a misconfiguration in the backend can expose everything. Physical isolation is superior to logical isolation.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Federated Secret Management</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Octopilot enables a federated model. Each Business Unit can own its own "Root of Trust" (usually a KMS key in their own cloud project).
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Enterprise Hierarchy</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-sitemap text-purple-400 mt-1"></i>
                            <div><strong>Organization Level:</strong> Defines global policies (e.g. "Must use AES-256").</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-diagram-project text-blue-400 mt-1"></i>
                            <div><strong>Business Unit Level:</strong> Owns the KMS keys. Can revoke access for an entire vertical instantly.</div>
                        </li>
                         <li class="flex gap-3">
                            <i class="fa-solid fa-code-branch text-green-400 mt-1"></i>
                            <div><strong>Team Level:</strong> Owns the specific secrets in their repos.</div>
                        </li>
                    </ul>
                </div>
            </section>
        `
    },
    {
        id: '8',
        title: 'Compliance & Audit Requirements: SOC 2, ISO 27001, HIPAA',
        excerpt: 'How secret-controller-manager provides immutable audit trails, signed trust chains, and cryptographic proof for enterprise compliance frameworks.',
        category: 'Enterprise',
        readTime: '14 min read',
        image: '/assets/blog/compliance.png',
        author: {
            name: 'Rachel Thompson',
            role: 'Security Architect',
            avatar: '/assets/blog/avatar-rachel.jpg'
        },
        solution: 'GPG signatures create tamper-proof audit logs, per-repo isolation satisfies data residency',
        slug: 'compliance-audit-requirements',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   Compliance audits usually involve a spreadsheet and a lot of frantic searching for logs. "Show me who accessed the database password on June 12th." If you are using a centralized vault, you rely on its internal logs (which can be tampered with or rotated out).
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Git as the Immutable Ledger</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    With Octopilot, Git <em>is</em> the audit trail. Since every secret change is a commit, and every commit is signed, you have cryptographic proof of history.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Audit Evidence</h3>
                    <p class="text-gray-300 mb-4">To prove compliance, you simply run:</p>
                    <div class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm mb-3">
                        <div class="text-cyan-400">git log --show-signature -- path/to/.secrets</div>
                    </div>
                    <p class="text-gray-300">
                        This shows exactly <em>who</em> (GPG signature) changed <em>what</em> (diff) and <em>when</em> (timestamp). This satisfies the "immutable audit trail" requirement of SOC 2 Type II controls instantly.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '9',
        title: 'Incident Response: Rotating Compromised Secrets Across 500+ Services',
        excerpt: 'When a secret is compromised, you need to rotate it everywhere—immediately. Learn how decentralized secret management makes incident response faster and more controlled.',
        category: 'Enterprise',
        readTime: '13 min read',
        image: '/assets/blog/incident-response.png',
        author: {
            name: 'David Kumar',
            role: 'Security Operations',
            avatar: '/assets/blog/avatar-sam.jpg' // Reusing Sam's avatar as David's wasn't in list but used in HTML
        },
        painPoint: 'Central vault breach exposes all secrets, rotation takes days, blast radius is catastrophic',
        slug: 'incident-response-at-scale',
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                   A developer laptop is stolen. It had a cached GPG private key. Now what? In a centralized world, you might have to assume every secret aimed at that developer is compromised. Revocation involves navigating complex UI dashboards.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Decentralized Revocation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    With Octopilot, specific keys can be revoked instantly via the <code>.octopilot.yaml</code> configuration or by removing the user from the GitHub Team.
                </p>
                 <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The Response Playbook</h3>
                    <ol class="list-decimal list-inside space-y-4 text-gray-300">
                        <li><strong>Identify:</strong> Locate the compromised User ID.</li>
                        <li><strong>Revoke:</strong> Remove user from GitHub Organization.</li>
                        <li><strong>Automate:</strong> The Bot detects the removal and triggers a re-encryption of all secrets across all repos, removing the compromised user's public key from the access list.</li>
                        <li><strong>Deploy:</strong> The new encrypted files are deployed. Even if the attacker has the old files, they are useless once the backend services rotate the actual values (Phase 2).</li>
                    </ol>
                </div>
            </section>
        `
    }
];
