import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const CtaSection: Component = () => {
    return (
        <section id="cta-section" class="py-24 border-b border-octo-border">
            <div class="max-w-[1000px] mx-auto px-8">
                <div class="bg-gradient-to-br from-octo-accent/20 to-blue-600/20 border-2 border-octo-accent/40 rounded-2xl p-12 text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-shield-halved text-white text-3xl"></i>
                    </div>
                    <h2 class="text-4xl font-bold text-white mb-4">Ready to govern your repository secrets?</h2>
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Install Octopilot from the GitHub Marketplace and start automating key lifecycle management in minutes.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4 mb-8">
                        <a href="https://github.com/apps/secret-controller-manager" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-octo-accent hover:bg-octo-accent-dark text-white rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center">
                            <i class="fa-brands fa-github mr-3 text-xl"></i>
                            Install from GitHub Marketplace
                        </a>
                        <A href="/docs" class="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors flex items-center gap-2 group border border-slate-700">
                            <i class="fa-solid fa-book text-gray-400 group-hover:text-white transition-colors"></i> Read the Documentation
                        </A>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:space-x-8 text-sm text-gray-400">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-check text-green-400"></i>
                            <span>Free for open source</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-check text-green-400"></i>
                            <span>No credit card required</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-check text-green-400"></i>
                            <span>5-minute setup</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
