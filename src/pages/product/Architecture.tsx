import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';
import ArchitectureHero from '../../components/product/architecture/ArchitectureHero';
import FlowOverview from '../../components/product/architecture/FlowOverview';
import Step1RepositorySetup from '../../components/product/architecture/Step1RepositorySetup';
import Step2KeyCreation from '../../components/product/architecture/Step2KeyCreation';
import Step3SigningGovernance from '../../components/product/architecture/Step3SigningGovernance';
import Step4KeyCommit from '../../components/product/architecture/Step4KeyCommit';
import Step5InClusterDecryption from '../../components/product/architecture/Step5InClusterDecryption';

const Architecture: Component = () => {
    return (
        <>
            <PageMeta
                title="Platform Architecture"
                description="How Octopilot implements repository-local encryption with GPG keys. A technical deep-dive into the five-step workflow: repository setup, key creation, signing governance, key commit, and in-cluster decryption."
                path="/product/architecture"
            />
            <ArchitectureHero />
            <FlowOverview />
            <Step1RepositorySetup />
            <Step2KeyCreation />
            <Step3SigningGovernance />
            <Step4KeyCommit />
            <Step5InClusterDecryption />
        </>
    );
};

export default Architecture;
