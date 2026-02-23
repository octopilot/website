import { type Component, createSignal, Show } from 'solid-js';
import { A } from '@solidjs/router';
import { usePricingVisible } from '../../lib/pricingGate';

const Header: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);
    const pricingVisible = usePricingVisible();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header id="header" class="fixed top-0 left-0 right-0 z-50 bg-octo-darker/95 backdrop-blur-sm border-b border-octo-border">
            <div class="max-w-[1440px] mx-auto px-6 lg:px-8 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-12">
                        <A href="/" class="flex items-center gap-3" onClick={closeMenu}>
                            <div class="w-10 h-10 bg-gradient-to-br from-octo-accent to-blue-600 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-shield-halved text-white text-xl"></i>
                            </div>
                            <span class="text-xl font-bold text-white">Octopilot</span>
                        </A>

                        {/* Desktop Navigation */}
                        <nav class="hidden lg:flex items-center gap-8">
                            <A href="/" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1" end>Home</A>
                            <A href="/product/architecture" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Architecture</A>
                            <A href="/product/security" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Security</A>
                            <A href="/product/governance" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Governance</A>
                            <A href="/docs" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Docs</A>
                            <A href="/blog" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Blog</A>
                            <Show when={pricingVisible()}>
                                <A href="/pricing" class="text-gray-400 hover:text-white transition-colors font-medium" activeClass="text-white border-b-2 border-octo-accent pb-1">Pricing</A>
                            </Show>
                        </nav>
                    </div>

                    {/* Desktop Actions */}
                    <div class="hidden lg:flex items-center gap-4">
                        <a href="https://github.com/octopilot" target="_blank" class="px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium">
                            <i class="fa-brands fa-github mr-2"></i>View on GitHub
                        </a>
                        <a href="#" class="px-6 py-2.5 bg-octo-accent hover:bg-octo-accent-dark text-white rounded-lg font-medium transition-colors">
                            Install from Marketplace
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        class="lg:hidden text-gray-300 hover:text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <Show when={!isMenuOpen()} fallback={<i class="fa-solid fa-times text-2xl"></i>}>
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </Show>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <Show when={isMenuOpen()}>
                <div class="lg:hidden absolute top-full left-0 right-0 bg-octo-darker border-b border-octo-border shadow-xl h-[calc(100vh-73px)] overflow-y-auto">
                    <div class="flex flex-col p-6 space-y-6">
                        <nav class="flex flex-col space-y-4">
                            <A href="/" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu} end>Home</A>
                            <A href="/product/architecture" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu}>Architecture</A>
                            <A href="/product/security" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu}>Security</A>
                            <A href="/product/governance" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu}>Governance</A>
                            <A href="/docs" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu}>Docs</A>
                            <A href="/blog" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu}>Blog</A>
                            <Show when={pricingVisible()}>
                                <A href="/pricing" class="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800" onClick={closeMenu}>Pricing</A>
                            </Show>
                        </nav>
                        <div class="flex flex-col space-y-4 pt-4">
                            <a href="https://github.com/octopilot" target="_blank" class="flex items-center justify-center px-5 py-3 text-gray-300 hover:text-white border border-gray-700 rounded-lg font-medium">
                                <i class="fa-brands fa-github mr-2"></i>View on GitHub
                            </a>
                            <a href="#" class="flex items-center justify-center px-6 py-3 bg-octo-accent hover:bg-octo-accent-dark text-white rounded-lg font-medium">
                                Install from Marketplace
                            </a>
                        </div>
                    </div>
                </div>
            </Show>
        </header>
    );
};

export default Header;
