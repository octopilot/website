import type { Component } from 'solid-js';

const Prerequisites: Component = () => {
    return (
        <section id="installation-prerequisites" class="py-16 border-b border-slate-800/50">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span class="text-orange-400 font-bold text-sm uppercase tracking-wider">Prerequisites</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Before You Begin</h2>

                <div class="grid grid-cols-3 gap-6 mb-8">
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-dharmachakra text-blue-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">Kubernetes Cluster</h3>
                        </div>
                        <ul class="space-y-2 text-slate-300 text-sm">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Kubernetes 1.24+ (tested up to 1.30)</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>kubectl configured and authenticated</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Cluster admin permissions required</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Namespace creation privileges</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-brands fa-github text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">GitHub Access</h3>
                        </div>
                        <ul class="space-y-2 text-slate-300 text-sm">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>GitHub Organization or personal account</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Admin permissions on target repositories</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>GitHub App installation permissions</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Actions enabled (for CI/CD integration)</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-key text-cyan-400 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">GPG & Key Management</h3>
                        </div>
                        <ul class="space-y-2 text-slate-300 text-sm">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>GPG 2.2+ installed locally</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>AWS KMS, GCP KMS, or Azure Key Vault</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>IAM/RBAC permissions for key storage</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>sops CLI tool (optional but recommended)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-orange-950/20 to-slate-900/50 border border-orange-900/30 rounded-xl p-8">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-lightbulb text-orange-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white mb-3">Quick Compatibility Check</h3>
                            <p class="text-slate-300 mb-4 leading-relaxed">
                                Run this command to verify your environment meets all prerequisites before installation:
                            </p>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4">
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>curl -sL https://octopilot.app/check.sh | bash</code></pre>
                            </div>
                            <p class="text-slate-400 text-sm mt-3">
                                This script validates Kubernetes version, kubectl access, GitHub permissions, and GPG installation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prerequisites;
