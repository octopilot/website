import type { Component } from 'solid-js';
import { useParams } from '@solidjs/router';
import { For, Show } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';
import DocsLayout from '../../components/docs/DocsLayout';
import DocsCTA from '../../components/docs/DocsCTA';
import { githubActions } from '../../data/github-actions';

const GithubActionDetail: Component = () => {
    const params = useParams();
    const action = () => githubActions.find(a => a.id === params.id);

    const tocItems = [
        { id: "overview", text: "Overview" },
        { id: "inputs", text: "Inputs" },
        { id: "usage", text: "Usage" },
        { id: "gotchas", text: "Known Gotchas" }
    ];

    const relatedActions = () => githubActions
        .filter(a => a.id !== params.id)
        .map(a => ({
            text: a.title,
            href: `/docs/github-actions/${a.id}`
        }));

    return (
        <DocsLayout tocItems={tocItems} relatedLinks={relatedActions()}>
            <Show when={action()}>
                {actionData => (
                    <PageMeta
                        title={`${actionData().title} — GitHub Action`}
                        description={actionData().description.slice(0, 160)}
                        path={`/docs/github-actions/${params.id}`}
                    />
                )}
            </Show>
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

                        {/* Gotchas */}
                        <Show when={actionData().gotchas && actionData().gotchas!.length > 0}>
                            <div id="gotchas" class="scroll-mt-24 mb-16">
                                <div class="flex items-center justify-between mb-2">
                                    <h2 class="text-2xl font-bold text-white">Known Gotchas</h2>
                                </div>
                                <p class="text-slate-400 text-sm mb-6">
                                    Discovered while dogfooding this action. The full list is maintained in{' '}
                                    <a
                                        href={`https://github.com/octopilot/actions/blob/main/${actionData().id}/action.yml`}
                                        target="_blank"
                                        class="text-blue-400 hover:text-blue-300 hover:underline"
                                    >
                                        action.yml
                                    </a>.
                                </p>
                                <div class="space-y-3">
                                    <For each={actionData().gotchas}>
                                        {gotcha => (
                                            <details class="group bg-amber-500/5 border border-amber-500/20 rounded-xl overflow-hidden">
                                                {/* Summary row — click to expand */}
                                                <summary class="flex items-center gap-3 px-6 py-4 cursor-pointer list-none select-none hover:bg-amber-500/10 transition-colors">
                                                    <i class="fa-solid fa-triangle-exclamation text-amber-400 flex-shrink-0"></i>
                                                    <Show when={gotcha.language}>
                                                        <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded font-mono flex-shrink-0">
                                                            {gotcha.language}
                                                        </span>
                                                    </Show>
                                                    <span class="text-white font-semibold flex-1">{gotcha.title}</span>
                                                    {/* Chevron rotates when open */}
                                                    <i class="fa-solid fa-chevron-right text-amber-500/60 text-xs flex-shrink-0 transition-transform duration-200 group-open:rotate-90"></i>
                                                </summary>

                                                {/* Expanded body */}
                                                <div class="px-6 py-5 space-y-4 border-t border-amber-500/20">
                                                    <div>
                                                        <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Symptom</p>
                                                        <p class="text-slate-300 text-sm leading-relaxed">{gotcha.symptom}</p>
                                                    </div>
                                                    <div>
                                                        <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Fix</p>
                                                        <p class="text-slate-300 text-sm leading-relaxed">{gotcha.fix}</p>
                                                    </div>
                                                    <Show when={gotcha.code}>
                                                        <div class="bg-slate-900/80 border border-slate-700 rounded-lg p-4 overflow-x-auto">
                                                            <pre class="font-mono text-sm text-green-300 leading-relaxed whitespace-pre">{gotcha.code}</pre>
                                                        </div>
                                                    </Show>
                                                </div>
                                            </details>
                                        )}
                                    </For>
                                </div>
                            </div>
                        </Show>

                    </article>
                )}
            </Show>
            <DocsCTA />
        </DocsLayout>
    );
};

export default GithubActionDetail;
