import type { Component } from 'solid-js';

const DocsCTA: Component = () => {
    return (
        <section id="cta-deploy" class="py-16 border-b border-slate-800/50 bg-slate-900/20">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-900/50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                        <div class="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
                    </div>

                    <div class="relative z-10">
                        <div class="w-16 h-16 md:w-20 md:h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fa-solid fa-rocket text-indigo-400 text-2xl md:text-3xl"></i>
                        </div>

                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy?</h2>
                        <p class="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Choose your deployment path and start enforcing repository-local encryption in minutes.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                            <button class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-colors font-semibold text-lg flex items-center justify-center gap-2">
                                <i class="fa-solid fa-dharmachakra"></i>
                                Deploy in Cluster
                            </button>
                            <button class="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold text-lg flex items-center justify-center gap-2">
                                <i class="fa-solid fa-code-branch"></i>
                                Integrate with CI/CD
                            </button>
                            <button class="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-semibold text-lg flex items-center justify-center gap-2">
                                <i class="fa-solid fa-shield-halved"></i>
                                Configure Policies
                            </button>
                        </div>

                        <p class="text-slate-500 text-sm">Free for open source projects • No credit card required • Deploy in 15 minutes</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocsCTA;
