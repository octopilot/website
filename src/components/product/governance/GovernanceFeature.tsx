import type { Component } from 'solid-js';

interface GovernanceFeatureProps {
    title: string;
    description: string;
    icon: string;
    iconColor: string; // e.g., "text-blue-400"
    bgColor: string; // e.g., "bg-blue-500/10"
    benefits: string[];
    reverse?: boolean;
}

const GovernanceFeature: Component<GovernanceFeatureProps> = (props) => {
    return (
        <section class="py-20 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class={`flex flex-col md:flex-row items-center gap-16 ${props.reverse ? 'md:flex-row-reverse' : ''}`}>
                    <div class="flex-1">
                        <div class={`w-16 h-16 ${props.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                            <i class={`${props.icon} ${props.iconColor} text-3xl`}></i>
                        </div>
                        <h2 class="text-3xl font-bold text-white mb-6">{props.title}</h2>
                        <p class="text-gray-400 text-lg leading-relaxed mb-8">
                            {props.description}
                        </p>
                        <ul class="space-y-4">
                            {props.benefits.map((benefit) => (
                                <li class="flex items-start gap-3">
                                    <div class="mt-1 w-5 h-5 rounded-full bg-octo-accent/20 flex items-center justify-center flex-shrink-0">
                                        <i class="fa-solid fa-check text-octo-accent text-xs"></i>
                                    </div>
                                    <span class="text-gray-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="flex-1">
                        <div class="bg-octo-dark border border-octo-border rounded-xl p-8 relative overflow-hidden group hover:border-octo-accent/30 transition-colors">
                            <div class={`absolute top-0 right-0 w-64 h-64 ${props.bgColor} blur-3xl opacity-20 rounded-full pointer-events-none`}></div>

                            {/* Abstract representation of the feature */}
                            <div class="relative z-10">
                                <div class="font-mono text-sm text-gray-500 mb-4 border-b border-octo-border pb-2 flex justify-between">
                                    <span>policy.yaml</span>
                                    <span class="text-octo-accent">Active</span>
                                </div>
                                <div class="space-y-2 font-mono text-sm">
                                    <div class="text-purple-400">apiVersion: <span class="text-green-400">octopilot.io/v1alpha1</span></div>
                                    <div class="text-purple-400">kind: <span class="text-green-400">SecretPolicy</span></div>
                                    <div class="text-purple-400">metadata:</div>
                                    <div class="pl-4 text-blue-300">name: <span class="text-gray-300">org-standard-policy</span></div>
                                    <div class="text-purple-400">spec:</div>
                                    <div class="pl-4 text-purple-400">rules:</div>
                                    <div class="pl-6 text-gray-400"># Enforced on all repositories</div>
                                    <div class="pl-6 text-blue-300">- name: <span class="text-orange-300">"{props.title.toLowerCase().replace(/\s+/g, '-')}"</span></div>
                                    <div class="pl-8 text-blue-300">enforcement: <span class="text-green-400">blocking</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GovernanceFeature;
