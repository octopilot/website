import { type Component, For, Show } from 'solid-js';

export interface TocItem {
    id: string;
    text: string;
}

export interface RelatedLink {
    text: string;
    href: string;
}

interface OnThisPageProps {
    items: TocItem[];
    relatedLinks?: RelatedLink[];
}

const OnThisPage: Component<OnThisPageProps> = (props) => {
    // Simple smooth scroll handler
    const scrollToId = (id: string, e: Event) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <aside class="hidden xl:block w-64 flex-shrink-0 py-8 h-[calc(100vh-80px)] sticky top-20 pl-8 border-l border-slate-800/50 overflow-y-auto">
            <h5 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">On This Page</h5>
            <nav class="mb-8">
                <ul class="space-y-3 border-l border-slate-800 pl-4">
                    <For each={props.items}>
                        {(item) => (
                            <li>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => scrollToId(item.id, e)}
                                    class="text-sm text-slate-400 hover:text-blue-400 transition-colors block leading-snug"
                                >
                                    {item.text}
                                </a>
                            </li>
                        )}
                    </For>
                </ul>
            </nav>

            <Show when={props.relatedLinks && props.relatedLinks.length > 0}>
                <h5 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Related Actions</h5>
                <nav>
                    <ul class="space-y-3 border-l border-slate-800 pl-4">
                        <For each={props.relatedLinks}>
                            {(link) => (
                                <li>
                                    <a
                                        href={link.href}
                                        class="text-sm text-slate-400 hover:text-purple-400 transition-colors block leading-snug"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            )}
                        </For>
                    </ul>
                </nav>
            </Show>
        </aside>
    );
};

export default OnThisPage;
