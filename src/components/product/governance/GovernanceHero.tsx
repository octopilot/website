import type { Component } from 'solid-js';

const GovernanceHero: Component = () => {
    return (
        <section id="governance-hero" class="relative pt-44 pb-24 bg-octo-darker border-b border-octo-border overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
            <div class="max-w-[1200px] mx-auto px-8 relative z-10 text-center">
                <div class="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-8">
                    <i class="fa-solid fa-scale-balanced text-purple-400 text-sm"></i>
                    <span class="text-sm font-medium text-purple-300">Compliance & Control</span>
                </div>
                <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Automate Secret Governance <br />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Without Friction</span>
                </h1>
                <p class="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Define policies once, enforce them everywhere. Prevent secret sprawl, ensure cryptographic strength, and maintain a complete audit trail of every key interaction.
                </p>
                <div class="flex items-center justify-center space-x-6">
                    <a href="/docs" class="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-bold transition-colors inline-flex items-center">
                        <i class="fa-solid fa-book mr-2"></i>
                        Read the Docs
                    </a>
                    <a href="https://github.com/octopilot/secret-controller-manager" target="_blank" class="px-8 py-4 bg-octo-gray hover:bg-octo-gray-light text-white rounded-lg font-semibold transition-colors border border-octo-border inline-flex items-center">
                        <i class="fa-brands fa-github mr-2"></i>
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GovernanceHero;
