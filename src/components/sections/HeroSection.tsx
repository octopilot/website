import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const HeroSection: Component = () => {
    return (
        <section id="hero-section" class="relative min-h-screen lg:h-[850px] overflow-hidden border-b border-octo-border pt-20">
            <div class="absolute inset-0 bg-gradient-to-b from-octo-dark via-octo-darker to-octo-darker"></div>
            <div class="absolute inset-0 opacity-20">
                <div class="absolute top-20 left-1/4 w-96 h-px bg-octo-accent transform -rotate-12"></div>
                <div class="absolute top-40 right-1/3 w-64 h-px bg-blue-500 transform rotate-6"></div>
                <div class="absolute bottom-32 left-1/3 w-80 h-px bg-octo-accent transform -rotate-6"></div>
            </div>
            <div class="relative z-10 max-w-[1440px] mx-auto px-8 h-full flex items-center">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    <div class="max-w-3xl">
                        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-octo-gray/50 rounded-full border border-octo-border mb-6">
                            <i class="fa-solid fa-shield-halved text-octo-accent text-sm"></i>
                            <span class="text-sm font-medium text-gray-300">GitHub Marketplace App</span>
                        </div>
                        <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Governance for encrypted secrets — without centralizing them
                        </h1>
                        <p class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                            Automate GPG key signing, rotation, and policy for repository-local encrypted secrets — without introducing a central vault.
                        </p>
                        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:space-x-4 mb-8">
                            <a href="https://github.com/apps/secret-controller-manager" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-octo-accent hover:bg-octo-accent-dark text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                                <i class="fa-brands fa-github mr-3 text-lg"></i>
                                Install from GitHub Marketplace
                            </a>
                            <A href="/product/architecture" class="w-full sm:w-auto px-8 py-4 bg-octo-gray hover:bg-octo-gray-light text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center border border-octo-border">
                                <i class="fa-solid fa-diagram-project mr-3"></i>
                                View Architecture
                            </A>
                        </div>
                        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:space-x-8 text-sm text-gray-400">
                            <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-code-branch text-octo-accent"></i>
                                <span>GitOps-native</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-dharmachakra text-octo-accent"></i>
                                <span>Kubernetes-first</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-lock text-octo-accent"></i>
                                <span>Repository-scoped keys</span>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block relative animate-float">
                        <div class="absolute -inset-4 bg-octo-accent/20 rounded-full blur-3xl opacity-30"></div>
                        <img
                            src="/assets/hero-right.png"
                            alt="Futuristic security shield representing encrypted secrets"
                            class="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
