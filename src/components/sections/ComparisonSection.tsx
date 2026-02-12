import type { Component } from 'solid-js';

const ComparisonSection: Component = () => {
    return (
        <section id="comparison-section" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">How Octopilot compares</h2>
                    <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                        Contrasting approaches to secrets management in GitOps environments
                    </p>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b-2 border-octo-border">
                                <th class="py-4 px-6 text-gray-400 font-medium text-sm">Approach</th>
                                <th class="py-4 px-6 text-white font-bold">Octopilot</th>
                                <th class="py-4 px-6 text-gray-400 font-medium">Central Vault (HashiCorp, AWS, etc.)</th>
                                <th class="py-4 px-6 text-gray-400 font-medium">Manual GPG Management</th>
                                <th class="py-4 px-6 text-gray-400 font-medium">Sealed Secrets</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="border-b border-octo-border">
                                <td class="py-4 px-6 text-gray-400">Secret storage location</td>
                                <td class="py-4 px-6 text-gray-300">Repository (encrypted)</td>
                                <td class="py-4 px-6 text-gray-500">External vault system</td>
                                <td class="py-4 px-6 text-gray-500">Repository (encrypted)</td>
                                <td class="py-4 px-6 text-gray-500">Repository (encrypted)</td>
                            </tr>
                            <tr class="border-b border-octo-border bg-octo-gray/20">
                                <td class="py-4 px-6 text-gray-400">Runtime dependencies</td>
                                <td class="py-4 px-6 text-green-400 font-medium">None</td>
                                <td class="py-4 px-6 text-red-400">Vault must be reachable</td>
                                <td class="py-4 px-6 text-green-400 font-medium">None</td>
                                <td class="py-4 px-6 text-yellow-400">Controller must be running</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td class="py-4 px-6 text-gray-400">Key management</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Automated</td>
                                <td class="py-4 px-6 text-yellow-400">Vault manages internally</td>
                                <td class="py-4 px-6 text-red-400">Fully manual</td>
                                <td class="py-4 px-6 text-yellow-400">Manual key rotation</td>
                            </tr>
                            <tr class="border-b border-octo-border bg-octo-gray/20">
                                <td class="py-4 px-6 text-gray-400">GitOps compatibility</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Native</td>
                                <td class="py-4 px-6 text-red-400">Breaks declarative model</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Native</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Native</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td class="py-4 px-6 text-gray-400">Policy enforcement</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Automated</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Vault policies</td>
                                <td class="py-4 px-6 text-red-400">None</td>
                                <td class="py-4 px-6 text-red-400">None</td>
                            </tr>
                            <tr class="border-b border-octo-border bg-octo-gray/20">
                                <td class="py-4 px-6 text-gray-400">Compliance visibility</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Org-wide dashboards</td>
                                <td class="py-4 px-6 text-yellow-400">Vault audit logs</td>
                                <td class="py-4 px-6 text-red-400">None</td>
                                <td class="py-4 px-6 text-red-400">None</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td class="py-4 px-6 text-gray-400">Disaster recovery</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Git restore</td>
                                <td class="py-4 px-6 text-red-400">Vault must be recovered first</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Git restore</td>
                                <td class="py-4 px-6 text-yellow-400">Requires controller + key backup</td>
                            </tr>
                            <tr class="border-b border-octo-border bg-octo-gray/20">
                                <td class="py-4 px-6 text-gray-400">Operational complexity</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Low (automated)</td>
                                <td class="py-4 px-6 text-red-400">High (vault infrastructure)</td>
                                <td class="py-4 px-6 text-red-400">High (manual processes)</td>
                                <td class="py-4 px-6 text-yellow-400">Medium (controller + manual keys)</td>
                            </tr>
                            <tr class="border-b border-octo-border">
                                <td class="py-4 px-6 text-gray-400">Cross-repo isolation</td>
                                <td class="py-4 px-6 text-green-400 font-medium">Enforced by design</td>
                                <td class="py-4 px-6 text-yellow-400">Policy-dependent</td>
                                <td class="py-4 px-6 text-yellow-400">Manual key scoping</td>
                                <td class="py-4 px-6 text-yellow-400">Cluster-wide key by default</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mt-8 bg-octo-gray/30 border border-octo-border rounded-lg p-6">
                    <div class="flex items-start space-x-4">
                        <i class="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                        <div>
                            <h4 class="text-white font-bold mb-2">Choosing the right approach</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Octopilot is purpose-built for organizations that have deliberately chosen repository-local secrets for GitOps, security, or compliance reasons. If your team already uses central vaults successfully, Octopilot may not be necessary. If you're managing GPG keys manually or using Sealed Secrets without governance, Octopilot automates the operational burden while maintaining your existing architecture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
