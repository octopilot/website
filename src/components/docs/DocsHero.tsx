import type { Component } from 'solid-js';

const DocsHero: Component = () => {
    return (
        <section id="onramp-hero" class="h-[650px] relative overflow-hidden border-b border-slate-800/50 pt-20">
            <div class="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-transparent"></div>
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 60%);"></div>

            <div class="max-w-[1200px] mx-auto px-8 h-full flex flex-col justify-center relative z-10">
                <div class="flex items-center gap-3 mb-6">
                    <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider">
                        Onramp Hub
                    </span>
                    <span class="text-slate-500">•</span>
                    <span class="text-slate-400 text-sm">Get Started in Minutes</span>
                </div>

                <h1 class="text-6xl font-bold mb-6 leading-tight max-w-4xl">
                    <span class="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                        Deploy Repository-Local Encryption
                    </span>
                </h1>

                <p class="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                    From installation prerequisites to production deployment—everything you need to enforce cryptographic secret governance across your Kubernetes clusters and GitOps workflows.
                </p>

                <div class="flex items-center gap-4">
                    <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-gradient-to-l text-white rounded-lg transition-colors font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-rocket"></i>
                        Deploy in Cluster
                    </button>
                    <button class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-code-branch"></i>
                        Integrate with CI/CD
                    </button>
                    <button class="px-8 py-4 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition-colors font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-shield-halved"></i>
                        Configure Policies
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DocsHero;
