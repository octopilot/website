import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const PricingTiers: Component = () => {
    return (
        <section id="pricing-tiers" class="py-20 bg-octo-darker">
            <div class="max-w-[1400px] mx-auto px-8">
                <div class="grid grid-cols-4 gap-6">
                    {/* Free Tier */}
                    <div id="free-tier" class="bg-octo-dark border-2 border-octo-border rounded-2xl p-7 relative">
                        <div class="mb-7">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-xl font-bold text-white">Free</h2>
                                <div class="px-3 py-1 bg-gray-500/10 rounded-full">
                                    <span class="text-xs font-bold text-gray-400">STARTER</span>
                                </div>
                            </div>
                            <div class="flex items-baseline mb-2">
                                <span class="text-4xl font-bold text-white">$0</span>
                                <span class="text-gray-400 ml-2">/month</span>
                            </div>
                            <p class="text-gray-400 text-sm">For individuals and small projects</p>
                        </div>
                        <ul class="space-y-3 mb-7">
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Limited repositories (up to 3)</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Manual key rotation</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Repository-scoped GPG keys</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Basic policy enforcement</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Community support</span>
                            </li>
                            <li class="flex items-start space-x-3 opacity-40">
                                <i class="fa-solid fa-times text-gray-500 mt-1 text-sm"></i>
                                <span class="text-gray-500 text-sm">Automated rotation</span>
                            </li>
                            <li class="flex items-start space-x-3 opacity-40">
                                <i class="fa-solid fa-times text-gray-500 mt-1 text-sm"></i>
                                <span class="text-gray-500 text-sm">Audit logs</span>
                            </li>
                        </ul>
                        <A href="/docs" class="block w-full py-3 bg-octo-gray hover:bg-octo-gray-light text-white rounded-lg font-medium text-center transition-colors text-sm">
                            Get Started Free
                        </A>
                    </div>

                    {/* Starter Tier */}
                    <div id="starter-tier" class="bg-octo-dark border-2 border-green-500/30 rounded-2xl p-7 relative">
                        <div class="mb-7">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-xl font-bold text-white">Starter</h2>
                                <div class="px-3 py-1 bg-green-500/10 rounded-full">
                                    <span class="text-xs font-bold text-green-400">GROWING</span>
                                </div>
                            </div>
                            <div class="flex items-baseline mb-2">
                                <span class="text-4xl font-bold text-white">$14.95</span>
                                <span class="text-gray-400 ml-2">/month</span>
                            </div>
                            <p class="text-gray-400 text-sm">For growing projects and teams</p>
                        </div>
                        <ul class="space-y-3 mb-7">
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm font-medium">10 private repositories</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm font-medium">10 public repositories</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Repository-scoped GPG keys</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Manual key rotation</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Advanced policy enforcement</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-green-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Email support</span>
                            </li>
                            <li class="flex items-start space-x-3 opacity-40">
                                <i class="fa-solid fa-times text-gray-500 mt-1 text-sm"></i>
                                <span class="text-gray-500 text-sm">Automated rotation</span>
                            </li>
                        </ul>
                        <a href="https://github.com/apps/secret-controller-manager" target="_blank" class="block w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-center transition-colors text-sm">
                            Install from Marketplace
                        </a>
                    </div>

                    {/* Pro Tier */}
                    <div id="pro-tier" class="bg-gradient-to-b from-octo-accent to-blue-600 rounded-2xl p-7 relative transform scale-105 shadow-2xl shadow-octo-accent/20">
                        <div class="absolute top-0 right-0 bg-yellow-400 text-octo-darker px-4 py-1 rounded-bl-lg rounded-tr-2xl font-bold text-xs">
                            MOST POPULAR
                        </div>
                        <div class="mb-7">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-xl font-bold text-white">Pro</h2>
                                <div class="px-3 py-1 bg-white/20 rounded-full">
                                    <span class="text-xs font-bold text-white">PROFESSIONAL</span>
                                </div>
                            </div>
                            <div class="flex items-baseline mb-2">
                                <span class="text-4xl font-bold text-white">$49</span>
                                <span class="text-blue-100 ml-2">/month</span>
                            </div>
                            <p class="text-blue-100 text-sm">For production workloads</p>
                        </div>
                        <ul class="space-y-3 mb-7">
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">Unlimited repositories</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">Automated key rotation</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">Advanced policy enforcement</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">Rotation scheduling & alerts</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">Compliance reporting</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">Email & chat support</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-white mt-1 text-sm"></i>
                                <span class="text-white font-medium text-sm">99.9% SLA</span>
                            </li>
                        </ul>
                        <a href="https://github.com/apps/secret-controller-manager" target="_blank" class="block w-full py-3 bg-white hover:bg-gray-100 text-octo-accent rounded-lg font-bold text-center transition-colors text-sm">
                            Install from GitHub Marketplace
                        </a>
                    </div>

                    {/* Enterprise Tier */}
                    <div id="enterprise-tier" class="bg-octo-dark border-2 border-purple-500/30 rounded-2xl p-7 relative">
                        <div class="mb-7">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-xl font-bold text-white">Enterprise</h2>
                                <div class="px-3 py-1 bg-purple-500/10 rounded-full">
                                    <span class="text-xs font-bold text-purple-400">CUSTOM</span>
                                </div>
                            </div>
                            <div class="flex items-baseline mb-2">
                                <span class="text-4xl font-bold text-white">Custom</span>
                            </div>
                            <p class="text-gray-400 text-sm">For compliance needs</p>
                        </div>
                        <ul class="space-y-3 mb-7">
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Everything in Pro</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Org-wide compliance visibility</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Immutable audit logs</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Priority support (24/7)</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Dedicated success manager</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">Custom SLA & uptime guarantees</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fa-solid fa-check text-purple-400 mt-1 text-sm"></i>
                                <span class="text-gray-300 text-sm">SSO & SAML integration</span>
                            </li>
                        </ul>
                        <a href="#" class="block w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium text-center transition-colors text-sm">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTiers;
