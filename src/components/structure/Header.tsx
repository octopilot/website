import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Header: Component = () => {
    return (
        <header id="header" class="fixed top-0 left-0 right-0 z-50 bg-octo-darker/95 backdrop-blur-sm border-b border-octo-border">
            <div class="max-w-[1440px] mx-auto px-8 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-12">
                        <A href="/" class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-gradient-to-br from-octo-accent to-blue-600 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-shield-halved text-white text-xl"></i>
                            </div>
                            <span class="text-xl font-bold text-white">Octopilot</span>
                        </A>
                        <nav class="flex items-center space-x-8">
                            <A href="/" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1" end>Home</A>
                            <A href="/product/architecture" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Architecture</A>
                            <A href="/product/security" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Security</A>
                            <A href="/product/governance" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Governance</A>
                            <A href="/docs" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Docs</A>
                            <A href="/blog" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Blog</A>
                            <A href="/pricing" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Pricing</A>
                        </nav>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="https://github.com/octopilot" target="_blank" class="px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium">
                            <i class="fa-brands fa-github mr-2"></i>View on GitHub
                        </a>
                        <a href="#" class="px-6 py-2.5 bg-octo-accent hover:bg-octo-accent-dark text-white rounded-lg font-medium transition-colors">
                            Install from Marketplace
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
