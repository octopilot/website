import type { Component } from 'solid-js';

const AuditLogging: Component = () => {
    return (
        <section id="audit-logging" class="py-16 border-b border-octo-border bg-octo-dark/20">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span class="text-purple-400 font-bold text-sm uppercase tracking-wider">Audit Logging</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Immutable Audit Trail for Compliance</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-brands fa-git-alt text-green-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Git Commit History</h3>
                        </div>
                        <p class="text-slate-300 mb-4 leading-relaxed">
                            Every secret change tracked in Git commit history—who changed what, when, and why. Immutable audit log that satisfies SOC 2, ISO 27001, and HIPAA auditors.
                        </p>
                        <div class="space-y-3">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-user text-green-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Who</span>
                                </div>
                                <p class="text-slate-400 text-xs">Git author tracked—jane.doe@company.com</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-clock text-green-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">When</span>
                                </div>
                                <p class="text-slate-400 text-xs">Commit timestamp—2024-01-15 14:32:18 UTC</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-file-lines text-green-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">What</span>
                                </div>
                                <p class="text-slate-400 text-xs">Diff shows exact changes—secret added/modified/deleted</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-signature text-blue-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Signed Commits</h3>
                        </div>
                        <p class="text-slate-300 mb-4 leading-relaxed">
                            GPG-signed commits provide cryptographic proof of authorship—non-repudiation for compliance. Auditors can verify every change with mathematical certainty.
                        </p>
                        <div class="space-y-3">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-shield-halved text-blue-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Cryptographic Proof</span>
                                </div>
                                <p class="text-slate-400 text-xs">GPG signature proves commit author—cannot be forged</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-ban text-blue-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Non-Repudiation</span>
                                </div>
                                <p class="text-slate-400 text-xs">Signer cannot deny making the change—legally binding</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-check-double text-blue-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Tamper Detection</span>
                                </div>
                                <p class="text-slate-400 text-xs">Any modification breaks signature—audit trail integrity guaranteed</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-server text-orange-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Controller Logs</h3>
                        </div>
                        <p class="text-slate-300 mb-4 leading-relaxed">
                            Kubernetes controller logs every decryption event—which pod accessed which secret at what time. Centralized logging via Datadog, Splunk, or ELK stack.
                        </p>
                        <div class="space-y-3">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-unlock text-orange-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Decryption Events</span>
                                </div>
                                <p class="text-slate-400 text-xs">Log entry for every secret decryption—pod name, namespace, timestamp</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-triangle-exclamation text-orange-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Failed Access</span>
                                </div>
                                <p class="text-slate-400 text-xs">Unauthorized access attempts logged—detect security incidents</p>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-3">
                                <div class="flex items-center gap-2 mb-1">
                                    <i class="fa-solid fa-chart-line text-orange-400 text-xs"></i>
                                    <span class="text-white font-semibold text-sm">Usage Analytics</span>
                                </div>
                                <p class="text-slate-400 text-xs">Which secrets used most frequently—identify unused secrets</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8 mb-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Sample Audit Log Entry</h3>
                    <div class="bg-octo-darker border border-slate-700 rounded-lg p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div class="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                    <i class="fa-brands fa-git-alt"></i>
                                    Git Commit Metadata
                                </div>
                                <div class="space-y-2 text-sm">
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Commit:</span>
                                        <span class="text-slate-300 font-mono">a3f8b9c</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Author:</span>
                                        <span class="text-slate-300">Jane Doe &lt;jane@company.com&gt;</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Date:</span>
                                        <span class="text-slate-300">2024-01-15 14:32:18 UTC</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Signature:</span>
                                        <span class="text-green-400">✓ Verified (GPG key 0x9A8B7C6D)</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Message:</span>
                                        <span class="text-slate-300">Rotate database password for production</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                                    <i class="fa-solid fa-server"></i>
                                    Controller Log Entry
                                </div>
                                <div class="space-y-2 text-sm">
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Timestamp:</span>
                                        <span class="text-slate-300">2024-01-15 14:35:42 UTC</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Event:</span>
                                        <span class="text-slate-300">SECRET_DECRYPTED</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Secret:</span>
                                        <span class="text-slate-300">database-credentials</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Namespace:</span>
                                        <span class="text-slate-300">production</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Pod:</span>
                                        <span class="text-slate-300">api-server-7f9c8d-xk2p4</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-slate-500 w-24">Status:</span>
                                        <span class="text-green-400">SUCCESS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-gradient-to-br from-green-950/30 to-slate-900 border border-green-900/50 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-file-contract text-green-400"></i>
                            </div>
                            <h4 class="text-white font-bold">SOC 2 Type II</h4>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Git commit history satisfies SOC 2 audit requirements—immutable log of who accessed what secrets when, with cryptographic proof.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-900/50 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-hospital text-blue-400"></i>
                            </div>
                            <h4 class="text-white font-bold">HIPAA Compliance</h4>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Audit logging meets HIPAA requirements for tracking access to protected health information (PHI)—every secret access logged and tamper-proof.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-purple-950/30 to-slate-900 border border-purple-900/50 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-credit-card text-purple-400"></i>
                            </div>
                            <h4 class="text-white font-bold">PCI DSS</h4>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Satisfies PCI DSS requirement 10.2—audit trail for all access to cardholder data, with retention periods configurable to meet 90-day minimum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditLogging;
