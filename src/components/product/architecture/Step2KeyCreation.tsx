import type { Component } from 'solid-js';

const Step2KeyCreation: Component = () => {
    return (
        <section id="step2-key-creation" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-start space-x-8 mb-12">
                    <div class="flex-shrink-0">
                        <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center">
                            <span class="text-3xl font-bold text-white">2</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-white mb-4">Step 2: Repo-scoped GPG key creation</h2>
                        <p class="text-lg text-gray-400 mb-8">
                            Octopilot generates a unique GPG key pair specifically for this repository. Each key is cryptographically isolated and cannot be reused across repositories.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fa-solid fa-key text-octo-accent mr-3"></i>
                            Key generation process
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-octo-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-octo-accent font-bold">1</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Repository identification</h4>
                                    <p class="text-gray-400 text-sm">Octopilot identifies the repository by its unique GitHub identifier (org/repo)</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-octo-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-octo-accent font-bold">2</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Key pair generation</h4>
                                    <p class="text-gray-400 text-sm">RSA 4096-bit key pair generated with repository-specific metadata embedded</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-octo-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-octo-accent font-bold">3</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Private key storage</h4>
                                    <p class="text-gray-400 text-sm">Private key securely stored in Octopilot's HSM-backed key management system</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-octo-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-octo-accent font-bold">4</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Public key prepared</h4>
                                    <p class="text-gray-400 text-sm">Public key prepared for cryptographic signing by Octopilot's authority</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-6">
                            <h4 class="text-white font-bold mb-4 flex items-center">
                                <i class="fa-solid fa-fingerprint text-purple-400 mr-3"></i>
                                Key specifications
                            </h4>
                            <div class="space-y-3 text-sm">
                                <div class="flex items-center justify-between py-2 border-b border-octo-border">
                                    <span class="text-gray-400">Algorithm</span>
                                    <span class="text-white font-mono">RSA 4096-bit</span>
                                </div>
                                <div class="flex items-center justify-between py-2 border-b border-octo-border">
                                    <span class="text-gray-400">Hash</span>
                                    <span class="text-white font-mono">SHA-512</span>
                                </div>
                                <div class="flex items-center justify-between py-2 border-b border-octo-border">
                                    <span class="text-gray-400">Scope</span>
                                    <span class="text-white font-mono">org/repo-name</span>
                                </div>
                                <div class="flex items-center justify-between py-2 border-b border-octo-border">
                                    <span class="text-gray-400">Expiration</span>
                                    <span class="text-white font-mono">90 days (configurable)</span>
                                </div>
                                <div class="flex items-center justify-between py-2">
                                    <span class="text-gray-400">Reuse</span>
                                    <span class="text-red-400 font-mono">Prohibited</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-6">
                            <h4 class="text-white font-bold mb-4 flex items-center">
                                <i class="fa-solid fa-shield-halved text-green-400 mr-3"></i>
                                Security properties
                            </h4>
                            <ul class="space-y-3 text-sm">
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span class="text-gray-300">Private key never leaves secure storage</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span class="text-gray-300">Repository metadata embedded in key</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span class="text-gray-300">Cryptographic proof of ownership</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span class="text-gray-300">Automatic rotation scheduling</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span class="text-gray-300">Immediate revocation capability</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-8 bg-orange-500/5 border border-orange-500/20 rounded-lg p-6">
                    <div class="flex items-start space-x-4">
                        <i class="fa-solid fa-ban text-orange-400 text-xl mt-1"></i>
                        <div>
                            <h4 class="text-white font-bold mb-2">Key isolation enforcement</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Octopilot's policy engine prevents key reuse across repositories. Each key's fingerprint is bound to a specific repository identifier, and any attempt to use a key outside its designated repository is cryptographically detectable and automatically rejected. This ensures complete isolation of secrets between applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step2KeyCreation;
