import type { Component } from 'solid-js';

const FlowOverview: Component = () => {
    return (
        <section id="flow-overview-section" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Complete architecture flow</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        From repository setup to in-cluster secret decryption — every step explained
                    </p>
                </div>
                <div class="bg-octo-dark border border-octo-border rounded-xl p-8">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-octo-accent/10 border-2 border-octo-accent rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-octo-accent">1</span>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">Repository Setup</h4>
                            <p class="text-gray-400 text-xs">Per-repo encrypted files</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-octo-accent/10 border-2 border-octo-accent rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-octo-accent">2</span>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">Key Creation</h4>
                            <p class="text-gray-400 text-xs">Repo-scoped GPG keys</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-octo-accent/10 border-2 border-octo-accent rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-octo-accent">3</span>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">Signing & Governance</h4>
                            <p class="text-gray-400 text-xs">Octopilot checks</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-octo-accent/10 border-2 border-octo-accent rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-octo-accent">4</span>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">Key Commit</h4>
                            <p class="text-gray-400 text-xs">Signed key to repo</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-octo-accent/10 border-2 border-octo-accent rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-octo-accent">5</span>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">In-Cluster Decryption</h4>
                            <p class="text-gray-400 text-xs">Controller reconciles</p>
                        </div>
                    </div>
                    <div class="relative h-2 bg-octo-gray rounded-full overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-octo-accent to-blue-600"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowOverview;
