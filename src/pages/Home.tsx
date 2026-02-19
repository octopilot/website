import type { Component } from 'solid-js';
import PageMeta from '../components/seo/PageMeta';
import HeroSection from '../components/sections/HeroSection';
import RealitySection from '../components/sections/RealitySection';
import ArchitectureSection from '../components/sections/ArchitectureSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SecurityModelSection from '../components/sections/SecurityModelSection';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import UseCasesSection from '../components/sections/UseCasesSection';
import TechnicalDetailsSection from '../components/sections/TechnicalDetailsSection';
import ComparisonSection from '../components/sections/ComparisonSection';
import CtaSection from '../components/sections/CtaSection';

const Home: Component = () => {
    return (
        <>
            <PageMeta
                title="GitOps CI/CD Platform"
                description="Octopilot provides a path to production for applications built with Cloud Native Buildpacks and Skaffold. Multi-arch builds, SBOM generation, and SLSA provenance — automated via GitHub Actions."
                path="/"
            />
            <HeroSection />
            <RealitySection />
            <ArchitectureSection />
            <FeaturesSection />
            <SecurityModelSection />
            <OpenSourceSection />
            <UseCasesSection />
            <TechnicalDetailsSection />
            <ComparisonSection />
            <CtaSection />
        </>
    );
};

export default Home;
