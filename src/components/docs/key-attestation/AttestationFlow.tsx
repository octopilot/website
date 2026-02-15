import type { Component } from 'solid-js';

const AttestationFlow: Component = () => {
    return (
        <section id="flow-overview-section" class="py-24 border-b border-slate-800/50">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-white mb-4">How It Works</h2>
                    <p class="text-lg text-slate-400 max-w-3xl mx-auto">
                        A secure, automated lifecycle for user identity and key distribution.
                    </p>
                </div>

                <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div class="hidden md:block absolute top-[2rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-500/20 via-green-500/50 to-green-500/20 -z-10"></div>

                        <div class="text-center relative">
                            <div class="w-16 h-16 bg-slate-900 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <i class="fa-solid fa-user text-green-400 text-xl"></i>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">1. Generate Key</h4>
                            <p class="text-slate-400 text-xs">User creates "Reception Key"</p>
                        </div>

                        <div class="text-center relative">
                            <div class="w-16 h-16 bg-slate-900 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <i class="fa-brands fa-github text-green-400 text-xl"></i>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">2. Upload to GitHub</h4>
                            <p class="text-slate-400 text-xs">Public key on profile</p>
                        </div>

                        <div class="text-center relative">
                            <div class="w-16 h-16 bg-slate-900 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <i class="fa-solid fa-robot text-green-400 text-xl"></i>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">3. Auto-Attest</h4>
                            <p class="text-slate-400 text-xs">Octopilot signs & encrypts</p>
                        </div>

                        <div class="text-center relative">
                            <div class="w-16 h-16 bg-slate-900 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <i class="fa-solid fa-envelope text-green-400 text-xl"></i>
                            </div>
                            <h4 class="text-white font-bold text-sm mb-1">4. Secure Delivery</h4>
                            <p class="text-slate-400 text-xs">Email to corporate address</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AttestationFlow;
