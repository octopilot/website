import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import type { BlogPost } from '../../data/blog-posts';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: Component<BlogCardProps> = (props) => {
    const categoryColors = {
        'Developer': 'bg-green-500/20 border-green-500/30 text-green-400',
        'Team': 'bg-blue-500/20 border-blue-500/30 text-blue-400',
        'Enterprise': 'bg-purple-500/20 border-purple-500/30 text-purple-400'
    };

    return (
        <A href={`/blog/${props.post.slug}`} class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-octo-accent/50 transition-all duration-300 group cursor-pointer block">
            <div class="h-[240px] overflow-hidden bg-slate-800 relative">
                <img
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={props.post.image}
                    alt={props.post.title}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                    <span class={`px-3 py-1 border rounded-full text-xs font-bold uppercase tracking-wide ${categoryColors[props.post.category]}`}>
                        {props.post.category}
                    </span>
                    <span class="text-slate-500 text-xs">{props.post.readTime}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 leading-tight group-hover:text-octo-accent transition-colors">
                    {props.post.title}
                </h3>
                <p class="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {props.post.excerpt}
                </p>

                {props.post.painPoint && (
                    <div class="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <div class="flex items-start gap-2">
                            <i class="fa-solid fa-exclamation-triangle text-red-400 text-sm mt-0.5"></i>
                            <div>
                                <div class="text-red-400 font-semibold text-xs mb-1">Pain Point:</div>
                                <div class="text-slate-300 text-xs">{props.post.painPoint}</div>
                            </div>
                        </div>
                    </div>
                )}

                {props.post.solution && (
                    <div class="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <div class="flex items-start gap-2">
                            <i class="fa-solid fa-lightbulb text-blue-400 text-sm mt-0.5"></i>
                            <div>
                                <div class="text-blue-400 font-semibold text-xs mb-1">Solution:</div>
                                <div class="text-slate-300 text-xs">{props.post.solution}</div>
                            </div>
                        </div>
                    </div>
                )}

                <div class="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div class="flex items-center gap-2">
                        <img
                            src={props.post.author.avatar}
                            alt={props.post.author.name}
                            class="w-8 h-8 rounded-full border border-slate-700"
                        />
                        <div>
                            <div class="text-white text-xs font-medium">{props.post.author.name}</div>
                            <div class="text-slate-500 text-xs">{props.post.author.role}</div>
                        </div>
                    </div>
                    <span class="flex items-center gap-2 text-octo-accent group-hover:text-octo-accent-light text-sm font-medium transition-colors">
                        Read More
                        <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                    </span>
                </div>
            </div>
        </A>
    );
};

export default BlogCard;
