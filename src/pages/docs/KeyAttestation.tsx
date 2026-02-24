import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import PageMeta from '../../components/seo/PageMeta';
import KeyAttestationHero from '../../components/docs/key-attestation/KeyAttestationHero';
import AttestationFlow from '../../components/docs/key-attestation/AttestationFlow';
import EnrollmentSteps from '../../components/docs/key-attestation/EnrollmentSteps';
import DocsCTA from '../../components/docs/DocsCTA';
import DocsLayout from '../../components/docs/DocsLayout';

const KeyAttestation: Component = () => {
    // Define TOC items manually for now based on components
    const tocItems = [
        { id: "hero", text: "Introduction" },
        { id: "flow-overview-section", text: "How It Works" },
        { id: "enrollment-guides", text: "Enrollment Guide" },
        { id: "next-steps", text: "Next Steps" }
    ];

    return (
        <DocsLayout tocItems={tocItems}>
            <PageMeta
                title="Key Attestation"
                description="How Octopilot verifies GPG key ownership and builds cryptographic trust chains for repository secrets. Step-by-step enrollment guide for developers and administrators."
                path="/docs/key-attestation"
            />
            <div id="hero" class="scroll-mt-24">
                <KeyAttestationHero />
            </div>

            <AttestationFlow />

            <div id="enrollment-guides" class="scroll-mt-24">
                <EnrollmentSteps />
            </div>

            <div id="next-steps" class="py-12 border-t border-slate-800/50 bg-slate-900/30 scroll-mt-24 rounded-xl mt-8">
                <div class="px-8 text-center">
                    <h3 class="text-2xl font-bold text-white mb-4">Admin Config</h3>
                    <p class="text-slate-400 mb-6">Need to configure attestation policies or email domains for your organization?</p>
                    <A href="/docs/admin-configuration" class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
                        View Admin Configuration Guide
                        <i class="fa-solid fa-arrow-right text-sm"></i>
                    </A>
                </div>
            </div>

            <div class="mt-12">
                <DocsCTA />
            </div>
        </DocsLayout>
    );
};

export default KeyAttestation;
