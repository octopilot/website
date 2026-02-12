import type { Component } from 'solid-js';

const DeploymentPath: Component = () => {
    return (
        <section id="usage-guides" class="py-16 border-b border-slate-800/50">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span class="text-yellow-400 font-bold text-sm uppercase tracking-wider">Implementation Guides</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Choose Your Deployment Path</h2>

                <div class="grid grid-cols-2 gap-8">
                    <div class="bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-900/50 rounded-xl p-8 hover:border-blue-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-code text-blue-400 text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-white mb-1">Developer-First Usage</h3>
                                <p class="text-slate-400 text-sm">Solo developers and small teams</p>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-6 leading-relaxed">
                            Get started in minutes with minimal setup. Perfect for personal projects, side hustles, and teams under 20 engineers.
                        </p>
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Install GitHub App to repository</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Generate single GPG key pair</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Encrypt secrets locally, commit to Git</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Deploy controller to Kubernetes</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Secrets auto-decrypt at runtime</span>
                            </div>
                        </div>
                        <button class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                            Read Developer Guide
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    <div class="bg-gradient-to-br from-purple-950/30 to-slate-900 border border-purple-900/50 rounded-xl p-8 hover:border-purple-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-building text-purple-400 text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-white mb-1">Team/Enterprise Rollout</h3>
                                <p class="text-slate-400 text-sm">Multi-team organizations and enterprises</p>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-6 leading-relaxed">
                            Enterprise-grade deployment with vertical-specific keys, multi-team segmentation, and compliance automation for 100+ engineers.
                        </p>
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Install across 500+ repositories</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Generate vertical-specific GPG keys</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Configure RBAC and IAM policies</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">Automated key rotation (90-day policy)</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-circle text-green-400"></i>
                                <span class="text-slate-300 text-sm">SOC 2 audit trail via Git commits</span>
                            </div>
                        </div>
                        <button class="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                            Read Enterprise Guide
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeploymentPath;
