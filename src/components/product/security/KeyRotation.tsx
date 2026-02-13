import type { Component } from 'solid-js';

const KeyRotation: Component = () => {
    return (
        <section id="key-rotation" class="py-16 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-cyan-400 font-bold text-sm uppercase tracking-wider">Key Rotation Strategy</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Automated Key Rotation & Re-Encryption</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-rotate text-cyan-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Rotation Policies</h3>
                        </div>
                        <p class="text-slate-300 mb-6 leading-relaxed">
                            Configure automated key rotation schedules based on your security policy—30, 60, or 90 days. Controller automatically rotates keys and re-encrypts all secrets.
                        </p>
                        <div class="space-y-4">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-white font-semibold">Standard Policy</span>
                                    <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold">90 Days</span>
                                </div>
                                <p class="text-slate-400 text-sm mb-3">Recommended for most organizations—balances security with operational overhead.</p>
                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                        <div class="text-slate-500 mb-1">Frequency</div>
                                        <div class="text-white font-semibold">Quarterly</div>
                                    </div>
                                    <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                        <div class="text-slate-500 mb-1">Automation</div>
                                        <div class="text-green-400 font-semibold">Fully Automated</div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-white font-semibold">High Security Policy</span>
                                    <span class="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-bold">30 Days</span>
                                </div>
                                <p class="text-slate-400 text-sm mb-3">For PCI DSS, HIPAA, or highly sensitive data—monthly key rotation enforced.</p>
                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                        <div class="text-slate-500 mb-1">Frequency</div>
                                        <div class="text-white font-semibold">Monthly</div>
                                    </div>
                                    <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                        <div class="text-slate-500 mb-1">Automation</div>
                                        <div class="text-green-400 font-semibold">Fully Automated</div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-white font-semibold">Custom Policy</span>
                                    <span class="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold">Configurable</span>
                                </div>
                                <p class="text-slate-400 text-sm mb-3">Define your own rotation schedule—daily, weekly, or triggered by compliance events.</p>
                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                        <div class="text-slate-500 mb-1">Frequency</div>
                                        <div class="text-white font-semibold">Your Choice</div>
                                    </div>
                                    <div class="bg-slate-900 border border-slate-700 rounded p-2">
                                        <div class="text-slate-500 mb-1">Automation</div>
                                        <div class="text-green-400 font-semibold">Fully Automated</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-gears text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Re-Encryption Process</h3>
                        </div>
                        <p class="text-slate-300 mb-6 leading-relaxed">
                            When keys are rotated, all secrets are automatically re-encrypted with the new key. Zero downtime—old keys remain valid during transition period.
                        </p>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-1 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Generate New Key Pair</div>
                                    <p class="text-slate-400 text-sm">Controller generates new RSA 4096-bit key pair in KMS—old key marked for deprecation.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-2 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Decrypt with Old Key</div>
                                    <p class="text-slate-400 text-sm">Controller decrypts all secrets using old GPG key—plaintext held in-memory only.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-3 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Re-Encrypt with New Key</div>
                                    <p class="text-slate-400 text-sm">Secrets re-encrypted using new GPG key—ciphertext updated in Git repository.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-4 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Commit to Git</div>
                                    <p class="text-slate-400 text-sm">Automated commit pushed to Git—audit trail shows key rotation event.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fa-solid fa-5 text-purple-400 text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold mb-1">Deprecate Old Key</div>
                                    <p class="text-slate-400 text-sm">Old key marked for deletion after grace period (default 7 days)—allows rollback if needed.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-purple-950/20 to-slate-900/50 border border-purple-900/30 rounded-lg p-4">
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-info-circle text-purple-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Zero Downtime</div>
                                    <p class="text-slate-400 text-sm">Applications continue running during rotation—secrets remain accessible throughout the process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Key Rotation Timeline</h3>
                    <div class="relative">
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 rounded-full"></div>
                        <div class="pl-8 space-y-8">
                            <div class="relative">
                                <div class="absolute -left-8 top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                                <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-cyan-400 font-bold">Day 0 - Key Generation</span>
                                        <span class="text-slate-500 text-sm">00:00:00</span>
                                    </div>
                                    <p class="text-slate-300 text-sm">New GPG key pair generated in KMS—old key remains active for grace period.</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -left-8 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                                <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-blue-400 font-bold">Day 0 - Re-Encryption</span>
                                        <span class="text-slate-500 text-sm">00:15:00</span>
                                    </div>
                                    <p class="text-slate-300 text-sm">All secrets decrypted with old key, re-encrypted with new key—committed to Git.</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -left-8 top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                                <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-purple-400 font-bold">Day 0-7 - Grace Period</span>
                                        <span class="text-slate-500 text-sm">7 Days</span>
                                    </div>
                                    <p class="text-slate-300 text-sm">Both old and new keys active—allows rollback if issues detected.</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -left-8 top-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900"></div>
                                <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-orange-400 font-bold">Day 7 - Old Key Deprecation</span>
                                        <span class="text-slate-500 text-sm">7 Days Later</span>
                                    </div>
                                    <p class="text-slate-300 text-sm">Old key marked for deletion—no longer used for decryption.</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -left-8 top-2 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900"></div>
                                <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-green-400 font-bold">Day 14 - Old Key Deletion</span>
                                        <span class="text-slate-500 text-sm">14 Days Later</span>
                                    </div>
                                    <p class="text-slate-300 text-sm">Old key permanently deleted from KMS—rotation complete.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyRotation;
