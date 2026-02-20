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
    relatedSlugs?: string[]; // Curated related post slugs, shown in sidebar
    content?: string;
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
        relatedSlugs: ['repo-local-encryption', 'cicd-secret-injection', 'multi-team-workflows'],
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
        relatedSlugs: ['env-file-trap', 'least-privilege-access', 'cicd-secret-injection'],
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
        relatedSlugs: ['env-file-trap', 'repo-local-encryption', 'octopilot-actions-intro'],
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
    uses: actions/checkout@v4
    
  - name: Setup Tools
    uses: octopilot/octopilot-actions/setup-tools@v1

  - name: Decrypt secrets
    id: secrets
    uses: octopilot/actions/sops-decrypt@main
    with:
      file: secrets.enc.yaml
      age_key: $\{{ secrets.SOPS_AGE_KEY }}
      output_type: json

  - name: Use secrets
    run: echo "Secret is \${{ fromJson(steps.secrets.outputs.data).my_secret }}"
    
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
        relatedSlugs: ['least-privilege-access', 'key-rotation-strategies', 'multi-product-verticals'],
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
        relatedSlugs: ['multi-team-workflows', 'repo-local-encryption', 'compliance-audit-requirements'],
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
        relatedSlugs: ['least-privilege-access', 'incident-response-at-scale', 'compliance-audit-requirements'],
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
        relatedSlugs: ['compliance-audit-requirements', 'least-privilege-access', 'incident-response-at-scale'],
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
        relatedSlugs: ['multi-product-verticals', 'key-rotation-strategies', 'incident-response-at-scale'],
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
            avatar: '/assets/blog/avatar-sam.jpg'
        },
        painPoint: 'Central vault breach exposes all secrets, rotation takes days, blast radius is catastrophic',
        slug: 'incident-response-at-scale',
        relatedSlugs: ['key-rotation-strategies', 'compliance-audit-requirements', 'multi-product-verticals'],
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
    },
    {
        id: '10',
        title: 'Your CI/CD Pipeline, Assembled: Introducing Octopilot Actions',
        excerpt: 'Copy-paste CI/CD is a tax every engineering team pays repeatedly. Octopilot Actions is a composable, language-aware library of 18 GitHub Actions that assemble into a complete pipeline from a single skaffold.yaml—no boilerplate required.',
        category: 'Developer',
        readTime: '8 min read',
        image: '/assets/blog/octopilot-actions-intro.png',
        author: {
            name: 'Taylor Morgan',
            role: 'Developer Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'octopilot-actions-intro',
        relatedSlugs: ['zero-config-ci-detect-contexts', 'lint-test-without-scaffolding', 'multi-arch-containers-op-action'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Every engineering team eventually arrives at the same place: a graveyard of copy-pasted <code>.github/workflows</code> files, each slightly different, none kept in sync. The Go repo has a lint job that works. The Rust repo has a similar one that's three versions behind. The Python service has a workflow nobody remembers writing. When something breaks, you fix it in one place and forget the other eleven.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        Octopilot Actions is a library of 18 composable GitHub Actions that snap together into a complete CI/CD pipeline. One <code>skaffold.yaml</code> drives everything — language detection, toolchain setup, lint, test, multi-arch container builds, and automated releases.
                    </p>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Today we're publishing a formal reference for all 18 actions, along with this series of deep dives into how they work and the problems they solve.
                </p>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Copy-Paste Tax</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The GitHub Actions marketplace is vast, but it doesn't solve the composition problem. You still need to know which actions to use, in what order, with what inputs, and how to wire their outputs together. For a polyglot organisation running Go APIs, Rust services, and Python tooling, that's a non-trivial amount of institutional knowledge encoded into YAML that lives in every repository.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What gets duplicated</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Toolchain setup:</strong> <code>actions/setup-go</code>, <code>dtolnay/rust-toolchain</code>, <code>actions/setup-python</code> — different versions, different cache configs in every repo.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Linting:</strong> golangci-lint flags, Clippy deny rules, Ruff config — diverge silently over time.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Container builds:</strong> Docker login, buildx setup, multi-arch flags, SLSA attestation — dozens of lines repeated.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Releases:</strong> Version bumping, tagging, changelog generation — often skipped entirely because it's too much work to set up.</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Octopilot Pipeline Shape</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Octopilot Actions are designed around a single contract: the <strong>pipeline-context</strong> JSON object. One action (<code>detect-contexts</code>) reads your <code>skaffold.yaml</code> and produces it. Every downstream action consumes it to know what languages are present, which tool versions to install, and what commands to run.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Pipeline at a glance</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-magnifying-glass-chart text-cyan-400 mt-1"></i><div><strong><code>detect-contexts</code></strong> — reads <code>skaffold.yaml</code>, emits <code>pipeline-context</code> JSON with detected languages and versions.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check-double text-blue-400 mt-1"></i><div><strong><code>lint</code> + <code>test</code></strong> — receive <code>pipeline-context</code>, conditionally install the right toolchains, run linters and test suites.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-trash-can text-slate-400 mt-1"></i><div><strong><code>janitor</code></strong> — frees 10–15 GB of unused pre-installed toolchains on the runner before the container build.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-box text-green-400 mt-1"></i><div><strong><code>octopilot</code></strong> — builds and pushes multi-arch container images, outputs <code>build_result.json</code> with digests for SLSA attestation.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-code-branch text-violet-400 mt-1"></i><div><strong><code>bump-version</code> + <code>is-tag</code> + <code>previous-tag</code> + <code>release</code></strong> — automate the full release: version bump → tag → AI-generated changelog → GitHub Release.</div></li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">A Complete Pipeline in Under 60 Lines</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Here is the complete CI pipeline for a Rust + static site repository using the Octopilot action library. This replaces roughly 200 lines of hand-rolled YAML.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
name: CI
on:
  push:
    branches: [main]
  pull_request:

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
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/lint@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}

  test:
    needs: detect
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/test@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}

  build:
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/janitor@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}
      - uses: octopilot/actions/octopilot@main
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The rest of this series dives into each layer: <a href="/blog/zero-config-ci-detect-contexts" class="text-blue-400 hover:text-blue-300">how <code>detect-contexts</code> works</a>, <a href="/blog/lint-test-without-scaffolding" class="text-blue-400 hover:text-blue-300">lint and test without boilerplate</a>, <a href="/blog/multi-arch-containers-op-action" class="text-blue-400 hover:text-blue-300">multi-arch container builds</a>, and <a href="/blog/automated-release-workflow" class="text-blue-400 hover:text-blue-300">fully automated releases</a>.
                </p>
            </section>
        `
    },
    {
        id: '11',
        title: 'Zero-Config CI: How skaffold.yaml Drives Your Entire Pipeline',
        excerpt: 'Most CI pipelines repeat the same configuration that already exists in your build files. The detect-contexts action reads your skaffold.yaml once and emits a pipeline-context JSON contract that every downstream action uses—no duplicated configuration.',
        category: 'Developer',
        readTime: '9 min read',
        image: '/assets/blog/detect-contexts.png',
        author: {
            name: 'Sam Patel',
            role: 'DevOps Engineer',
            avatar: '/assets/blog/avatar-sam.jpg'
        },
        slug: 'zero-config-ci-detect-contexts',
        relatedSlugs: ['octopilot-actions-intro', 'lint-test-without-scaffolding', 'composable-cicd-composite-actions'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Every GitHub Actions workflow for a Go project looks roughly the same: checkout, setup-go with a hardcoded version, cache the module cache, run golangci-lint. The version in the workflow is usually out of sync with the version in <code>go.mod</code>. The same version is also specified in the Dockerfile. And again in the <code>skaffold.yaml</code> build stanza. Three places, three chances for drift.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        <code>detect-contexts</code> parses your <code>skaffold.yaml</code> once and produces a <strong>pipeline-context JSON contract</strong>. Every other Octopilot action reads this contract to know which toolchains to install, which versions to use, and which test commands to run — with no manual configuration.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Configuration Duplication Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    In a typical multi-language repository — say, a Rust API backend with a Node.js frontend — you'll find the Go or Rust toolchain version specified in at least four places: the language manifest (<code>Cargo.toml</code>, <code>go.mod</code>), the Dockerfile, the <code>skaffold.yaml</code>, and each GitHub Actions workflow file. When you upgrade Rust from 1.83 to 1.84, you update three of them, forget the fourth, and the CI fails on Monday morning.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Common duplication points</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-copy text-amber-400 mt-1"></i><div><code>skaffold.yaml</code> — <code>builder: rust:1.83</code> in the buildpack stanza</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-copy text-amber-400 mt-1"></i><div><code>.github/workflows/ci.yml</code> — <code>toolchain: 1.83</code> in <code>dtolnay/rust-toolchain</code></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-copy text-amber-400 mt-1"></i><div><code>Dockerfile</code> — <code>FROM rust:1.83-alpine</code></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-copy text-amber-400 mt-1"></i><div><code>rust-toolchain.toml</code> — the canonical source that all the above should derive from</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The deeper issue is that your CI workflow has no awareness of what the project actually needs. It specifies toolchain versions by convention, not by reading the project's own declarations. <code>skaffold.yaml</code> already knows — it drives your build. <code>detect-contexts</code> makes that knowledge available to CI.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The pipeline-context Contract</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    <code>detect-contexts</code> reads your <code>skaffold.yaml</code> and emits a JSON object that captures everything the rest of the pipeline needs to know:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
{
  "languages": ["rust", "node"],
  "rust": { "version": "1.84" },
  "node": { "version": "22" },
  "contexts": [
    { "language": "rust", "version": "1.84",
      "context": "api/", "command": "cargo test" },
    { "language": "node", "version": "22",
      "context": "site/", "command": "npm test" }
  ]
}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This is passed as a single JSON string via job outputs. Each subsequent action (<code>lint</code>, <code>test</code>, <code>janitor</code>) reads it and behaves accordingly — installing Rust toolchain <em>only if</em> <code>languages</code> includes <code>"rust"</code>, using the exact version the project declares.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What gets detected automatically</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div><strong>Language:</strong> Go, Rust, Node.js, Python, Java (from buildpack IDs or Dockerfile FROM)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div><strong>Version:</strong> Extracted from the builder image tag or runtime config stanza</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div><strong>Build context:</strong> The directory path for each artifact</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div><strong>Test command:</strong> Sensible defaults per language, overridable in <code>skaffold.yaml</code> custom stanza</div></li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Wiring It Into Your Pipeline</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>detect</code> job runs first and exposes <code>pipeline-context</code> as a job output. Every downstream job declares it as a <code>needs</code> dependency and passes it through:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
jobs:
  detect:
    runs-on: ubuntu-latest
    outputs:
      pipeline-context: \${{ steps.detect.outputs.pipeline-context }}
    steps:
      - uses: actions/checkout@v4
      - id: detect
        uses: octopilot/actions/detect-contexts@main
        # Optional: override skaffold file location
        with:
          skaffold-file: config/skaffold.yaml

  lint:
    needs: detect
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/lint@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}
          # lint will install Rust, Node, Go, Python exactly as detected
          # no further configuration required
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    Because the contract is plain JSON passed as a string, it flows freely across job boundaries — GitHub Actions outputs are strings, so the JSON is serialised on output and deserialised inside each consuming action using <code>jq</code>. This also makes the pipeline observable: you can inspect the contract in the <code>detect</code> job's step summary and immediately see what the pipeline will do.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-8">
                    <h4 class="text-white font-bold mb-2">Single source of truth</h4>
                    <p class="text-gray-300">
                        When you add a new service in a new language to <code>skaffold.yaml</code>, the next CI run will automatically install the right toolchain, lint it, test it, and build it. No workflow changes required.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '12',
        title: 'Lint and Test Without the Scaffolding: Multi-Language CI in One Action',
        excerpt: 'Setting up golangci-lint, Clippy, Ruff, and Jest in CI requires dozens of lines of version-pinned YAML per language. The Octopilot lint and test actions absorb all of that boilerplate and free 10–15 GB of runner disk as a bonus.',
        category: 'Developer',
        readTime: '10 min read',
        image: '/assets/blog/lint-test-actions.png',
        author: {
            name: 'Chris Anderson',
            role: 'Platform Engineer',
            avatar: '/assets/blog/avatar-chris.jpg'
        },
        slug: 'lint-test-without-scaffolding',
        relatedSlugs: ['zero-config-ci-detect-contexts', 'octopilot-actions-intro', 'composable-cicd-composite-actions'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A Go project's lint job in GitHub Actions is approximately 25 lines of YAML when done properly: checkout, setup-go with exact version, module cache restoration, golangci-lint installation (pinned to a compatible version), and the lint invocation with timeout flags. A Rust project adds another 20 lines for <code>dtolnay/rust-toolchain</code>, Clippy flags, and <code>rustfmt</code>. Multiply this across ten repositories and you are maintaining hundreds of lines of near-identical YAML — all of which drifts independently.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The <code>lint</code> and <code>test</code> actions accept a single <code>pipeline-context</code> JSON input and handle the rest: toolchain installation, linter configuration, test execution, and disk cleanup — across Go, Rust, Node.js, Python, and Java.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Boilerplate Maintenance Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The canonical golangci-lint GitHub Actions setup requires a specific installation method that matches your project's Go version. If you install the pre-built binary (the default) but your project uses Go 1.25 and golangci-lint was compiled with Go 1.24, you get:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
Error: can't load config: the Go language version (go1.24) used to
build golangci-lint is lower than the targeted Go version (1.25.6)
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The fix is non-obvious: you need <code>install-mode: goinstall</code> to compile golangci-lint from source using your project's Go toolchain. This is a footgun that everyone hits once and then has to remember to apply everywhere. Similarly, disk space exhaustion is a recurring CI failure for any repository that builds Docker images — the pre-installed Android SDK, .NET Core, and Haskell toolchains on <code>ubuntu-latest</code> consume over 15 GB of the runner's 14 GB usable disk.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Common failure modes</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>Go version mismatch:</strong> golangci-lint built with Go N-1 fails against projects using Go N</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>Timeout defaults:</strong> golangci-lint's default 1-minute timeout fails on large codebases</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>No space left on device:</strong> Pre-installed toolchains exhaust runner disk before the Docker build begins</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>Language drift:</strong> Adding a new language to the project requires manual workflow edits across all repos</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Conditional Toolchains and the Janitor</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>lint</code> and <code>test</code> composite actions each begin with a "Parse context" step that extracts detected languages from <code>pipeline-context</code> into step outputs using <code>jq</code>. Subsequent toolchain setup steps are conditional on those outputs:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Inside the lint composite action:
- name: Parse context
  id: ctx
  shell: bash
  run: |
    echo "has_go=$(echo '\${{ inputs.pipeline-context }}' | \
      jq -r 'if (.languages | index("go")) then "true" else "false" end')" \
      >> "\$GITHUB_OUTPUT"

- name: Setup Go
  if: steps.ctx.outputs.has_go == 'true'
  uses: actions/setup-go@v5
  with:
    go-version: \${{ fromJson(inputs.pipeline-context).go.version }}

- name: Run golangci-lint
  if: steps.ctx.outputs.has_go == 'true'
  uses: golangci/golangci-lint-action@v6
  with:
    install-mode: goinstall   # compiles from source → no version mismatch
    args: --timeout=\${{ inputs.lint-timeout || '10m' }}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>janitor</code> action handles disk cleanup. It accepts the same <code>pipeline-context</code> and removes all pre-installed toolchains that are <em>not</em> needed by the project. A Go project keeps the Go toolchain but removes Android SDK, .NET, Haskell, and Swift — freeing over 12 GB. If no context is provided (common for Docker-only build jobs), all toolchains are removed.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Disk space recovered per language set</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-hard-drive text-green-400 mt-1"></i><div><strong>Go-only project:</strong> ~12 GB freed (Android SDK 9 GB, .NET 2 GB, Haskell 1 GB)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-hard-drive text-green-400 mt-1"></i><div><strong>Rust-only project:</strong> ~13 GB freed (same removals, Go toolchain also removed)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-hard-drive text-green-400 mt-1"></i><div><strong>Docker-only job (no context):</strong> ~15 GB freed (everything removed)</div></li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Using lint, test, and janitor Together</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A full CI workflow for a multi-language repository using all three actions:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
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
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/lint@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}
          lint-timeout: 15m    # optional; default 10m

  test:
    needs: detect
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/test@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}

  build:
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: octopilot/actions/janitor@main
        with:
          pipeline-context: \${{ needs.detect.outputs.pipeline-context }}
          # Removes unused toolchains, leaving ~15 GB for the Docker build
      - uses: octopilot/actions/octopilot@main
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    <code>lint</code> and <code>test</code> run in parallel, both depending on <code>detect</code>. The <code>build</code> job waits for both to pass, then janitor clears the deck before the heavy Docker work begins. Adding a new language to <code>skaffold.yaml</code> automatically propagates through every layer on the next push.
                </p>
            </section>
        `
    },
    {
        id: '13',
        title: 'Build Multi-Arch Containers Without the Plumbing: The op Action',
        excerpt: 'Multi-architecture container builds are deceptively complex: BuildKit wraps single-platform pushes in OCI Indexes, attestation manifests pollute manifest lists, and SLSA provenance requires specific digest handling. The Octopilot op action abstracts all of it.',
        category: 'Developer',
        readTime: '11 min read',
        image: '/assets/blog/op-build-action.png',
        author: {
            name: 'Jordan Lee',
            role: 'Senior DevOps Engineer',
            avatar: '/assets/blog/avatar-jordan.jpg'
        },
        slug: 'multi-arch-containers-op-action',
        relatedSlugs: ['octopilot-actions-intro', 'automated-release-workflow', 'ephemeral-environments-pr'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Building a container image for <code>linux/amd64</code> is straightforward. Building the same image for <code>linux/amd64</code> and <code>linux/arm64</code> simultaneously, pushing them to a registry as a multi-arch manifest list, generating SLSA build provenance, and outputting the digests for downstream attestation steps — that requires knowing exactly how BuildKit, Docker Buildx, and the OCI Image Specification interact. Most teams learn this by hitting it in production.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The Octopilot <code>op</code> action wraps the entire build pipeline — Skaffold, Cloud Native Buildpacks, multi-arch manifest assembly, and SLSA attestation — behind a simple interface. It outputs a <code>build_result.json</code> that carries image references and digests as a verifiable contract between CI stages.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The OCI Index Trap</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    When you use <code>docker buildx build --push --platform linux/amd64</code>, you might expect a single image manifest to land in the registry. With modern BuildKit defaults, you get an OCI Index instead — a manifest list that wraps your image manifest together with a provenance attestation manifest. This is BuildKit's default behaviour for provenance generation.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The problem surfaces when you try to assemble a multi-arch manifest list. Tools that attempt to pull the <code>linux/amd64</code> image from the registry encounter an OCI Index and try to find a child image with the requested platform. The provenance attestation manifest is labelled with the host platform, not the target platform, so the lookup fails with:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
no child with platform linux/amd64 in index
ghcr.io/my-org/my-app:v1.0.0_linux_amd64@sha256:...
</pre>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The multi-arch build problem chain</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-arrow-right text-blue-400 mt-1"></i><div>BuildKit adds <code>BUILDX_NO_DEFAULT_ATTESTATIONS</code> workaround — but it must be set per-platform build</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-arrow-right text-blue-400 mt-1"></i><div>Manifest list assembly must skip attestation manifests when reading per-platform images from the registry</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-arrow-right text-blue-400 mt-1"></i><div>SLSA attestation requires the final manifest list digest, not the per-platform digest</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-arrow-right text-blue-400 mt-1"></i><div>Digest extraction for attestation must target the correct artifact (the app image, not the base image)</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">build_result.json: The CI Contract</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>op</code> action's primary output is <code>build_result.json</code> — a machine-readable file that records every built artifact with its full registry reference and digest:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
{
  "builds": [
    {
      "imageName": "op-base",
      "tag": "ghcr.io/octopilot/op-base:v1.0.0@sha256:abc123..."
    },
    {
      "imageName": "op",
      "tag": "ghcr.io/octopilot/op:v1.0.0@sha256:def456..."
    }
  ]
}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Downstream steps — SLSA attestation, Flux image automation, deployment promotion — consume this file rather than trying to reconstruct the digest from registry lookups. This makes the pipeline reproducible: the same <code>build_result.json</code> that was produced during CI is what gets attested and deployed.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Container mode vs bypass mode</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-box text-green-400 mt-1"></i><div><strong>Container mode (default):</strong> Runs <code>op</code> inside the <code>ghcr.io/octopilot/op</code> container. Docker socket and credentials are mounted in. Used in all production pipelines.</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-bolt text-amber-400 mt-1"></i><div><strong>Bypass mode:</strong> Uses the GitHub Actions runner's own Docker daemon directly (no container wrapper). Faster for self-hosted runners where the <code>op</code> binary is already installed.</div></li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Using the op Action With SLSA Attestation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A complete build and attestation step using the Octopilot action:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
    - name: Build and Push
      id: build
      uses: octopilot/actions/octopilot@main
      with:
        registry: ghcr.io
        username: \${{ github.actor }}
        password: \${{ secrets.GITHUB_TOKEN }}
        push: true
        platforms: linux/amd64,linux/arm64

    - name: Extract digest for attestation
      id: digest
      run: |
        # Select the application image (not the base) from build_result.json
        IMAGE_TAG=$(cat build_result.json | \
          jq -r '.builds[] | select(.imageName == "op") | .tag')
        DIGEST=\${{ "sha256:" }}$(echo "$IMAGE_TAG" | cut -d@ -f2 | cut -d: -f2)
        echo "digest=$DIGEST" >> \$GITHUB_OUTPUT

    - name: Attest build provenance
      uses: actions/attest-build-provenance@v2
      with:
        subject-name: ghcr.io/\${{ github.repository_owner }}/op
        subject-digest: \${{ steps.digest.outputs.digest }}
        push-to-registry: true
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The key detail is the <code>jq</code> selector: <code>.builds[] | select(.imageName == "op")</code>. In a pipeline that builds both a base image and an application image, you need the application image's digest for attestation — not the first artifact in the list. <code>build_result.json</code> makes this unambiguous.
                </p>
            </section>
        `
    },
    {
        id: '14',
        title: 'From Merge to Tag to Release Notes in One Workflow',
        excerpt: 'Release-Please, semantic-release, and their relatives are bloated, opinionated, and surprisingly fragile. We built our own release tooling from dissatisfaction — four composable actions that version-bump, tag, and generate AI-written release notes in under two minutes.',
        category: 'Team',
        readTime: '11 min read',
        image: '/assets/blog/automated-releases.png',
        author: {
            name: 'Maya Johnson',
            role: 'Team Lead',
            avatar: '/assets/blog/avatar-maya.jpg'
        },
        slug: 'automated-release-workflow',
        relatedSlugs: ['multi-arch-containers-op-action', 'octopilot-actions-intro', 'cicd-secret-injection'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Every engineering team eventually reaches for an automated release tool. The usual candidates are Google's <strong>Release-Please</strong>, <strong>semantic-release</strong>, or <strong>changesets</strong>. We tried them. We found them all — to varying degrees — to be bloated, opinionated far beyond what the problem requires, and surprisingly fragile in practice.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Release-Please, in particular, manages its own release PR lifecycle, enforces Conventional Commits across your entire history, requires a specific branch strategy, and — when something goes wrong — leaves behind "release PRs" that drift out of sync with reality and require manual cleanup. For a team that just wants to bump a version, push a tag, and publish release notes, it is a significant amount of machinery to operate.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        We built four composable actions — <code>bump-version</code>, <code>is-tag</code>, <code>previous-tag</code>, and <code>release</code> — that do exactly what the problem requires and nothing more. A team member triggers <code>workflow_dispatch</code>, picks major/minor/patch, and the pipeline does the rest in under two minutes.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">What's Wrong With Release-Please</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Release-Please is not a bad idea. Automated versioning driven by commit message conventions is a reasonable model. The problems are in the implementation: it is a GitHub App (or a GitHub Action wrapping a Node.js CLI), it requires Conventional Commits throughout your history, and it works by opening and maintaining a "release PR" that accumulates changes until you're ready to merge and release.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The failure modes we encountered</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-xmark text-red-400 mt-1"></i>
                            <div>
                                <strong>Release PR drift:</strong> When a release PR falls behind main due to hotfixes or rebase-heavy workflows, it requires manual conflict resolution. The tool doesn't handle this gracefully and leaves orphaned release PRs that confuse newcomers.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-xmark text-red-400 mt-1"></i>
                            <div>
                                <strong>Conventional Commits or nothing:</strong> If your team doesn't use <code>feat:</code> / <code>fix:</code> / <code>chore:</code> prefixes consistently, Release-Please cannot determine the bump type. You either enforce a commit convention across the entire organisation or the tool becomes unreliable.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-xmark text-red-400 mt-1"></i>
                            <div>
                                <strong>Multi-language friction:</strong> Release-Please handles some ecosystems well (Node, Go) and others inconsistently. A Rust service with a separate frontend package requires careful manifest configuration. Getting it right across a polyglot monorepo is non-trivial.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-xmark text-red-400 mt-1"></i>
                            <div>
                                <strong>Opaque release notes:</strong> The auto-generated changelog from Conventional Commits is a raw list of commit subjects. It's technically accurate but rarely tells the story of what changed in terms that users understand.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-xmark text-red-400 mt-1"></i>
                            <div>
                                <strong>Hidden state:</strong> Release-Please stores release state in a JSON manifest file and in GitHub release metadata. When things go wrong — and they do — debugging requires understanding this hidden state model.
                            </div>
                        </li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The fundamental issue is that Release-Please solves a harder problem than most teams actually have. It is designed for continuous delivery pipelines where every merged PR is potentially releasable and the version bump is computed automatically. Most teams want something simpler: a human decides when to release, picks the bump type, and the machine handles the mechanics.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Critical gotcha: GITHUB_TOKEN cannot trigger downstream CI</h3>
                    <p class="text-gray-300 mb-4">
                        This is a GitHub platform constraint that catches everyone, regardless of which release tool they use. When your release workflow commits the version bump and pushes the tag, the CI pipeline for that tag will never run — GitHub intentionally prevents <code>GITHUB_TOKEN</code>-authenticated pushes from triggering new workflow runs to avoid infinite loops.
                    </p>
                    <p class="text-gray-300">
                        The fix is a Personal Access Token (PAT) stored as <code>REPO_PAT</code>. This is the only manual configuration required. Release-Please has the same requirement but buries it in documentation that is easy to miss.
                    </p>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Four Actions, One Job</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The Octopilot approach is deliberately minimal. There is no release PR, no Conventional Commits requirement, no hidden state file. A human triggers a <code>workflow_dispatch</code> with a single input — the bump type — and four actions run in sequence:
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-code-branch text-violet-400 mt-1"></i>
                            <div>
                                <strong><code>bump-version</code></strong> — reads the current version from the target file, applies major/minor/patch semantics, writes the new version back, and outputs both old and new version strings. Supports <code>go</code>, <code>rust</code>, <code>node</code>, <code>python</code>, <code>maven</code>, <code>gradle</code>, <code>dotnet</code>, and plain <code>text</code>. Works on one file per invocation — call it multiple times for monorepos with multiple version files.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-circle-check text-emerald-400 mt-1"></i>
                            <div>
                                <strong><code>is-tag</code></strong> — checks <code>GITHUB_REF</code> and falls back to <code>git describe --exact-match</code>. Used as a gate in CI to ensure release steps only run on tagged commits, not on branch pushes.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-tag text-slate-400 mt-1"></i>
                            <div>
                                <strong><code>previous-tag</code></strong> — handles shallow clones correctly, skips the current tag automatically, and returns a configurable fallback if no prior tag exists. Provides the range boundary for changelog generation.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-rocket text-blue-400 mt-1"></i>
                            <div>
                                <strong><code>release</code></strong> — takes the version, the since-tag, and an AI provider (Anthropic, OpenAI, or local Ollama) and creates the GitHub Release with release notes that actually describe what changed for users — not a raw commit list.
                            </div>
                        </li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The AI-generated release notes are a material improvement over any commit-list approach. Rather than outputting <code>feat: add retry logic to webhook handler</code>, the model summarises the changes in plain language: "Webhook delivery is now retried up to three times on transient failures, reducing missed events during downstream outages." This is immediately useful to users and reviewers without requiring any commit discipline.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Complete Release Workflow</h2>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
name: Release
on:
  workflow_dispatch:
    inputs:
      bump:
        description: "Version bump type"
        type: choice
        options: [patch, minor, major]
        default: patch

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          token: \${{ secrets.REPO_PAT }}   # PAT — GITHUB_TOKEN won't trigger CI on push
          fetch-depth: 0                     # full history required for tag lookup

      - name: Bump version
        id: bump
        uses: octopilot/actions/bump-version@main
        with:
          mode: rust                 # go | rust | node | python | maven | gradle | dotnet | text
          bump: \${{ inputs.bump }}
          file: api/Cargo.toml

      - name: Commit and tag
        run: |
          git config user.name  "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add api/Cargo.toml
          git commit -m "chore: bump version to v\${{ steps.bump.outputs.version }}"
          git tag "v\${{ steps.bump.outputs.version }}"
          git push origin HEAD "v\${{ steps.bump.outputs.version }}"
        env:
          GH_TOKEN: \${{ secrets.REPO_PAT }}

      - name: Get previous tag
        id: prev_tag
        uses: octopilot/actions/previous-tag@main
        with:
          fallback: "v0.0.0"

      - name: Create GitHub Release
        uses: octopilot/actions/release@main
        with:
          version: "v\${{ steps.bump.outputs.version }}"
          since_tag: \${{ steps.prev_tag.outputs.tag }}
          provider: anthropic
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The workflow runs in under two minutes. The result: a versioned commit in the repo, a git tag, a GitHub Release with AI-written release notes, and — because the push uses <code>REPO_PAT</code> — the full CI pipeline triggered on the new tag, building and attesting the release container image.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    Compare this to Release-Please: no release PR to manage, no Conventional Commits requirement, no manifest state file to audit when things go wrong. The entire release state is in git — the commit and the tag. Any engineer can reason about it without reading tool documentation.
                </p>
                <div class="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Multiple version files</h4>
                    <p class="text-gray-300">
                        For monorepos with multiple version files, call <code>bump-version</code> once per file with the same <code>bump</code> input. For example, bump <code>api/Cargo.toml</code> for the Rust backend and <code>site/package.json</code> for the frontend — both receive the same version in the same job.
                    </p>
                </div>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Migrating from Release-Please</h4>
                    <p class="text-gray-300">
                        Migration is a single-afternoon task. Delete the Release-Please workflow and any open release PRs. Add the <code>release.yml</code> workflow above. Store <code>REPO_PAT</code> in repository secrets. The first manual dispatch will pick up from wherever your last tag is — no history rewriting or manifest migration required.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '15',
        title: 'Ephemeral Environments for Every PR: No Infrastructure Required',
        excerpt: 'Long-lived review environments are expensive, drift from main, and become security liabilities. ttl.sh gives you a free, unauthenticated, time-limited container registry. Combined with build-ephemeral, every pull request can have its own container image that expires automatically.',
        category: 'Team',
        readTime: '8 min read',
        image: '/assets/blog/ephemeral-environments.png',
        author: {
            name: 'Alex Rivera',
            role: 'Solo Dev Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'ephemeral-environments-pr',
        relatedSlugs: ['multi-arch-containers-op-action', 'octopilot-actions-intro', 'automated-release-workflow'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Pull request review environments — sometimes called preview environments or ephemeral environments — are a powerful development practice. Instead of reviewing code by reading it in a browser, reviewers can interact with a running instance of exactly the change being proposed. The blocker is usually infrastructure: standing up a review environment requires a registry, a cluster, an ingress, TLS, DNS, and a cleanup mechanism for when the PR closes.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        <code>ttl.sh</code> is a free, public OCI registry where images expire after a configurable time-to-live. The <code>build-ephemeral</code> action wraps the full <code>op build</code> flow targeting this registry, giving every PR a real container image with zero registry setup and zero cleanup overhead.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Review Environment Tax</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Most teams that want ephemeral environments end up with one of two outcomes: they invest heavily in a full preview environment platform (a real engineering project in itself), or they give up and review code without running it. The middle ground — "just build a container and push it somewhere for testing" — is surprisingly hard to operationalise.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Why "just push to a staging registry" fails</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>Registry auth:</strong> You need to store and rotate credentials for the staging registry in every repo's secrets</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>Tag collisions:</strong> PR #42 and PR #43 both push <code>:pr-latest</code>, overwriting each other</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>Cleanup:</strong> Old PR images accumulate; registry storage costs grow; someone has to write and maintain a pruning job</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div><strong>GHCR permissions:</strong> Pushing to <code>ghcr.io</code> from a fork's PR requires careful permissions configuration and may not be possible at all</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">ttl.sh: A Registry That Deletes Itself</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    <a href="https://ttl.sh" class="text-blue-400 hover:text-blue-300">ttl.sh</a> is an anonymous, ephemeral container registry. You push an image with a time-to-live as the tag (<code>:2h</code>, <code>:1d</code>, <code>:24h</code>) and it expires automatically. No account. No credentials. No cleanup. The image reference is unique per push — it includes the content digest — so PR #42 and PR #43 each get distinct, non-colliding references.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>build-ephemeral</code> action generates an image name from the repository owner, repository name, and short SHA, runs <code>op build</code> targeting that name on <code>ttl.sh</code>, and outputs the full reference:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Resulting image reference:
ttl.sh/octopilot-sample-static-rust-axum-a3f91c2:4h
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Reviewers can pull and run this image immediately with no registry login. After 4 hours it disappears automatically.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">PR Preview Workflow</h2>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
name: PR Preview
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  preview:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write   # to post the comment

    steps:
      - uses: actions/checkout@v4

      - name: Build ephemeral image
        id: ephemeral
        uses: octopilot/actions/build-ephemeral@main
        with:
          ttl: "4h"
          platform: linux/amd64   # single-arch for speed

      - name: Comment image ref on PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: [
                "### Preview Image Ready",
                "",
                "Pull and run the image for this PR:",
                "\`\`\`",
                "docker run --rm -p 8080:8080 \${{ steps.ephemeral.outputs.image_ref }}",
                "\`\`\`",
                "_This image expires in 4 hours._"
              ].join("\\n")
            });
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The result: every PR automatically gets a comment with a <code>docker run</code> command that any reviewer can use to test the change in under 30 seconds. No cluster, no ingress, no DNS — just a container they can run locally. When the PR closes, the image has already expired.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Integration testing</h4>
                    <p class="text-gray-300">
                        The same pattern works for integration tests. Use <code>build-ephemeral</code> in a test job, pull the image in a subsequent job, and run your integration test suite against the actual container image — not a mocked service.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '16',
        title: 'Network Security for Cloud-Hosted Runners: Allowlisting GitHub Actions',
        excerpt: 'GitHub-hosted runners use ephemeral IP addresses that change on every job run. If your cloud databases, registries, or Kubernetes API servers are behind IP allowlists, you need a way to add the runner IP before the job and remove it after — automatically, and even on failure.',
        category: 'Enterprise',
        readTime: '9 min read',
        image: '/assets/blog/network-security-runners.png',
        author: {
            name: 'Rachel Thompson',
            role: 'Security Architect',
            avatar: '/assets/blog/avatar-rachel.jpg'
        },
        slug: 'network-security-cloud-runners',
        relatedSlugs: ['composable-cicd-composite-actions', 'cicd-secret-injection', 'least-privilege-access'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Enterprise cloud environments protect sensitive resources with firewall IP allowlists. Cloud SQL on GCP, RDS on AWS, and private AKS clusters on Azure all support restricting access to specific CIDR ranges. This is sound security practice — until your CI/CD pipeline runs on GitHub-hosted runners, which use a pool of ephemeral IP addresses that GitHub publishes and rotates regularly.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The <code>gke-allow-runner</code>, <code>eks-allow-runner</code>, and <code>aks-allow-runner</code> actions implement a pre-step / post-step allowlisting pattern. The runner's IP is added to the firewall before the job and removed in a step marked <code>if: always()</code> — so the IP is cleaned up even if the job fails or is cancelled.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Ephemeral IP Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    GitHub publishes a <a href="https://api.github.com/meta" class="text-blue-400 hover:text-blue-300">meta API endpoint</a> listing the current IP ranges used by GitHub Actions runners. These ranges include thousands of CIDR blocks across AWS, Azure, and GCP regions. Allowlisting the entire published range defeats the purpose of the allowlist — you're effectively opening your database to all of GitHub's cloud infrastructure.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The correct approach is narrower: determine the specific IP of the runner executing the current job, add <em>just that IP</em> to the firewall allowlist at job start, and remove it at job end. The challenge is the cleanup step — if you put the removal in a final step, a job failure or cancellation will skip it, leaving the IP permanently allowlisted.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The always() pattern</h3>
                    <p class="text-gray-300 mb-4">
                        GitHub Actions supports <code>if: always()</code> on steps, which causes the step to run regardless of whether previous steps succeeded, failed, or were cancelled. This is the correct mechanism for cleanup in a firewall allowlisting workflow.
                    </p>
                    <p class="text-gray-300">
                        All three allow-runner actions (GKE, EKS, AKS) follow the same pattern: an <strong>Add Whitelist</strong> step at the start (no condition) and a <strong>Remove Whitelist</strong> step at the end with <code>if: always()</code>.
                    </p>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Cloud-Specific Implementations</h2>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">GKE (Google Kubernetes Engine)</h3>
                    <p class="text-gray-300 mb-4">
                        <code>gke-allow-runner</code> uses the Google Cloud SDK to add/remove the runner IP from the GKE cluster's master authorised networks. Requires <code>gcloud auth</code> with a service account that has <code>container.clusters.update</code> permission or equivalent Workload Identity Federation credentials.
                    </p>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">EKS (Amazon Elastic Kubernetes Service)</h3>
                    <p class="text-gray-300 mb-4">
                        <code>eks-allow-runner</code> modifies the EKS cluster's public endpoint access security group using the AWS CLI. Requires an IAM role with <code>eks:UpdateClusterConfig</code> and the relevant EC2 security group mutation permissions via OIDC-based role assumption.
                    </p>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">AKS (Azure Kubernetes Service)</h3>
                    <p class="text-gray-300 mb-4">
                        <code>aks-allow-runner</code> updates the AKS cluster's API server authorised IP ranges using the Azure CLI. Requires an Azure service principal or Managed Identity with <code>Microsoft.ContainerService/managedClusters/write</code> permission on the cluster resource.
                    </p>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Usage Pattern (GKE Example)</h2>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write   # required for Workload Identity Federation
      contents: read

    steps:
      - uses: actions/checkout@v4

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v2
        with:
          workload_identity_provider: \${{ secrets.GCP_WORKLOAD_IDENTITY_PROVIDER }}
          service_account: \${{ secrets.GCP_SERVICE_ACCOUNT }}

      - name: Add runner to GKE allowlist
        uses: octopilot/actions/network-access/gke-allow-runner@main
        with:
          project_id: my-gcp-project
          cluster_name: my-cluster
          cluster_region: europe-west2

      # ... deployment steps that require cluster access ...

      - name: Deploy to GKE
        run: kubectl apply -f k8s/

      - name: Remove runner from GKE allowlist
        if: always()    # runs even on failure or cancellation
        uses: octopilot/actions/network-access/gke-allow-runner@main
        with:
          project_id: my-gcp-project
          cluster_name: my-cluster
          cluster_region: europe-west2
          remove: true
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The <code>if: always()</code> on the removal step is critical. Without it, a failed <code>kubectl apply</code> would leave the runner's IP in the allowlist until the next successful run, creating an open network path that persists indefinitely.
                </p>
                <div class="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Self-hosted runners</h4>
                    <p class="text-gray-300">
                        If you run self-hosted runners with static IPs, you don't need these actions — configure the allowlist once at infrastructure provisioning time. These actions are specifically for GitHub-hosted runners where the IP is unknown until the job starts.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '17',
        title: 'Composable CI/CD: Why We Replaced Reusable Workflows with Composite Actions',
        excerpt: 'Reusable workflows solved the copy-paste problem but introduced new friction: extra job spin-up time, separate workflow runs, and expression syntax limitations. Composite actions give you the same reusability inside a single job — and taught us some hard lessons about GitHub Actions expression evaluation.',
        category: 'Team',
        readTime: '12 min read',
        image: '/assets/blog/composable-cicd.png',
        author: {
            name: 'Lisa Martinez',
            role: 'SRE Lead',
            avatar: '/assets/blog/avatar-lisa.jpg'
        },
        slug: 'composable-cicd-composite-actions',
        relatedSlugs: ['zero-config-ci-detect-contexts', 'lint-test-without-scaffolding', 'octopilot-actions-intro'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    GitHub Actions' reusable workflows were a significant improvement over copy-paste CI. Instead of duplicating a 50-line lint workflow across fifteen repositories, you define it once in a central repository and call it with <code>uses: octopilot/octopilot-workflows/.github/workflows/lint.yml@main</code>. When you fix a golangci-lint timeout, every repository that uses the workflow gets the fix automatically.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        Composite actions run inside the calling job — same runner, same filesystem, same environment. They're faster than reusable workflows, compose more naturally with other steps, and enable the <code>pipeline-context</code> pattern that drives the Octopilot pipeline. The migration taught us where GitHub Actions expression evaluation breaks down and how to work around it.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">What Reusable Workflows Got Wrong</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Reusable workflows are jobs. Each <code>workflow_call</code> creates a new GitHub Actions job that needs its own runner, its own checkout, and its own environment setup. For a lint workflow, that's typically 30–60 seconds of job spin-up time before any linting actually happens. For a pipeline with separate lint and test reusable workflows called in parallel, you're paying that cost twice.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Reusable workflow limitations</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Separate job:</strong> Checkout, restore caches, set up environment — all paid again for every reusable workflow invocation</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Output propagation:</strong> Passing data from a reusable workflow to the calling workflow requires threading outputs through job output mappings</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Visibility:</strong> Reusable workflow steps appear in a nested workflow run, not inline in the calling workflow — harder to debug</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div><strong>Expression limits:</strong> Inputs passed to reusable workflows are strings; complex objects must be serialised to JSON and passed as strings</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Composite Actions: Same Job, Same Filesystem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Composite actions run as steps inside the calling job. The runner is already provisioned, the repository is already checked out, the caches are already warm. A composite action is closer to a function call than a separate process. The <code>lint</code> composite action installs golangci-lint and runs it in about 45 seconds; the equivalent reusable workflow takes over two minutes including job startup.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>pipeline-context</code> pattern is only practical with composite actions. Passing a JSON object from a <code>detect-contexts</code> step to a <code>lint</code> step in the same job is a simple step output reference: <code>\${{ steps.detect.outputs.pipeline-context }}</code>. With reusable workflows, that context would need to traverse two job output mappings and two workflow input declarations.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">A hard-learned lesson: fromJson() in composite action if: conditions</h3>
                    <p class="text-gray-300 mb-4">
                        The first version of the <code>lint</code> composite action used <code>fromJson()</code> in step <code>if:</code> conditions to check whether the detected languages included Go:
                    </p>
                    <pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-4">
# This does NOT work in composite action if: conditions
if: fromJson(inputs.pipeline-context).languages contains 'go'
                    </pre>
                    <p class="text-gray-300 mb-4">
                        GitHub Actions validates composite action YAML at load time, before any inputs are available, and <code>fromJson()</code> is not allowed in this context. The error is:
                    </p>
                    <pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-4">
A template expression is not allowed in this context
                    </pre>
                    <p class="text-gray-300">
                        The fix: add a dedicated "Parse context" step that uses <code>jq</code> to extract the relevant fields into step outputs. Subsequent steps reference those outputs, which are plain strings and are perfectly legal in <code>if:</code> conditions.
                    </p>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Parse Context Pattern</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This pattern appears in every Octopilot composite action that consumes <code>pipeline-context</code>:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
steps:
  # Step 1: extract what we need into plain string outputs
  - name: Parse context
    id: ctx
    shell: bash
    run: |
      PC='\${{ inputs.pipeline-context }}'
      has_go=$(echo "$PC" | jq -r 'if (.languages | index("go")) then "true" else "false" end')
      has_rust=$(echo "$PC" | jq -r 'if (.languages | index("rust")) then "true" else "false" end')
      go_version=$(echo "$PC" | jq -r '.go.version // ""')
      echo "has_go=$has_go"       >> "\$GITHUB_OUTPUT"
      echo "has_rust=$has_rust"   >> "\$GITHUB_OUTPUT"
      echo "go_version=$go_version" >> "\$GITHUB_OUTPUT"

  # Step 2: use the plain string outputs in if: conditions (this works)
  - name: Setup Go
    if: steps.ctx.outputs.has_go == 'true'
    uses: actions/setup-go@v5
    with:
      go-version: \${{ steps.ctx.outputs.go_version }}

  - name: Run golangci-lint
    if: steps.ctx.outputs.has_go == 'true'
    uses: golangci/golangci-lint-action@v6
    with:
      install-mode: goinstall
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The separation between "parse" and "act" keeps the composite action readable and avoids the expression evaluation trap. Each language adds two lines to the parse step and a pair of conditional setup/run steps — the pattern scales cleanly.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    We kept the original reusable workflows in <code>octopilot-workflows</code> as thin wrappers that call the composite actions for backwards compatibility. Teams already using the reusable workflow interface don't need to change anything; those adopting the new pipeline get the composite actions directly and benefit from faster feedback cycles and inline step visibility.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-8">
                    <h4 class="text-white font-bold mb-2">When to still use reusable workflows</h4>
                    <p class="text-gray-300">
                        Reusable workflows are the right choice when you need <strong>job-level isolation</strong> — separate permissions, separate environment, separate secret access. The Octopilot build job (which requires <code>packages: write</code> and <code>id-token: write</code>) is a reusable workflow, not a composite action, precisely for this reason.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '18',
        title: 'Why We Made Our Pipeline Tools Free (When Our Business is About Secrets)',
        excerpt: 'Octopilot earns revenue from secrets management — GPG-encrypted, repo-local, Kubernetes-native. So why did we spend significant engineering effort building 18 free CI/CD actions and open-source them? Honest answer: deep frustration with the state of DevOps tooling, a lot of opinions, and a strategic bet.',
        category: 'Team',
        readTime: '10 min read',
        image: '/assets/blog/why-open-pipeline-tools.png',
        author: {
            name: 'The Octopilot Team',
            role: 'Octopilot',
            avatar: '/assets/blog/avatar-marcus.jpg'
        },
        slug: 'why-we-open-sourced-pipeline-tools',
        relatedSlugs: ['octopilot-actions-intro', 'automated-release-workflow', 'composable-cicd-composite-actions'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Let's be direct about the business model first. Octopilot makes money from secrets management — repository-local GPG encryption, Kubernetes secret controllers, SOPS-based CI injection, audit trails that satisfy SOC 2 auditors. That is the product. That is what teams pay for.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The 18 GitHub Actions we published — <code>detect-contexts</code>, <code>lint</code>, <code>test</code>, <code>janitor</code>, <code>bump-version</code>, <code>build-ephemeral</code>, the network access actions, and the rest — are free. MIT-licensed. No sign-up. No usage limits. They are not a loss-leader with features locked behind a paywall. They are genuinely, completely free.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">The honest reason</h4>
                    <p class="text-gray-300">
                        We built them because we were frustrated. We open-sourced them because we think the DevOps tooling ecosystem deserves better, and because helping teams ship faster is the fastest path to earning their trust on the harder problem of secrets governance.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Snowflake Workflow Epidemic</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    In the process of building Octopilot and talking to hundreds of engineering teams, we kept encountering the same scene: a <code>.github/workflows</code> directory full of hand-rolled YAML, each file slightly different from the last, none of them maintained with any consistency, and all of them understood only by the engineer who wrote them eighteen months ago.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    We started calling these <strong>snowflake workflows</strong>. Every one is unique. Every one is fragile. And every organisation has hundreds of them, spread across dozens of repositories, collectively representing thousands of hours of engineering time that went into solving the same problems over and over again — in slightly different ways, with slightly different bugs.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The snowflake problems we kept seeing</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-snowflake text-blue-300 mt-1"></i>
                            <div>
                                <strong>Toolchain version drift:</strong> The Go version in the workflow is different from the Go version in <code>go.mod</code>, which is different from the Go version in the Dockerfile. Nobody remembers which one is "right."
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-snowflake text-blue-300 mt-1"></i>
                            <div>
                                <strong>Copy-paste lint jobs:</strong> The golangci-lint setup in the auth service is three versions behind the one in the API gateway. They diverged when someone fixed the timeout issue in one but not the other.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-snowflake text-blue-300 mt-1"></i>
                            <div>
                                <strong>Build jobs that randomly exhaust disk:</strong> The ubuntu-latest runner has 15 GB of Android SDK, .NET, and Haskell pre-installed. The Docker build needs 12 GB. Nobody noticed until Friday at 5pm.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-snowflake text-blue-300 mt-1"></i>
                            <div>
                                <strong>Release workflows that require four people and a Slack thread:</strong> The engineer with access to the release PAT needs to be online, the version needs to be bumped manually in three files, and the release notes are copy-pasted from the previous release.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-snowflake text-blue-300 mt-1"></i>
                            <div>
                                <strong>CI pipelines that work but nobody understands why:</strong> The workflow has been copy-pasted and modified so many times that removing any step might break something, but nobody is sure what.
                            </div>
                        </li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The deeper problem is that CI/CD expertise is treated as a specialist skill — something one or two "platform engineers" maintain, with everyone else cargo-culting from Stack Overflow and outdated GitHub documentation. This creates a knowledge bottleneck. It means CI pipelines are written once and rarely improved. It means the tooling that surrounds your product code gets less engineering attention than the product code itself — despite running on every single commit.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Why We Shared It</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    We built the first versions of these tools for our own repositories. Octopilot is a multi-language codebase — Go services, Rust components, Python tooling, TypeScript frontends. Every time we added a new service, we were copying and adapting the same CI workflows. We got frustrated with ourselves. So we built <code>detect-contexts</code> to eliminate the manual configuration, <code>bump-version</code> because Release-Please was more work than it saved, and <code>janitor</code> after hitting "No space left on device" in CI one too many times.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Once we had the tools and they worked well for us, the question was what to do with them. The answer felt obvious: share them. Not as a product with a pricing page, but as tools we genuinely think should exist in the ecosystem.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The strategic reasoning (being honest about it)</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-bullseye text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Trust is the prerequisite for a secrets business.</strong> Before a team will let you anywhere near their encryption keys or secret management infrastructure, they need to trust you. Building tools that demonstrably solve real problems, sharing them without friction, and maintaining them publicly is the most direct path to that trust.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-bullseye text-emerald-400 mt-1"></i>
                            <div>
                                <strong>The pipeline and the secrets are the same problem.</strong> A team using our lint, test, and build actions is a team whose CI/CD pipeline is already Octopilot-shaped. Adding <code>sops-decrypt</code> to inject encrypted secrets is a natural extension, not a migration. The free tooling and the paid product are parts of the same workflow.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-bullseye text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Expertise demonstrated publicly is more credible than expertise claimed in a sales deck.</strong> Any vendor can claim to understand DevOps. Publishing the <code>op</code> multi-arch build tool — which required solving the OCI Index problem that stumps most teams — demonstrates it.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-bullseye text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Open tooling attracts the engineers who influence the purchasing decision.</strong> The engineer who sets up a team's CI pipeline is often the same engineer who evaluates and recommends security tooling. If they've already used our actions and found them reliable, the conversation about secrets management starts from a very different place.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">What's Free and What's the Product</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    We want to be unambiguous about this because we find it frustrating when open-source projects are vague about where the free tier ends.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Free, always, no caveats</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>All 18 GitHub Actions in <code>octopilot/actions</code></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>The <code>op</code> CLI and container image (<code>ghcr.io/octopilot/op</code>)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>The reusable workflows in <code>octopilot/octopilot-workflows</code></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>The MCP server at <code>mcp.octopilot.app</code></div></li>
                    </ul>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The product (what we charge for)</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-lock text-purple-400 mt-1"></i><div>The <strong>secrets management platform</strong> — repository-local GPG encryption, team-scoped key management, automated re-encryption on team membership changes</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-lock text-purple-400 mt-1"></i><div>The <strong>Kubernetes secret controller</strong> — in-cluster SOPS decryption, GitOps-native secret lifecycle management</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-lock text-purple-400 mt-1"></i><div><strong>Enterprise support and SLAs</strong> — for teams with compliance requirements who need a vendor relationship, not just open-source tooling</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>sops-decrypt</code> action in the free actions library decrypts a SOPS-encrypted file using a key you manage yourself. That is, and always will be, free. The paid product is about managing those keys at organisational scale — automatic rotation, team-scoped access, compliance reporting, the infrastructure that makes SOPS practical across dozens of teams and hundreds of repositories.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    We think this is a fair model. If you're a team of three and you're comfortable managing your own SOPS keys, you can get full value from Octopilot for free — including the entire CI/CD pipeline toolchain. If you're an engineering organisation that needs the key management to be governed, auditable, and not dependent on any one person's GPG setup, that's what the product is for.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-8">
                    <h4 class="text-white font-bold mb-2">One ask</h4>
                    <p class="text-gray-300">
                        If the free tooling is useful to you, the best thing you can do is tell someone. Star the repository, share a post, mention it in your team's engineering blog. The pipeline tools exist because we wanted to solve a real problem. They'll keep improving because the problem is still real and we're still working on it. Your feedback — including the critical kind — shapes what gets built next.
                    </p>
                </div>
            </section>
        `
    }
];
