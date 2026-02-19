import type { Component } from 'solid-js';
import PageMeta from '../components/seo/PageMeta';
import PricingHero from '../components/pricing/PricingHero';
import PricingTiers from '../components/pricing/PricingTiers';
import ComparisonTable from '../components/pricing/ComparisonTable';
import FaqSection from '../components/pricing/FaqSection';
import PricingCTA from '../components/pricing/PricingCTA';
import TrustIndicators from '../components/pricing/TrustIndicators';

const Pricing: Component = () => {
    return (
        <>
            <PageMeta
                title="Pricing"
                description="Flexible pricing plans for teams of all sizes. Start free with Octopilot's open-source GitHub Actions, or upgrade for advanced secrets management and enterprise governance."
                path="/pricing"
            />
            <PricingHero />
            <PricingTiers />
            <ComparisonTable />
            <FaqSection />
            <PricingCTA />
            <TrustIndicators />
        </>
    );
};

export default Pricing;
