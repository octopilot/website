import type { Component } from 'solid-js';

const AccessControl: Component = () => {
    return (
        <section id="rbac-least-privilege" class="py-16 border-b border-octo-border bg-octo-dark/20">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span class="text-orange-400 font-bold text-sm uppercase tracking-wider">Access Control</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">RBAC & Least Privilege Enforcement</h2>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
                    <div class="bg-octo-dark/50 border border-octo-border rounded-xl p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-user-shield text-orange-400 text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Role-Based Access Control</h3>
                        </div>
                        <p class="text-slate-300 mb-6 leading-relaxed">
                            Define granular access policies using cloud IAM (AWS IAM, GCP IAM, Azure RBAC)—control who can encrypt, decrypt, and rotate keys at the repository level.
                        </p>
                        <div class="space-y-4">
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <i class="fa-solid fa-user-check text-green-400"></i>
                                    </div>
                                    <span class="text-white font-semibold">Developer Role</span>
                                </div>
                                <ul class="space-y-2 text-sm text-slate-400">
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can encrypt secrets locally with public key
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can commit encrypted secrets to Git
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-times text-red-400 text-xs"></i>
                                        Cannot decrypt secrets (no KMS access)
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <i class="fa-solid fa-user-tie text-blue-400"></i>
                                    </div>
                                    <span class="text-white font-semibold">SRE/DevOps Role</span>
                                </div>
                                <ul class="space-y-2 text-sm text-slate-400">
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can encrypt secrets locally
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can decrypt secrets for debugging (KMS access)
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can trigger manual key rotation
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-octo-darker/50 border border-slate-700 rounded-lg p-4">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <i class="fa-solid fa-user-lock text-purple-400"></i>
                                    </div>
                                    <span class="text-white font-semibold">Security Admin Role</span>
                                </div>
                                <ul class="space-y-2 text-sm text-slate-400">
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Full KMS access (encrypt, decrypt, rotate)
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can audit all access logs
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                        Can delete/revoke keys (break glass)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="h-full flex items-center">
                        <div class="relative overflow-hidden rounded-lg animate-pulse-glow w-full">
                            <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25"></div>
                            <img
                                src="/assets/rbac-diagram.png"
                                alt="RBAC Visualization: Developer (Encrypt Only) vs SRE (Debug) vs Admin (Full Control)"
                                class="relative z-10 w-full h-auto rounded-lg border border-octo-border shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessControl;
