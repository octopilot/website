import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Footer: Component = () => {
    return (
        <footer id="footer" class="bg-octo-dark border-t border-octo-border">
            <div class="max-w-[1440px] mx-auto px-8 py-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div class="col-span-1 md:col-span-2 lg:col-span-2">
                        <A href="/" class="flex items-center space-x-3 mb-6">
                            <div class="w-10 h-10 bg-gradient-to-br from-octo-accent to-blue-600 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-shield-halved text-white text-xl"></i>
                            </div>
                            <span class="text-xl font-bold text-white">Octopilot</span>
                        </A>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">
                            Governance for encrypted secrets — without centralizing them. Repository-local secrets management for GitOps and Kubernetes workflows.
                        </p>
                        <div class="flex items-center space-x-4">
                            <a href="https://github.com/octopilot" target="_blank" class="w-10 h-10 bg-octo-gray hover:bg-octo-gray-light border border-octo-border rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-octo-gray hover:bg-octo-gray-light border border-octo-border rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-octo-gray hover:bg-octo-gray-light border border-octo-border rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Product</h4>
                        <ul class="space-y-3">
                            <li><A href="/product/architecture" class="text-gray-400 hover:text-white transition-colors text-sm">Architecture</A></li>
                            <li><A href="/product/governance" class="text-gray-400 hover:text-white transition-colors text-sm">Governance</A></li>
                            <li><A href="/product/security" class="text-gray-400 hover:text-white transition-colors text-sm">Security Model</A></li>
                            <li><A href="/pricing" class="text-gray-400 hover:text-white transition-colors text-sm">Pricing</A></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul class="space-y-3">
                            <li><A href="/docs" class="text-gray-400 hover:text-white transition-colors text-sm">Documentation</A></li>
                            <li><A href="/blog" class="text-gray-400 hover:text-white transition-colors text-sm">Blog</A></li>
                            <li><a href="https://github.com/octopilot/secret-controller-manager" target="_blank" class="text-gray-400 hover:text-white transition-colors text-sm">Controller (OSS)</a></li>
                            <li><A href="/best-practices" class="text-gray-400 hover:text-white transition-colors text-sm">Best Practices</A></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
                        <ul class="space-y-3">
                            <li><A href="/about" class="text-gray-400 hover:text-white transition-colors text-sm">About</A></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Contact Sales</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Status</a></li>
                            <li><A href="/privacy" class="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</A></li>
                        </ul>
                    </div>
                </div>
                <div class="pt-8 border-t border-octo-border flex items-center justify-between">
                    <p class="text-gray-500 text-sm">© 2024 Octopilot. All rights reserved.</p>
                    <div class="flex items-center space-x-6 text-sm text-gray-500">
                        <A href="/terms" class="hover:text-white transition-colors">Terms of Service</A>
                        <A href="/security" class="hover:text-white transition-colors">Security</A>
                        <A href="/compliance" class="hover:text-white transition-colors">Compliance</A>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
