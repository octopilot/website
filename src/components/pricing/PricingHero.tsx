import type { Component } from 'solid-js';

const PricingHero: Component = () => {
    return (
        <section id="pricing-hero" class="h-[650px] flex items-center justify-center bg-gradient-to-b from-octo-dark to-octo-darker border-b border-octo-border pt-20">
            <div class="max-w-[1200px] mx-auto px-8 text-center">
                <div class="inline-flex items-center space-x-2 px-4 py-2 bg-octo-accent/10 rounded-full border border-octo-accent/20 mb-6">
                    <i class="fa-solid fa-tag text-octo-accent text-sm"></i>
                    <span class="text-sm font-medium text-octo-accent">Simple, transparent pricing</span>
                </div>
                <h1 class="text-6xl font-bold text-white mb-6">Choose the right plan for your team</h1>
                <p class="text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    Governed, encrypted secrets per repository — with automated GPG key signing, rotation, and policy enforcement.
                </p>
            </div>
        </section>
    );
};

export default PricingHero;
