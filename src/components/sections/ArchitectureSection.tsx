import type { Component } from 'solid-js';

const ArchitectureSection: Component = () => {
    return (
        <section id="architecture-section" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Architecture overview</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        How Octopilot governs repository-local secrets without centralizing them
                    </p>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl p-12">
                    <div class="grid grid-cols-3 gap-8 mb-12">
                        <div class="bg-octo-gray/50 border border-octo-border rounded-lg p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h4 class="text-lg font-bold text-white">Repository A</h4>
                                <i class="fa-brands fa-github text-gray-400 text-xl"></i>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-blue-400"></i>
                                    <code class="text-gray-300 font-mono">application.secrets</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-green-400"></i>
                                    <code class="text-gray-300 font-mono">application.properties</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-yellow-400"></i>
                                    <code class="text-gray-300 font-mono">sops.yaml</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm bg-octo-accent/10 border border-octo-accent/30 rounded px-2 py-1.5">
                                    <i class="fa-solid fa-key text-octo-accent"></i>
                                    <code class="text-octo-accent font-mono text-xs">repo-A.gpg.pub</code>
                                    <i class="fa-solid fa-certificate text-octo-accent text-xs ml-auto" title="Signed by Octopilot"></i>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-gray/50 border border-octo-border rounded-lg p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h4 class="text-lg font-bold text-white">Repository B</h4>
                                <i class="fa-brands fa-github text-gray-400 text-xl"></i>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-blue-400"></i>
                                    <code class="text-gray-300 font-mono">application.secrets</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-green-400"></i>
                                    <code class="text-gray-300 font-mono">application.properties</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-yellow-400"></i>
                                    <code class="text-gray-300 font-mono">sops.yaml</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm bg-octo-accent/10 border border-octo-accent/30 rounded px-2 py-1.5">
                                    <i class="fa-solid fa-key text-octo-accent"></i>
                                    <code class="text-octo-accent font-mono text-xs">repo-B.gpg.pub</code>
                                    <i class="fa-solid fa-certificate text-octo-accent text-xs ml-auto" title="Signed by Octopilot"></i>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-gray/50 border border-octo-border rounded-lg p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h4 class="text-lg font-bold text-white">Repository C</h4>
                                <i class="fa-brands fa-github text-gray-400 text-xl"></i>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-blue-400"></i>
                                    <code class="text-gray-300 font-mono">application.secrets</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-green-400"></i>
                                    <code class="text-gray-300 font-mono">application.properties</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm">
                                    <i class="fa-solid fa-file-code text-yellow-400"></i>
                                    <code class="text-gray-300 font-mono">sops.yaml</code>
                                </div>
                                <div class="flex items-center space-x-2 text-sm bg-octo-accent/10 border border-octo-accent/30 rounded px-2 py-1.5">
                                    <i class="fa-solid fa-key text-octo-accent"></i>
                                    <code class="text-octo-accent font-mono text-xs">repo-C.gpg.pub</code>
                                    <i class="fa-solid fa-certificate text-octo-accent text-xs ml-auto" title="Signed by Octopilot"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mb-12">
                        <div class="flex items-center space-x-4">
                            <div class="h-px w-32 bg-gradient-to-r from-transparent to-octo-accent"></div>
                            <div class="bg-gradient-to-r from-octo-accent to-blue-600 rounded-lg p-6 border border-octo-accent">
                                <div class="flex items-center space-x-3 mb-2">
                                    <i class="fa-solid fa-shield-halved text-white text-2xl"></i>
                                    <h4 class="text-xl font-bold text-white">Octopilot</h4>
                                </div>
                                <p class="text-sm text-gray-300 text-center">Signing + Policy Authority</p>
                            </div>
                            <div class="h-px w-32 bg-gradient-to-l from-transparent to-octo-accent"></div>
                        </div>
                    </div>
                    <div class="bg-octo-gray/30 border-2 border-octo-accent/30 rounded-lg p-8">
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center space-x-3">
                                <i class="fa-solid fa-dharmachakra text-octo-accent text-2xl"></i>
                                <h4 class="text-xl font-bold text-white">Kubernetes Cluster</h4>
                            </div>
                            <span class="text-sm text-gray-400 font-mono">In-cluster decryption only</span>
                        </div>
                        <div class="bg-octo-dark border border-octo-border rounded-lg p-6">
                            <div class="flex items-center space-x-3 mb-4">
                                <i class="fa-solid fa-cube text-blue-400 text-lg"></i>
                                <code class="text-gray-300 font-mono text-sm">secrets-manager-controller</code>
                                <span class="ml-auto px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-xs font-medium">Open Source</span>
                            </div>
                            <p class="text-sm text-gray-400 mb-4">Reconciles encrypted secrets from repositories into Kubernetes Secrets using repository-scoped GPG keys</p>
                            <div class="flex items-center space-x-2 text-xs text-gray-500">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Reads signed GPG public key from repo</span>
                                <i class="fa-solid fa-arrow-right ml-4"></i>
                                <span>Decrypts secrets in-cluster</span>
                                <i class="fa-solid fa-arrow-right ml-4"></i>
                                <span>Creates Kubernetes Secrets</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-2 gap-8">
                    <div class="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fa-solid fa-circle-check text-green-400 text-xl"></i>
                            <h4 class="text-lg font-bold text-white">Security guarantees</h4>
                        </div>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-check text-green-400 mt-0.5 text-xs"></i>
                                <span>No cross-repository secret sharing</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-check text-green-400 mt-0.5 text-xs"></i>
                                <span>No plaintext secret exposure outside cluster</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-check text-green-400 mt-0.5 text-xs"></i>
                                <span>Repository-scoped GPG keys prevent key reuse</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-check text-green-400 mt-0.5 text-xs"></i>
                                <span>Cryptographic signing ensures key authenticity</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fa-solid fa-info-circle text-octo-accent text-xl"></i>
                            <h4 class="text-lg font-bold text-white">What Octopilot does NOT do</h4>
                        </div>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-xmark text-gray-500 mt-0.5 text-xs"></i>
                                <span>Does not store or distribute secrets</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-xmark text-gray-500 mt-0.5 text-xs"></i>
                                <span>Does not handle plaintext secrets</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-xmark text-gray-500 mt-0.5 text-xs"></i>
                                <span>Does not require cluster credentials</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-xmark text-gray-500 mt-0.5 text-xs"></i>
                                <span>Does not centralize secret management</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
