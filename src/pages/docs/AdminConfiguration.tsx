import type { Component } from 'solid-js';
import DocsCTA from '../../components/docs/DocsCTA';
import DocsLayout from '../../components/docs/DocsLayout';

const AdminConfiguration: Component = () => {
    const tocItems = [
        { id: "intro", text: "Introduction" },
        { id: "config-file", text: "Config File" },
        { id: "env-vars", text: "Environment Variables" },
        { id: "best-practices", text: "Best Practices" }
    ];

    return (
        <DocsLayout tocItems={tocItems}>
            <article class="prose prose-invert max-w-none">
                <div id="intro" class="scroll-mt-24 mb-12">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span class="text-purple-400 font-bold text-sm uppercase tracking-wider">Setup Guide</span>
                    </div>

                    <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">Admin Configuration</h1>
                    <p class="text-xl text-slate-400 leading-relaxed">
                        After installing Octopilot, configuring your organization's policies is the critical next step.
                        Define your attestation rules, email domains, and rotation defaults in a central config repository.
                    </p>
                </div>

                <div id="config-file" class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden mb-16 scroll-mt-24">
                    <div class="flex items-center gap-2 px-6 py-4 bg-slate-900 border-b border-slate-800">
                        <i class="fa-brands fa-github text-slate-400"></i>
                        <span class="text-sm text-slate-300 font-mono font-bold">.github/octopilot.yaml</span>
                    </div>
                    <div class="p-8 overflow-x-auto">
                        <pre class="font-mono text-sm text-blue-100 leading-relaxed whitespace-pre">
                            <span class="text-pink-400">secrets:</span>{"\n"}
                            <span class="text-pink-400">attestation:</span>{"\n"}
                            <span class="text-blue-300">enabled:</span> <span class="text-yellow-300">true</span>{"\n"}
                            <span class="text-blue-300">expiryDays:</span> <span class="text-yellow-300">90</span>{"\n"}
                            <span class="text-slate-500"># Only emails from these domains will receive keys</span>{"\n"}
                            <span class="text-blue-300">allowedEmailDomains:</span>{"\n"}
                            <span class="text-slate-400">-</span> <span class="text-green-300">"acme-corp.com"</span>{"\n"}
                            <span class="text-slate-400">-</span> <span class="text-green-300">"acme-corp-partners.com"</span>{"\n"}
                            <span class="text-blue-300">emailProvider:</span>{"\n"}
                            <span class="text-blue-300">enabled:</span> <span class="text-yellow-300">true</span>{"\n"}
                            <span class="text-slate-500"># Credentials provided via env vars: SMTP_HOST, SMTP_USER, etc.</span>
                        </pre>
                    </div>
                </div>

                <div id="env-vars" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-6">Environment Variables</h2>
                    <p class="text-slate-400 mb-6">
                        These secrets must be provided to the Octopilot instance (e.g., via Kubernetes Secrets or GitHub Actions secrets).
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-slate-900/30 border border-slate-800 rounded-lg">
                            <h4 class="text-white font-bold mb-3 flex items-center gap-2">
                                <i class="fa-solid fa-key text-pink-400 text-sm"></i>
                                Cryptography
                            </h4>
                            <ul class="text-sm text-slate-400 space-y-3">
                                <li class="flex flex-col">
                                    <code class="text-pink-400 bg-slate-950 px-2 py-1 rounded w-fit mb-1">ORG_ATTESTATION_KEY</code>
                                    <span>Private key for signing user request.</span>
                                </li>
                                <li class="flex flex-col">
                                    <code class="text-pink-400 bg-slate-950 px-2 py-1 rounded w-fit mb-1">ORG_ATTESTATION_PUBLIC_KEY</code>
                                    <span>Public key for validation.</span>
                                </li>
                            </ul>
                        </div>
                        <div class="p-6 bg-slate-900/30 border border-slate-800 rounded-lg">
                            <h4 class="text-white font-bold mb-3 flex items-center gap-2">
                                <i class="fa-solid fa-envelope text-blue-400 text-sm"></i>
                                Email Delivery
                            </h4>
                            <ul class="text-sm text-slate-400 space-y-3">
                                <li class="flex flex-col">
                                    <code class="text-pink-400 bg-slate-950 px-2 py-1 rounded w-fit mb-1">SMTP_HOST</code>
                                    <span>SMTP server hostname (e.g., smtp.sendgrid.net).</span>
                                </li>
                                <li class="flex flex-col">
                                    <code class="text-pink-400 bg-slate-950 px-2 py-1 rounded w-fit mb-1">SMTP_USER</code>
                                    <span>SMTP username.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="best-practices" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-6">Best Practices</h2>
                    <div>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-shield-halved text-green-400 mt-1"></i>
                                <span class="text-slate-300"><strong>Secure Storage:</strong> Store the Org Attestation Key (OAK) in a secure Vault or Hardware Security Module (HSM) if possible.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-rotate text-green-400 mt-1"></i>
                                <span class="text-slate-300"><strong>Rotation:</strong> Rotate the OAK annually. Users' keys are short-lived (90 days default), but the OAK is long-lived.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-building text-green-400 mt-1"></i>
                                <span class="text-slate-300"><strong>Domain Segmentation:</strong> Use `allowedEmailDomains` to restrict key issuance to employees only. Use a separate instance or config for contractors.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            <DocsCTA />
        </DocsLayout>
    );
};

export default AdminConfiguration;
