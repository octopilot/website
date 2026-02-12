import type { Component } from 'solid-js';

const SecurityModelSection: Component = () => {
    return (
        <section id="security-model-section" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Security model</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Explicit guarantees about what Octopilot does and does not have access to
                    </p>
                </div>

                <div class="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-8 mb-12">
                    <div class="flex items-start space-x-6">
                        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-unlock-keyhole text-blue-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-4">Where secrets can be decrypted</h3>
                            <p class="text-gray-300 leading-relaxed mb-6">
                                Repository-local encrypted secrets are designed for flexibility across your entire development and deployment lifecycle. The same encrypted files can be safely decrypted in multiple contexts without compromising security or requiring centralized infrastructure.
                            </p>
                            <div class="grid grid-cols-2 gap-6">
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-5">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <i class="fa-solid fa-laptop-code text-blue-400 text-lg"></i>
                                        <h4 class="text-white font-bold">Local development machines</h4>
                                    </div>
                                    <p class="text-gray-400 text-sm leading-relaxed">
                                        Engineers decrypt secrets locally using SOPS with their authorized GPG keys, enabling secure local testing and development without network dependencies or credential sharing.
                                    </p>
                                </div>
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-5">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <i class="fa-brands fa-github text-blue-400 text-lg"></i>
                                        <h4 class="text-white font-bold">GitHub CI pipelines</h4>
                                    </div>
                                    <p class="text-gray-400 text-sm leading-relaxed">
                                        Secrets are decrypted during build and test workflows using repository-scoped keys, allowing automated testing with real configuration while maintaining encryption at rest in Git.
                                    </p>
                                </div>
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-5">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <i class="fa-solid fa-dharmachakra text-blue-400 text-lg"></i>
                                        <h4 class="text-white font-bold">Kubernetes deployments</h4>
                                    </div>
                                    <p class="text-gray-400 text-sm leading-relaxed">
                                        The open-source controller decrypts secrets in-cluster and reconciles them into native Kubernetes Secrets, providing seamless integration with existing applications and GitOps workflows.
                                    </p>
                                </div>
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-5">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <i class="fa-solid fa-cloud text-blue-400 text-lg"></i>
                                        <h4 class="text-white font-bold">Serverless deployments</h4>
                                    </div>
                                    <p class="text-gray-400 text-sm leading-relaxed">
                                        Cloud provider deployment pipelines (AWS Lambda, Google Cloud Functions, Azure Functions) decrypt secrets during function packaging or runtime initialization using platform-native key management.
                                    </p>
                                </div>
                            </div>
                            <div class="mt-6 bg-octo-darker/50 border border-blue-500/10 rounded-lg p-4">
                                <div class="flex items-start space-x-3">
                                    <i class="fa-solid fa-circle-info text-blue-400 mt-1"></i>
                                    <p class="text-gray-400 text-sm leading-relaxed">
                                        In every scenario, decryption happens using the repository's signed GPG key, ensuring consistent security policy enforcement regardless of where secrets are accessed. Octopilot governs the keys but never participates in decryption operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 mb-12">
                    <div class="bg-octo-gray/30 border-2 border-green-500/30 rounded-xl p-8">
                        <div class="flex items-center space-x-3 mb-6">
                            <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-lock text-green-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">What Octopilot guarantees</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="bg-octo-dark border border-green-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-check-circle text-green-400 mr-3"></i>
                                    Secrets never leave encrypted form
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Octopilot never receives, processes, or stores plaintext secrets. All secrets remain encrypted in repositories.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-green-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-check-circle text-green-400 mr-3"></i>
                                    Decryption in authorized contexts only
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Secrets are decrypted only where explicitly authorized: local dev machines, CI pipelines, Kubernetes clusters, or serverless platforms. Octopilot never performs decryption.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-green-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-check-circle text-green-400 mr-3"></i>
                                    No cluster credentials required
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Octopilot does not require access to your Kubernetes clusters, cloud credentials, or infrastructure.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-green-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-check-circle text-green-400 mr-3"></i>
                                    Repository-scoped access only
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    GitHub App permissions are limited to reading repository metadata and writing signed GPG public keys via pull requests.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-green-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-check-circle text-green-400 mr-3"></i>
                                    Cryptographic verification
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    All GPG keys are cryptographically signed by Octopilot's authority. Signature verification ensures key authenticity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-octo-gray/30 border-2 border-orange-500/30 rounded-xl p-8">
                        <div class="flex items-center space-x-3 mb-6">
                            <div class="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-ban text-orange-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">What Octopilot does NOT do</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="bg-octo-dark border border-orange-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-xmark text-orange-400 mr-3"></i>
                                    Does not handle plaintext secrets
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Octopilot never receives, decrypts, or processes secrets in plaintext form under any circumstance.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-orange-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-xmark text-orange-400 mr-3"></i>
                                    Does not store secrets
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Secrets remain in repositories. Octopilot stores only GPG key metadata and signatures, never secret values.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-orange-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-xmark text-orange-400 mr-3"></i>
                                    Does not access Kubernetes clusters
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    No cluster credentials, kubeconfig files, or cloud provider access. Octopilot operates entirely at the GitHub layer.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-orange-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-xmark text-orange-400 mr-3"></i>
                                    Does not share keys across repositories
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Each repository has its own unique GPG key pair. Key reuse is prevented by policy enforcement.
                                </p>
                            </div>
                            <div class="bg-octo-dark border border-orange-500/20 rounded-lg p-4">
                                <h4 class="text-white font-bold mb-2 flex items-center">
                                    <i class="fa-solid fa-xmark text-orange-400 mr-3"></i>
                                    Does not require code changes
                                </h4>
                                <p class="text-gray-400 text-sm pl-8">
                                    Applications continue using existing encrypted files. No SDK, agent, or code modification required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-8">
                    <div class="flex items-start space-x-6">
                        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-shield-halved text-blue-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-3">Trust model</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Octopilot operates as a <strong>signing authority</strong>, not a secret manager. Its role is to cryptographically sign GPG public keys, establishing verifiable trust without ever handling sensitive data. This trust model is similar to certificate authorities in PKI: Octopilot attests to key authenticity, while secrets remain encrypted and under repository ownership.
                            </p>
                            <div class="grid grid-cols-3 gap-4 mt-6">
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-4">
                                    <h4 class="text-white font-bold mb-2 text-sm">GitHub App</h4>
                                    <p class="text-gray-400 text-xs">Limited repository metadata access, PR creation only</p>
                                </div>
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-4">
                                    <h4 class="text-white font-bold mb-2 text-sm">GPG Signing</h4>
                                    <p class="text-gray-400 text-xs">Cryptographic signatures provide verifiable trust chain</p>
                                </div>
                                <div class="bg-octo-dark/50 border border-blue-500/20 rounded-lg p-4">
                                    <h4 class="text-white font-bold mb-2 text-sm">Flexible Decryption</h4>
                                    <p class="text-gray-400 text-xs">You control where and how secrets are decrypted across your infrastructure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityModelSection;
