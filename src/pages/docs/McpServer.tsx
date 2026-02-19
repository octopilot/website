import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';
import DocsCTA from '../../components/docs/DocsCTA';
import DocsLayout from '../../components/docs/DocsLayout';

const McpServer: Component = () => {
    const tocItems = [
        { id: "overview", text: "Overview" },
        { id: "tools", text: "Tools" },
        { id: "resources", text: "Resources" },
        { id: "setup", text: "Setup" },
        { id: "security", text: "Security Boundary" },
    ];

    return (
        <DocsLayout tocItems={tocItems}>
            <PageMeta
                title="MCP Server"
                description="Octopilot MCP server — enables AI agents (Claude, Cursor, GitHub Copilot) to detect languages, generate CI workflows, onboard repositories, and run op build via the Model Context Protocol."
                path="/docs/mcp"
            />
            <article class="prose prose-invert max-w-none">

                {/* Header */}
                <div id="overview" class="scroll-mt-24 mb-12">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span class="text-purple-400 font-bold text-sm uppercase tracking-wider">AI Integration</span>
                    </div>
                    <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">MCP Server</h1>
                    <p class="text-xl text-slate-400 leading-relaxed">
                        <code class="text-purple-300">octopilot-mcp</code> is a{' '}
                        <a href="https://modelcontextprotocol.io" target="_blank" class="text-blue-400 hover:underline">
                            Model Context Protocol
                        </a>{' '}
                        server built with <a href="https://github.com/PrefectHQ/fastmcp" target="_blank" class="text-blue-400 hover:underline">FastMCP 3</a>{' '}
                        that exposes Octopilot's CI/CD capabilities as callable tools.
                        AI agents in Cursor, Claude Desktop, and GitHub Copilot can use it to onboard new repositories,
                        generate CI pipelines, and run builds — all without leaving their editor.
                    </p>

                    <div class="mt-8 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                        <h3 class="text-white font-bold mb-3 flex items-center gap-2">
                            <i class="fa-solid fa-rocket text-purple-400"></i>
                            Quick start
                        </h3>
                        <div class="bg-slate-900/80 rounded-lg p-4 font-mono text-sm text-green-300">
                            <div class="text-slate-500 mb-1"># Register with Cursor in one command</div>
                            <div>uv run fastmcp install cursor src/octopilot_mcp/server.py \</div>
                            <div class="pl-4">--name octopilot --env OP_BINARY=/usr/local/bin/op</div>
                        </div>
                    </div>
                </div>

                {/* Tools */}
                <div id="tools" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-8">Tools</h2>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                            <thead class="bg-slate-900 text-slate-400 text-sm font-bold uppercase tracking-wider">
                                <tr>
                                    <th class="px-6 py-4">Tool</th>
                                    <th class="px-6 py-4">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 text-slate-300 text-sm">
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">detect_project_contexts</td>
                                    <td class="px-6 py-4">Parse <code>skaffold.yaml</code> → pipeline-context JSON (languages, versions, matrix)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">generate_skaffold_yaml</td>
                                    <td class="px-6 py-4">Generate a <code>skaffold.yaml</code> for a list of artifacts</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">generate_ci_workflow</td>
                                    <td class="px-6 py-4">Full <code>.github/workflows/ci.yml</code> using the standard octopilot pipeline</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">onboard_repository</td>
                                    <td class="px-6 py-4"><strong class="text-white">One-call onboarding</strong>: detect → generate files → return next steps checklist</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">run_op_build</td>
                                    <td class="px-6 py-4">Run <code>op build</code> via local binary or <code>ghcr.io/octopilot/op</code> container (30 min timeout)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">list_actions</td>
                                    <td class="px-6 py-4">All Octopilot GitHub Actions from the bundled registry</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 font-mono text-purple-400">get_action_details</td>
                                    <td class="px-6 py-4">Full spec, inputs, examples, and gotchas for a single action</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Resources */}
                <div id="resources" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-6">Resources</h2>
                    <p class="text-slate-400 mb-6">
                        Resources provide static context that agents can read at any time without making a tool call.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { uri: "octopilot://actions", desc: "Full actions registry as JSON" },
                            { uri: "octopilot://pipeline-context-schema", desc: "JSON Schema for the pipeline-context object" },
                            { uri: "octopilot://docs/getting-started", desc: "Plain-text onboarding guide" },
                            { uri: "octopilot://docs/skaffold-patterns", desc: "Common skaffold.yaml patterns" },
                        ].map(r => (
                            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                                <code class="text-purple-300 text-sm block mb-1">{r.uri}</code>
                                <p class="text-slate-400 text-sm">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Setup */}
                <div id="setup" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-6">Setup</h2>

                    <div class="space-y-6">
                        <div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                            <div class="px-6 py-4 bg-slate-900 border-b border-slate-800">
                                <span class="text-sm font-bold text-slate-300">1. Install</span>
                            </div>
                            <div class="p-6 font-mono text-sm text-green-300 space-y-1">
                                <div><span class="text-slate-500"># Clone the repo</span></div>
                                <div>git clone https://github.com/octopilot/octopilot-mcp</div>
                                <div>cd octopilot-mcp && uv sync</div>
                            </div>
                        </div>

                        <div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                            <div class="px-6 py-4 bg-slate-900 border-b border-slate-800">
                                <span class="text-sm font-bold text-slate-300">2. Register with your IDE (FastMCP 3 CLI)</span>
                            </div>
                            <div class="p-6 font-mono text-sm text-green-300 space-y-2">
                                <div><span class="text-slate-500"># Cursor</span></div>
                                <div>uv run fastmcp install cursor src/octopilot_mcp/server.py \</div>
                                <div class="pl-4">--name octopilot --env OP_BINARY=/usr/local/bin/op</div>
                                <div class="mt-2"><span class="text-slate-500"># Claude Desktop</span></div>
                                <div>uv run fastmcp install claude src/octopilot_mcp/server.py \</div>
                                <div class="pl-4">--name octopilot --env OP_BINARY=/usr/local/bin/op</div>
                            </div>
                        </div>

                        <div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                            <div class="px-6 py-4 bg-slate-900 border-b border-slate-800">
                                <span class="text-sm font-bold text-slate-300">3. Inspect from the terminal</span>
                            </div>
                            <div class="p-6 font-mono text-sm text-green-300 space-y-1">
                                <div><span class="text-slate-500"># List all tools</span></div>
                                <div>uv run fastmcp list src/octopilot_mcp/server.py</div>
                                <div class="mt-2"><span class="text-slate-500"># Call a tool directly</span></div>
                                <div>uv run fastmcp call src/octopilot_mcp/server.py tool_list_actions</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Boundary */}
                <div id="security" class="scroll-mt-24 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-6">Security Boundary</h2>
                    <div class="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-shield-halved text-red-400 text-xl mt-0.5 flex-shrink-0"></i>
                            <div>
                                <h3 class="text-white font-bold mb-2">op promote-image is intentionally absent</h3>
                                <p class="text-slate-300 text-sm leading-relaxed">
                                    Image promotion between environments (<code>op promote-image</code>) is NOT exposed
                                    as an MCP tool. Promotion is operationally sensitive — it must only run through a
                                    GitHub Actions workflow with an audit trail, OIDC credentials, and environment
                                    protection rules. Exposing it to an AI agent creates unacceptable risk of accidental
                                    or unauthorised promotion to production.
                                </p>
                                <p class="text-slate-400 text-sm mt-3">
                                    Use <code class="text-purple-300">generate_ci_workflow</code> to produce the workflow
                                    that handles promotion safely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
            <DocsCTA />
        </DocsLayout>
    );
};

export default McpServer;
