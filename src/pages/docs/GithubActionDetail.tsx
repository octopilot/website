import type { Component } from 'solid-js';
import { useParams } from '@solidjs/router';
import { Show } from 'solid-js';
import DocsLayout from '../../components/docs/DocsLayout';
import DocsCTA from '../../components/docs/DocsCTA';
import { githubActions } from '../../data/github-actions';

const GithubActionDetail: Component = () => {
    const params = useParams();
    const action = () => githubActions.find(a => a.id === params.id);

    const tocItems = [
        { id: "overview", text: "Overview" },
        { id: "inputs", text: "Inputs" },
        { id: "usage", text: "Usage" }
    ];

    const relatedActions = () => githubActions
        .filter(a => a.id !== params.id)
        .map(a => ({
            text: a.title,
            href: `/docs/github-actions/${a.id}`
        }));

    return (
        <DocsLayout tocItems={tocItems} relatedLinks={relatedActions()}>
            <Show when={action()} fallback={
                <div class="text-white text-center py-20">
                    <h2 class="text-2xl font-bold mb-4">Action Not Found</h2>
                    <p class="text-slate-400">The requested action could not be found.</p>
                </div>
            }>
                {actionData => (
                    <article class="prose prose-invert max-w-none">
                        {/* Header */}
                        <div id="overview" class="scroll-mt-24 mb-12">
                            <div class="flex items-center gap-2 text-slate-400 text-sm mb-6">
                                <a href="/docs/github-actions" class="hover:text-white transition-colors">GitHub Actions</a>
                                <i class="fa-solid fa-chevron-right text-xs"></i>
                                <span class="text-blue-400">{actionData().title}</span>
                            </div>

                            <div class="flex items-start gap-6 mb-8">
                                <div class={`p-4 rounded-xl ${actionData().iconBg}`}>
                                    <i class={`fa-solid ${actionData().icon} ${actionData().iconColor} text-3xl`}></i>
                                </div>
                                <div>
                                    <h1 class="text-4xl font-bold text-white mb-3">{actionData().title}</h1>
                                    <code class="px-3 py-1 bg-slate-800 rounded-md text-slate-300 font-mono text-sm border border-slate-700">
                                        {actionData().path}
                                    </code>
                                </div>
                            </div>

                            <p class="text-xl text-slate-300 leading-relaxed max-w-3xl">
                                {actionData().description}
                            </p>
                        </div>

                        {/* Features */}
                        <div class="mb-16">
                            <h2 class="text-2xl font-bold text-white mb-6">Features</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {actionData().features.map(feature => (
                                    <div class="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                        <i class="fa-solid fa-check text-green-400"></i>
                                        <span class="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inputs */}
                        <div id="inputs" class="scroll-mt-24 mb-16">
                            <h2 class="text-2xl font-bold text-white mb-6">Inputs</h2>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                                    <thead class="bg-slate-900 text-slate-400 text-sm font-bold uppercase tracking-wider">
                                        <tr>
                                            <th class="px-6 py-4">Name</th>
                                            <th class="px-6 py-4">Description</th>
                                            <th class="px-6 py-4">Required</th>
                                            <th class="px-6 py-4">Default</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-800">
                                        {actionData().inputs.map(input => (
                                            <tr class="text-slate-300">
                                                <td class="px-6 py-4 font-mono text-purple-400">{input.name}</td>
                                                <td class="px-6 py-4 text-sm">{input.description}</td>
                                                <td class="px-6 py-4">
                                                    {input.required ? (
                                                        <span class="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded">Yes</span>
                                                    ) : (
                                                        <span class="px-2 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded">No</span>
                                                    )}
                                                </td>
                                                <td class="px-6 py-4 font-mono text-xs text-slate-500">{input.default || '-'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Outputs (if any) */}
                        <Show when={actionData().outputs}>
                            <div class="mb-16">
                                <h2 class="text-2xl font-bold text-white mb-6">Outputs</h2>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                                        <thead class="bg-slate-900 text-slate-400 text-sm font-bold uppercase tracking-wider">
                                            <tr>
                                                <th class="px-6 py-4">Name</th>
                                                <th class="px-6 py-4">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-800">
                                            {actionData().outputs!.map(output => (
                                                <tr class="text-slate-300">
                                                    <td class="px-6 py-4 font-mono text-yellow-400">{output.name}</td>
                                                    <td class="px-6 py-4 text-sm">{output.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Show>

                        {/* Usage */}
                        <div id="usage" class="scroll-mt-24 mb-16">
                            <h2 class="text-2xl font-bold text-white mb-6">Usage</h2>
                            <div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                                <div class="flex items-center gap-2 px-6 py-4 bg-slate-900 border-b border-slate-800">
                                    <span class="text-sm text-slate-300 font-mono font-bold">workflow.yml</span>
                                </div>
                                <div class="p-8 overflow-x-auto">
                                    <pre class="font-mono text-sm text-blue-100 leading-relaxed whitespace-pre">
                                        {actionData().example}
                                    </pre>
                                </div>
                            </div>
                        </div>

                    </article>
                )}
            </Show>
            <DocsCTA />
        </DocsLayout>
    );
};

export default GithubActionDetail;
