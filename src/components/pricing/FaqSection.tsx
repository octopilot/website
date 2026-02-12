import type { Component } from 'solid-js';

const FaqSection: Component = () => {
    return (
        <section id="faq-section" class="py-20 bg-octo-darker border-t border-octo-border">
            <div class="max-w-[900px] mx-auto px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-white mb-4">Frequently asked questions</h2>
                    <p class="text-xl text-gray-400">Common questions about pricing and plans</p>
                </div>
                <div class="space-y-4">
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">How is pricing calculated?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Pricing is per organization, not per repository or user. The Free plan supports up to 3 repositories. Pro plan provides unlimited repositories for a flat monthly fee. Enterprise pricing is customized based on your organization's specific needs, compliance requirements, and support level.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">Can I start with Free and upgrade later?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Yes. You can start with the Free plan and upgrade to Pro or Enterprise at any time. All your existing repositories, keys, and configurations will be preserved. Automated rotation and advanced features activate immediately upon upgrade.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">What happens if I exceed the Free plan limits?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                If you add a 4th repository on the Free plan, you'll be prompted to upgrade to Pro. Your existing 3 repositories continue working normally. You can also remove repositories to stay within the Free tier limits.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">Is the controller included in all plans?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Yes. The open-source secrets-manager-controller is free to use and included with all plans. You deploy it in your own Kubernetes cluster. The pricing tiers determine the governance features available in the Octopilot management plane.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">Do you offer annual billing?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Yes. Annual billing is available for Pro and Enterprise plans with a 20% discount compared to monthly billing. Contact sales for annual Enterprise pricing.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">What payment methods do you accept?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                We accept all major credit cards (Visa, Mastercard, American Express) through GitHub Marketplace billing. Enterprise customers can also pay via invoice with NET 30 terms.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">Can I cancel anytime?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Yes. You can cancel your Pro subscription at any time through the GitHub Marketplace. Your access continues until the end of your billing period. No refunds for partial months. Enterprise contracts have custom cancellation terms.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">Do you offer discounts for open source projects?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Yes. Public open source repositories on GitHub.com receive free Pro plan features. Contact us with your organization's GitHub URL to verify eligibility.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">What's included in Enterprise support?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Enterprise support includes 24/7 priority response via email, Slack, or phone; a dedicated customer success manager; custom SLA guarantees; and direct access to engineering for complex issues. Response time SLAs start at 1 hour for critical issues.
                            </p>
                        </div>
                    </div>
                    <div class="bg-octo-dark border border-octo-border rounded-xl overflow-hidden">
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-3">Can I use Octopilot with GitHub Enterprise Server?</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Yes. Enterprise plan includes support for GitHub Enterprise Server (self-hosted). This requires additional configuration and is included in custom Enterprise pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
