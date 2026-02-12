import type { Component } from 'solid-js';

import GovernanceHero from '../../components/product/governance/GovernanceHero';
import GovernanceFeature from '../../components/product/governance/GovernanceFeature';
import CtaSection from '../../components/sections/CtaSection';

const Governance: Component = () => {
    return (
        <>
            <GovernanceHero />

            <GovernanceFeature
                title="Cryptographic Isolation"
                description="Eliminate the risk of lateral movement. Each repository gets its own unique GPG key pair, ensuring that a compromise in one service cannot affect others."
                icon="fa-solid fa-shield-virus"
                iconColor="text-blue-400"
                bgColor="bg-blue-500/10"
                benefits={[
                    "Mathematically enforced separation between teams",
                    "No shared 'master key' that unlocks everything",
                    "Granular revocation at the repository level"
                ]}
            />

            <GovernanceFeature
                title="Automated Key Rotation"
                description="Stop treating key rotation as a manual annual ritual. Set policies to automatically rotate keys every 30, 60, or 90 days without downtime."
                icon="fa-solid fa-rotate"
                iconColor="text-green-400"
                bgColor="bg-green-500/10"
                reverse={true}
                benefits={[
                    "Zero-downtime rotation with dual-key support",
                    "Automated re-encryption of existing secrets",
                    "Compliance with rigorous security standards (SOC 2, PCI)"
                ]}
            />

            <GovernanceFeature
                title="Algorithm Enforcement"
                description="Ensure every secret in your organization meets modern cryptographic standards. Deprecate weak algorithms and enforce minimum key lengths."
                icon="fa-solid fa-lock"
                iconColor="text-purple-400"
                bgColor="bg-purple-500/10"
                benefits={[
                    "Enforce RSA-4096 or Ed25519 for all new keys",
                    "Prevent usage of deprecated algorithms (e.g., SHA-1)",
                    "Automated scanning for non-compliant keys"
                ]}
            />

            <GovernanceFeature
                title="Audit Trails & History"
                description="Gain complete visibility into your secret management lifecycle. Every key generation, rotation, and access event is logged and immutable."
                icon="fa-solid fa-clock-rotate-left"
                iconColor="text-orange-400"
                bgColor="bg-orange-500/10"
                reverse={true}
                benefits={[
                    "Tamper-proof audit logs stored in Git",
                    "Traceability of every secret back to its creator",
                    "Easy export for compliance audits"
                ]}
            />

            <CtaSection />
        </>
    );
};

export default Governance;
