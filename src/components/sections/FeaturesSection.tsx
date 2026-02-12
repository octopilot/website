import type { Component } from 'solid-js';

const FeaturesSection: Component = () => {
    return (
        <section id="features-section" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">What Octopilot actually does</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Precise governance capabilities for repository-local encrypted secrets
                    </p>
                </div>
                <div class="grid grid-cols-3 gap-6 mb-12">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-key text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Repository-scoped GPG key issuance</h3>
                        <p class="text-gray-400 mb-4">
                            Generate unique GPG key pairs for each repository, ensuring cryptographic isolation between applications.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>One key pair per repository</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Automated key generation</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Secure key storage</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-certificate text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Cryptographic signing of repository keys</h3>
                        <p class="text-gray-400 mb-4">
                            Sign each repository's GPG public key with Octopilot's authority, establishing verifiable trust.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Verifiable key authenticity</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Tamper-proof signatures</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Chain of trust enforcement</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-rotate text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Rotation and revocation</h3>
                        <p class="text-gray-400 mb-4">
                            Automate key lifecycle management with scheduled rotation and immediate revocation capabilities.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Automated rotation schedules</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Immediate revocation on demand</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Zero-downtime key updates</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-shield-halved text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Policy enforcement</h3>
                        <p class="text-gray-400 mb-4">
                            Define and enforce organizational policies for key usage, encryption standards, and compliance requirements.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Prevent key reuse across repos</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Enforce encryption algorithms</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Mandatory rotation intervals</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-chart-line text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Compliance visibility</h3>
                        <p class="text-gray-400 mb-4">
                            Track key usage, identify non-compliant repositories, and generate audit reports across your organization.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Organization-wide dashboards</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Compliance drift detection</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Audit log export</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8 hover:border-octo-accent/50 transition-colors">
                        <div class="w-14 h-14 bg-octo-accent/10 rounded-lg flex items-center justify-center mb-6">
                            <i class="fa-solid fa-bell text-octo-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Alerts and notifications</h3>
                        <p class="text-gray-400 mb-4">
                            Receive notifications for key events, policy violations, and approaching rotation deadlines.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Key expiration warnings</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Policy violation alerts</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fa-solid fa-angle-right text-octo-accent mt-1"></i>
                                <span>Slack/email integration</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-octo-accent/10 to-blue-600/10 border border-octo-accent/30 rounded-xl p-8">
                    <div class="flex items-start space-x-6">
                        <div class="w-12 h-12 bg-octo-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-code-branch text-white text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-3">GitOps workflow integration</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Octopilot integrates seamlessly with existing GitOps workflows. Keys are issued via pull requests, signed keys are committed to repositories, and policy enforcement happens automatically on every commit. No changes to your deployment pipeline required.
                            </p>
                            <div class="flex items-center space-x-6 text-sm">
                                <div class="flex items-center space-x-2">
                                    <i class="fa-solid fa-code-pull-request text-octo-accent"></i>
                                    <span class="text-gray-400">PR-based key issuance</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <i class="fa-solid fa-code-commit text-octo-accent"></i>
                                    <span class="text-gray-400">Automated policy checks</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <i class="fa-solid fa-shield-halved text-octo-accent"></i>
                                    <span class="text-gray-400">Continuous compliance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
