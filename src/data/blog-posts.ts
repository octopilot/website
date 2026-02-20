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
    },
    {
        id: '19',
        title: 'Let Your AI Agent Wire Up Your CI/CD: The Octopilot MCP',
        excerpt: 'Onboarding a project to a proper CI/CD pipeline — skaffold.yaml, multi-arch builds, lint, test, SLSA attestation, automated releases — normally takes hours. The Octopilot MCP server lets your AI agent do it in a single conversation, with Docker as the only prerequisite.',
        category: 'Developer',
        readTime: '9 min read',
        image: '/assets/blog/octopilot-mcp.png',
        author: {
            name: 'Taylor Morgan',
            role: 'Developer Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'octopilot-mcp-ai-agent-cicd',
        relatedSlugs: ['octopilot-actions-intro', 'zero-config-ci-detect-contexts', 'why-we-open-sourced-pipeline-tools'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    There's a category of DevOps work that is straightforward to describe but tedious to execute: "set up a proper CI/CD pipeline for this repository." You know what it should contain — a <code>skaffold.yaml</code> for the build config, a GitHub Actions workflow with lint, test, and container build jobs, multi-arch platform targets, SLSA attestation, an automated release workflow. None of it is hard. All of it is time-consuming to write from scratch, and it's the kind of work that either gets skipped or copy-pasted from a previous project that may itself have been imperfect.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The Octopilot MCP server gives AI agents (Cursor, Claude Desktop, or any MCP-compatible client) direct access to Octopilot's pipeline toolchain. One tool call — <code>onboard_repository</code> — detects languages, generates a complete <code>skaffold.yaml</code> and <code>.github/workflows/ci.yml</code>, and returns a checklist of remaining manual steps. Docker is the only prerequisite.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Onboarding Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Every new project or repository in an organisation should have the same pipeline shape. In practice, they don't. The first few repositories get carefully crafted pipelines. The tenth gets a copy-paste from the third with some variable names changed. The twentieth gets a minimal workflow because the engineer setting it up is busy and "we can improve it later." Later never comes.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The result is the snowflake workflow problem we described in <a href="/blog/why-we-open-sourced-pipeline-tools" class="text-blue-400 hover:text-blue-300">our post on why we open-sourced our pipeline tools</a>. The antidote is standardisation. But standardisation only sticks if the standard is easy to apply — ideally easier than reaching for the clipboard.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What "onboarding" actually involves</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-file-code text-blue-400 mt-1"></i><div>Write <code>skaffold.yaml</code> with the correct buildpack builder, image names, and context paths</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-file-code text-blue-400 mt-1"></i><div>Write <code>.github/workflows/ci.yml</code> with detect → lint+test → build → release pattern</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-magnifying-glass text-blue-400 mt-1"></i><div>Detect which languages are present and configure the right toolchain versions</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-key text-blue-400 mt-1"></i><div>Configure repository secrets (<code>REPO_PAT</code> for releases, registry credentials)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-shield text-blue-400 mt-1"></i><div>Enable SLSA attestation permissions and configure the attestation step</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Experienced engineers can do this in about an hour. Engineers new to the Octopilot toolchain take longer. And in an organisation with 50 repositories, someone is doing this 50 times — or skipping it 45 times.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">MCP: Tools Your Agent Can Use</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <a href="https://modelcontextprotocol.io" class="text-blue-400 hover:text-blue-300">Model Context Protocol</a> (MCP) is an open standard, originally from Anthropic, that allows AI agents to call external tools in a structured way. Rather than describing a tool in a system prompt and hoping the model generates the right shell commands, MCP gives the agent a formal interface: typed inputs, typed outputs, and a declared schema the model can reason about precisely.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The Octopilot MCP server exposes eight tools and three resources. The tools your AI agent can use:
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-wand-magic-sparkles text-violet-400 mt-1"></i>
                            <div>
                                <strong><code>onboard_repository(workspace, registry)</code></strong> — the single-call onboarding tool. Detects languages and versions, generates <code>skaffold.yaml</code> (if missing) and a complete <code>.github/workflows/ci.yml</code>, returns both files as strings plus a checklist of remaining manual steps (secrets to create, branch protections to set up).
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-magnifying-glass-chart text-cyan-400 mt-1"></i>
                            <div>
                                <strong><code>detect_project_contexts(workspace)</code></strong> — parses <code>skaffold.yaml</code> and returns the full <code>pipeline-context</code> JSON object: detected languages, versions, build matrix. Useful when the agent needs to understand an existing repo before modifying its pipeline.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-file-code text-green-400 mt-1"></i>
                            <div>
                                <strong><code>generate_skaffold_yaml(artifacts, builder)</code></strong> — generates a <code>skaffold.yaml</code> from a list of artifact definitions. The agent calls this when the repository already has some CI config and needs only the build manifest.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-file-code text-green-400 mt-1"></i>
                            <div>
                                <strong><code>generate_ci_workflow(pipeline_context, registry)</code></strong> — generates the complete GitHub Actions workflow from a pipeline-context. Includes the detect → lint+test → build → release shape with all platform and attestation configuration.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-hammer text-amber-400 mt-1"></i>
                            <div>
                                <strong><code>run_op_build(workspace, registry, push)</code></strong> — runs <code>op build</code> in the workspace using the official <code>ghcr.io/octopilot/op</code> container. Useful for building images locally during development, triggered by the agent from your IDE.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-list text-slate-400 mt-1"></i>
                            <div>
                                <strong><code>list_actions()</code> / <code>get_action_details(action_id)</code></strong> — surfaces the complete Octopilot actions registry to the agent. When asked "how do I set up the release workflow?" the agent can look up the <code>bump-version</code> and <code>release</code> action specs directly, including inputs, outputs, examples, and known gotchas.
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">What the MCP intentionally does not do</h4>
                    <p class="text-gray-300">
                        <code>op promote-image</code> — promoting container images between environments — is deliberately not available via MCP. Image promotion touches production infrastructure and must only run through a GitHub Actions workflow with a full audit trail and environment protection rules. Giving an AI agent the ability to push untested images to production would be operationally irresponsible regardless of how capable the model is.
                    </p>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Onboarding a Repository in One Conversation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Here is what onboarding a new Rust service looks like when your agent has the Octopilot MCP configured. You open your IDE, point it at the repository, and ask:
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <div class="font-mono text-sm space-y-4">
                        <div class="flex gap-3">
                            <span class="text-blue-400 font-bold shrink-0">You:</span>
                            <span class="text-gray-300">Set up the Octopilot CI/CD pipeline for this repo. The registry is ghcr.io/my-org.</span>
                        </div>
                        <div class="flex gap-3">
                            <span class="text-purple-400 font-bold shrink-0">Agent:</span>
                            <span class="text-gray-300">Calling <code>onboard_repository("/Users/me/my-rust-service", "ghcr.io/my-org")</code>…</span>
                        </div>
                        <div class="bg-black/40 rounded-lg p-4 text-xs text-gray-400 font-mono">
                            {<br/>
                            &nbsp;&nbsp;"pipeline_context": {"{"} "languages": ["rust"], "rust": {"{"} "version": "1.84" {"}"} {"}"},<br/>
                            &nbsp;&nbsp;"skaffold_yaml": "apiVersion: skaffold/v4beta1\\nbuild:\\n  artifacts:\\n  - image: my-rust-service\\n  ...",<br/>
                            &nbsp;&nbsp;"ci_workflow": "name: CI\\non:\\n  push:\\n  ...",<br/>
                            &nbsp;&nbsp;"files_to_create": ["skaffold.yaml", ".github/workflows/ci.yml"],<br/>
                            &nbsp;&nbsp;"next_steps": [<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;"Add REPO_PAT secret to repository settings",<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;"Enable 'Read and write permissions' for GITHUB_TOKEN in Actions settings",<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;"Add octopilot/actions/release@main workflow for automated releases"<br/>
                            &nbsp;&nbsp;]<br/>
                            }
                        </div>
                        <div class="flex gap-3">
                            <span class="text-purple-400 font-bold shrink-0">Agent:</span>
                            <span class="text-gray-300">I've created <code>skaffold.yaml</code> and <code>.github/workflows/ci.yml</code>. The pipeline detects Rust 1.84 and will run Clippy linting, cargo tests, and build a multi-arch container image to <code>ghcr.io/my-org/my-rust-service</code>. Three manual steps remain — shall I walk through them?</span>
                        </div>
                    </div>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The agent wrote both files, committed them, and gave you an accurate checklist of what's left. Total time: under 30 seconds. The generated files are not templates with placeholders — they are real, working configuration tailored to the detected language and the specified registry.
                </p>
                <h3 class="text-2xl font-bold text-white mb-4 mt-8">Installing the MCP Server</h3>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The Octopilot MCP server is published to PyPI and runs via <code>uv</code>. Docker (or Colima on macOS) must be running — the server uses the official <code>op</code> container for build operations, which means it always uses the latest version of the tool without any manual update step.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Install in one command — this installs the MCP and auto-registers it with Cursor and Claude Desktop:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
curl -fsSL https://mcp.octopilot.app/install | sh
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Or add it manually to your MCP client config:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
{
  "mcpServers": {
    "octopilot": {
      "command": "uvx",
      "args": ["octopilot-mcp"]
    }
  }
}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    After installation, restart your MCP client. The <code>octopilot</code> server will appear in the tools panel. The first time the agent calls <code>run_op_build</code>, Docker will pull the latest <code>ghcr.io/octopilot/op</code> image — subsequent calls use the cached image unless a newer version has been published.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Using the MCP in Cursor</h4>
                    <p class="text-gray-300">
                        In Cursor, open a repository and use Agent mode. The agent will automatically use the Octopilot MCP tools when you ask it to set up CI, onboard the project, or build an image. You can also ask it to look up action details: "What are the inputs for the <code>sops-decrypt</code> action?" — the agent will call <code>get_action_details("sops-decrypt")</code> and return the full spec from the live registry.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '20',
        title: 'One Config File, Always in Sync: The Octopilot Subscription Model',
        excerpt: 'CI/CD pipelines drift. You fix a lint timeout in one repository and forget seven others. You update a toolchain version in the workflow but not the Dockerfile. The Octopilot subscription model gives you a single config file as the contract — commit it, and your pipeline stays current across every repository.',
        category: 'Developer',
        readTime: '7 min read',
        image: '/assets/blog/subscription-model.png',
        author: {
            name: 'Taylor Morgan',
            role: 'Developer Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'octopilot-subscription-model',
        relatedSlugs: ['octopilot-actions-intro', 'zero-config-ci-detect-contexts', 'why-we-open-sourced-pipeline-tools'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    There is a category of engineering problem that is easy to describe and surprisingly hard to solve at scale: keeping CI/CD pipelines consistent and current across a growing number of repositories. Each repository starts with a pipeline that looks right. Six months later, it has drifted — the toolchain version is behind, a timeout that was fixed elsewhere hasn't been applied here, a new security scan has been added to some repos but not others.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Octopilot approaches this differently. Rather than each repository owning its own complete pipeline definition, you describe what <em>kind</em> of pipeline you want in a single lightweight config file — <code>.github/octopilot.yaml</code> — and Octopilot keeps the pipeline implementation current. When the platform evolves, your repository benefits automatically.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        <code>.github/octopilot.yaml</code> is your subscription contract. It declares what you need — language contexts, registry, deployment target, environment profiles. Octopilot keeps your pipeline aligned with it. You own the intent; the platform owns the implementation details.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Pipeline Drift Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Pipeline drift is insidious because it's invisible until something breaks. A team that manages ten repositories each with their own <code>.github/workflows/ci.yml</code> has ten independent moving parts. When best practices evolve — a new linter version, a better caching strategy, a security hardening requirement — applying the change means touching ten files in ten repositories. In practice, it means touching three and meaning to get the others later.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What drift looks like at 30 repositories</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>12 repositories on golangci-lint v1.54, 8 on v1.60, 10 on v1.64 — none failing, all subtly inconsistent</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>A required SLSA attestation step added to new repositories but missing from older ones</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>Timeout configuration fixed in the service that hit it — 29 others still have the original value</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>A platform engineer who understood the pipeline architecture has left the team — nobody knows which version of the workflow is "right"</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The underlying issue is that pipeline configuration is treated as application code: stored in the repository it serves, owned by the team that runs it, evolved independently. This makes sense for application-specific behaviour. It makes much less sense for the scaffolding — the toolchain setup, the lint flags, the cache strategies, the attestation steps — that should be identical everywhere.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Subscription Contract</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Subscribing a repository to Octopilot takes one file. <code>.github/octopilot.yaml</code> declares your intent: what registry to push to, which deployment environment to target, which profiles to activate. It does not contain workflow YAML, toolchain versions, or implementation details. Those are the platform's responsibility.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# .github/octopilot.yaml
registry: ghcr.io/my-org
profiles:
  - production
  - staging
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Commit this file and push. Octopilot reads it and aligns your repository's pipeline with the current platform standard — creating or updating the workflows that implement what you've declared. Critically, it does this by reading your existing files first. If you have customisations, they are preserved. Only the parts that need to change are changed.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The separation of concerns</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-file-pen text-blue-400 mt-1"></i>
                            <div><strong>You own:</strong> <code>.github/octopilot.yaml</code> — your intent, your registry, your deployment targets, your environment profiles. This file changes when <em>your</em> requirements change.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-gears text-purple-400 mt-1"></i>
                            <div><strong>Octopilot owns:</strong> The pipeline implementation — toolchain versions, lint configuration, cache strategies, attestation steps, platform upgrades. This evolves when the <em>platform</em> evolves.</div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">What Changes When the Platform Evolves</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    When Octopilot's platform team ships an improvement — say, switching <code>golangci-lint</code> to compile-from-source mode to fix the Go version mismatch issue, or adding disk cleanup before Docker builds — subscribed repositories receive the improvement on their next pipeline update. They don't need to track the change, review a PR, or understand why the modification was made. They declared their intent; the platform delivered it.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This is not magic. When Octopilot updates your pipeline, it produces a reviewable change. You can see exactly what changed, why it changed (the commit message explains it), and what the new pipeline looks like. You retain full visibility and the ability to customise. What you give up is the obligation to initiate and track every platform-level improvement yourself.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Subscribing a repository with the MCP</h3>
                    <p class="text-gray-300 mb-4">
                        The fastest path to a subscribed, properly configured repository is through the <a href="/blog/octopilot-mcp-ai-agent-cicd" class="text-blue-400 hover:text-blue-300">Octopilot MCP</a>. Ask your AI agent to onboard the repository and it will detect your languages, generate the <code>skaffold.yaml</code>, create the initial <code>.github/octopilot.yaml</code>, and produce the CI workflow — all in one conversation. The subscription file is then the stable, long-lived artefact that you maintain going forward.
                    </p>
                </div>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">For platform teams</h4>
                    <p class="text-gray-300">
                        If you are a platform team managing CI/CD standards across multiple product teams, the subscription model gives you a propagation mechanism without requiring access to every repository. Teams opt in by committing the config file. When you improve the platform, subscribed repositories receive the improvement through a standard PR process — visible, reviewable, and non-disruptive.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '21',
        title: 'Golden Paths Were Right. The Tooling Was Wrong.',
        excerpt: '"Team Topologies" and "Accelerate" told us exactly what great engineering organisations look like. The hard part was always the implementation: how do you give every team a golden path without a platform team becoming a bottleneck? Composable, self-detecting CI actions are the answer we landed on.',
        category: 'Team',
        readTime: '12 min read',
        image: '/assets/blog/golden-paths-platform-engineering.png',
        author: {
            name: 'Marcus Chen',
            role: 'Platform Architect',
            avatar: '/assets/blog/avatar-marcus.jpg'
        },
        slug: 'golden-paths-composable-actions',
        relatedSlugs: ['composable-cicd-composite-actions', 'octopilot-actions-intro', 'why-we-open-sourced-pipeline-tools'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The research is settled. <em>Accelerate</em> — the book by Nicole Forsgren, Jez Humble, and Gene Kim, based on six years of data from the DORA (DevOps Research and Assessment) programme — identified deployment frequency, lead time for changes, mean time to restore, and change failure rate as the four key metrics that distinguish high-performing engineering organisations from the rest. Teams that score well on these metrics ship better software faster. The correlation is not marginal. Elite performers deploy on demand; low performers deploy monthly or less.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Three years later, Matthew Skelton and Manuel Pais published <em>Team Topologies</em>, which gave us the organisational vocabulary to act on the DORA findings: stream-aligned teams, platform teams, enabling teams, and — critically — the concept of the <strong>golden path</strong>. A golden path is the opinionated, supported route to production that a platform team provides to stream-aligned teams. It reduces cognitive load, eliminates duplicated infrastructure decisions, and lets product teams focus on their actual product.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The theory has been right for years. The problem was always implementation: most golden path tools became the bottleneck they were designed to eliminate. Composable, auto-detecting CI actions are the first implementation we've found that actually delivers on the promise — without a platform team becoming a tax on every engineering team's velocity.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Why Golden Path Tools Became Bottlenecks</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The Phoenix Project framed IT operations as a flow problem. Constraints in the value stream limit throughput; the right response is to identify and elevate the constraint. For many organisations that embraced this framing, the CI/CD infrastructure team became the constraint. Every new technology, every language addition, every pipeline change required a ticket, a review, a platform team sprint. The golden path became the golden queue.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The DevOps Handbook identifies the "Three Ways" as the foundation of DevOps practice: flow (fast left-to-right movement from development to production), feedback (fast and amplified right-to-left feedback), and continual learning (a culture of experimentation and risk-taking from the right). Most golden path implementations optimise for flow — they make the happy path fast. They frequently undermine feedback and learning by creating an opaque platform that teams consume but cannot influence.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The symptoms of a golden path that's become a constraint</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-hourglass-half text-red-400 mt-1"></i>
                            <div>
                                <strong>Ticket-based pipeline changes:</strong> Teams open a request to add a language, change a timeout, or add a scan. The platform team processes it in the next sprint. Weeks pass.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-lock text-red-400 mt-1"></i>
                            <div>
                                <strong>Immutable workflows:</strong> The pipeline is provided as a black box. Teams cannot customise it without forking, and forking means losing future updates. The platform team's review process exists because they can't safely accept changes.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-puzzle-piece text-red-400 mt-1"></i>
                            <div>
                                <strong>Monolithic design:</strong> The golden path is designed for the common case. Teams with unusual requirements — a monorepo with mixed languages, a service that needs a specific build tool — find the path doesn't fit and route around it.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-user-slash text-red-400 mt-1"></i>
                            <div>
                                <strong>Knowledge concentration:</strong> The platform is understood only by the platform team. Stream-aligned teams treat it as infrastructure — something that either works or gets ticketed. Continuous learning stops at the platform boundary.
                            </div>
                        </li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    <em>Team Topologies</em> anticipates this failure mode. Skelton and Pais distinguish between platform teams that reduce cognitive load through good APIs and those that increase it through bureaucracy. The difference is not intent — platform teams almost always intend to help — but architecture. A platform built on monolithic, opaque primitives will tend toward the bottleneck; one built on composable, transparent primitives tends toward the enabler.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Composability as the Design Principle</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The insight that changed our approach was this: <strong>the golden path should be the easiest path, not the only path</strong>. If a team can understand every component of their pipeline, modify any component that doesn't fit, and still benefit from platform-managed improvements to the components they haven't changed — that is a golden path that does not create a bottleneck.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This is exactly the design goal behind the Octopilot actions library. Each action — <code>detect-contexts</code>, <code>lint</code>, <code>test</code>, <code>janitor</code>, <code>octopilot</code>, <code>bump-version</code>, <code>release</code> — is a self-contained, documented unit with explicit inputs and outputs. Teams can use the full pipeline or individual actions. They can replace any action with their own implementation of the same interface. They can inspect the source, understand exactly what each action does, and make informed decisions about customisation.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What <em>Accelerate</em>'s findings look like in practice</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-gauge-high text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Deployment frequency:</strong> When a new repository can be fully onboarded to a production-grade pipeline in under an hour (via the MCP or manually), the barrier to creating and deploying new services drops. Frequency increases because setup cost decreases.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-clock text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Lead time for changes:</strong> When lint, test, and build each run in their own job and complete in parallel, the total pipeline time shrinks. The <code>janitor</code> action recovering 15 GB of disk before the Docker build means fewer retries and more predictable build times.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-rotate text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Mean time to restore:</strong> When every repository has the same pipeline shape, an incident in one service informs the response in every other. Operators don't need to re-learn the deployment mechanism per service.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-shield-halved text-emerald-400 mt-1"></i>
                            <div>
                                <strong>Change failure rate:</strong> SLSA attestation, consistent lint enforcement, and multi-arch builds by default mean that the things that tend to cause production failures — unverified artefacts, platform-specific bugs, unscanned code — are addressed at the pipeline level for every team, not just the ones that thought to add them.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Platform Team as Library Maintainer</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The mental model shift that made this work was treating the platform team not as the operator of a service that other teams consume, but as the maintainer of a library that other teams use. Library maintainers publish versioned releases. Users pin to a version, see changelogs, and upgrade on their own schedule. Breaking changes are communicated, not imposed.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This is precisely how <code>octopilot/actions@main</code> works. The actions are versioned. Teams that pin to <code>@main</code> get continuous improvements. Teams that pin to a specific tag get stability. The platform team can improve the <code>lint</code> action — fixing the golangci-lint Go version mismatch, extending the timeout, adding a new linter — and every team on <code>@main</code> benefits on their next push without a single ticket or PR review.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Gene Kim's framing in <em>The Phoenix Project</em> is instructive here: the goal is not for the platform team to do the work for stream-aligned teams, but to enable stream-aligned teams to do the work themselves safely and quickly. A composable action library achieves this. A monolithic "CI service" does not.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Further reading</h4>
                    <p class="text-gray-300">
                        If you want to go deeper on the theory: <em>Accelerate</em> (Forsgren, Humble, Kim) for the metrics; <em>Team Topologies</em> (Skelton, Pais) for the organisational model; <em>The DevOps Handbook</em> (Kim, Willis, Humble, Debois) for the Three Ways; and the annual <a href="https://dora.dev/research/" class="text-blue-400 hover:text-blue-300">DORA State of DevOps Report</a> for current benchmarks. The practices described in this post are a direct implementation of the principles those works describe.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '29',
        title: 'From Container Build to Running Service: Octopilot and FluxCD End-to-End',
        excerpt: 'Octopilot handles the build side — detect, lint, test, multi-arch container image, SLSA attestation. FluxCD handles the deployment side — GitOps reconciliation, Helm releases, image automation. This post shows how to connect the two into a complete path from source commit to running service.',
        category: 'Team',
        readTime: '11 min read',
        image: '/assets/blog/octopilot-fluxcd-gitops.png',
        author: {
            name: 'Chris Anderson',
            role: 'Platform Engineer',
            avatar: '/assets/blog/avatar-chris.jpg'
        },
        slug: 'octopilot-fluxcd-end-to-end',
        relatedSlugs: ['multi-arch-containers-op-action', 'octopilot-actions-intro', 'network-security-cloud-runners'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A CI/CD pipeline has two distinct halves that are often described together but implemented separately. The <strong>CI half</strong> — continuous integration — takes source code and produces a verified artefact: a tested, linted, attested container image in a registry. The <strong>CD half</strong> — continuous delivery or deployment — takes that artefact and delivers it to an environment.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Octopilot handles the CI half. <a href="https://fluxcd.io" class="text-blue-400 hover:text-blue-300">FluxCD</a> handles the CD half. They are independently valuable tools that compose naturally into a complete path from a developer's source commit to a running service in a Kubernetes cluster — without coupling the build pipeline to the deployment mechanism.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The handoff point between Octopilot and FluxCD is the container registry. Octopilot pushes a versioned, attested image; FluxCD's Image Automation detects the new digest and updates your deployment manifests. The two systems remain decoupled — you can replace either without touching the other.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Build-Deploy Gap</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The most common approach to closing the build-deploy gap is to add deployment steps to the CI pipeline: after the image is pushed, the pipeline runs <code>kubectl set image</code> or <code>helm upgrade</code>. This works but creates coupling. The pipeline needs cluster credentials. It needs to know which cluster to target. Promotion between environments requires branching logic in the pipeline. Rollbacks require re-triggering the pipeline. The "CI pipeline" becomes a CI/CD pipeline that knows too much about infrastructure.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What coupling the build to the deploy costs you</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div>The pipeline needs write access to your production cluster from GitHub Actions — a significant blast radius if the pipeline is compromised</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div>Rollback requires knowing which previous image tag to roll back to and re-triggering a workflow rather than reverting a Git commit</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div>Environment promotion logic (dev → staging → production) ends up as branching logic in YAML rather than as a Git branching strategy</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div>Drift detection is manual — there is no continuous reconciliation, so a manual <code>kubectl</code> change silently diverges from the desired state</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    GitOps — the practice of using Git as the single source of truth for both application code and infrastructure state — solves these problems by separating the build pipeline from the deployment mechanism. The pipeline's job ends when it pushes a verified image. The GitOps operator's job begins when it detects the new image and reconciles the cluster state to match.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">How FluxCD's Image Automation Works</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    FluxCD's <a href="https://fluxcd.io/flux/guides/image-update/" class="text-blue-400 hover:text-blue-300">Image Automation</a> component watches a container registry for new image tags and automatically updates the Git repository that stores your deployment manifests. The update is itself a Git commit — auditable, revertable, and triggering the same reconciliation loop that handles all other manifest changes.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Three FluxCD resources define this behaviour:
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-magnifying-glass text-blue-400 mt-1"></i>
                            <div>
                                <strong><code>ImageRepository</code></strong> — tells FluxCD which registry and image to watch. Flux periodically scans the registry and maintains a list of available tags.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-filter text-cyan-400 mt-1"></i>
                            <div>
                                <strong><code>ImagePolicy</code></strong> — defines which tag to select from the available list. A semver policy selects the latest <code>v*.*.*</code> tag; a <code>semver:&gt;=1.0.0</code> policy pins to a minimum version; a timestamp or alphabetical policy can select the most recently pushed tag.
                            </div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-pen-to-square text-violet-400 mt-1"></i>
                            <div>
                                <strong><code>ImageUpdateAutomation</code></strong> — watches for <code>ImagePolicy</code> changes and commits the new tag to the Git repository, targeting files annotated with a marker comment that tells Flux where to write the image reference.
                            </div>
                        </li>
                    </ul>
                </div>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Example ImageRepository — watches ghcr.io/my-org/my-service
apiVersion: image.toolkit.fluxcd.io/v1beta2
kind: ImageRepository
metadata:
  name: my-service
  namespace: flux-system
spec:
  image: ghcr.io/my-org/my-service
  interval: 1m

---
# Example ImagePolicy — selects the latest semver tag
apiVersion: image.toolkit.fluxcd.io/v1beta2
kind: ImagePolicy
metadata:
  name: my-service
  namespace: flux-system
spec:
  imageRepositoryRef:
    name: my-service
  policy:
    semver:
      range: ">=1.0.0"
</pre>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Connecting the Octopilot Build to FluxCD</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The handoff is straightforward. Octopilot's <code>op build</code> action pushes the image to the registry with a versioned tag (e.g. <code>ghcr.io/my-org/my-service:v1.4.2</code>) and outputs the full reference including the digest in <code>build_result.json</code>. FluxCD's <code>ImageRepository</code> detects the new tag within its polling interval (typically one minute). The <code>ImagePolicy</code> evaluates whether it matches the selection criteria. If it does, <code>ImageUpdateAutomation</code> commits the new tag to your deployment manifests.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    To enable the auto-update, annotate the image reference in your Helm values or Kustomize manifest with a FluxCD marker comment:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# In your Helm values file (values.yaml):
image:
  repository: ghcr.io/my-org/my-service
  tag: v1.4.2 # {"$imagepolicy": "flux-system:my-service:tag"}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    When FluxCD's image automation runs, it rewrites the <code>tag</code> value in-place, commits the change to Git, and the standard FluxCD reconciliation loop applies the updated Helm release to the cluster. The entire flow — from <code>git push</code> to running pod — is observable as a sequence of Git commits and Kubernetes events.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The complete flow</h3>
                    <ol class="list-none space-y-3 text-gray-300">
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">1.</span><div>Developer pushes to <code>main</code></div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">2.</span><div>Octopilot CI: detect → lint + test (parallel) → build multi-arch image → push <code>ghcr.io/my-org/my-service:v1.4.2</code> → SLSA attest</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">3.</span><div>FluxCD <code>ImageRepository</code> detects <code>v1.4.2</code> within polling interval</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">4.</span><div>FluxCD <code>ImagePolicy</code> selects <code>v1.4.2</code> as the latest semver match</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">5.</span><div>FluxCD <code>ImageUpdateAutomation</code> commits <code>tag: v1.4.2</code> to the deployment manifest Git repo</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">6.</span><div>FluxCD <code>HelmRelease</code> reconciliation applies the updated values to the cluster</div></li>
                        <li class="flex gap-3"><span class="text-emerald-400 font-bold shrink-0">✓</span><div>New pod running; rollback = <code>git revert</code> the automation commit</div></li>
                    </ol>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The two systems remain fully decoupled. Octopilot does not know what cluster the image will run in. FluxCD does not know how the image was built. Replacing either — switching from Octopilot to a different build tool, or from FluxCD to ArgoCD — requires no changes to the other side of the boundary.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">FluxCD documentation</h4>
                    <p class="text-gray-300">
                        The complete FluxCD image automation documentation is at <a href="https://fluxcd.io/flux/guides/image-update/" class="text-blue-400 hover:text-blue-300">fluxcd.io/flux/guides/image-update</a>. The <a href="https://fluxcd.io/flux/components/image/" class="text-blue-400 hover:text-blue-300">Image Reflector and Automation controllers</a> reference covers all configuration options for <code>ImageRepository</code>, <code>ImagePolicy</code>, and <code>ImageUpdateAutomation</code>.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '22',
        title: 'The Missing Bridge: Why SOPS Alone Doesn\'t Solve Serverless Secrets',
        excerpt: 'SOPS-encrypted secrets in Git are an elegant solution for Kubernetes workloads. But when your platform team wants to migrate services to Cloud Run, Lambda, or Azure Functions to cut costs, they hit a wall: serverless can\'t reach in-cluster secrets. Two parallel secret worlds, one engineering team, zero good options.',
        category: 'Enterprise',
        readTime: '9 min read',
        image: '/assets/blog/sops-serverless-gap.png',
        author: {
            name: 'Rachel Thompson',
            role: 'Security Architect',
            avatar: '/assets/blog/avatar-rachel.jpg'
        },
        slug: 'sops-serverless-secrets-gap',
        relatedSlugs: ['repo-local-encryption', 'cicd-secret-injection', 'least-privilege-access'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    SOPS-encrypted secrets committed to Git are a well-understood, well-regarded pattern. The secret file lives in the repository alongside the code that uses it. Access is controlled cryptographically — only holders of the correct private key can decrypt. The history of every change is in Git. Rotation is a commit. Audit is <code>git log</code>. For teams running Kubernetes workloads managed by FluxCD or ArgoCD, the pattern works cleanly from end to end.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The problem emerges the moment a platform team tries to migrate a workload from Kubernetes to a serverless compute platform — Google Cloud Run, AWS Lambda, Azure Functions. Serverless is compelling for FinOps: you pay per invocation rather than per provisioned pod, you eliminate the overhead of managing container replicas, and you can right-size compute precisely. But serverless functions have no awareness of in-cluster Kubernetes resources. They cannot reach a SOPS-decrypted Kubernetes Secret. The elegant GitOps secret pattern stops working at the K8s cluster boundary.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        SOPS is a Git-native encryption tool, not a secret delivery mechanism. It solves how to store secrets safely. It does not solve how to deliver secrets to workloads that run outside the Kubernetes control plane. Serverless migration exposes this gap — and the cost of leaving it unaddressed is either a fragmented secret management strategy or a blocked migration.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Two-World Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    When an organisation runs both Kubernetes workloads and serverless workloads, secret management bifurcates. Kubernetes workloads use SOPS + GitOps — the secrets are in Git, decrypted in-cluster by a controller, and injected as Kubernetes Secrets. Serverless workloads use cloud-native secret stores — GCP Secret Manager, AWS Secrets Manager, or Azure Key Vault — because these are the only mechanisms those platforms support for runtime secret access.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What running two parallel secret systems costs</h3>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-copy text-red-400 mt-1"></i>
                            <div><strong>Duplicated secrets:</strong> Every secret needed by a serverless function must be stored twice — once in Git (SOPS-encrypted) and once in the cloud-native store. They can drift out of sync. Rotation must happen in two places.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-split text-red-400 mt-1"></i>
                            <div><strong>Two pipelines for secret changes:</strong> Rotating a database password requires updating the SOPS file, the cloud-native store entry, and verifying both consumers received the update. The audit trail is split across two systems.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-ban text-red-400 mt-1"></i>
                            <div><strong>Blocked migrations:</strong> A team that wants to move a K8s service to Cloud Run for cost savings cannot do so cleanly until the secret management problem is solved. The FinOps case that drives the migration stalls on infrastructure friction.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-user-gear text-red-400 mt-1"></i>
                            <div><strong>Operational complexity:</strong> Platform engineers must maintain expertise in two secret management systems, two access control models, two rotation procedures. Onboarding a new team member to "how secrets work here" doubles in complexity.</div>
                        </li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The fundamental issue is architectural. SOPS is an encryption format, not a secret broker. It has no API, no push mechanism, no polling loop. It encrypts a file at rest. Something else — a Kubernetes controller, a CI step, a developer's local <code>sops -d</code> invocation — must decrypt and deliver the value to the workload that needs it. For Kubernetes, that "something else" is well-established. For serverless, it has historically been the cloud-native secret store, managed independently.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">What a Bridge Looks Like</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The solution is a Kubernetes controller that acts as the bridge: it runs inside the cluster (where SOPS decryption is already available), reads the SOPS-encrypted secrets from Git, decrypts them, and pushes the decrypted values to the cloud-native secret store of your choice. The single source of truth remains Git. The delivery mechanism to serverless workloads becomes the cloud-native store. The two systems are no longer parallel — they are the same system with one synchronisation step.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The unified flow</h3>
                    <ol class="list-none space-y-3 text-gray-300">
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">1.</span><div>Secret stored once: SOPS-encrypted in Git (the existing workflow, unchanged)</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">2.</span><div>GitOps reconciliation: FluxCD applies the encrypted secret manifest to the cluster</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">3.</span><div>Controller decrypts: Secret Manager Controller reads the manifest, decrypts the value in-cluster</div></li>
                        <li class="flex gap-3"><span class="text-blue-400 font-bold shrink-0">4.</span><div>Controller syncs: Pushes the decrypted value to GCP Secret Manager / AWS Secrets Manager / Azure Key Vault</div></li>
                        <li class="flex gap-3"><span class="text-emerald-400 font-bold shrink-0">✓</span><div>K8s workloads and serverless functions both read from the same secret — through their respective native mechanisms</div></li>
                    </ol>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The FinOps Unlock</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The downstream benefit of solving this problem is the ability to migrate workloads to serverless without a secret management migration as a prerequisite. A service running on a K8s deployment costs money for every minute the pod exists, regardless of load. The same service on Cloud Run costs money only when it handles requests.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The workloads best suited for serverless — internal tools, event-driven processors, low-traffic APIs — are precisely the ones most likely to be blocked by the secret management gap. Removing that blocker unlocks a class of migrations that deliver immediate, measurable cost reduction without requiring any change to the application code or the secret storage model.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Next: the implementation</h4>
                    <p class="text-gray-300">
                        The next post in this series introduces the <a href="/blog/secret-manager-controller-intro" class="text-blue-400 hover:text-blue-300">Secret Manager Controller</a> — the Kubernetes controller that implements this bridge — and walks through the <code>SecretManagerConfig</code> CRD that defines the sync behaviour.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '23',
        title: 'Secret Manager Controller: SOPS Secrets to GCP, AWS, and Azure in One CRD',
        excerpt: 'Secret Manager Controller is a Kubernetes controller that reads SOPS-encrypted secrets from your GitOps repository and syncs them to GCP Secret Manager, AWS Secrets Manager, or Azure Key Vault. One CRD, one source of truth, three cloud targets.',
        category: 'Enterprise',
        readTime: '11 min read',
        image: '/assets/blog/secret-manager-controller.png',
        author: {
            name: 'Marcus Chen',
            role: 'Platform Architect',
            avatar: '/assets/blog/avatar-marcus.jpg'
        },
        slug: 'secret-manager-controller-intro',
        relatedSlugs: ['sops-serverless-secrets-gap', 'serverless-migration-gitops', 'repo-local-encryption'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Secret Manager Controller is a Kubernetes operator written in Rust. It watches for <code>SecretManagerConfig</code> custom resources in your cluster, reads the SOPS-encrypted secret values they reference, decrypts them using the cluster's key access (KMS, Age, or GPG), and pushes the decrypted values to the cloud-native secret store of your choice.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        A single <code>SecretManagerConfig</code> custom resource defines the mapping: which SOPS-encrypted Kubernetes Secret to read, which cloud-native store to write to, and which keys to sync. The controller runs continuously, keeping the cloud store in sync whenever the Git-sourced secret changes.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Quick Start</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Install the controller and its CRD into your cluster:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Apply the CRD
kubectl apply -f https://raw.githubusercontent.com/octopilot/secret-manager-controller/main/config/crd/secretmanagerconfig.yaml

# Deploy the controller
kubectl apply -k https://github.com/octopilot/secret-manager-controller/config/
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The controller runs in the <code>secret-manager-system</code> namespace. It needs cloud provider credentials with write access to your secret store — see the <a href="https://octopilot.github.io/secret-manager-controller/#/user/getting-started/configuration" class="text-blue-400 hover:text-blue-300">configuration guide</a> for provider-specific Workload Identity setup.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The SecretManagerConfig CRD</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A <code>SecretManagerConfig</code> resource tells the controller what to sync and where to send it. The structure is deliberately minimal:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
apiVersion: secrets.octopilot.io/v1alpha1
kind: SecretManagerConfig
metadata:
  name: database-credentials
  namespace: production
spec:
  # Source: a SOPS-encrypted Kubernetes Secret in this namespace
  sourceSecret:
    name: database-creds-encrypted

  # Target: where to push the decrypted values
  target:
    provider: gcp                         # gcp | aws | azure
    gcp:
      project: my-gcp-project
      secretId: database-password         # created if it doesn't exist

  # Key mapping: which keys from the K8s secret to sync
  keys:
    - sourceKey: password
      targetKey: database-password
    - sourceKey: username
      targetKey: database-username
</pre>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Provider support</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-brands fa-google text-blue-400 mt-1"></i><div><strong>GCP Secret Manager</strong> — uses Workload Identity Federation. The controller's service account needs <code>roles/secretmanager.admin</code> on the target project.</div></li>
                        <li class="flex gap-3"><i class="fa-brands fa-aws text-amber-400 mt-1"></i><div><strong>AWS Secrets Manager</strong> — uses IRSA (IAM Roles for Service Accounts). The controller's service account assumes a role with <code>secretsmanager:CreateSecret</code> and <code>secretsmanager:PutSecretValue</code>.</div></li>
                        <li class="flex gap-3"><i class="fa-brands fa-microsoft text-blue-300 mt-1"></i><div><strong>Azure Key Vault</strong> — uses Azure Workload Identity. The controller's managed identity needs <code>Key Vault Secrets Officer</code> on the target vault.</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The controller reconciles on a configurable interval and on changes to the source <code>Secret</code> resource. When FluxCD applies an updated SOPS-decrypted secret (because the Git source changed), the controller detects the change and pushes the new value to the cloud store within seconds. The cloud secret version history provides a full audit trail of every value change.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">GitOps-Native Operation</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The controller integrates with any GitOps tool — FluxCD, ArgoCD, or manual <code>kubectl apply</code>. The <code>SecretManagerConfig</code> resource is itself a Kubernetes manifest that lives in your GitOps repository alongside your SOPS-encrypted secrets. The controller's desired state is entirely declared in Git.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Typical GitOps repository layout
clusters/production/
  secrets/
    database-creds.enc.yaml      # SOPS-encrypted Secret
    database-sync-config.yaml    # SecretManagerConfig CRD
  apps/
    my-service-helmrelease.yaml  # References the K8s Secret
  serverless/
    cloud-run-service.yaml       # References GCP Secret Manager
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    When a developer rotates a database password, the workflow is the same as any other secret change: update the SOPS-encrypted file, commit to Git, push. FluxCD applies the updated Secret to the cluster. The controller syncs the new value to GCP Secret Manager. Both the Kubernetes pod and the Cloud Run service receive the updated password through their respective secret-reading mechanisms. One commit, two delivery paths, zero manual steps.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Full documentation</h4>
                    <p class="text-gray-300">
                        Installation, provider setup, CRD reference, and the MSMCTL CLI are documented at <a href="https://octopilot.github.io/secret-manager-controller" class="text-blue-400 hover:text-blue-300">octopilot.github.io/secret-manager-controller</a>.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '24',
        title: 'Serverless Migration Without Abandoning GitOps',
        excerpt: 'The FinOps case for moving services to Cloud Run, Lambda, or Azure Functions is compelling. The barrier is usually secrets: SOPS-based GitOps workflows don\'t extend to serverless. This post shows the migration pattern that lets you move workloads incrementally without changing how secrets are managed.',
        category: 'Enterprise',
        readTime: '10 min read',
        image: '/assets/blog/serverless-migration-gitops.png',
        author: {
            name: 'David Kumar',
            role: 'Security Operations',
            avatar: '/assets/blog/avatar-sam.jpg'
        },
        slug: 'serverless-migration-gitops',
        relatedSlugs: ['sops-serverless-secrets-gap', 'secret-manager-controller-intro', 'compliance-audit-requirements'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The business case for serverless is straightforward: right-sized compute means you pay for what you use, not what you provision. An internal API that handles 200 requests per day costs pennies on Cloud Run; the same API on a perpetually-running Kubernetes pod with reserved resources costs orders of magnitude more. For platform teams tasked with reducing cloud spend, moving eligible workloads to serverless is one of the highest-return actions available.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The barrier is almost never the application code. Containerised services built with Octopilot are already portable — the same image that runs on Kubernetes runs on Cloud Run or in a Lambda container runtime. The barrier is infrastructure: particularly secrets. This post describes the migration pattern that removes that barrier.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The migration pattern is additive. You install Secret Manager Controller alongside your existing setup, verify that secrets are syncing correctly, then migrate workloads. The K8s deployment and the serverless deployment can coexist during the transition — both reading from the same secret source.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Identifying Serverless Candidates</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Not every workload belongs on serverless. The best candidates share common characteristics: they handle discrete, event-driven requests; they have variable or low traffic; they are stateless; and they start up quickly. Internal tooling, webhooks, background processors, and API services with predictable cold-start tolerance are typically good fits. Latency-sensitive services, stateful services, and services with complex startup logic are typically better suited to stay on Kubernetes.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Good serverless candidates</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>Internal APIs with low or spiky traffic patterns (reports, admin tools, integrations)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>Event-driven processors (webhook handlers, queue consumers, scheduled jobs)</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>Services that currently idle most of the day but must be available</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div>Latency-critical services where a 200ms cold start is unacceptable</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-xmark text-red-400 mt-1"></i><div>Services that maintain in-memory state between requests</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Migration Sequence</h2>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <ol class="list-none space-y-5 text-gray-300">
                        <li class="flex gap-4">
                            <span class="text-blue-400 font-bold text-lg shrink-0">1.</span>
                            <div>
                                <strong class="text-white">Install Secret Manager Controller.</strong> Deploy the controller to your existing cluster. Configure cloud provider credentials using Workload Identity (no long-lived keys). Verify the controller is running and healthy.
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <span class="text-blue-400 font-bold text-lg shrink-0">2.</span>
                            <div>
                                <strong class="text-white">Create SecretManagerConfig resources for target services.</strong> For each service you plan to migrate, create a <code>SecretManagerConfig</code> that maps its existing SOPS-encrypted K8s secrets to the cloud-native store. Commit these to Git; FluxCD applies them; the controller begins syncing.
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <span class="text-blue-400 font-bold text-lg shrink-0">3.</span>
                            <div>
                                <strong class="text-white">Verify sync before touching workloads.</strong> Confirm the secrets appear correctly in GCP Secret Manager / AWS Secrets Manager / Azure Key Vault. Rotate a non-production secret and verify the update propagates within the expected window. Only proceed once you trust the sync.
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <span class="text-blue-400 font-bold text-lg shrink-0">4.</span>
                            <div>
                                <strong class="text-white">Deploy the service to serverless alongside the K8s deployment.</strong> The Octopilot-built container image runs unchanged. Configure it to read secrets from the cloud-native store rather than from Kubernetes Secrets. Route a percentage of traffic to the serverless instance.
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <span class="text-blue-400 font-bold text-lg shrink-0">5.</span>
                            <div>
                                <strong class="text-white">Shift traffic and decommission the K8s deployment.</strong> Once the serverless instance is validated, move all traffic, remove the K8s Deployment and Service resources. The <code>SecretManagerConfig</code> resource and the SOPS-encrypted Git source remain — they are now the only path to secret delivery, and the workflow is identical to before.
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">What Doesn't Change</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The migration pattern is deliberately designed to leave the secret management workflow unchanged for developers. The person who rotates a database password commits a change to the SOPS-encrypted file in Git. They do not need to know whether the consumer is a Kubernetes pod or a Cloud Run revision. The controller handles delivery. The cloud-native store provides access.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Compliance posture is preserved: Git remains the authoritative record of secret changes, with commit signatures providing attribution and timestamps. Cloud provider version history provides a secondary record of what was pushed and when. The audit trail is richer after the migration than before.
                </p>
                <div class="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Note on mixed environments</h4>
                    <p class="text-gray-300">
                        During the transition period, both the K8s deployment and the serverless deployment run simultaneously, both reading the same secret values via different delivery paths. This is intentional and safe — the secret values are identical because they come from the same Git source. The K8s pod reads from a Kubernetes Secret; the Cloud Run revision reads from GCP Secret Manager; both values were decrypted from the same SOPS-encrypted Git file.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '25',
        title: 'Zero-Dockerfile Builds: How Cloud Native Buildpacks Turn Source Into Container',
        excerpt: 'Most developers treat Dockerfiles as unavoidable. Cloud Native Buildpacks are a standard that turns your source code into a container image without one — detecting your language, installing dependencies, compiling if needed, and producing a reproducible, patchable image. Here\'s how it works and why it matters.',
        category: 'Developer',
        readTime: '9 min read',
        image: '/assets/blog/cloud-native-buildpacks.png',
        author: {
            name: 'Sam Patel',
            role: 'DevOps Engineer',
            avatar: '/assets/blog/avatar-sam.jpg'
        },
        slug: 'cloud-native-buildpacks-intro',
        relatedSlugs: ['multi-arch-containers-op-action', 'octopilot-actions-intro', 'rust-buildpack-scenarios'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Dockerfiles have become the default unit of containerisation knowledge. Every tutorial, every quickstart guide, every job description that mentions containers assumes you know how to write one. But Dockerfiles are also a maintenance obligation: you choose the base image, you update it when security patches land, you manage layer ordering for cache efficiency, you handle multi-stage builds for smaller output images, and you deal with the subtle differences between your Dockerfile and your colleague's when builds behave differently.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Cloud Native Buildpacks (CNB) are a CNCF standard that separates the "how to build" knowledge from the application code. The buildpack detects your language from your project files, installs the right dependencies, compiles where necessary, and produces an OCI image. You don't write a Dockerfile. The buildpack author — who has more context about your language's build toolchain than most application developers — handles the container construction details.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        Cloud Native Buildpacks produce reproducible, rebasing-friendly images from source code. When a base image security patch is released, you rebase your image against the patched base without rebuilding from source. You get the security update in minutes rather than waiting for a CI run.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Detect → Build → Export Lifecycle</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A buildpack run proceeds in three phases. <strong>Detection</strong>: each buildpack in the builder's group runs its detect script against your source directory. The first group whose buildpacks all pass becomes the build order. For a Go project, this means the Go buildpack detects <code>go.mod</code> and claims the build. For a Rust project, the Rust buildpack detects <code>Cargo.toml</code>.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    <strong>Build</strong>: each selected buildpack runs its build script. It installs toolchains into a cached layer, restores dependencies (the module cache, the cargo registry), compiles the application, and writes the output to a launch layer. Each layer is content-addressed — if your dependencies haven't changed since last build, the dependency layer is reused exactly.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    <strong>Export</strong>: the lifecycle assembles the layers into an OCI image and pushes it to the registry. The image includes a Software Bill of Materials (SBOM) generated by the buildpacks, listing every dependency installed during the build.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">What the Octopilot builder provides</h3>
                    <p class="text-gray-300 mb-4">
                        <code>ghcr.io/octopilot/builder-jammy-base</code> is the Octopilot builder image. It bundles the Go and Rust buildpacks, a curated set of Paketo buildpacks for Node.js, Python, Java, Ruby, and .NET, and a Ubuntu 22.04 (Jammy) base stack. The builder is updated regularly — when you rebuild using the same builder tag, you automatically pick up any buildpack improvements.
                    </p>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>Auto-detects language from project files — no configuration required for standard layouts</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>Dependency layer caching dramatically speeds repeated builds</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>SBOM generation included — Octopilot's CI pipeline attests the SBOM alongside the image</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-check text-green-400 mt-1"></i><div>Rebase-compatible — base image patches applied without rebuilding application layers</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Using Buildpacks in skaffold.yaml</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    In a Skaffold configuration, switching from a Dockerfile build to a buildpack build is a single change in the artifact stanza:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
build:
  artifacts:
    - image: my-go-service
      context: .
      buildpacks:                          # replaces docker: { dockerfile: Dockerfile }
        builder: ghcr.io/octopilot/builder-jammy-base:latest
        # No further configuration needed for a standard Go project
        # The buildpack detects go.mod and handles the rest
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Environment variables prefixed with <code>BP_</code> configure buildpack behaviour. For a Go project, <code>BP_GO_TARGETS</code> specifies which packages to build. For a Node.js project, <code>BP_NODE_RUN_SCRIPTS</code> adds build scripts to the lifecycle. For Rust, <code>BP_RUST_PACKAGE</code> selects a specific crate from a workspace.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Rebase Advantage</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The most significant operational advantage of buildpack images over Dockerfile images is rebasing. When a CVE is patched in the Ubuntu base image, a Dockerfile-built image must be rebuilt from scratch — the CI pipeline must run, the build must complete, the new image must be pushed and deployed. This can take 10–30 minutes depending on the build complexity.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A buildpack image can be rebased: the base layers are swapped out for the patched base without touching the application layers. The operation takes seconds and produces an image with an updated base but identical application content. Your security team gets patches applied across the entire image fleet faster than any CI-rebuild approach can achieve.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Further reading</h4>
                    <p class="text-gray-300">
                        The Cloud Native Buildpacks specification is at <a href="https://buildpacks.io" class="text-blue-400 hover:text-blue-300">buildpacks.io</a>. The Paketo buildpacks (which the Octopilot builder builds on) are documented at <a href="https://paketo.io/docs" class="text-blue-400 hover:text-blue-300">paketo.io/docs</a>.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '26',
        title: 'The Octopilot Rust Buildpack: Every Build Scenario Covered',
        excerpt: 'Building Rust with Cloud Native Buildpacks covers more ground than you might expect: single crates, workspace monoliths, suite builds targeting one service, split images per binary, debug vs release profiles, and Dioxus fullstack apps. One buildpack, every scenario.',
        category: 'Developer',
        readTime: '11 min read',
        image: '/assets/blog/rust-buildpack.png',
        author: {
            name: 'Jordan Lee',
            role: 'Senior DevOps Engineer',
            avatar: '/assets/blog/avatar-jordan.jpg'
        },
        slug: 'rust-buildpack-scenarios',
        relatedSlugs: ['cloud-native-buildpacks-intro', 'inline-buildpack-assets', 'multi-service-monorepo'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Rust projects come in a variety of shapes. A simple service is a single crate with one binary. A larger codebase is a Cargo workspace with multiple packages, each producing a binary. A microservices platform might be a workspace where you want to build and deploy individual services as separate images. And a Dioxus fullstack application is a workspace where the frontend and backend are compiled together with different feature flags.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The Octopilot Rust buildpack handles all of these through environment variable configuration, without requiring any Dockerfile or custom build script. Detection is automatic — the buildpack runs if <code>Cargo.toml</code> is present at the app root.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        Four environment variables cover the full surface: <code>BP_RUST_PACKAGE</code> selects a workspace member, <code>BP_RUST_WORKSPACE_DIR</code> points to a non-root workspace, <code>BP_RUST_FEATURES</code> enables Cargo features, and <code>BP_RUST_BUILD_PROFILE</code> switches between release and debug. Everything else is inferred.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Scenario Reference</h2>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Scenario 1: Single crate</h3>
                    <p class="text-gray-300 mb-4">One <code>Cargo.toml</code> at the app root, one binary output. No configuration needed.</p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-0">
# skaffold.yaml — no BP_ vars needed
artifacts:
  - image: my-rust-service
    context: .
    buildpacks:
      builder: ghcr.io/octopilot/builder-jammy-base:latest
</pre>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Scenario 2: Workspace monolith (all binaries, one image)</h3>
                    <p class="text-gray-300 mb-4">Root <code>Cargo.toml</code> with <code>[workspace]</code> and multiple member packages. The buildpack builds all binaries into a single image. Each binary gets its own process type.</p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-0">
artifacts:
  - image: my-platform
    context: .
    buildpacks:
      builder: ghcr.io/octopilot/builder-jammy-base:latest
      # BP_RUST_WORKSPACE_MODE defaults to "all" — builds all workspace binaries
</pre>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Scenario 3: Suite build (one service from a workspace)</h3>
                    <p class="text-gray-300 mb-4">Large workspace, deploy services individually. Set <code>BP_RUST_PACKAGE</code> to build and containerise one package.</p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-0">
artifacts:
  - image: payment-service
    context: .
    buildpacks:
      builder: ghcr.io/octopilot/builder-jammy-base:latest
      env:
        - name: BP_RUST_PACKAGE
          value: payment-service
</pre>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Scenario 4: Dioxus fullstack</h3>
                    <p class="text-gray-300 mb-4">Dioxus fullstack apps require a feature flag to compile the backend. <code>BP_RUST_FEATURES</code> passes the flag to <code>cargo build</code>.</p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-0">
artifacts:
  - image: my-dioxus-app
    context: .
    buildpacks:
      builder: ghcr.io/octopilot/builder-jammy-base:latest
      env:
        - name: BP_RUST_PACKAGE
          value: dioxus-app-backend
        - name: BP_RUST_FEATURES
          value: dioxus-app-backend/server
</pre>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Split Images: One Build, Multiple Deployable Images</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    For workspace monoliths where you want to deploy binaries independently, the buildpack supports a split-image mode via the packaging script. The monolith image is built first (all binaries), then split into per-binary images without rebuilding:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Build monolith, then split
./scripts/package.sh \
  --build-app \
  --path . \
  --builder ghcr.io/octopilot/builder-jammy-base:latest \
  --image my-platform \
  --split-images

# Produces:
#   my-platform:latest           (all binaries)
#   my-platform:payment-service  (payment-service binary only)
#   my-platform:notification-svc (notification-svc binary only)
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Split images are useful for organisations that want a single CI build step but independent deployment units. Each split image is a valid OCI image with a single process type, deployable independently to Kubernetes or serverless.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Debug Builds and Asset Handling</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    For faster local iteration, <code>BP_RUST_BUILD_PROFILE=debug</code> skips optimisations and compiles in seconds rather than minutes. Use this with <code>op run</code> for local development loops; keep <code>release</code> (the default) for CI.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The buildpack does not copy static assets (the <code>public/</code> directory, <code>config/</code>, etc.) — this is intentional. Asset handling is application-specific. The recommended approach is an inline buildpack defined in <code>project.toml</code> that runs after the Rust build and copies the assets you need. See <a href="/blog/inline-buildpack-assets" class="text-blue-400 hover:text-blue-300">Inline Buildpacks: Custom Asset Handling Without a Dockerfile</a> for the pattern.
                </p>
            </section>
        `
    },
    {
        id: '27',
        title: 'Inline Buildpacks: Custom Asset Handling Without a Dockerfile',
        excerpt: 'Cloud Native Buildpacks are intentionally focused — the Rust buildpack builds Rust, the Go buildpack builds Go. They don\'t copy your static assets. The inline buildpack pattern in project.toml lets you add app-specific steps after the language buildpack without writing a custom buildpack or a Dockerfile.',
        category: 'Developer',
        readTime: '7 min read',
        image: '/assets/blog/inline-buildpack.png',
        author: {
            name: 'Sam Patel',
            role: 'DevOps Engineer',
            avatar: '/assets/blog/avatar-sam.jpg'
        },
        slug: 'inline-buildpack-assets',
        relatedSlugs: ['rust-buildpack-scenarios', 'cloud-native-buildpacks-intro', 'multi-service-monorepo'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Language buildpacks are focused by design. The Rust buildpack builds Rust and sets the <code>web</code> process to the compiled binary. It does not copy your <code>public/</code> directory of static assets, your <code>config/</code> directory of templates, or anything else that the compiled binary needs at runtime. This is correct behaviour — the buildpack cannot know your application's layout — but it means you need a way to add those steps.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        The Cloud Native Buildpacks spec supports <strong>inline buildpacks</strong> defined directly in <code>project.toml</code>. An inline buildpack is a small shell script that runs as part of the build lifecycle, after the language buildpack, with access to the same layer system. No custom buildpack repository, no Dockerfile, no wrapper script required.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Asset Copy Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A typical Rust web service with a frontend has a structure like this: the <code>api/</code> directory contains the Rust source, and a <code>public/</code> directory at the project root contains compiled frontend assets that the Rust server serves statically. The Rust buildpack compiles the binary and places it at <code>/workspace/bin/my-service</code>. But <code>public/</code> is not in that path — the binary can't find its static files at runtime.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Without inline buildpacks, your options are a Dockerfile (defeating the purpose of buildpacks) or a custom buildpack (significant overhead for a simple file copy). The inline buildpack is the right-sized solution.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The project.toml Inline Pattern</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Create a <code>project.toml</code> in your project root alongside the <code>Cargo.toml</code>. This file is read by the buildpack lifecycle before detection, and can define additional buildpacks to include — including ones defined inline as shell scripts:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# project.toml

[[io.buildpacks.group]]
id = "octopilot/rust"
version = "0.1.5"

[[io.buildpacks.group]]
id = "myapp/copy-assets"
[io.buildpacks.group.script]
api = "0.10"
inline = """
set -e
APP="\${CNB_BUILD_DIR:-/workspace}"
OUT="\${CNB_OUTPUT_DIR:-/workspace}"

# Copy static assets into the output directory so the binary can find them
[ -d "\$APP/public" ] && cp -r "\$APP/public" "\$OUT/" || true
[ -d "\$APP/config" ] && cp -r "\$APP/config" "\$OUT/" || true

echo "Assets copied to output layer"
"""
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The inline script runs during the <strong>build</strong> phase, after the Rust buildpack has compiled the binary. <code>CNB_BUILD_DIR</code> is the source directory (where your code is). <code>CNB_OUTPUT_DIR</code> is the output layer directory (where the binary and anything it needs at runtime should live). Anything copied to the output layer appears in the final image alongside the binary.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Common Asset Patterns</h2>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-folder text-blue-400 mt-1"></i><div><strong>Static files:</strong> <code>cp -r "$APP/public" "$OUT/"</code> — serve a pre-built frontend from the Rust binary</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-folder text-blue-400 mt-1"></i><div><strong>Config templates:</strong> <code>cp -r "$APP/config" "$OUT/"</code> — TOML, YAML, or JSON config files the binary reads at startup</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-folder text-blue-400 mt-1"></i><div><strong>Migrations:</strong> <code>cp -r "$APP/migrations" "$OUT/"</code> — SQL migration files for embedded database migration tools</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-file text-blue-400 mt-1"></i><div><strong>Environment files:</strong> <code>cp "$APP/.env.example" "$OUT/"</code> — non-secret configuration defaults</div></li>
                    </ul>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The inline script is plain shell — you can run any command available in the build environment. For more complex needs (running a Node.js build step to compile the frontend before copying), the inline buildpack can call <code>npm run build</code> or any other tool that is installed in the builder image.
                </p>
                <div class="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">When to use a full custom buildpack instead</h4>
                    <p class="text-gray-300">
                        Inline buildpacks are ideal for project-specific steps that vary between applications. If you find yourself writing the same inline script in every project, it belongs in a published custom buildpack that can be versioned, tested, and included by reference. The inline approach is the fast path; the custom buildpack is the right path for reusable logic.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '28',
        title: 'Frontend + API, One Repo, Two Images: Multi-Service Monorepo Builds',
        excerpt: 'The most common real-world project structure is a frontend and a backend in the same repository. One skaffold.yaml, two build contexts, two container images — each independently versioned, independently deployable. Here\'s how the pattern works end-to-end with Octopilot.',
        category: 'Developer',
        readTime: '9 min read',
        image: '/assets/blog/multi-service-monorepo.png',
        author: {
            name: 'Alex Rivera',
            role: 'Solo Dev Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'multi-service-monorepo',
        relatedSlugs: ['zero-config-ci-detect-contexts', 'cloud-native-buildpacks-intro', 'multi-arch-containers-op-action'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The single-repo, multi-service pattern is ubiquitous. A React frontend served by a Go API. A Next.js app backed by a Python service. A Rust Axum server with a compiled SolidJS frontend. The application is conceptually one product, the code lives in one repository, but deployment requires two independent container images — each with its own build toolchain, its own dependencies, and potentially its own deployment schedule.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        A single <code>skaffold.yaml</code> with two artifact stanzas is all that's needed. <code>detect-contexts</code> reads both contexts, generates a build matrix with two entries, and the <code>lint</code>, <code>test</code>, and build pipeline handle each independently. Both images get separate SLSA attestations.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The skaffold.yaml for Two Services</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A typical multi-service repository structure places each service in a subdirectory:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
my-app/
  frontend/          # React or SolidJS source
    package.json
    src/
  api/               # Go or Rust source
    go.mod  (or Cargo.toml)
    main.go (or src/main.rs)
  skaffold.yaml      # defines both build artifacts
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>skaffold.yaml</code> references both contexts. The buildpack auto-detects Node.js from <code>package.json</code> and Go from <code>go.mod</code>:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
apiVersion: skaffold/v4beta1
kind: Config
metadata:
  name: my-app
build:
  artifacts:
    - image: my-app-frontend
      context: frontend
      buildpacks:
        builder: ghcr.io/octopilot/builder-jammy-base:latest

    - image: my-app-api
      context: api
      buildpacks:
        builder: ghcr.io/octopilot/builder-jammy-base:latest
</pre>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">How detect-contexts Handles Two Build Contexts</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    When <code>detect-contexts</code> reads this <code>skaffold.yaml</code>, it inspects each artifact's context directory and returns a pipeline-context with both languages detected:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
{
  "languages": ["node", "go"],
  "node": { "version": "22" },
  "go":   { "version": "1.25" },
  "contexts": [
    { "language": "node", "version": "22",   "context": "frontend/" },
    { "language": "go",   "version": "1.25", "context": "api/"      }
  ]
}
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>lint</code> action installs both Node.js and Go toolchains, running ESLint / Prettier for the frontend and golangci-lint for the API. The <code>test</code> action runs <code>npm test</code> for the frontend and <code>go test ./...</code> for the API. Both sets of checks run in the same job, with the same toolchain setup, driven entirely by the detected context — no manual configuration.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Build pipeline for two images</h3>
                    <p class="text-gray-300 mb-4">
                        The <code>op build</code> action builds both images in a single invocation — Skaffold handles the parallelism internally. The resulting <code>build_result.json</code> contains entries for both:
                    </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto text-gray-300 mb-0">
{
  "builds": [
    { "imageName": "my-app-frontend",
      "tag": "ghcr.io/my-org/my-app-frontend:v1.2.0@sha256:aaa..." },
    { "imageName": "my-app-api",
      "tag": "ghcr.io/my-org/my-app-api:v1.2.0@sha256:bbb..." }
  ]
}
</pre>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Independent Deployment, Same Repository</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Both images share a version tag derived from the git tag — <code>v1.2.0</code> for both frontend and API on the same release. However, they are independently deployable: a frontend-only change can be promoted to production by updating the frontend image tag in the deployment manifest without touching the API deployment. FluxCD's image automation (or any other GitOps tool) handles each image's update lifecycle separately.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Each image also receives its own SLSA attestation. The <code>jq</code> selector in the attestation step identifies each image by name from <code>build_result.json</code>, so the attestation records the specific digest of each independently built artefact.
                </p>
                <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Stack support</h4>
                    <p class="text-gray-300">
                        This pattern works for any combination of languages supported by the Octopilot builder: React + Go, Next.js + Go, Vue + Python, SolidJS + Rust, Angular + Java, and more. See <a href="/blog/octopilot-stack-support-reference" class="text-blue-400 hover:text-blue-300">Octopilot Stack Support Reference</a> for the full list.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '30',
        title: 'Octopilot Stack Support: React, Next.js, Vue, Rust, Go, Python, Spring, and More',
        excerpt: 'Octopilot builds containers using Cloud Native Buildpacks, which detect your language automatically. This reference covers every supported stack — frontend frameworks, backend languages, full-stack combinations — with links to working sample repositories for each.',
        category: 'Developer',
        readTime: '6 min read',
        image: '/assets/blog/stack-support-reference.png',
        author: {
            name: 'Taylor Morgan',
            role: 'Developer Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'octopilot-stack-support-reference',
        relatedSlugs: ['cloud-native-buildpacks-intro', 'multi-service-monorepo', 'octopilot-actions-intro'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The most common question when evaluating a build platform is "does it support my stack?" For Octopilot, the answer is almost certainly yes — the Octopilot builder uses Cloud Native Buildpacks that auto-detect your language and framework from your project files, with no Dockerfile required.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    This post is a practical reference: every supported language and framework, the key detection file, any relevant buildpack environment variables, and links to sample repositories that demonstrate working builds for each combination.
                </p>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Backend Language Support</h2>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-brands fa-golang text-cyan-400 mt-1 text-lg"></i>
                            <div><strong>Go</strong> — Detected from <code>go.mod</code>. Builds all packages in <code>./cmd/...</code> or the main package. Version derived from the <code>go</code> directive in <code>go.mod</code>. Supports: standard APIs (<a href="https://github.com/octopilot/sample-static-go" class="text-blue-400 hover:text-blue-300">net/http</a>, <a href="https://github.com/octopilot/sample-static-go-chi" class="text-blue-400 hover:text-blue-300">Chi</a>, <a href="https://github.com/octopilot/sample-static-go-gin" class="text-blue-400 hover:text-blue-300">Gin</a>, <a href="https://github.com/octopilot/sample-static-go-echo" class="text-blue-400 hover:text-blue-300">Echo</a>).</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-gear text-orange-400 mt-1"></i>
                            <div><strong>Rust</strong> — Detected from <code>Cargo.toml</code>. Single crate, workspace, suite, and split-image modes. See <a href="/blog/rust-buildpack-scenarios" class="text-blue-400 hover:text-blue-300">Rust Buildpack Scenarios</a>. Supports: <a href="https://github.com/octopilot/sample-static-rust-axum" class="text-blue-400 hover:text-blue-300">Axum</a>, <a href="https://github.com/octopilot/sample-static-rust-actix" class="text-blue-400 hover:text-blue-300">Actix-web</a>.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-brands fa-python text-yellow-400 mt-1"></i>
                            <div><strong>Python</strong> — Detected from <code>requirements.txt</code>, <code>pyproject.toml</code>, or <code>Pipfile</code>. WSGI/ASGI apps via Gunicorn or Uvicorn. Supports: <a href="https://github.com/octopilot/sample-static-python" class="text-blue-400 hover:text-blue-300">Flask</a>, <a href="https://github.com/octopilot/sample-static-python-django" class="text-blue-400 hover:text-blue-300">Django</a>.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-brands fa-java text-red-400 mt-1"></i>
                            <div><strong>Java / Kotlin</strong> — Detected from <code>pom.xml</code> (Maven) or <code>build.gradle</code>. JVM apps packaged as executable JARs. Supports: <a href="https://github.com/octopilot/sample-static-spring" class="text-blue-400 hover:text-blue-300">Spring Boot (Java)</a>, <a href="https://github.com/octopilot/sample-static-spring-kotlin" class="text-blue-400 hover:text-blue-300">Spring Boot (Kotlin)</a>.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-brands fa-microsoft text-blue-300 mt-1"></i>
                            <div><strong>.NET</strong> — Detected from <code>*.csproj</code>. ASP.NET Core apps, console apps. Supports: <a href="https://github.com/octopilot/sample-static-dotnet" class="text-blue-400 hover:text-blue-300">ASP.NET Core</a>.</div>
                        </li>
                        <li class="flex gap-3">
                            <i class="fa-solid fa-gem text-red-300 mt-1"></i>
                            <div><strong>Ruby</strong> — Detected from <code>Gemfile</code>. Rack-based apps via Puma. Supports: <a href="https://github.com/octopilot/sample-static-ruby" class="text-blue-400 hover:text-blue-300">Sinatra / Rails</a>.</div>
                        </li>
                    </ul>
                </div>

                <h2 class="text-3xl font-bold text-white mb-6 mt-8">Frontend Framework Support</h2>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <p class="text-gray-300 mb-4">Frontend frameworks are detected from <code>package.json</code>. The Node.js buildpack runs the build script and produces a static build output, which is then served by the backend or a static server.</p>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-brands fa-react text-cyan-400 mt-1"></i><div><strong>React</strong> — <a href="https://github.com/octopilot/sample-react-go" class="text-blue-400 hover:text-blue-300">React + Go</a>, <a href="https://github.com/octopilot/sample-react-node" class="text-blue-400 hover:text-blue-300">React + Node</a>, <a href="https://github.com/octopilot/sample-react-python" class="text-blue-400 hover:text-blue-300">React + Python</a>, <a href="https://github.com/octopilot/sample-react-dotnet" class="text-blue-400 hover:text-blue-300">React + .NET</a></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-n text-white mt-1"></i><div><strong>Next.js</strong> — SSR and static export modes. <a href="https://github.com/octopilot/sample-next-go" class="text-blue-400 hover:text-blue-300">Next.js + Go</a></div></li>
                        <li class="flex gap-3"><i class="fa-brands fa-vuejs text-green-400 mt-1"></i><div><strong>Vue</strong> — <a href="https://github.com/octopilot/sample-vue-go" class="text-blue-400 hover:text-blue-300">Vue + Go</a></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-s text-orange-400 mt-1"></i><div><strong>Svelte</strong> — <a href="https://github.com/octopilot/sample-svelte-go" class="text-blue-400 hover:text-blue-300">Svelte + Go</a></div></li>
                        <li class="flex gap-3"><i class="fa-brands fa-angular text-red-500 mt-1"></i><div><strong>Angular</strong> — <a href="https://github.com/octopilot/sample-angular-go" class="text-blue-400 hover:text-blue-300">Angular + Go</a></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-circle text-blue-400 mt-1"></i><div><strong>SolidJS</strong> — <a href="https://github.com/octopilot/sample-solid-go" class="text-blue-400 hover:text-blue-300">SolidJS + Go</a></div></li>
                        <li class="flex gap-3"><i class="fa-brands fa-node-js text-green-300 mt-1"></i><div><strong>Node.js</strong> — <a href="https://github.com/octopilot/sample-static-node" class="text-blue-400 hover:text-blue-300">Express</a>, <a href="https://github.com/octopilot/sample-static-node-fastify" class="text-blue-400 hover:text-blue-300">Fastify</a>, <a href="https://github.com/octopilot/sample-static-node-ts" class="text-blue-400 hover:text-blue-300">TypeScript</a></div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Adding a New Stack</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    If your stack isn't listed, check whether it's supported by the <a href="https://paketo.io/docs/concepts/buildpacks/" class="text-blue-400 hover:text-blue-300">Paketo buildpack ecosystem</a> — there are buildpacks for dozens of languages beyond the ones bundled in the Octopilot builder. Adding a Paketo buildpack to the builder is a single line in <code>builder.toml</code>.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    For languages without buildpack support, the Octopilot pipeline works with Dockerfiles too — replace the <code>buildpacks:</code> stanza in <code>skaffold.yaml</code> with <code>docker: { dockerfile: Dockerfile }</code>. You lose automatic base image rebasing, but gain full Dockerfile flexibility.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Quick Reference Table</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-gray-300 border-collapse">
                        <thead><tr class="border-b border-octo-border text-white">
                            <th class="text-left py-3 pr-4">Stack</th>
                            <th class="text-left py-3 pr-4">Detection File</th>
                            <th class="text-left py-3">Sample Repo</th>
                        </tr></thead>
                        <tbody class="divide-y divide-octo-border/50">
                            <tr><td class="py-2 pr-4">Go (net/http)</td><td class="py-2 pr-4"><code>go.mod</code></td><td class="py-2"><code>sample-static-go</code></td></tr>
                            <tr><td class="py-2 pr-4">Go + Chi</td><td class="py-2 pr-4"><code>go.mod</code></td><td class="py-2"><code>sample-static-go-chi</code></td></tr>
                            <tr><td class="py-2 pr-4">Go + Gin</td><td class="py-2 pr-4"><code>go.mod</code></td><td class="py-2"><code>sample-static-go-gin</code></td></tr>
                            <tr><td class="py-2 pr-4">Go + Echo</td><td class="py-2 pr-4"><code>go.mod</code></td><td class="py-2"><code>sample-static-go-echo</code></td></tr>
                            <tr><td class="py-2 pr-4">Rust + Axum</td><td class="py-2 pr-4"><code>Cargo.toml</code></td><td class="py-2"><code>sample-static-rust-axum</code></td></tr>
                            <tr><td class="py-2 pr-4">Rust + Actix</td><td class="py-2 pr-4"><code>Cargo.toml</code></td><td class="py-2"><code>sample-static-rust-actix</code></td></tr>
                            <tr><td class="py-2 pr-4">Python / Flask</td><td class="py-2 pr-4"><code>requirements.txt</code></td><td class="py-2"><code>sample-static-python</code></td></tr>
                            <tr><td class="py-2 pr-4">Python / Django</td><td class="py-2 pr-4"><code>requirements.txt</code></td><td class="py-2"><code>sample-static-python-django</code></td></tr>
                            <tr><td class="py-2 pr-4">Spring Boot (Java)</td><td class="py-2 pr-4"><code>pom.xml</code></td><td class="py-2"><code>sample-static-spring</code></td></tr>
                            <tr><td class="py-2 pr-4">Spring Boot (Kotlin)</td><td class="py-2 pr-4"><code>build.gradle</code></td><td class="py-2"><code>sample-static-spring-kotlin</code></td></tr>
                            <tr><td class="py-2 pr-4">.NET (ASP.NET Core)</td><td class="py-2 pr-4"><code>*.csproj</code></td><td class="py-2"><code>sample-static-dotnet</code></td></tr>
                            <tr><td class="py-2 pr-4">Ruby</td><td class="py-2 pr-4"><code>Gemfile</code></td><td class="py-2"><code>sample-static-ruby</code></td></tr>
                            <tr><td class="py-2 pr-4">React + Go</td><td class="py-2 pr-4"><code>package.json</code> + <code>go.mod</code></td><td class="py-2"><code>sample-react-go</code></td></tr>
                            <tr><td class="py-2 pr-4">Next.js + Go</td><td class="py-2 pr-4"><code>package.json</code> + <code>go.mod</code></td><td class="py-2"><code>sample-next-go</code></td></tr>
                            <tr><td class="py-2 pr-4">Vue + Go</td><td class="py-2 pr-4"><code>package.json</code> + <code>go.mod</code></td><td class="py-2"><code>sample-vue-go</code></td></tr>
                            <tr><td class="py-2 pr-4">SolidJS + Go</td><td class="py-2 pr-4"><code>package.json</code> + <code>go.mod</code></td><td class="py-2"><code>sample-solid-go</code></td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
        `
    },
    {
        id: '31',
        title: 'Local HTTPS Registry: Solving TLS for Docker Development',
        excerpt: 'Running a local container registry during development sounds simple until you need HTTPS — which Skaffold, Buildpacks, and many tools require. registry-tls gives you a local HTTPS registry in one Docker command: Envoy handles TLS, self-signed certs are generated automatically, and it runs on port 5001.',
        category: 'Developer',
        readTime: '6 min read',
        image: '/assets/blog/local-tls-registry.png',
        author: {
            name: 'Alex Rivera',
            role: 'Solo Dev Advocate',
            avatar: '/assets/blog/avatar-alex.jpg'
        },
        slug: 'local-https-registry',
        relatedSlugs: ['cloud-native-buildpacks-intro', 'multi-arch-containers-op-action', 'octopilot-actions-intro'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Local container registry for development: easy. Local container registry with HTTPS: surprisingly annoying. Most development tools that interact with container images — Skaffold, Cloud Native Buildpacks, cosign, crane — expect registries to either be well-known public registries with valid TLS or local registries explicitly marked as insecure. Marking a registry as insecure requires editing Docker's daemon configuration and restarting Docker Desktop. It's a workstation configuration change that can affect other projects and is easy to forget to undo.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        <code>registry-tls</code> is a single container that runs a standard Docker registry behind an Envoy proxy with auto-generated self-signed TLS on port 5001. No Docker Compose, no separate TLS setup, no daemon config changes — just <code>docker run -p 5001:5001 ghcr.io/octopilot/registry-tls:latest</code>.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Local Registry TLS Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A plain <code>docker run -p 5000:5000 registry:2</code> gives you an HTTP registry. For local development where you're just pushing and pulling manually, this works. When you introduce tools that have opinions about TLS — Skaffold's local dev loop, Buildpack lifecycle push, or any tool that calls the OCI distribution spec directly — the HTTP registry becomes a source of errors that are difficult to debug because they manifest as "connection refused" or "certificate error" rather than "this registry doesn't support TLS."
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The standard advice is to add <code>"insecure-registries": ["localhost:5000"]</code> to the Docker daemon configuration. This works, but it's a global setting that applies to all Docker operations, requires a daemon restart, and is the kind of workstation state that causes "works on my machine" problems when someone else doesn't have it configured.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Running the TLS Registry</h2>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Start the registry (certs auto-generated on first run)
docker run -p 5001:5001 ghcr.io/octopilot/registry-tls:latest

# With persistent storage (survives container restarts)
docker run -p 5001:5001 -v registry-data:/var/lib/registry \
  ghcr.io/octopilot/registry-tls:latest

# Push an image (add --insecure-skip-verify or trust the cert first)
docker push localhost:5001/my-image:dev
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The image is multi-arch: <code>linux/amd64</code>, <code>linux/arm64</code> (Apple Silicon), and <code>linux/arm/v7</code>. On Apple Silicon, Docker Desktop pulls the arm64 variant automatically.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">Trusting the self-signed certificate</h3>
                    <p class="text-gray-300 mb-4">The registry generates a self-signed cert at startup. To avoid TLS warnings:</p>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-brands fa-apple text-gray-300 mt-1"></i><div><strong>macOS:</strong> Copy the cert from the container (<code>docker cp &lt;container&gt;:/etc/envoy/certs/tls.crt .</code>) and add it to Keychain, setting SSL trust to "Always Trust"</div></li>
                        <li class="flex gap-3"><i class="fa-brands fa-linux text-yellow-400 mt-1"></i><div><strong>Linux:</strong> Copy the cert to <code>/usr/local/share/ca-certificates/</code> and run <code>update-ca-certificates</code></div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-whale text-blue-400 mt-1"></i><div><strong>Docker daemon only:</strong> Add <code>"insecure-registries": ["localhost:5001"]</code> to Docker Engine settings if you only need Docker push/pull to work (not other tools)</div></li>
                    </ul>
                </div>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Using with op run</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>registry-tls</code> image is the default local registry used by <code>op run</code> for local development builds. Skaffold's local build loop pushes images to <code>localhost:5001</code>, which uses the registry-tls container. This means your local builds go through the same HTTPS push path as your CI builds — local and CI behaviour are consistent.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Start the local registry
docker run -d -p 5001:5001 --name local-registry \
  ghcr.io/octopilot/registry-tls:latest

# Run your application locally with Octopilot
op run --repo localhost:5001/my-org
# Skaffold builds → pushes to localhost:5001 → runs locally
</pre>
            </section>
        `
    },
    {
        id: '32',
        title: 'kenv: Extract Kubernetes ConfigMap and Secret Values Into Your Local Environment',
        excerpt: 'Local development against a remote Kubernetes cluster often means needing the same configuration values the cluster has — database hostnames, feature flags, service URLs. kenv extracts them from a Kustomize-built environment and writes them to a .env file your application can use directly.',
        category: 'Developer',
        readTime: '5 min read',
        image: '/assets/blog/kenv-tool.png',
        author: {
            name: 'Chris Anderson',
            role: 'Platform Engineer',
            avatar: '/assets/blog/avatar-chris.jpg'
        },
        slug: 'kenv-kubernetes-env-extraction',
        relatedSlugs: ['cicd-secret-injection', 'repo-local-encryption', 'octopilot-subscription-model'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    A persistent friction point in local development is configuration parity. Your Kubernetes deployment reads database hostnames, feature flag values, and service endpoint URLs from ConfigMaps. When you run the same service locally, you either hardcode those values in a <code>.env</code> file (which drifts from the cluster config) or you spend time manually copying values from <code>kubectl get configmap -o yaml</code> output. Neither is satisfying.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        <code>kenv</code> runs Kustomize against a specified environment directory and extracts the resulting ConfigMap and Secret values into a <code>.env</code> file (or other formats). Your local environment gets the same values the cluster uses — from the same source of truth.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The Configuration Parity Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Kubernetes applications typically read their configuration from environment variables injected from ConfigMaps and Secrets. The Kustomize overlays that define each environment (dev, staging, production) specify the exact values for each key. This is the cluster's authoritative configuration.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Local development usually means a manually maintained <code>.env</code> file that approximates this configuration. When a new ConfigMap key is added, or an existing value is changed for the staging environment, the developer's local <code>.env</code> file falls out of sync. The mismatch often only surfaces when testing a specific code path that uses the new or changed value.
                </p>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Using kenv</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    <code>kenv</code> takes a Kustomize base or overlay path, runs <code>kustomize build</code> against it, and extracts the ConfigMap and Secret values from the resulting manifests:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# Build and install
go build -ldflags '-s -w' -o kenv ./main/

# Extract configuration from the staging overlay into a .env file
./kenv prepare \
  -i waas-config/environments/staging \
  -k $SOPS_AGE_KEY \
  -o dotenv > .env

# Your application reads the .env file as normal
# DATABASE_HOST, FEATURE_FLAGS_URL, etc. are now set from the cluster config
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The <code>-i</code> flag specifies the Kustomize input directory (the environment overlay). The <code>-k</code> flag provides the decryption key for SOPS-encrypted values in the Secrets. The <code>-o dotenv</code> output format produces a standard <code>KEY=value</code> file compatible with <code>dotenv</code>, Docker's <code>--env-file</code>, and most development servers.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Workflow Integration</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The typical workflow is to add a <code>kenv prepare</code> invocation to your local development script or Justfile, run it before starting the development server, and <code>.gitignore</code> the generated <code>.env</code> file:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
# In your Justfile
dev:
  kenv prepare -i config/environments/local -k $SOPS_AGE_KEY -o dotenv > .env
  go run ./cmd/server
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Because <code>kenv</code> reads from the same Kustomize overlays that define the cluster configuration, the local environment automatically picks up new keys and changed values when the overlay is updated — without manual <code>.env</code> maintenance.
                </p>
                <div class="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mt-6">
                    <h4 class="text-white font-bold mb-2">Note on secrets</h4>
                    <p class="text-gray-300">
                        <code>kenv</code> decrypts SOPS-encrypted Secrets to extract their values. The resulting <code>.env</code> file contains plaintext values — treat it with the same care as a <code>.env</code> file containing credentials. Ensure it is in <code>.gitignore</code> and not committed to version control.
                    </p>
                </div>
            </section>
        `
    },
    {
        id: '33',
        title: 'Keyless Kubernetes: OIDC kubectl Context in GitHub Actions',
        excerpt: 'Storing a kubeconfig or long-lived service account token as a GitHub Actions secret is a security liability: the credential is static, hard to rotate, and scoped too broadly. OIDC-based kubectl authentication gives each workflow run a short-lived token that expires automatically.',
        category: 'Enterprise',
        readTime: '8 min read',
        image: '/assets/blog/oidc-kubectl.png',
        author: {
            name: 'Rachel Thompson',
            role: 'Security Architect',
            avatar: '/assets/blog/avatar-rachel.jpg'
        },
        slug: 'oidc-kubectl-github-actions',
        relatedSlugs: ['network-security-cloud-runners', 'cicd-secret-injection', 'least-privilege-access'],
        content: `
            <section id="intro" class="mb-12">
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The standard approach to Kubernetes access in GitHub Actions is to store a kubeconfig or service account token as a repository secret. The workflow decodes it, writes it to <code>~/.kube/config</code>, and runs <code>kubectl</code> commands. This works but carries significant security implications: the credential is long-lived (often indefinitely), statically scoped, stored in GitHub's secret store, and rotated manually if at all. A leaked secret provides cluster access until someone notices and rotates it.
                </p>
                <div class="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h4 class="text-white font-bold mb-2">Key Takeaway</h4>
                    <p class="text-gray-300">
                        OpenID Connect (OIDC) eliminates the need for a stored credential entirely. GitHub Actions can request a short-lived OIDC token for each workflow run. Your Kubernetes cluster — or the OIDC provider in front of it — validates the token and grants access. The token expires when the workflow ends. Nothing to store, nothing to rotate, nothing to leak.
                    </p>
                </div>
            </section>

            <section id="problem" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Why Long-Lived Credentials Are a Problem</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    Static credentials — kubeconfig files, service account tokens, API keys — share a common failure mode: they outlive the context in which they were created. A deployment token created for a specific workflow run has no reason to exist once that run completes. But tokens created as repository secrets exist until manually deleted, regardless of whether the workflow that uses them still exists.
                </p>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-6 mb-8">
                    <h3 class="text-white font-bold text-xl mb-4">The static credential threat model</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>A repository is made public accidentally — the kubeconfig secret is now in GitHub's logs or exposed to workflows from forked PRs</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>A developer with repository access leaves — their access to the CI credential persists until someone audits and rotates it</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>The service account token is scoped to "cluster-admin" because it was created quickly — nobody has reviewed the scope since</div></li>
                        <li class="flex gap-3"><i class="fa-solid fa-triangle-exclamation text-amber-400 mt-1"></i><div>A supply chain attack on a GitHub Action uses the workflow's secrets environment to exfiltrate credentials</div></li>
                    </ul>
                </div>
            </section>

            <section id="solution" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">The OIDC Token Flow</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    GitHub Actions supports OIDC token issuance natively. When a workflow has the <code>id-token: write</code> permission, GitHub's OIDC provider issues a JWT token for that workflow run. The token contains verifiable claims: the repository name, the branch, the workflow path, and the run ID. It is signed by GitHub and valid only for the duration of the workflow.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    For clusters with an OIDC authentication webhook configured, or for cloud-managed Kubernetes services that support OIDC trust (EKS, GKE with Workload Identity, AKS with Azure AD), the workflow presents this token to the cluster and receives cluster access scoped to the claims in the token. The <code>oidc-set-context</code> action handles this exchange:
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write    # required to request an OIDC token
      contents: read

    steps:
      - uses: actions/checkout@v4

      - name: Set kubectl context via OIDC
        uses: octopilot/actions/oidc-set-context@main
        with:
          oidc_url: https://your-oidc-provider.example.com/token
          oidc_username: \${{ secrets.OIDC_USERNAME }}
          oidc_password: \${{ secrets.OIDC_PASSWORD }}
          k8s_url: https://your-cluster.example.com

      - name: Deploy
        run: kubectl apply -f k8s/
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    The action calls the OIDC provider URL with the provided credentials, receives a short-lived token, and configures <code>kubectl</code> to use it. The token is valid only for this workflow run. When the workflow ends, the token expires — no manual rotation required, no persistent credential to protect.
                </p>
            </section>

            <section id="implementation" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Combining with Network Allowlisting</h2>
                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                    For clusters with a private API server (no public endpoint), OIDC authentication solves the credential problem but not the network access problem. The workflow still needs to reach the cluster API. This is where the <code>gke-allow-runner</code>, <code>eks-allow-runner</code>, or <code>aks-allow-runner</code> actions come in — they add the runner's ephemeral IP to the cluster's authorised networks before the deployment step and remove it in a step marked <code>if: always()</code> afterwards.
                </p>
<pre class="bg-black/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-300">
steps:
  - name: Allow runner IP
    uses: octopilot/actions/network-access/gke-allow-runner@main
    with:
      project_id: my-gcp-project
      cluster_name: production
      cluster_region: europe-west2

  - name: Set kubectl context via OIDC
    uses: octopilot/actions/oidc-set-context@main
    with:
      oidc_url: \${{ secrets.OIDC_URL }}
      oidc_username: \${{ secrets.OIDC_USERNAME }}
      oidc_password: \${{ secrets.OIDC_PASSWORD }}
      k8s_url: \${{ secrets.K8S_URL }}

  - name: Deploy
    run: kubectl apply -f k8s/

  - name: Remove runner IP
    if: always()
    uses: octopilot/actions/network-access/gke-allow-runner@main
    with:
      project_id: my-gcp-project
      cluster_name: production
      cluster_region: europe-west2
      remove: true
</pre>
                <p class="text-gray-300 text-lg leading-relaxed mt-6">
                    The combination of OIDC authentication (no stored credential) and ephemeral network allowlisting (no persistent firewall hole) gives you a deployment workflow with a minimal, time-bound security footprint — the workflow has network access and cluster access only for the duration of its execution.
                </p>
            </section>
        `
    }
];
