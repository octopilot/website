import type { Component } from 'solid-js';

const ArchitectureHero: Component = () => {
    return (
        <section id="architecture-hero-section" class="relative h-[650px] overflow-hidden border-b border-octo-border pt-20">
            <div class="absolute inset-0 bg-gradient-to-b from-octo-dark via-octo-darker to-octo-darker"></div>
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-20 left-1/4 w-96 h-px bg-octo-accent transform -rotate-12"></div>
                <div class="absolute top-40 right-1/3 w-64 h-px bg-blue-500 transform rotate-6"></div>
            </div>
            <div class="relative z-10 max-w-[1200px] mx-auto px-8 h-full flex items-center">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    <div class="max-w-2xl">
                        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-octo-gray/50 rounded-full border border-octo-border mb-6">
                            <i class="fa-solid fa-diagram-project text-octo-accent text-sm"></i>
                            <span class="text-sm font-medium text-gray-300">Technical Architecture</span>
                        </div>
                        <h1 class="text-5xl font-bold text-white leading-tight mb-6">
                            Step-by-step flow: Repository-local secrets governance
                        </h1>
                        <p class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                            Detailed architecture showing per-repo encrypted files, sops policy, repo-scoped GPG key creation, Octopilot signing and governance checks, signed public key committed back to repo, and controller decryption in-cluster.
                        </p>
                        <div class="flex flex-wrap gap-6 text-sm text-gray-400">
                            <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-lock text-octo-accent"></i>
                                <span>No centralized secret store</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-ban text-octo-accent"></i>
                                <span>No cross-repo sharing</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-shield-halved text-octo-accent"></i>
                                <span>No plaintext handling</span>
                            </div>
                        </div>
                    </div>

                    <div class="relative hidden lg:block">
                        <div class="absolute -inset-4 bg-octo-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
                        <img
                            src="/assets/architecture-hero.png"
                            alt="Octopilot Architecture: Repository-Local Secrets Governance"
                            class="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureHero;
