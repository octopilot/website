import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blog-posts';

const BlogList: Component = () => {
    const [filter, setFilter] = createSignal('All');
    const [search, setSearch] = createSignal('');

    const filteredPosts = () => {
        return blogPosts.filter(post => {
            const matchesCategory = filter() === 'All' || post.category === filter();
            const matchesSearch = post.title.toLowerCase().includes(search().toLowerCase()) ||
                post.excerpt.toLowerCase().includes(search().toLowerCase());
            return matchesCategory && matchesSearch;
        });
    };

    return (
        <>
            <section id="search-filters" class="py-8 border-b border-octo-border bg-octo-dark/95 sticky top-[73px] z-40 backdrop-blur-xl">
                <div class="max-w-[1440px] mx-auto px-8">
                    <div class="flex items-center justify-between gap-6 flex-wrap">
                        <div class="relative flex-1 max-w-xl min-w-[300px]">
                            <input
                                type="text"
                                placeholder="Search articles by topic, scenario, or pain point..."
                                class="w-full px-5 py-3 pl-12 bg-octo-darker border border-octo-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-octo-accent transition-colors"
                                onInput={(e) => setSearch(e.currentTarget.value)}
                            />
                            <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                        </div>

                        <div class="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
                            <button
                                class={`px-5 py-3 border rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${filter() === 'All' ? 'bg-octo-accent border-octo-accent text-white' : 'bg-octo-darker border-octo-border text-gray-400 hover:text-white'}`}
                                onClick={() => setFilter('All')}
                            >
                                <i class="fa-solid fa-layer-group"></i>
                                All Scenarios
                            </button>
                            <button
                                class={`px-5 py-3 border rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${filter() === 'Developer' ? 'bg-octo-accent border-octo-accent text-white' : 'bg-octo-darker border-octo-border text-gray-400 hover:text-white'}`}
                                onClick={() => setFilter('Developer')}
                            >
                                <i class="fa-solid fa-user"></i>
                                Developer
                            </button>
                            <button
                                class={`px-5 py-3 border rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${filter() === 'Team' ? 'bg-octo-accent border-octo-accent text-white' : 'bg-octo-darker border-octo-border text-gray-400 hover:text-white'}`}
                                onClick={() => setFilter('Team')}
                            >
                                <i class="fa-solid fa-users"></i>
                                Team
                            </button>
                            <button
                                class={`px-5 py-3 border rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${filter() === 'Enterprise' ? 'bg-octo-accent border-octo-accent text-white' : 'bg-octo-darker border-octo-border text-gray-400 hover:text-white'}`}
                                onClick={() => setFilter('Enterprise')}
                            >
                                <i class="fa-solid fa-building"></i>
                                Enterprise
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blog-grid-main" class="py-16 bg-octo-dark">
                <div class="max-w-[1440px] mx-auto px-8">
                    <div class="flex items-center justify-between mb-10">
                        <div>
                            <h2 class="text-3xl font-bold text-white mb-2">Secret Management Across All Scenarios</h2>
                            <p class="text-gray-400">From solo developers to enterprise-scale multi-vertical deployments</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <For each={filteredPosts()}>
                            {(post) => <BlogCard post={post} />}
                        </For>
                    </div>

                    {filteredPosts().length === 0 && (
                        <div class="text-center py-20">
                            <i class="fa-solid fa-search text-gray-600 text-5xl mb-4"></i>
                            <h3 class="text-xl font-bold text-white mb-2">No articles found</h3>
                            <p class="text-gray-400">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlogList;
