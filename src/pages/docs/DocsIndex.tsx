import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';
import DocsLayout from '../../components/docs/DocsLayout';

const DocsIndex: Component = () => {
    // No TOC for index page generally needed, or we could link to sections
    const tocItems = [
        { id: "core", text: "Core Concepts" },
        { id: "guides", text: "Feature Guides" },
        { id: "reference", text: "Reference" }
    ];

    return (
        <DocsLayout tocItems={tocItems}>
            <PageMeta
                title="Documentation"
                description="Comprehensive guides, references, and tutorials for Octopilot — GitOps secrets management, key attestation, CI/CD pipeline automation, and GitHub Actions reference."
                path="/docs/intro"
            />
            <div class="mb-12">
                <h1 class="text-4xl font-bold text-white mb-4">Documentation</h1>
                <p class="text-xl text-slate-400">
                    Comprehensive guides, references, and tutorials for Octopilot.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Core / Index */}
                <div id="core" class="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all group scroll-mt-24">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <i class="fa-solid fa-book text-blue-400 text-xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white">Core Concepts</h3>
                    </div>
                    <p class="text-slate-400 mb-6">
                        Overview of the Octopilot architecture, security model, and quickstart guide.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li>
                            <a href="/docs/core-concepts" class="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                                <i class="fa-solid fa-arrow-right text-xs"></i>
                                Security Model & Architecture
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Features / Guides */}
                <div id="guides" class="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all group scroll-mt-24">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <i class="fa-solid fa-list-check text-emerald-400 text-xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white">Feature Guides</h3>
                    </div>
                    <p class="text-slate-400 mb-6">
                        Deep dives into specific features and workflows.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li>
                            <a href="/docs/key-attestation" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
                                <i class="fa-solid fa-arrow-right text-xs"></i>
                                Key Attestation & Enrollment
                            </a>
                        </li>
                        <li>
                            <a href="/docs/admin-configuration" class="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                                <i class="fa-solid fa-arrow-right text-xs"></i>
                                Admin Configuration & Setup
                            </a>
                        </li>
                        {/* Placeholder for future guides */}
                        <li class="opacity-50 cursor-not-allowed text-slate-500 flex items-center gap-2">
                            <i class="fa-solid fa-lock text-xs"></i>
                            Rotation Policies (Coming Soon)
                        </li>
                    </ul>
                </div>
                {/* Reference */}
                <div id="reference" class="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all group scroll-mt-24">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <i class="fa-solid fa-code-branch text-purple-400 text-xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white">Reference</h3>
                    </div>
                    <p class="text-slate-400 mb-6">
                        Technical references and integrations.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li>
                            <a href="/docs/github-actions" class="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                                <i class="fa-solid fa-arrow-right text-xs"></i>
                                GitHub Actions
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/octopilot/secret-controller-manager" target="_blank" class="text-slate-400 hover:text-slate-300 flex items-center gap-2">
                                <i class="fa-solid fa-arrow-right text-xs"></i>
                                Controller Repo (GitHub)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </DocsLayout>
    );
};

export default DocsIndex;
