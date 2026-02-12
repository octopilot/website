import type { Component } from 'solid-js';

const UseCasesSection: Component = () => {
    return (
        <section id="use-cases-section" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Who uses Octopilot</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Organizations that need to govern repository-local secrets at scale
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-8 mb-12">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-users-gear text-blue-400 text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Platform Engineering Teams</h3>
                        </div>
                        <p class="text-gray-300 mb-6">
                            Standardize GitOps workflows across hundreds of repositories without forcing teams to adopt centralized secret management systems.
                        </p>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Enforce consistent encryption standards across the organization</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Automate key rotation without disrupting application teams</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Provide self-service key management with policy guardrails</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-shield-halved text-red-400 text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Security &amp; Compliance Teams</h3>
                        </div>
                        <p class="text-gray-300 mb-6">
                            Gain visibility and control over encrypted secrets without requiring centralized storage that increases risk concentration.
                        </p>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Prevent key reuse and enforce rotation policies automatically</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Generate audit reports showing compliance across all repositories</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Revoke compromised keys immediately without application changes</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-dharmachakra text-purple-400 text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Kubernetes Operators</h3>
                        </div>
                        <p class="text-gray-300 mb-6">
                            Eliminate runtime dependencies on external secret stores while maintaining security and auditability for cluster deployments.
                        </p>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Deploy applications without vault credentials or network dependencies</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Simplify disaster recovery with declarative secret management</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Reduce operational complexity of secret distribution systems</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-building text-green-400 text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Regulated Industries</h3>
                        </div>
                        <p class="text-gray-300 mb-6">
                            Meet compliance requirements that prohibit centralized secret storage while maintaining cryptographic controls and audit trails.
                        </p>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Satisfy auditors with cryptographic proof of key management</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Maintain data sovereignty with in-cluster secret decryption</p>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-arrow-right text-octo-accent mt-1 text-sm"></i>
                                <p class="text-gray-400 text-sm">Demonstrate compliance with tamper-proof audit logs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-octo-accent/10 to-purple-600/10 border border-octo-accent/30 rounded-xl p-8">
                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-white mb-3">Not sure if Octopilot fits your use case?</h3>
                        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Schedule a technical consultation to discuss your specific requirements, compliance constraints, and existing GitOps workflows.
                        </p>
                        <div class="flex items-center justify-center space-x-4">
                            <a href="#" class="px-6 py-3 bg-octo-accent hover:bg-octo-accent-dark text-white rounded-lg font-medium transition-colors">
                                <i class="fa-solid fa-calendar mr-2"></i>Schedule Technical Call
                            </a>
                            <a href="mailto:sales@octopilot.io" class="px-6 py-3 bg-octo-gray hover:bg-octo-gray-light text-white rounded-lg font-medium transition-colors border border-octo-border">
                                <i class="fa-solid fa-envelope mr-2"></i>Email Sales Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
