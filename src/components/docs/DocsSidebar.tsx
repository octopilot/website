import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const DocsSidebar: Component = () => {
    return (
        <aside class="hidden lg:block w-64 flex-shrink-0 border-r border-slate-800/50 bg-slate-950/20 mr-8 py-8 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto">
            <nav class="space-y-8 pr-4">
                <div>
                    <h5 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 px-4">Getting Started</h5>
                    <ul class="space-y-1">
                        <li>
                            <A href="/documentation" end class="block px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm" activeClass="bg-blue-500/10 text-blue-400 font-medium">
                                Documentation Index
                            </A>
                        </li>
                        <li>
                            <A href="/documentation/core-concepts" class="block px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm" activeClass="bg-blue-500/10 text-blue-400 font-medium">
                                Core Concepts
                            </A>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 px-4">Guides</h5>
                    <ul class="space-y-1">
                        <li>
                            <A href="/documentation/key-attestation" class="block px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm" activeClass="bg-emerald-500/10 text-emerald-400 font-medium">
                                Key Attestation
                            </A>
                        </li>
                        <li>
                            <A href="/documentation/admin-configuration" class="block px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm" activeClass="bg-purple-500/10 text-purple-400 font-medium">
                                Admin Configuration
                            </A>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 px-4">Reference</h5>
                    <ul class="space-y-1">
                        <li>
                            <a href="https://github.com/octopilot/secret-controller-manager" target="_blank" class="block px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm flex items-center gap-2">
                                <i class="fa-brands fa-github text-xs"></i>
                                Controller Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default DocsSidebar;
