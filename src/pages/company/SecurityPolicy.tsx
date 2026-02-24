import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import PageMeta from '../../components/seo/PageMeta';

const SecurityPolicy: Component = () => {
    return (
        <div class="bg-octo-dark min-h-screen py-20">
            <PageMeta
                title="Security Policy"
                description="Octopilot Security Policy: how to report vulnerabilities, our security practices, infrastructure standards, and our commitment to transparent, zero-access architecture."
                path="/security"
            />
            <div class="max-w-[1000px] mx-auto px-8">
                <h1 class="text-4xl font-bold text-white mb-8">Security Policy</h1>
                <div class="prose prose-invert max-w-none text-gray-400">
                    <p class="mb-6">
                        Security is the core of Octopilot. While our product helps you manage secrets securely,
                        we also maintain rigorous security standards for our own infrastructure and operations.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Reporting Vulnerabilities</h2>
                    <p class="mb-4">
                        We value the contributions of the security research community. If you believe you have found a security vulnerability in Octopilot,
                        please report it to us immediately.
                    </p>
                    <p class="mb-6">
                        Please email <a href="mailto:security@octopilot.io" class="text-octo-accent hover:underline">security@octopilot.io</a> with details of the vulnerability.
                        We ask that you do not publicly disclose the issue until we have had a reasonable amount of time to analyze and correct it.
                    </p>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Our Security Practices</h2>
                    <ul class="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Minimal Access:</strong> We adhere to the principle of least privilege in all our internal operations.</li>
                        <li><strong>Encryption:</strong> All sensitive data is encrypted in transit and at rest.</li>
                        <li>
                            <strong>Transparent Architecture:</strong> Our bots run transparently within the GitHub infrastructure.
                            <strong>At no time does Octopilot hold customer data.</strong> All customer configuration and secrets remain
                            within your own GitHub organization secrets and config.
                        </li>
                    </ul>

                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Compliance</h2>
                    <p>
                        For information about our compliance certifications and invoicing, please visit our <A href="/compliance" class="text-octo-accent hover:underline">Compliance page</A>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecurityPolicy;
