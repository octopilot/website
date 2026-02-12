import type { Component } from 'solid-js';

const DocsArchitecture: Component = () => {
    return (
        <section id="architecture-overview" class="py-16 border-b border-slate-800/50">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span class="text-purple-400 font-bold text-sm uppercase tracking-wider">Architecture</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">How Encryption Is Enforced</h2>

                <div class="grid grid-cols-2 gap-8 mb-12">
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-lock text-blue-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Encryption Layer</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-1 text-blue-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Repository-Scoped Keys</div>
                                    <p class="text-slate-400 text-sm">Each repository gets a unique GPG key pair (RSA 4096-bit). Private keys stored in cloud KMS (AWS/GCP/Azure).</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-2 text-blue-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Local Encryption</div>
                                    <p class="text-slate-400 text-sm">Developers encrypt secrets locally using octopilot CLI or sops. Encrypted YAML committed to Git—plaintext never leaves workstation.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-3 text-blue-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Git as Source of Truth</div>
                                    <p class="text-slate-400 text-sm">Encrypted secrets version-controlled in Git. Every change tracked with signed commits—immutable audit trail.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-unlock text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Decryption Layer</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-1 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Controller Watches Git</div>
                                    <p class="text-slate-400 text-sm">secret-controller-manager deployed in Kubernetes monitors Git commits via GitHub webhook.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-2 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Runtime Decryption</div>
                                    <p class="text-slate-400 text-sm">Controller fetches GPG private key from KMS, decrypts secret in-memory, injects into Kubernetes namespace.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-3 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Pod Injection</div>
                                    <p class="text-slate-400 text-sm">Decrypted secrets available to pods as environment variables or mounted volumes—never written to disk unencrypted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Data Flow Diagram</h3>
                    <div class="bg-slate-950 border border-slate-700 rounded-lg p-8">
                        <div class="grid grid-cols-5 gap-4 items-center">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <i class="fa-solid fa-user text-blue-400 text-2xl"></i>
                                </div>
                                <div class="text-white font-semibold text-sm mb-1">Developer</div>
                                <div class="text-slate-500 text-xs">Encrypts locally</div>
                            </div>
                            <div class="flex items-center justify-center">
                                <i class="fa-solid fa-arrow-right text-slate-600 text-2xl"></i>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <i class="fa-brands fa-github text-purple-400 text-2xl"></i>
                                </div>
                                <div class="text-white font-semibold text-sm mb-1">Git Repository</div>
                                <div class="text-slate-500 text-xs">Stores encrypted</div>
                            </div>
                            <div class="flex items-center justify-center">
                                <i class="fa-solid fa-arrow-right text-slate-600 text-2xl"></i>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <i class="fa-solid fa-dharmachakra text-cyan-400 text-2xl"></i>
                                </div>
                                <div class="text-white font-semibold text-sm mb-1">Kubernetes</div>
                                <div class="text-slate-500 text-xs">Decrypts runtime</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-6">
                    <div class="bg-gradient-to-br from-green-950/30 to-slate-900 border border-green-900/50 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-shield-halved text-green-400"></i>
                            </div>
                            <h4 class="text-white font-bold">Cryptographic Isolation</h4>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Secrets encrypted with repo A's GPG key cannot be decrypted by repo B. No shared keys, no cross-team access—mathematically enforced.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-900/50 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-clock-rotate-left text-blue-400"></i>
                            </div>
                            <h4 class="text-white font-bold">Immutable Audit Trail</h4>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Every secret change tracked in Git commit history with signed commits. Auditors get cryptographic proof of who changed what when.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-purple-950/30 to-slate-900 border border-purple-900/50 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-ban text-purple-400"></i>
                            </div>
                            <h4 class="text-white font-bold">No Central Vault</h4>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Secrets never leave repositories—no centralized vault means no single point of failure, no bottlenecks, no Vault outages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocsArchitecture;
