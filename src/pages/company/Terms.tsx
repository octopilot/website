import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';

const Terms: Component = () => {
    return (
        <div class="bg-octo-dark min-h-screen py-20">
            <PageMeta
                title="Terms of Service"
                description="Octopilot Terms of Service. Read the terms governing your use of the Octopilot platform, GitHub App, and subscription services."
                path="/terms"
            />
            <div class="max-w-[1000px] mx-auto px-8">
                <h1 class="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <div class="prose prose-invert max-w-none text-gray-400">
                    <p class="mb-4">Last updated: February 13, 2026</p>

                    <p class="mb-6">
                        Please read these Terms of Service ("Terms") carefully before using the Octopilot website and services operated by Octopilot ("us", "we", or "our").
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p class="mb-6">
                        By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Use of Service</h2>
                    <p class="mb-6">
                        You responsible for maintaining the security of your account and any secrets managed via Octopilot.
                        You agree not to use the service for any illegal or unauthorized purpose.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">3. Subscriptions and Payments</h2>
                    <p class="mb-6">
                        Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
                        Payments are processed by our merchant of record, Lemon Squeezy.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
                    <p class="mb-6">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Octopilot and its licensors.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:legal@octopilot.io" class="text-octo-accent hover:underline">legal@octopilot.io</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
