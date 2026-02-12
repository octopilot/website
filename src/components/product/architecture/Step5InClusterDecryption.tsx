import type { Component } from 'solid-js';

const Step5InClusterDecryption: Component = () => {
    return (
        <section id="step5-in-cluster-decryption" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-start space-x-8 mb-12">
                    <div class="flex-shrink-0">
                        <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center">
                            <span class="text-3xl font-bold text-white">5</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-white mb-4">Step 5: Controller decrypts only in-cluster and reconciles Kubernetes Secrets</h2>
                        <p class="text-lg text-gray-400 mb-8">
                            The open-source secrets-manager-controller runs inside your Kubernetes cluster, reading the signed public key from the repository and decrypting secrets locally.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div class="space-y-4">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fa-solid fa-dharmachakra text-green-400 mr-3"></i>
                            Controller reconciliation loop
                        </h3>
                        <div class="bg-octo-darker border border-green-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-400 font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Watch repository</h4>
                                    <p class="text-gray-400 text-sm">Controller monitors Git repository for changes via webhook or polling</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-darker border border-green-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-400 font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Read signed public key</h4>
                                    <p class="text-gray-400 text-sm">Fetches <code class="text-octo-accent font-mono text-xs">config/repo.gpg.pub</code> from repository</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-darker border border-green-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-400 font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Verify signature</h4>
                                    <p class="text-gray-400 text-sm">Validates Octopilot's signature on the public key</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-darker border border-green-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-400 font-bold text-sm">4</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Read encrypted secrets</h4>
                                    <p class="text-gray-400 text-sm">Fetches <code class="text-octo-accent font-mono text-xs">application.secrets</code> and <code class="text-octo-accent font-mono text-xs">sops.yaml</code></p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-darker border border-green-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-400 font-bold text-sm">5</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Decrypt in-cluster</h4>
                                    <p class="text-gray-400 text-sm">Uses GPG private key (stored securely in cluster) to decrypt secrets</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-darker border border-green-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-400 font-bold text-sm">6</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Create Kubernetes Secret</h4>
                                    <p class="text-gray-400 text-sm">Reconciles decrypted values into standard Kubernetes Secret resource</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="h-full flex items-center">
                        <div class="relative overflow-hidden rounded-lg animate-pulse-glow w-full">
                            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
                            <img
                                src="/assets/architecture-reconciliation.png"
                                alt="Octopilot Controller Reconciliation Loop visualisation"
                                class="relative z-10 w-full h-auto rounded-lg border border-octo-border shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step5InClusterDecryption;
