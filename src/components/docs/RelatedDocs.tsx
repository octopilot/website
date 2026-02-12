import type { Component } from 'solid-js';

const RelatedDocs: Component = () => {
    return (
        <section id="related-docs" class="py-16">
            <div class="max-w-[1200px] mx-auto px-8">
                <h2 class="text-3xl font-bold text-white mb-8">Related Documentation</h2>

                <div class="grid grid-cols-3 gap-6">
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-book text-blue-400 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-blue-400 text-xs font-bold uppercase">Documentation</div>
                                <div class="text-white font-semibold">API Reference</div>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mb-4">Complete API documentation for secret-controller-manager CLI and Kubernetes CRDs</p>
                        <button class="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2">
                            Read Docs
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-code text-purple-400 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-purple-400 text-xs font-bold uppercase">Tutorial</div>
                                <div class="text-white font-semibold">CI/CD Integration</div>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mb-4">Step-by-step guide for integrating with GitHub Actions, GitLab CI, and Jenkins</p>
                        <button class="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-2">
                            Read Tutorial
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-shield-halved text-green-400 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-green-400 text-xs font-bold uppercase">Guide</div>
                                <div class="text-white font-semibold">Security Best Practices</div>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mb-4">Hardening guidelines, key rotation policies, and compliance checklists</p>
                        <button class="text-green-400 hover:text-green-300 text-sm font-medium flex items-center gap-2">
                            Read Guide
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-wrench text-orange-400 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-orange-400 text-xs font-bold uppercase">Tutorial</div>
                                <div class="text-white font-semibold">Troubleshooting Guide</div>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mb-4">Common issues and solutions for deployment, decryption, and key management</p>
                        <button class="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center gap-2">
                            Read Guide
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-video text-cyan-400 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-cyan-400 text-xs font-bold uppercase">Video</div>
                                <div class="text-white font-semibold">Quickstart Walkthrough</div>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mb-4">15-minute video showing installation, encryption, and deployment</p>
                        <button class="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2">
                            Watch Video
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-pink-500/50 transition-all cursor-pointer group">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-file-alt text-pink-400 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-pink-400 text-xs font-bold uppercase">Case Study</div>
                                <div class="text-white font-semibold">Enterprise Migration</div>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mb-4">How GlobalPay migrated 500+ microservices from HashiCorp Vault</p>
                        <button class="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-2">
                            Read Case Study
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedDocs;
