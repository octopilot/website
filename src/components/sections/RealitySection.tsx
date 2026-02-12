import type { Component } from 'solid-js';

const RealitySection: Component = () => {
    return (
        <section id="reality-section" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">The reality of repository-local secrets</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Understanding why teams keep secrets per repository and why this pattern persists at scale
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-folder-tree text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Why teams keep secrets per repository</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-octo-accent mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Ownership alignment</p>
                                    <p class="text-gray-400 text-sm">Application teams own their repository, their code, and their configuration — including secrets</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-octo-accent mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">GitOps compatibility</p>
                                    <p class="text-gray-400 text-sm">Encrypted secrets in Git enable declarative, version-controlled deployments without external dependencies</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-octo-accent mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Audit trail</p>
                                    <p class="text-gray-400 text-sm">Changes to secrets are tracked through Git history with full commit attribution</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-octo-accent mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Deployment simplicity</p>
                                    <p class="text-gray-400 text-sm">No runtime dependencies on external secret stores during cluster bootstrapping or disaster recovery</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-octo-accent mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Isolation by default</p>
                                    <p class="text-gray-400 text-sm">Each repository maintains its own security boundary without shared access patterns</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <div class="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-database text-orange-400 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Why central vaults are often rejected</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-xmark text-orange-400 mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Network dependency</p>
                                    <p class="text-gray-400 text-sm">Applications must reach external systems at runtime, creating failure points and latency</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-xmark text-orange-400 mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Credential sprawl</p>
                                    <p class="text-gray-400 text-sm">Requires distributing vault credentials to every application, introducing new attack vectors</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-xmark text-orange-400 mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Operational complexity</p>
                                    <p class="text-gray-400 text-sm">Central infrastructure must be highly available, maintained, and secured independently</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-xmark text-orange-400 mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">Compliance friction</p>
                                    <p class="text-gray-400 text-sm">Security teams often prohibit centralized secret storage due to concentration of risk</p>
                                </div>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-xmark text-orange-400 mt-1"></i>
                                <div>
                                    <p class="text-gray-300 font-medium mb-1">GitOps incompatibility</p>
                                    <p class="text-gray-400 text-sm">Breaks declarative model by requiring imperative secret fetching at deployment time</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 bg-octo-dark border border-octo-border rounded-xl p-8">
                    <div class="flex items-start space-x-4">
                        <i class="fa-solid fa-lightbulb text-yellow-400 text-2xl mt-1"></i>
                        <div>
                            <h4 class="text-xl font-bold text-white mb-3">The pattern persists because it works</h4>
                            <p class="text-gray-300 leading-relaxed">
                                Repository-local encrypted secrets are not a workaround — they are a deliberate architectural choice that aligns with GitOps principles, organizational ownership models, and security isolation requirements. The challenge is not eliminating this pattern, but governing it at scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealitySection;
