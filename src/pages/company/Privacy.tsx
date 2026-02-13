import type { Component } from 'solid-js';

const Privacy: Component = () => {
    return (
        <div class="bg-octo-dark min-h-screen py-20">
            <div class="max-w-[1000px] mx-auto px-8">
                <h1 class="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div class="prose prose-invert max-w-none text-gray-400">
                    <p class="mb-4">Last updated: February 13, 2026</p>

                    <p class="mb-6">
                        At Octopilot, we take your privacy seriously. This Privacy Policy describes how we collect,
                        use, and protect your personal information when you use our website and services.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
                    <p class="mb-4">
                        We collect limited information required to provide our services, including:
                    </p>
                    <ul class="list-disc pl-6 mb-6 space-y-2">
                        <li>Account information (GitHub username, email) when you install our GitHub App.</li>
                        <li>Usage data to improve our services and ensure security.</li>
                        <li>Payment information (processed securely by our merchant of record, Lemon Squeezy).</li>
                    </ul>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
                    <p class="mb-4">
                        We use your information to:
                    </p>
                    <ul class="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide and maintain the Octopilot service.</li>
                        <li>Process transactions and send related information.</li>
                        <li>Monitor and analyze usage and trends to improve user experience.</li>
                    </ul>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Data Security</h2>
                    <p class="mb-6">
                        We implement industry-standard security measures to protect your data.
                        Crucially, Octopilot's architecture is designed so that we do <strong>not</strong> have access to your
                        encrypted secrets. Your secrets remain encrypted within your infrastructure and are only decrypted
                        by your authorized workloads.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@octopilot.io" class="text-octo-accent hover:underline">privacy@octopilot.io</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
