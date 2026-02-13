import type { Component } from 'solid-js';
import { useParams, A } from '@solidjs/router';
import { Show } from 'solid-js';
import { blogPosts } from '../../data/blog-posts';
import CtaSection from '../../components/sections/CtaSection';

const BlogPost: Component = () => {
    const params = useParams();

    // Find the post based on the slug
    // For now we check both ID (legacy) and slug
    const post = () => blogPosts.find(p => p.slug === params.slug || p.id === params.slug);

    return (
        <Show when={post()} fallback={
            <div class="py-32 text-center text-white">
                <h1 class="text-4xl font-bold mb-4">Post not found</h1>
                <p>The requested article could not be found.</p>
            </div>
        }>
            {(p) => (
                <article class="bg-octo-dark">
                    {/* Hero Section */}
                    <section id="article-hero" class="h-[650px] relative overflow-hidden border-b border-octo-border pt-20">
                        <div class="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-transparent"></div>
                        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 60%);"></div>

                        {/* Background Image with Overlay */}
                        <div class="absolute inset-0 z-0 opacity-20">
                            <img src={p().image} alt={p().title} class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-octo-darker/80"></div>
                        </div>

                        <div class="max-w-[900px] mx-auto px-8 h-full flex flex-col justify-center relative z-10">
                            <div class="flex items-center gap-3 mb-6">
                                <span class="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold uppercase tracking-wider">
                                    {p().category}
                                </span>
                                <span class="text-gray-500">•</span>
                                <span class="text-gray-400 text-sm">Secret Encryption Governance</span>
                                <span class="text-gray-500">•</span>
                                <span class="text-gray-400 text-sm flex items-center gap-2">
                                    <i class="fa-regular fa-clock text-xs"></i>
                                    {p().readTime}
                                </span>
                            </div>

                            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                                {p().title}
                            </h1>

                            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                                {p().excerpt}
                            </p>

                            <div class="flex items-center gap-6">
                                <div class="flex items-center gap-3">
                                    <img src={p().author.avatar} alt={p().author.name} class="w-12 h-12 rounded-full border-2 border-slate-700" />
                                    <div>
                                        <div class="text-white font-semibold">{p().author.name}</div>
                                        <div class="text-gray-400 text-sm">{p().author.role}</div>
                                    </div>
                                </div>
                                <div class="h-8 w-px bg-slate-700 hidden sm:block"></div>
                                <div class="text-gray-400 text-sm hidden sm:block">
                                    Published: December 18, 2024
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="article-layout" class="py-12">
                        <div class="max-w-[1440px] mx-auto px-8">
                            <div class="grid grid-cols-12 gap-8">
                                {/* Sidebar */}
                                <aside id="table-of-contents" class="hidden lg:block col-span-3 sticky top-24 h-fit">
                                    <div class="bg-octo-darker border border-octo-border rounded-xl p-6">
                                        <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                            <i class="fa-solid fa-list-ul text-blue-400"></i>
                                            Table of Contents
                                        </h3>
                                        <nav class="space-y-2">
                                            <a href="#intro" class="block text-gray-400 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-blue-500 pl-3 text-sm">
                                                Introduction
                                            </a>
                                            <a href="#problem" class="block text-gray-400 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-blue-500 pl-3 text-sm">
                                                The Problem
                                            </a>
                                            <a href="#solution" class="block text-gray-400 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-blue-500 pl-3 text-sm">
                                                The Solution
                                            </a>
                                            <a href="#implementation" class="block text-gray-400 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-blue-500 pl-3 text-sm">
                                                Implementation
                                            </a>
                                        </nav>
                                    </div>
                                </aside>

                                {/* Content */}
                                <article id="article-content" class="col-span-12 lg:col-span-6 prose prose-invert max-w-none">
                                    <Show when={p().content} fallback={
                                        <>
                                            <section id="intro" class="mb-12">
                                                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                                                    {p().excerpt}
                                                </p>
                                            </section>

                                            <Show when={p().painPoint}>
                                                <section id="problem" class="mb-12">
                                                    <div class="bg-red-900/20 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                                                        <h3 class="text-red-400 font-bold text-lg mb-2 mt-0">The Pain Point</h3>
                                                        <p class="text-gray-300 m-0">{p().painPoint}</p>
                                                    </div>
                                                </section>
                                            </Show>

                                            <Show when={p().solution}>
                                                <section id="solution" class="mb-12">
                                                    <div class="bg-emerald-900/20 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                                                        <h3 class="text-emerald-400 font-bold text-lg mb-2 mt-0">The Octopilot Solution</h3>
                                                        <p class="text-gray-300 m-0">{p().solution}</p>
                                                    </div>
                                                </section>
                                            </Show>

                                            <section id="implementation" class="mb-12">
                                                <h3>Deep Dive</h3>
                                                <p>
                                                    Content for this article is coming soon. Please check back later for the full deep dive into {p().title}.
                                                </p>
                                            </section>
                                        </>
                                    }>
                                        <div innerHTML={p().content} />
                                    </Show>
                                </article>

                                {/* Related Posts Sidebar */}
                                <aside id="related-posts" class="col-span-12 lg:col-span-3 lg:sticky lg:top-24 h-fit">
                                    <div class="bg-octo-darker border border-octo-border rounded-xl p-6">
                                        <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                            <i class="fa-solid fa-newspaper text-purple-400"></i>
                                            Related Articles
                                        </h3>
                                        <div class="space-y-6">
                                            {blogPosts
                                                .filter(post => post.id !== p().id)
                                                .slice(0, 3)
                                                .map(related => (
                                                    <A href={`/blog/${related.slug}`} class="block group">
                                                        <div class="h-32 mb-3 overflow-hidden rounded-lg bg-slate-800 relative">
                                                            <img
                                                                src={related.image}
                                                                alt={related.title}
                                                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                            <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                                        </div>
                                                        <h4 class="text-white font-medium text-sm leading-snug group-hover:text-octo-accent transition-colors mb-1">
                                                            {related.title}
                                                        </h4>
                                                        <span class="text-xs text-gray-500">{related.readTime}</span>
                                                    </A>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>

                    <CtaSection />
                </article>
            )}
        </Show>
    );
};

export default BlogPost;
