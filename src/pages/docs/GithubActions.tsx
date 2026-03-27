import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import PageMeta from '../../components/seo/PageMeta';
import DocsCTA from '../../components/docs/DocsCTA';
import DocsLayout from '../../components/docs/DocsLayout';
import { githubActions } from '../../data/github-actions';



const GithubActions: Component = () => {
    const tocItems = [
        { id: "intro", text: "Introduction" },
        { id: "available-actions", text: "Available Actions" },

    ];

    return (
        <DocsLayout tocItems={tocItems}>
            <PageMeta
                title="GitHub Actions Reference"
                description="Complete reference for all Octopilot GitHub Actions: octopilot build (registry or ttl.sh), detect-contexts, lint, kotlin-lint (standalone ktlint), test, integration-validate, integration-build-artifact, merge-build-results, verify-registry, setup-flux, setup-tools, janitor, release, SOPS decrypt, Kubernetes auth, and cloud network access actions."
                path="/docs/github-actions"
            />
            <article class="prose prose-invert max-w-none">
                <div id="intro" class="scroll-mt-24 mb-12">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span class="text-blue-400 font-bold text-sm uppercase tracking-wider">Reference</span>
                    </div>

                    <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">GitHub Actions</h1>
                    <p class="text-xl text-slate-400 leading-relaxed">
                        Octopilot provides a suite of official GitHub Actions to automate your GitOps workflows. These actions are open source and located in the <a href="https://github.com/octopilot/actions" target="_blank" class="text-blue-400 hover:underline">octopilot/actions</a> repository.
                    </p>
                </div>

                <div id="available-actions" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-8">Available Actions</h2>

                    <div class="space-y-6">
                        {githubActions.map(action => (
                            <A href={`/docs/github-actions/${action.id}`} class="block group">
                                <div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300">
                                    <div class="p-6">
                                        <div class="flex items-start justify-between mb-6">
                                            <div class="flex items-center gap-4">
                                                <div class={`p-3 rounded-lg ${action.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                                    <i class={`fa-solid ${action.icon} ${action.iconColor} text-xl`}></i>
                                                </div>
                                                <div>
                                                    <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{action.title}</h3>
                                                    <code class="text-sm text-slate-500 mt-1 block">{action.path}</code>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></i>
                                        </div>

                                        <p class="text-slate-300 mb-6 line-clamp-2">
                                            {action.description}
                                        </p>

                                        <div class="flex flex-wrap gap-3">
                                            {action.features.slice(0, 3).map(feature => (
                                                <span class="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50 text-xs text-slate-400">
                                                    <i class="fa-solid fa-check text-green-400 text-[10px]"></i>
                                                    {feature}
                                                </span>
                                            ))}
                                            {action.features.length > 3 && (
                                                <span class="px-3 py-1 text-xs text-slate-500">+{action.features.length - 3} more</span>
                                            )}
                                        </div>
</div>
                            </div>
                        </A>
                        ))}

                        {/* Placeholder for future actions */}
                        <div class="border border-dashed border-slate-800 rounded-xl p-8 text-center bg-slate-900/20">
                            <div class="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fa-solid fa-plus text-slate-600 text-2xl"></i>
                            </div>
                            <h3 class="text-lg font-bold text-slate-400 mb-2">Have an action idea?</h3>
                            <p class="text-slate-500 text-sm max-w-md mx-auto">
                                We are continuously expanding our suite of actions. Check the <a href="https://github.com/octopilot/actions" class="text-blue-400 hover:text-blue-300">repository</a> for updates or to contribute.
                            </p>
                        </div>
                    </div>
                </div>


            </article>
            <DocsCTA />
        </DocsLayout>
    );
};

export default GithubActions;
