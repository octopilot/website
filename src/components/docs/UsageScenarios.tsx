import type { Component } from 'solid-js';

const UsageScenarios: Component = () => {
    return (
        <section id="developer-vs-enterprise" class="py-16 border-b border-slate-800/50 bg-slate-900/20">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-cyan-400 font-bold text-sm uppercase tracking-wider">Usage Scenarios</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Solo Developer vs Enterprise Teams</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-user text-blue-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Solo Developer</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Single Repository</div>
                                    <p class="text-slate-400 text-sm">One GPG key pair for personal project</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Local Encryption</div>
                                    <p class="text-slate-400 text-sm">Encrypt secrets on workstation before commit</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">No Team Coordination</div>
                                    <p class="text-slate-400 text-sm">Solo workflow—no access control needed</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                            <div class="text-white font-semibold mb-2">Pain Point Solved</div>
                            <p class="text-slate-400 text-sm">Stop storing .env files with plaintext API keys in Git. Encrypt secrets locally, commit encrypted YAML.</p>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-users text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Small Team (5-20)</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Shared Repository</div>
                                    <p class="text-slate-400 text-sm">Team members share GPG key via KMS</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Role-Based Access</div>
                                    <p class="text-slate-400 text-sm">IAM policies control who can decrypt</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Git Audit Trail</div>
                                    <p class="text-slate-400 text-sm">Track who changed which secrets when</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                            <div class="text-white font-semibold mb-2">Pain Point Solved</div>
                            <p class="text-slate-400 text-sm">Eliminate Slack DMs for secret sharing. Encrypt secrets in Git, team members decrypt via KMS access.</p>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-building text-orange-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Enterprise (100+)</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Multi-Vertical Keys</div>
                                    <p class="text-slate-400 text-sm">Separate GPG keys per product vertical</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Cryptographic Segmentation</div>
                                    <p class="text-slate-400 text-sm">Teams cannot access each other's secrets</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <div>
                                    <div class="text-white font-semibold mb-1">Compliance Automation</div>
                                    <p class="text-slate-400 text-sm">SOC 2 audit trail via Git commits</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                            <div class="text-white font-semibold mb-2">Pain Point Solved</div>
                            <p class="text-slate-400 text-sm">Prevent cross-team secret access. ACH team cannot decrypt crypto wallet keys—mathematically enforced.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-orange-950/20 to-slate-900/50 border border-orange-900/30 rounded-xl p-8 mb-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Multi-Team Secret Management Challenge</h3>
                    <p class="text-slate-300 leading-relaxed mb-6">
                        As organizations scale from solo developers to multi-team enterprises, secret management complexity explodes. Here's how secret-controller-manager scales with you:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                            <div class="text-blue-400 font-bold mb-3">Solo Developer Problem</div>
                            <p class="text-slate-400 text-sm mb-4">API keys scattered across .env files, wikis, and password managers. No version control, no audit trail.</p>
                            <div class="text-green-400 font-bold mb-2">Solution</div>
                            <p class="text-slate-300 text-sm">Encrypt secrets locally with GPG, commit to Git. One repository, one key, version-controlled secrets.</p>
                        </div>
                        <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                            <div class="text-purple-400 font-bold mb-3">Small Team Problem</div>
                            <p class="text-slate-400 text-sm mb-4">Manual secret sharing via Slack DMs. No separation between dev and prod. Key rotation nightmare.</p>
                            <div class="text-green-400 font-bold mb-2">Solution</div>
                            <p class="text-slate-300 text-sm">Shared GPG key stored in KMS. Role-based access via IAM. Automated rotation with re-encryption.</p>
                        </div>
                        <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                            <div class="text-orange-400 font-bold mb-3">Enterprise Problem</div>
                            <p class="text-slate-400 text-sm mb-4">500+ microservices, 8 product verticals. Payments team can access e-commerce secrets. No compliance audit trail.</p>
                            <div class="text-green-400 font-bold mb-2">Solution</div>
                            <p class="text-slate-300 text-sm">Vertical-specific GPG keys. Cryptographic segmentation prevents cross-access. Git commits satisfy auditors.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Real-World Scenario Comparison</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-slate-700">
                                    <th class="py-3 px-2 sm:px-4 text-white font-semibold text-xs sm:text-base">Scenario</th>
                                    <th class="py-3 px-2 sm:px-4 text-center text-blue-400 font-semibold text-xs sm:text-base">Solo Dev</th>
                                    <th class="py-3 px-2 sm:px-4 text-center text-purple-400 font-semibold text-xs sm:text-base">Small Team</th>
                                    <th class="py-3 px-2 sm:px-4 text-center text-orange-400 font-semibold text-xs sm:text-base">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300">
                                <tr class="border-b border-slate-800">
                                    <td class="py-3 px-2 sm:px-4 text-xs sm:text-base font-medium text-slate-400">Repositories</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-blue-400 font-bold text-xs sm:text-base">1-5</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-purple-400 font-bold text-xs sm:text-base">10-50</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-orange-400 font-bold text-xs sm:text-base">500+</td>
                                </tr>
                                <tr class="border-b border-slate-800">
                                    <td class="py-3 px-2 sm:px-4 text-xs sm:text-base font-medium text-slate-400">GPG Keys</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-blue-400 font-bold text-xs sm:text-base">1 per repo</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-purple-400 font-bold text-xs sm:text-base">1-3 shared</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-orange-400 font-bold text-xs sm:text-base">Vertical-specific</td>
                                </tr>
                                <tr class="border-b border-slate-800">
                                    <td class="py-3 px-2 sm:px-4 text-xs sm:text-base font-medium text-slate-400">Storage</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-blue-400 font-bold text-xs sm:text-base">Local keyring</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-purple-400 font-bold text-xs sm:text-base">Cloud KMS</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-orange-400 font-bold text-xs sm:text-base">KMS + HSM</td>
                                </tr>
                                <tr class="border-b border-slate-800">
                                    <td class="py-3 px-2 sm:px-4 text-xs sm:text-base font-medium text-slate-400">Rotation</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-blue-400 font-bold text-xs sm:text-base">Manual</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-purple-400 font-bold text-xs sm:text-base">Quarterly</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-orange-400 font-bold text-xs sm:text-base">Automated (90d)</td>
                                </tr>
                                <tr class="border-b border-slate-800">
                                    <td class="py-3 px-2 sm:px-4 text-xs sm:text-base font-medium text-slate-400">Access</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-blue-400 font-bold text-xs sm:text-base">None</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-purple-400 font-bold text-xs sm:text-base">IAM Roles</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-orange-400 font-bold text-xs sm:text-base">RBAC / Segmentation</td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-2 sm:px-4 text-xs sm:text-base font-medium text-slate-400">Compliance</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-blue-400 font-bold text-xs sm:text-base">None</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-purple-400 font-bold text-xs sm:text-base">Basic Logs</td>
                                    <td class="py-3 px-2 sm:px-4 text-center text-orange-400 font-bold text-xs sm:text-base">SOC 2 / PCI / HIPAA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsageScenarios;
