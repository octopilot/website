import type { Component } from 'solid-js';
import CtaSection from '../../components/sections/CtaSection';

const About: Component = () => {
    return (
        <div class="bg-octo-dark min-h-screen">
            <section class="py-20 border-b border-octo-border">
                <div class="max-w-[1000px] mx-auto px-8">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">About Octopilot</h1>

                    <div class="prose prose-invert max-w-none">
                        <p class="text-xl text-gray-300 leading-relaxed mb-8">
                            Octopilot is pioneering a new approach to secrets management for the GitOps era.
                            We believe that security shouldn't come at the cost of developer velocity or operational complexity.
                        </p>

                        <h2 class="text-2xl font-bold text-white mt-12 mb-6">Our Mission</h2>
                        <p class="text-gray-400 leading-relaxed mb-6">
                            To empower engineering teams to manage sensitive configuration with the same GitOps workflows
                            they use for infrastructure and code—securely, transparently, and without centralization bottlenecks.
                        </p>

                        <h2 class="text-2xl font-bold text-white mt-12 mb-6">Why Octopilot?</h2>
                        <ul class="list-disc pl-6 text-gray-400 space-y-4 mb-8">
                            <li>
                                <strong class="text-white">Decentralized Security:</strong> We eliminate the single point of failure
                                inherent in centralized secret vaults by leveraging repository-level encryption.
                            </li>
                            <li>
                                <strong class="text-white">Enterprise Flexibility:</strong> For customers requiring centralized secrets,
                                we support <strong>OpenBAO</strong>. Octopilot operates as an optional managed service within your
                                own Cloud account, ensuring total control.
                            </li>
                            <li>
                                <strong class="text-white">Zero Data Retention:</strong> At no time does Octopilot hold customer data.
                                Our bots run transparently within the GitHub infrastructure, and your configuration sits securely
                                in your own GitHub organization secrets.
                            </li>
                            <li>
                                <strong class="text-white">GitOps Native:</strong> Secrets are managed as code, versioned alongside
                                your applications, and deployed via standard pull requests.
                            </li>
                            <li>
                                <strong class="text-white">Zero-Trust Architecture:</strong> Our controller ensures that only
                                authorized workloads can decrypt secrets at runtime, adhering to strict least-privilege principles.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <CtaSection />
        </div>
    );
};

export default About;
