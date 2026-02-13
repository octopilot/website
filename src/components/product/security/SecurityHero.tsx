import type { Component } from 'solid-js';

const SecurityHero: Component = () => {
    return (
        <section id="enterprise-hero" class="min-h-[700px] h-auto relative overflow-hidden border-b border-octo-border py-20">
            <div class="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent"></div>
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 60%);"></div>

            <div class="max-w-[1200px] mx-auto px-8 h-full flex flex-col justify-center relative z-10">
                <div class="flex items-center gap-3 mb-6">
                    <span class="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-wider">
                        Enterprise Security
                    </span>
                    <span class="text-slate-500">•</span>
                    <span class="text-slate-400 text-sm">Compliance & Governance</span>
                </div>

                <h1 class="text-6xl font-bold mb-6 leading-tight max-w-4xl text-white">
                    <span class="bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
                        Enterprise-Grade Secret Management
                    </span>
                </h1>

                <p class="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                    From solo developers to multi-team enterprises—understand how secret-controller-manager scales with cryptographic isolation, audit logging, key rotation, and compliance automation across your entire organization.
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <button class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                        <i class="fa-solid fa-shield-halved"></i>
                        View Security Architecture
                    </button>
                    <button class="w-full sm:w-auto px-8 py-4 bg-octo-gray hover:bg-octo-gray-light text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                        <i class="fa-solid fa-file-contract"></i>
                        Download Compliance Guide
                    </button>
                    <button class="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                        <i class="fa-solid fa-users"></i>
                        Talk to Enterprise Team
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SecurityHero;
