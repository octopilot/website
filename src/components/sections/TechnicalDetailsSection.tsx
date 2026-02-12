import type { Component } from 'solid-js';

const TechnicalDetailsSection: Component = () => {
    return (
        <section id="technical-details-section" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Technical implementation details</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Precise specifications for engineers evaluating Octopilot
                    </p>
                </div>
                <div class="grid grid-cols-3 gap-6 mb-12">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <h4 class="text-white font-bold mb-4 flex items-center">
                            <i class="fa-solid fa-key text-octo-accent mr-3"></i>
                            GPG Key Specifications
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><strong class="text-gray-300">Algorithm:</strong> RSA 4096-bit</li>
                            <li><strong class="text-gray-300">Signature:</strong> SHA-512</li>
                            <li><strong class="text-gray-300">Scope:</strong> One key pair per repository</li>
                            <li><strong class="text-gray-300">Rotation:</strong> Configurable (30/60/90 days)</li>
                            <li><strong class="text-gray-300">Revocation:</strong> Immediate via signature invalidation</li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <h4 class="text-white font-bold mb-4 flex items-center">
                            <i class="fa-solid fa-file-code text-octo-accent mr-3"></i>
                            Encryption Format
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><strong class="text-gray-300">Tool:</strong> Mozilla SOPS</li>
                            <li><strong class="text-gray-300">Files:</strong> <code class="text-octo-accent font-mono text-xs">application.secrets</code></li>
                            <li><strong class="text-gray-300">Config:</strong> <code class="text-octo-accent font-mono text-xs">sops.yaml</code> per repo</li>
                            <li><strong class="text-gray-300">Format:</strong> YAML, JSON, ENV, or INI</li>
                            <li><strong class="text-gray-300">Partial:</strong> Field-level encryption supported</li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <h4 class="text-white font-bold mb-4 flex items-center">
                            <i class="fa-brands fa-github text-octo-accent mr-3"></i>
                            GitHub Integration
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><strong class="text-gray-300">Type:</strong> GitHub App</li>
                            <li><strong class="text-gray-300">Permissions:</strong> Repository metadata (read), Contents (write)</li>
                            <li><strong class="text-gray-300">Events:</strong> Push, Pull Request</li>
                            <li><strong class="text-gray-300">Delivery:</strong> Keys via automated PR</li>
                            <li><strong class="text-gray-300">Scope:</strong> Per-repository or organization-wide</li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <h4 class="text-white font-bold mb-4 flex items-center">
                            <i class="fa-solid fa-dharmachakra text-octo-accent mr-3"></i>
                            Kubernetes Controller
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><strong class="text-gray-300">Runtime:</strong> Go 1.21+</li>
                            <li><strong class="text-gray-300">CRD:</strong> <code class="text-octo-accent font-mono text-xs">SecretSource</code></li>
                            <li><strong class="text-gray-300">Reconciliation:</strong> Git polling or webhook</li>
                            <li><strong class="text-gray-300">Output:</strong> Standard Kubernetes Secrets</li>
                            <li><strong class="text-gray-300">Deployment:</strong> Helm chart or Kustomize</li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <h4 class="text-white font-bold mb-4 flex items-center">
                            <i class="fa-solid fa-shield-halved text-octo-accent mr-3"></i>
                            Policy Engine
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><strong class="text-gray-300">Format:</strong> YAML policy definitions</li>
                            <li><strong class="text-gray-300">Enforcement:</strong> Pre-commit and runtime</li>
                            <li><strong class="text-gray-300">Rules:</strong> Key age, reuse, algorithms</li>
                            <li><strong class="text-gray-300">Exceptions:</strong> Approval-based overrides</li>
                            <li><strong class="text-gray-300">Inheritance:</strong> Organization → Repository</li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <h4 class="text-white font-bold mb-4 flex items-center">
                            <i class="fa-solid fa-database text-octo-accent mr-3"></i>
                            Audit &amp; Compliance
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><strong class="text-gray-300">Events:</strong> All key operations logged</li>
                            <li><strong class="text-gray-300">Retention:</strong> Configurable (1-7 years)</li>
                            <li><strong class="text-gray-300">Export:</strong> JSON, CSV, SIEM integration</li>
                            <li><strong class="text-gray-300">Immutability:</strong> Append-only log storage</li>
                            <li><strong class="text-gray-300">Search:</strong> Full-text and structured queries</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-octo-dark border border-octo-border rounded-xl p-8">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <i class="fa-solid fa-diagram-project text-octo-accent mr-3"></i>
                        Deployment Architecture
                    </h3>
                    <div class="grid grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-white font-bold mb-3">Octopilot SaaS (Commercial)</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-server text-octo-accent mt-0.5"></i>
                                    <span>Hosted on AWS (US, EU regions available)</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-lock text-octo-accent mt-0.5"></i>
                                    <span>SOC 2 Type II compliant infrastructure</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-shield-halved text-octo-accent mt-0.5"></i>
                                    <span>Encrypted at rest (AES-256) and in transit (TLS 1.3)</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-clock text-octo-accent mt-0.5"></i>
                                    <span>99.9% uptime SLA (Enterprise tier)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-white font-bold mb-3">Controller (Open Source)</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-dharmachakra text-octo-accent mt-0.5"></i>
                                    <span>Runs inside your Kubernetes cluster</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-network-wired text-octo-accent mt-0.5"></i>
                                    <span>No inbound network access required</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-memory text-octo-accent mt-0.5"></i>
                                    <span>Minimal resource footprint (50Mi RAM, 0.1 CPU)</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-code-branch text-octo-accent mt-0.5"></i>
                                    <span>Air-gapped deployment supported</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalDetailsSection;
