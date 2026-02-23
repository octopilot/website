import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { A } from '@solidjs/router';
import { usePricingVisible } from '../../lib/pricingGate';

const OpenSourceSection: Component = () => {
    const pricingVisible = usePricingVisible();
    return (
        <section id="open-source-section" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Open Core Model</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Octopilot is built on a strong open-source foundation with enterprise-grade governance on top.
                    </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-500/30 rounded-xl p-8">
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fa-brands fa-osi text-green-400 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-white">Open Source</h3>
                                    <p class="text-green-400 text-sm font-mono">Apache 2.0 License</p>
                                </div>
                            </div>
                            <a href="#" class="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 text-green-400 rounded-lg text-sm font-medium transition-colors">
                                <i class="fa-brands fa-github mr-2"></i>View on GitHub
                            </a>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-white font-bold mb-3 flex items-center">
                                <i class="fa-solid fa-cube text-green-400 mr-3"></i>
                                secrets-manager-controller
                            </h4>
                            <p class="text-gray-300 mb-4">
                                Kubernetes controller that runs inside your cluster, reconciling encrypted secrets from Git repositories into Kubernetes Secrets.
                            </p>
                        </div>
                        <div class="bg-octo-dark/50 border border-green-500/20 rounded-lg p-6 mb-6">
                            <h5 class="text-white font-bold mb-3 text-sm">Responsibilities</h5>
                            <ul class="space-y-2 text-sm text-gray-300">
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span>Reads signed GPG public keys from repositories</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span>Decrypts <code class="text-octo-accent font-mono text-xs">application.secrets</code> in-cluster</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span>Creates and updates Kubernetes Secrets</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span>Verifies GPG signature authenticity</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-green-400 mt-0.5"></i>
                                    <span>Reconciles on Git commit changes</span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-wrap gap-4 text-sm">
                            <a href="#" class="flex items-center space-x-2 text-green-400 hover:text-green-300">
                                <i class="fa-solid fa-book"></i>
                                <span>Documentation</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 text-green-400 hover:text-green-300">
                                <i class="fa-solid fa-download"></i>
                                <span>Install Guide</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 text-green-400 hover:text-green-300">
                                <i class="fa-solid fa-code"></i>
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-octo-accent/10 to-blue-600/10 border-2 border-octo-accent/30 rounded-xl p-8">
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-octo-accent/20 rounded-lg flex items-center justify-center">
                                    <i class="fa-solid fa-building text-octo-accent text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-white">Commercial</h3>
                                    <p class="text-octo-accent text-sm font-mono">Proprietary SaaS</p>
                                </div>
                            </div>
                            <Show when={pricingVisible()}>
                                <A href="/pricing" class="px-4 py-2 bg-octo-accent/20 hover:bg-octo-accent/30 border border-octo-accent/40 text-octo-accent rounded-lg text-sm font-medium transition-colors inline-block">
                                    View Pricing
                                </A>
                            </Show>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-white font-bold mb-3 flex items-center">
                                <i class="fa-solid fa-shield-halved text-octo-accent mr-3"></i>
                                Octopilot Governance Plane
                            </h4>
                            <p class="text-gray-300 mb-4">
                                GitHub App and SaaS platform providing key lifecycle management, policy enforcement, and compliance visibility.
                            </p>
                        </div>
                        <div class="bg-octo-dark/50 border border-octo-accent/20 rounded-lg p-6 mb-6">
                            <h5 class="text-white font-bold mb-3 text-sm">Responsibilities</h5>
                            <ul class="space-y-2 text-sm text-gray-300">
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-octo-accent mt-0.5"></i>
                                    <span>Issues repository-scoped GPG key pairs</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-octo-accent mt-0.5"></i>
                                    <span>Signs GPG public keys with authority signature</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-octo-accent mt-0.5"></i>
                                    <span>Automates key rotation and revocation</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-octo-accent mt-0.5"></i>
                                    <span>Enforces organizational policies</span>
                                </li>
                                <li class="flex items-start space-x-2">
                                    <i class="fa-solid fa-check text-octo-accent mt-0.5"></i>
                                    <span>Provides compliance dashboards and audit logs</span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-wrap gap-4 text-sm">
                            <a href="#" class="flex items-center space-x-2 text-octo-accent hover:text-blue-400">
                                <i class="fa-solid fa-rocket"></i>
                                <span>Start Free Trial</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 text-octo-accent hover:text-blue-400">
                                <i class="fa-solid fa-calendar"></i>
                                <span>Schedule Demo</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 text-octo-accent hover:text-blue-400">
                                <i class="fa-solid fa-phone"></i>
                                <span>Contact Sales</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-12 bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                    <div class="flex items-start space-x-6">
                        <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-puzzle-piece text-purple-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-3">How they work together</h3>
                            <p class="text-gray-300 leading-relaxed mb-6">
                                The open-source controller handles all secret decryption and Kubernetes integration within your infrastructure. Octopilot provides the governance layer that manages key lifecycle, enforces policies, and ensures compliance across all repositories. You can use the controller independently, but Octopilot automates the operational complexity of managing GPG keys at scale.
                            </p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="bg-octo-dark border border-octo-border rounded-lg p-4">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <i class="fa-solid fa-1 text-octo-accent"></i>
                                        <h4 class="text-white font-bold text-sm">Octopilot issues key</h4>
                                    </div>
                                    <p class="text-gray-400 text-xs">Generates and signs GPG key pair for repository</p>
                                </div>
                                <div class="bg-octo-dark border border-octo-border rounded-lg p-4">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <i class="fa-solid fa-2 text-octo-accent"></i>
                                        <h4 class="text-white font-bold text-sm">Key committed to repo</h4>
                                    </div>
                                    <p class="text-gray-400 text-xs">Signed public key stored alongside encrypted secrets</p>
                                </div>
                                <div class="bg-octo-dark border border-octo-border rounded-lg p-4">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <i class="fa-solid fa-3 text-octo-accent"></i>
                                        <h4 class="text-white font-bold text-sm">Controller decrypts</h4>
                                    </div>
                                    <p class="text-gray-400 text-xs">Open-source controller uses key to decrypt in-cluster</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenSourceSection;
