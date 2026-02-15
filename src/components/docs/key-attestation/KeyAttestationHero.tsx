import type { Component } from 'solid-js';

const KeyAttestationHero: Component = () => {
    return (
        <section id="attestation-hero" class="min-h-[400px] relative overflow-hidden border-b border-slate-800/50 pt-20 pb-16 md:pb-0">
            <div class="absolute inset-0 bg-gradient-to-b from-green-950/30 to-transparent"></div>
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 40%, rgba(34, 197, 94, 0.15) 0%, transparent 60%);"></div>

            <div class="max-w-[1200px] mx-auto px-8 h-full flex flex-col justify-center relative z-10">
                <div class="flex items-center gap-3 mb-6">
                    <span class="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        Feature Guide
                    </span>
                    <span class="text-slate-500">•</span>
                    <span class="text-slate-400 text-xs md:text-sm">Security & Governance</span>
                </div>

                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
                    <span class="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                        User Enrollment & Key Attestation
                    </span>
                </h1>

                <p class="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                    Securely onboard users with Octopilot-attested GPG keys. Enforce 90-day rotation, organization-wide identity, and automated delivery.
                </p>
            </div>
        </section>
    );
};

export default KeyAttestationHero;
