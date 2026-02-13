import type { Component } from 'solid-js';

const Step1RepositorySetup: Component = () => {
    return (
        <section id="step1-repository-setup" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-start space-x-8 mb-12">
                    <div class="flex-shrink-0">
                        <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center">
                            <span class="text-3xl font-bold text-white">1</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-white mb-4">Step 1: Repository setup with per-repo encrypted files</h2>
                        <p class="text-lg text-gray-400 mb-8">
                            Each repository contains its own encrypted configuration files, SOPS policy, and secret definitions. No secrets are shared across repositories.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fa-solid fa-folder-tree text-octo-accent mr-3"></i>
                            Repository structure
                        </h3>
                        <div class="bg-octo-darker border border-octo-border rounded-lg p-6 font-mono text-sm">
                            <div class="space-y-2">
                                <div class="flex items-center space-x-2 text-gray-400">
                                    <i class="fa-solid fa-folder text-yellow-400"></i>
                                    <span>my-application/</span>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-400 pl-6">
                                    <i class="fa-solid fa-folder text-yellow-400"></i>
                                    <span>config/</span>
                                </div>
                                <div class="flex items-center space-x-2 text-blue-400 pl-12">
                                    <i class="fa-solid fa-file-code"></i>
                                    <span>application.secrets</span>
                                    <span class="ml-auto text-xs text-gray-500 font-sans">← Encrypted</span>
                                </div>
                                <div class="flex items-center space-x-2 text-green-400 pl-12">
                                    <i class="fa-solid fa-file-code"></i>
                                    <span>application.properties</span>
                                    <span class="ml-auto text-xs text-gray-500 font-sans">← Encrypted</span>
                                </div>
                                <div class="flex items-center space-x-2 text-yellow-400 pl-12">
                                    <i class="fa-solid fa-file-code"></i>
                                    <span>sops.yaml</span>
                                    <span class="ml-auto text-xs text-gray-500 font-sans">← Policy</span>
                                </div>
                                <div class="flex items-center space-x-2 text-purple-400 pl-12">
                                    <i class="fa-solid fa-key"></i>
                                    <span>repo.gpg.pub</span>
                                    <span class="ml-auto text-xs text-gray-500 font-sans">← Signed key (added later)</span>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-400 pl-6">
                                    <i class="fa-solid fa-folder text-yellow-400"></i>
                                    <span>src/</span>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-400 pl-6">
                                    <i class="fa-solid fa-file text-gray-500"></i>
                                    <span>README.md</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                            <div class="flex items-start space-x-3">
                                <i class="fa-solid fa-info-circle text-blue-400 mt-0.5"></i>
                                <div>
                                    <h4 class="text-white font-bold mb-2 text-sm">Repository isolation</h4>
                                    <p class="text-gray-400 text-xs">Each repository maintains complete ownership of its encrypted secrets. No external dependencies required for decryption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-6">
                            <h4 class="text-white font-bold mb-4 flex items-center">
                                <i class="fa-solid fa-file-code text-blue-400 mr-3"></i>
                                application.secrets (encrypted)
                            </h4>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4 font-mono text-xs text-gray-400">
                                <pre class="overflow-x-auto">
                                    {`database:
  password: ENC[AES256_GCM,data:8h3kJ...,iv:pQ7x...]
  username: ENC[AES256_GCM,data:9mK2L...,iv:rT8y...]
api:
  key: ENC[AES256_GCM,data:3nM5P...,iv:sU9z...]
sops:
  kms: []
  gcp_kms: []
  azure_kv: []
  pgp:
    - fp: A1B2C3D4E5F6...
      created_at: '2024-01-15T10:30:00Z'`}
                                </pre>
                            </div>
                            <p class="text-gray-400 text-xs mt-3">Secrets encrypted with repository-scoped GPG key using Mozilla SOPS</p>
                        </div>
                        <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-6">
                            <h4 class="text-white font-bold mb-4 flex items-center">
                                <i class="fa-solid fa-file-code text-yellow-400 mr-3"></i>
                                sops.yaml (policy)
                            </h4>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4 font-mono text-xs text-gray-400">
                                <pre class="overflow-x-auto">
                                    {`creation_rules:
  - path_regex: \.secrets$
    pgp: 'A1B2C3D4E5F6...'
    encrypted_regex: '^(password|key|token|secret)$'
  - path_regex: \.properties$
    pgp: 'A1B2C3D4E5F6...'
    encrypted_regex: '^(database|api).*'`}
                                </pre>
                            </div>
                            <p class="text-gray-400 text-xs mt-3">SOPS policy defines which fields to encrypt and which GPG key to use</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <i class="fa-solid fa-check-circle text-green-400 text-xl"></i>
                            <h4 class="text-white font-bold">Declarative</h4>
                        </div>
                        <p class="text-gray-400 text-sm">All configuration in Git, version-controlled and auditable</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <i class="fa-solid fa-check-circle text-green-400 text-xl"></i>
                            <h4 class="text-white font-bold">Isolated</h4>
                        </div>
                        <p class="text-gray-400 text-sm">Each repo has its own encryption key and policy</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <i class="fa-solid fa-check-circle text-green-400 text-xl"></i>
                            <h4 class="text-white font-bold">GitOps-native</h4>
                        </div>
                        <p class="text-gray-400 text-sm">No external dependencies for deployment</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step1RepositorySetup;
