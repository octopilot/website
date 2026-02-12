import type { Component } from 'solid-js';
import BlogList from '../../components/resources/BlogList';
import CtaSection from '../../components/sections/CtaSection';

const Blog: Component = () => {
    return (
        <div class="bg-octo-dark">
            <section id="hero-blogs" class="h-[650px] relative overflow-hidden border-b border-octo-border pt-20">
                <div class="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 50%, rgba(45, 91, 255, 0.1) 0%, transparent 50%);"></div>

                <div class="max-w-[1440px] mx-auto px-8 h-full flex flex-col justify-center relative z-10">
                    <div class="max-w-5xl">
                        <div class="flex items-center gap-2 mb-6">
                            <span class="px-3 py-1 bg-octo-accent/20 border border-octo-accent/30 rounded-full text-octo-accent text-xs font-semibold uppercase tracking-wider">
                                Technical Insights
                            </span>
                            <span class="text-gray-500">•</span>
                            <span class="text-gray-400 text-sm">Secret Management at Every Scale</span>
                        </div>

                        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            <span class="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                                Secret Encryption
                            </span>
                            <br />
                            <span class="text-white">Without Centralization</span>
                        </h1>

                        <p class="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
                            Explore how secret-controller-manager solves real developer pain points—from isolated workflows to multi-team enterprise deployments managing hundreds of microservices across product verticals.
                        </p>
                    </div>
                </div>
            </section>

            <BlogList />

            <CtaSection />
        </div>
    );
};

export default Blog;
