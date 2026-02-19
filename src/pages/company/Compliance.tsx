import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';

const Compliance: Component = () => {
    return (
        <div class="bg-octo-dark min-h-screen py-20">
            <PageMeta
                title="Compliance & Billing"
                description="Octopilot compliance information, invoicing via Lemon Squeezy as Merchant of Record, VAT/GST handling, and GDPR data residency details."
                path="/compliance"
            />
            <div class="max-w-[1000px] mx-auto px-8">
                <h1 class="text-4xl font-bold text-white mb-8">Compliance & Billing</h1>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="bg-octo-darker border border-octo-border rounded-xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <i class="fa-solid fa-file-invoice-dollar text-octo-accent"></i>
                            Invoicing & Payments
                        </h2>
                        <p class="text-gray-400 mb-6">
                            Octopilot partners with <strong>Lemon Squeezy</strong> as our Merchant of Record.
                            This ensures secure payment processing and handles global tax compliance (VAT, GST, sales tax) automatically.
                        </p>
                        <div class="bg-octo-gray/30 rounded-lg p-4 border border-octo-border mb-6">
                            <p class="text-sm text-gray-300">
                                <strong class="text-white">Note for Procurement:</strong><br />
                                Invoices will be issued by Lemon Squeezy on behalf of Octopilot.
                            </p>
                        </div>
                        <a href="https://www.lemonsqueezy.com/" target="_blank" class="text-octo-accent hover:text-white transition-colors text-sm font-medium">
                            Learn more about Lemon Squeezy <i class="fa-solid fa-arrow-right ml-1"></i>
                        </a>
                    </div>

                    <div class="bg-octo-darker border border-octo-border rounded-xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <i class="fa-solid fa-shield-check text-green-400"></i>
                            Security Compliance
                        </h2>
                        <p class="text-gray-400 mb-4">
                            We are committed to maintaining high standards of data protection and privacy.
                            Our architecture inherently supports compliance with various information and privacy acts because
                            <strong>Octopilot does not hold customer data</strong>.
                        </p>
                        <ul class="text-gray-400 space-y-3 mb-6">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>SOC 2 Type II (In Progress)</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>GDPR Compliant</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Zero-Access Architecture</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>Data Sovereignty (No Data Held)</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                <span>OpenBAO (Enterprise Centralization)</span>
                            </li>
                        </ul>
                        <p class="text-sm text-gray-500">
                            For compliance reports or audit requests, please contact <a href="mailto:compliance@octopilot.io" class="hover:text-white transition-colors underline">compliance@octopilot.io</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compliance;
