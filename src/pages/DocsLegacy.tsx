import type { Component } from 'solid-js';
import DocsHero from '../components/docs/DocsHero';
import Prerequisites from '../components/docs/Prerequisites';
import QuickstartSteps from '../components/docs/QuickstartSteps';
import DocsArchitecture from '../components/docs/DocsArchitecture';
import UsageScenarios from '../components/docs/UsageScenarios';
import DeploymentPath from '../components/docs/DeploymentPath';
import DocsCTA from '../components/docs/DocsCTA';
import RelatedDocs from '../components/docs/RelatedDocs';

const Docs: Component = () => {
    return (
        <div class="bg-octo-dark text-white font-sans">
            <DocsHero />
            <Prerequisites />
            <QuickstartSteps />
            <DocsArchitecture />
            <UsageScenarios />
            <DeploymentPath />
            <DocsCTA />
            <RelatedDocs />
        </div>
    );
};

export default Docs;
