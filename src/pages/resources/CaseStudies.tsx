import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';

const CaseStudies: Component = () => {
    return (
        <div class="pt-32 pb-20 px-8 max-w-7xl mx-auto text-white">
            <PageMeta
                title="Case Studies"
                description="Real-world examples of teams using Octopilot to secure secrets in production GitOps environments — from startups to enterprise multi-service deployments."
                path="/resources/case-studies"
            />
            <h1 class="text-4xl font-bold mb-8">Case Studies</h1>
            <p>Coming soon...</p>
        </div>
    );
};

export default CaseStudies;
