import type { Component } from 'solid-js';

const ComparisonTable: Component = () => {
    return (
        <section id="comparison-table" class="py-20 bg-octo-dark border-t border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-white mb-4">Feature comparison</h2>
                    <p class="text-xl text-gray-400">Detailed breakdown of what's included in each plan</p>
                </div>
                <div class="bg-octo-darker border border-octo-border rounded-xl overflow-hidden">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-octo-border">
                                <th class="text-left p-6 text-white font-bold text-lg">Features</th>
                                <th class="text-center p-6 text-white font-bold">Free</th>
                                <th class="text-center p-6 text-white font-bold bg-octo-accent/10">Pro</th>
                                <th class="text-center p-6 text-white font-bold">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-octo-border">
                                <td colspan="4" class="p-4 bg-octo-gray/30">
                                    <span class="text-sm font-bold text-gray-400 uppercase">Core Features</span>
                                </td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Repository-scoped GPG keys</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Cryptographic key signing</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">SOPS integration</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Kubernetes controller</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Number of repositories</td>
                                <td class="p-4 text-center text-gray-400">Up to 3</td>
                                <td class="p-4 text-center bg-octo-accent/5 text-white font-medium">Unlimited</td>
                                <td class="p-4 text-center text-white font-medium">Unlimited</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td colspan="4" class="p-4 bg-octo-gray/30">
                                    <span class="text-sm font-bold text-gray-400 uppercase">Key Management</span>
                                </td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Manual key rotation</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Automated key rotation</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Rotation scheduling</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Key expiration alerts</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Custom rotation policies</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5 text-gray-400">Basic</td>
                                <td class="p-4 text-center text-white font-medium">Advanced</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td colspan="4" class="p-4 bg-octo-gray/30">
                                    <span class="text-sm font-bold text-gray-400 uppercase">Policy & Governance</span>
                                </td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Policy enforcement</td>
                                <td class="p-4 text-center text-gray-400">Basic</td>
                                <td class="p-4 text-center bg-octo-accent/5 text-white font-medium">Advanced</td>
                                <td class="p-4 text-center text-white font-medium">Advanced</td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Compliance reporting</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Org-wide visibility</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Audit logs</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5 text-gray-400">30 days</td>
                                <td class="p-4 text-center text-white font-medium">Unlimited</td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Policy drift detection</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td colspan="4" class="p-4 bg-octo-gray/30">
                                    <span class="text-sm font-bold text-gray-400 uppercase">Support & SLA</span>
                                </td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Community support</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Email & chat support</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-check text-green-400"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Priority support (24/7)</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Dedicated success manager</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">SLA uptime guarantee</td>
                                <td class="p-4 text-center text-gray-400">99%</td>
                                <td class="p-4 text-center bg-octo-accent/5 text-white font-medium">99.9%</td>
                                <td class="p-4 text-center text-white font-medium">Custom</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td colspan="4" class="p-4 bg-octo-gray/30">
                                    <span class="text-sm font-bold text-gray-400 uppercase">Enterprise Features</span>
                                </td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">SSO & SAML integration</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="border-b border-octo-border hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Advanced security controls</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                            <tr class="hover:bg-octo-gray/20">
                                <td class="p-4 text-gray-300">Custom contract terms</td>
                                <td class="p-4 text-center"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center bg-octo-accent/5"><i class="fa-solid fa-times text-gray-600"></i></td>
                                <td class="p-4 text-center"><i class="fa-solid fa-check text-green-400"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
