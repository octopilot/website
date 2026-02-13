import type { Component } from 'solid-js';

const TrustIndicators: Component = () => {
    return (
        <section id="trust-indicators" class="py-16 bg-octo-darker border-t border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-shield-halved text-green-400 text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">99.9%</h3>
                        <p class="text-gray-400 text-sm">Uptime SLA</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-lock text-blue-400 text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">SOC 2</h3>
                        <p class="text-gray-400 text-sm">Type II Certified</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-users text-purple-400 text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">500+</h3>
                        <p class="text-gray-400 text-sm">Organizations</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-headset text-orange-400 text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">24/7</h3>
                        <p class="text-gray-400 text-sm">Enterprise Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
