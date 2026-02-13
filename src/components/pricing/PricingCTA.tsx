import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const PricingCTA: Component = () => {
    return (
        <section id="pricing-cta" class="py-20 bg-gradient-to-b from-octo-darker to-octo-dark border-t border-octo-border">
            <div class="max-w-[1000px] mx-auto px-8 text-center">
                <div class="bg-gradient-to-br from-octo-accent/20 to-blue-600/20 border-2 border-octo-accent/40 rounded-2xl p-12">
                    <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-shield-halved text-white text-3xl"></i>
                    </div>
                    <h2 class="text-4xl font-bold text-white mb-4">Ready to secure your secrets?</h2>
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Start with the Free plan or install Pro from GitHub Marketplace. No credit card required for Free tier.
                    </p>
                    <div class="flex flex-col md:flex-row justify-center gap-4">
                        <a href="https://github.com/apps/octopilot" target="_blank" class="inline-block bg-octo-accent hover:bg-octo-accent-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-center">
                            Install from GitHub Marketplace
                        </a>
                        <a href="mailto:sales@octopilot.io" class="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-center">
                            Contact Sales
                        </a>
                    </div>
                    <p class="text-gray-400 text-sm mt-6">
                        Questions? <A href="/docs" class="text-octo-accent hover:underline">View documentation</A> or <a href="#" class="text-octo-accent hover:underline">talk to our team</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingCTA;
