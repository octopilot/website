import type { Component } from 'solid-js';
import DocsLayout from '../../components/docs/DocsLayout';

const CoreConcepts: Component = () => {
    const tocItems = [
        { id: "security-model", text: "Security Model" },
        { id: "sops-age", text: "SOPS & AGE" },
        { id: "asymmetric-encryption", text: "Asymmetric Encryption" },
        { id: "multi-key", text: "Multi-Key Encryption" },
        { id: "openbao-transit", text: "OpenBAO Transit" }
    ];

    return (
        <DocsLayout tocItems={tocItems}>
            <div class="mb-12">
                <div class="flex items-center gap-3 mb-4">
                    <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider">
                        Concept
                    </span>
                    <span class="text-slate-500">•</span>
                    <span class="text-slate-400 text-sm">Architecture & Security</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Core Concepts</h1>
                <p class="text-xl text-slate-400 leading-relaxed max-w-3xl">
                    Understand the cryptographic foundations of Octopilot, including SOPS, AGE keys, and how we achieve secure, GitOps-native secret management without a central vault.
                </p>
            </div>

            <div class="space-y-16">
                {/* Security Model Section */}
                <section id="security-model" class="scroll-mt-24">
                    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div class="w-2 h-8 bg-blue-500 rounded-full"></div>
                        Security Model
                    </h2>
                    <div class="prose prose-invert max-w-none text-slate-300">
                        <p class="mb-4">
                            Octopilot operates on a <strong>decentralized, repository-local trust model</strong>. Unlike traditional secret managers that store secrets in a centralized database (like HashiCorp Vault), Octopilot keeps secrets encrypted alongside your code in Git.
                        </p>
                        <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-400">
                            <li><strong>Zero Trust Storage:</strong> Git providers (GitHub, GitLab) only ever see encrypted data. They are treated as untrusted storage backends.</li>
                            <li><strong>Runtime Decryption:</strong> Secrets are only decrypted inside your Kubernetes cluster, in memory, by the custom controller.</li>
                            <li><strong>Cryptographic Isolation:</strong> Each repository or team has its own unique encryption keys. Compromise of one key does not compromise the entire organization.</li>
                        </ul>
                    </div>
                </section>

                {/* SOPS & AGE Section */}
                <section id="sops-age" class="scroll-mt-24">
                    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div class="w-2 h-8 bg-purple-500 rounded-full"></div>
                        SOPS & AGE
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-white mb-3">Mozilla SOPS</h3>
                            <p class="text-slate-400 text-sm mb-4">
                                <strong>Secrets OPerationS</strong> is an editor for encrypted files that supports YAML, JSON, ENV, and BINARY formats.
                            </p>
                            <div class="text-slate-300 text-sm space-y-2">
                                <p>We use SOPS as the underlying encryption engine because:</p>
                                <ul class="list-disc pl-4 space-y-1 text-slate-400">
                                    <li>It preserves file structure (keys are visible, values are encrypted).</li>
                                    <li> It supports valid YAML/JSON output, making diffs readable.</li>
                                    <li>It has robust AWS KMS, GCP KMS, and Azure Key Vault integration.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-white mb-3">Hybrid Cryptography</h3>
                            <p class="text-slate-400 text-sm mb-4">
                                Octopilot uses a <strong>Hybrid Model</strong> to balance security and usability:
                            </p>
                            <div class="text-slate-300 text-sm space-y-4">
                                <div>
                                    <strong class="text-emerald-400 block mb-1">PGP for Humans</strong>
                                    <p class="text-slate-400 text-xs">
                                        Developers use PGP keys because they support <strong>Attestation</strong> (signing). This allows the organization to verify <em>who</em> encrypted a secret and ensure their key is still valid.
                                    </p>
                                </div>
                                <div>
                                    <strong class="text-purple-400 block mb-1">AGE for Machines</strong>
                                    <p class="text-slate-400 text-xs">
                                        CI/CD pipelines and Kubernetes Clusters use <strong>AGE</strong> keys. Machines don't need identity attestation; they need simple, secure, and fast decryption without the complexity of managing a PGP keyring.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Asymmetric Encryption Section */}
                <section id="asymmetric-encryption" class="scroll-mt-24">
                    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div class="w-2 h-8 bg-emerald-500 rounded-full"></div>
                        Asymmetric Encryption
                    </h2>
                    <div class="prose prose-invert max-w-none text-slate-300 mb-6">
                        <p>
                            Octopilot relies on <strong>Asymmetric Encryption</strong> (Public/Private Key Cryptography) to enable a secure workflow where developers can encrypt secrets without having the permission to decrypt them.
                        </p>
                    </div>

                    <div class="bg-slate-950 border border-slate-800 rounded-xl p-8 mb-6">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div class="flex-1 text-center md:text-left">
                                <div class="inline-block p-4 bg-blue-500/10 rounded-lg mb-3">
                                    <i class="fa-solid fa-lock text-3xl text-blue-400"></i>
                                </div>
                                <h4 class="text-lg font-bold text-white mb-2">Public Key</h4>
                                <p class="text-sm text-slate-400">
                                    Safe to share. Used by developers and CI systems to <strong>Encrypt</strong> data. Anyone with this key can lock a secret.
                                </p>
                            </div>

                            <div class="hidden md:flex flex-col items-center text-slate-600">
                                <i class="fa-solid fa-arrow-right text-2xl"></i>
                                <span class="text-xs uppercase font-bold tracking-widest mt-2">One Way</span>
                            </div>

                            <div class="flex-1 text-center md:text-right">
                                <div class="inline-block p-4 bg-red-500/10 rounded-lg mb-3">
                                    <i class="fa-solid fa-key text-3xl text-red-400"></i>
                                </div>
                                <h4 class="text-lg font-bold text-white mb-2">Private Key</h4>
                                <p class="text-sm text-slate-400">
                                    Kept strictly secure. Used by the Kubernetes Controller to <strong>Decrypt</strong> data. This key never leaves the secure cluster environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Multi-Key Encryption Section */}
                <section id="multi-key" class="scroll-mt-24">
                    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div class="w-2 h-8 bg-orange-500 rounded-full"></div>
                        Multi-Key Encryption
                    </h2>
                    <div class="prose prose-invert max-w-none text-slate-300 mb-8">
                        <p>
                            One of the most powerful features of SOPS is the ability to encrypt a single file against <strong>multiple public keys</strong> simultaneously. This enables complex "Circle of Trust" scenarios.
                        </p>
                        <p>
                            When you encrypt a secret with Octopilot, the data encryption key (DEK) is generated once, and then that DEK is encrypted individually for each recipient (public key) listed in the `.sops.yaml` configuration.
                        </p>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                        <div class="p-4 bg-slate-950 border-b border-slate-800 flex items-center gap-2">
                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span class="ml-2 text-xs text-slate-400 font-mono">.sops.yaml example</span>
                        </div>
                        <div class="p-6 overflow-x-auto">
                            <pre class="text-sm font-mono text-slate-300 overflow-x-auto whitespace-pre">
                                <span class="text-purple-400">creation_rules:</span>{"\n"}
                                <span class="text-blue-400">- path_regex:</span> production/.*{"\n"}
                                <span class="text-blue-400">key_groups:</span>{"\n"}
                                <span class="text-slate-500"># Human Developers (PGP - Attested Identity)</span>{"\n"}
                                <span class="text-blue-400">- pgp:</span>{"\n"}
                                <span class="text-green-400">- </span>1234567890ABCDEF... <span class="text-slate-500"># Alice (Dev)</span>{"\n"}
                                <span class="text-green-400">- </span>0987654321FEDCBA... <span class="text-slate-500"># Bob (Dev)</span>{"\n"}
                                <span class="text-slate-500"># Machine Bots (AGE - Simple Decryption)</span>{"\n"}
                                <span class="text-blue-400">- age:</span>{"\n"}
                                <span class="text-green-400">- </span>age1prodcluster... <span class="text-slate-500"># K8s Controller</span>{"\n"}
                                <span class="text-green-400">- </span>age1cicdbot...     <span class="text-slate-500"># CI Runner</span>
                            </pre>
                        </div>
                    </div>

                    <div class="mt-6 flex gap-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                        <i class="fa-solid fa-circle-info text-blue-400 mt-1"></i>
                        <p class="text-sm text-slate-300">
                            The file is physically the same. The controller uses its key to unlock the DEK. The admin uses their key to unlock the <strong>same</strong> DEK. This allows for safe backups and key rotation without re-encrypting the entire history of secrets if one key is lost.
                        </p>
                    </div>
                </section>

                {/* OpenBAO Transit Section */}
                <section id="openbao-transit" class="scroll-mt-24">
                    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div class="w-2 h-8 bg-pink-500 rounded-full"></div>
                        OpenBAO Transit Integration
                    </h2>
                    <div class="prose prose-invert max-w-none text-slate-300 mb-8">
                        <p>
                            For organizations requiring complete data sovereignty or running in air-gapped environments, Octopilot supports <strong>OpenBAO Transit Engine</strong> (formerly Vault Transit) as a Key Management Service.
                        </p>
                        <p>
                            Instead of relying on cloud providers like AWS KMS or Google Cloud KMS, you can use your self-hosted OpenBAO cluster to wrap the data encryption keys. This is ideal for protecting sensitive <strong>database credentials</strong> and API tokens without them ever leaving your infrastructure.
                        </p>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <h3 class="text-xl font-bold text-white mb-4">How It Works</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-pink-400 font-bold mb-2">Encryption Path</h4>
                                <ol class="list-decimal list-inside space-y-2 text-slate-400 text-sm">
                                    <li>Developer runs <code>octopilot encrypt secret.yaml</code>.</li>
                                    <li>SOPS generates a local Data Key.</li>
                                    <li>SOPS sends the Data Key to OpenBAO's <code>/transit/encrypt</code> endpoint.</li>
                                    <li>OpenBAO wraps the key and returns ciphertext.</li>
                                    <li>Encrypted file is written to disk with the wrapped key in metadata.</li>
                                </ol>
                            </div>
                            <div class="bg-slate-950 border border-slate-800 rounded-lg p-4">
                                <div class="text-slate-500 text-xs mb-2">.sops.yaml Configuration</div>
                                <pre class="text-sm font-mono text-slate-300 overflow-x-auto whitespace-pre">
                                    <span class="text-blue-400">creation_rules:</span>{"\n"}
                                    <span class="text-blue-400">- path_regex:</span> database/.*{"\n"}
                                    <span class="text-blue-400">hashicorp_vaults:</span>{"\n"}
                                    <span class="text-green-400">- </span>http://openbao.internal:8200/v1/transit/keys/db-key
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DocsLayout>
    );
};

export default CoreConcepts;
