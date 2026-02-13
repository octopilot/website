import type { Component } from 'solid-js';
import CtaSection from '../../components/sections/CtaSection';

const BestPractices: Component = () => {
    return (
        <div class="bg-octo-dark min-h-screen">
            <section class="py-20 border-b border-octo-border">
                <div class="max-w-[1000px] mx-auto px-8">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">Best Practices</h1>
                    <p class="text-xl text-gray-300 leading-relaxed mb-12">
                        Securely managing secrets in a GitOps environment requires a layered approach.
                        Octopilot is designed to enforce these best practices by default, ensuring your
                        secrets are safe from commit to deployment.
                    </p>

                    <div class="space-y-16">
                        {/* Streamlined CI/CD */}
                        <section>
                            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <i class="fa-brands fa-github text-octo-accent"></i>
                                Streamlined CI/CD with Octopilot Actions
                            </h2>
                            <div class="prose prose-invert max-w-none text-gray-400">
                                <p class="mb-4">
                                    Stop maintaining snowflake scripts for your release pipelines. <strong>Octopilot Actions</strong> provides a
                                    complete, standardized, and security-hardened toolkit for your CI/CD needs directly within GitHub Actions.
                                </p>
                                <div class="grid md:grid-cols-2 gap-8 text-sm">
                                    <div class="bg-octo-darker p-6 rounded-xl border border-octo-border">
                                        <h3 class="text-white font-bold mb-2">Eliminate Snowflake Scripts</h3>
                                        <p>
                                            Replace fragile, custom bash and Python glue code with battle-tested actions designed for modern GitOps workflows.
                                        </p>
                                    </div>
                                    <div class="bg-octo-darker p-6 rounded-xl border border-octo-border">
                                        <h3 class="text-white font-bold mb-2">Native GitHub Integration</h3>
                                        <p>
                                            Drop-in workflows that live right in your <code>.github/workflows</code> directory. No complex external CI configuration required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* GitOps Workflow */}
                        <section>
                            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <i class="fa-brands fa-git-alt text-octo-accent"></i>
                                GitOps as the Single Source of Truth
                            </h2>
                            <div class="prose prose-invert max-w-none text-gray-400">
                                <p class="mb-4">
                                    In a robust GitOps workflow, your Git repository should be the <strong>single source of truth</strong> for
                                    both infrastructure and application state. This includes secrets.
                                </p>
                                <ul class="list-disc pl-6 space-y-2 mb-6">
                                    <li><strong>Everything in Git:</strong> Define your secrets in Git alongside your deployments.</li>
                                    <li><strong>No Manual Changes:</strong> Avoid manually creating secrets in cloud consoles. If you do, Octopilot will overwrite them to match Git.</li>
                                    <li><strong>Audit Trail:</strong> Git commit history becomes your compliance audit log.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Secret Management */}
                        <section>
                            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <i class="fa-solid fa-key text-octo-accent"></i>
                                Encryption at Rest
                            </h2>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="bg-octo-darker p-8 rounded-xl border border-octo-border">
                                    <h3 class="text-xl font-bold text-white mb-4">SOPS for Repositories</h3>
                                    <p class="text-gray-400 mb-4">
                                        For most use cases, we recommend <strong>SOPS (Secrets OPerationS)</strong>.
                                        SOPS allows you to encrypt secrets directly in your Git repository using keys from AWS KMS, GCP KMS, Azure Key Vault, or PGP.
                                    </p>
                                    <ul class="list-disc pl-6 text-gray-400 space-y-2">
                                        <li>Secrets are encrypted <em>before</em> they are committed.</li>
                                        <li>Only values are encrypted; keys remain visible for diffing.</li>
                                        <li>Developers can safely collaborate on secret files.</li>
                                    </ul>
                                </div>
                                <div class="bg-octo-darker p-8 rounded-xl border border-octo-border">
                                    <h3 class="text-xl font-bold text-white mb-4">OpenBAO for Enterprise</h3>
                                    <p class="text-gray-400 mb-4">
                                        For enterprise environments requiring centralized secret management, dynamic secrets, or rotation,
                                        we support <strong>OpenBAO</strong>.
                                    </p>
                                    <ul class="list-disc pl-6 text-gray-400 space-y-2">
                                        <li>Centralized policy enforcement.</li>
                                        <li>Dynamic secret generation for databases and cloud providers.</li>
                                        <li>Octopilot integrates via our managed service option.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Controller Security */}
                        <section>
                            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <i class="fa-solid fa-shield-halved text-octo-accent"></i>
                                Controller Security Architecture
                            </h2>
                            <div class="prose prose-invert max-w-none text-gray-400">
                                <p class="mb-6">
                                    The Octopilot Secret Manager Controller is built with a <strong>Zero-Trust</strong> and <strong>Zero-Persistence</strong> architecture.
                                    We analyzed our controller's security model to ensure it meets the highest standards.
                                </p>

                                <div class="grid md:grid-cols-3 gap-6 mb-8">
                                    <div class="bg-octo-gray/20 p-6 rounded-lg">
                                        <h4 class="text-white font-bold mb-2">In-Memory Processing</h4>
                                        <p class="text-sm">
                                            Decrypted secrets <strong>never touch the disk</strong>. SOPS decryption happens entirely in memory,
                                            getting piped directly to the cloud provider API.
                                        </p>
                                    </div>
                                    <div class="bg-octo-gray/20 p-6 rounded-lg">
                                        <h4 class="text-white font-bold mb-2">Transparent Bots</h4>
                                        <p class="text-sm">
                                            Our bots run transparently within your infrastructure.
                                            <strong>Octopilot does not hold your data</strong>. Your config stays in your GitHub secrets.
                                        </p>
                                    </div>
                                    <div class="bg-octo-gray/20 p-6 rounded-lg">
                                        <h4 class="text-white font-bold mb-2">Least Privilege</h4>
                                        <p class="text-sm">
                                            The controller uses Workload Identity (GCP), IRSA (AWS), or Workload Identity (Azure)
                                            to access cloud APIs without long-lived credentials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CI/CD Integration */}
                        <section>
                            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <i class="fa-solid fa-code-branch text-octo-accent"></i>
                                Continuous Delivery
                            </h2>
                            <div class="prose prose-invert max-w-none text-gray-400">
                                <p class="mb-4">
                                    Octopilot is designed to work seamlessly with <strong>Flux</strong> and <strong>ArgoCD</strong>.
                                </p>
                                <p class="mb-4">
                                    By integrating with these tools, you ensure that secret synchronization is triggered automatically
                                    whenever code is merged. This aligns your secret management lifecycle perfectly with your application deployment lifecycle.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <CtaSection />
        </div>
    );
};

export default BestPractices;
