import type { Component } from 'solid-js';

import PricingHero from '../components/pricing/PricingHero';
import PricingTiers from '../components/pricing/PricingTiers';
import ComparisonTable from '../components/pricing/ComparisonTable';
import FaqSection from '../components/pricing/FaqSection';
import PricingCTA from '../components/pricing/PricingCTA';
import TrustIndicators from '../components/pricing/TrustIndicators';

const Pricing: Component = () => {
    return (
        <>
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
