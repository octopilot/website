import type { Component } from 'solid-js';

const EncryptionStandards: Component = () => {
    return (
        <section id="encryption-standards" class="py-16 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span class="text-blue-400 font-bold text-sm uppercase tracking-wider">Encryption Standards</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Industry-Standard Cryptographic Protocols</h2>

                <div class="grid grid-cols-2 gap-8 mb-12">
                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-lock text-blue-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">GPG/PGP Encryption</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-semibold">Algorithm</span>
                                    <span class="text-blue-400 font-mono text-sm">RSA 4096-bit</span>
                                </div>
                                <p class="text-slate-400 text-sm">Industry-standard asymmetric encryption with 4096-bit key length—resistant to quantum computing attacks for decades.</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-semibold">Key Format</span>
                                    <span class="text-blue-400 font-mono text-sm">OpenPGP RFC 4880</span>
                                </div>
                                <p class="text-slate-400 text-sm">Fully compliant with OpenPGP standard—interoperable with GPG, sops, and other PGP-compatible tools.</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-semibold">Cipher Suite</span>
                                    <span class="text-blue-400 font-mono text-sm">AES-256-GCM</span>
                                </div>
                                <p class="text-slate-400 text-sm">Symmetric encryption using AES-256 in Galois/Counter Mode—NIST-approved, FIPS 140-2 compliant.</p>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-blue-950/20 to-slate-900/50 border border-blue-900/30 rounded-lg p-4">
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-info-circle text-blue-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Why GPG?</div>
                                    <p class="text-slate-400 text-sm">GPG is the gold standard for file encryption—battle-tested since 1999, used by governments and enterprises worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-key text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Key Management</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-semibold">Cloud KMS Integration</span>
                                    <span class="text-purple-400 font-mono text-sm">AWS/GCP/Azure</span>
                                </div>
                                <p class="text-slate-400 text-sm">Private keys stored in cloud KMS—AWS KMS, GCP Cloud KMS, or Azure Key Vault. Never stored on disk unencrypted.</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-semibold">HSM Support</span>
                                    <span class="text-purple-400 font-mono text-sm">FIPS 140-2 Level 3</span>
                                </div>
                                <p class="text-slate-400 text-sm">Enterprise deployments can use hardware security modules (HSM) for FIPS 140-2 Level 3 compliance.</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-semibold">Key Rotation</span>
                                    <span class="text-purple-400 font-mono text-sm">Automated</span>
                                </div>
                                <p class="text-slate-400 text-sm">Automated key rotation with configurable schedules (30/60/90 days)—old secrets re-encrypted with new keys.</p>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-purple-950/20 to-slate-900/50 border border-purple-900/30 rounded-lg p-4">
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-info-circle text-purple-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Zero Trust Architecture</div>
                                    <p class="text-slate-400 text-sm">Controller never has persistent access to KMS—keys fetched on-demand with short-lived tokens, immediately discarded.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Encryption Flow Diagram</h3>
                    <div class="bg-octo-darker border border-slate-700 rounded-lg p-8">
                        <div class="grid grid-cols-4 gap-6">
                            <div class="text-center">
                                <div class="w-20 h-20 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <i class="fa-solid fa-file-lines text-green-400 text-2xl"></i>
                                </div>
                                <div class="text-white font-semibold mb-2">Plaintext Secret</div>
                                <div class="text-slate-400 text-sm mb-3">YAML with API keys</div>
                                <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                    <pre class="text-green-400 text-xs">password: secret123</pre>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col items-center gap-2">
                                    <i class="fa-solid fa-arrow-right text-slate-600 text-2xl"></i>
                                    <span class="text-slate-500 text-xs">GPG Encrypt</span>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="w-20 h-20 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <i class="fa-solid fa-lock text-blue-400 text-2xl"></i>
                                </div>
                                <div class="text-white font-semibold mb-2">Encrypted Secret</div>
                                <div class="text-slate-400 text-sm mb-3">Ciphertext in Git</div>
                                <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                    <pre class="text-blue-400 text-xs">ENC[AES256_GCM,...</pre>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col items-center gap-2">
                                    <i class="fa-solid fa-arrow-right text-slate-600 text-2xl"></i>
                                    <span class="text-slate-500 text-xs">Runtime Decrypt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 grid grid-cols-3 gap-4">
                        <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-white font-semibold text-sm">At Rest</span>
                            </div>
                            <p class="text-slate-400 text-xs">Encrypted in Git repository—safe to commit to public repos</p>
                        </div>
                        <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-white font-semibold text-sm">In Transit</span>
                            </div>
                            <p class="text-slate-400 text-xs">TLS-encrypted during Git push/pull—never transmitted plaintext</p>
                        </div>
                        <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-white font-semibold text-sm">In Use</span>
                            </div>
                            <p class="text-slate-400 text-xs">Decrypted in-memory only—never written to disk unencrypted</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EncryptionStandards;
