import { type Component, For } from 'solid-js';

export interface TocItem {
    id: string;
    text: string;
}

interface OnThisPageProps {
    items: TocItem[];
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
        <aside class="hidden xl:block w-64 flex-shrink-0 py-8 h-[calc(100vh-80px)] sticky top-20 pl-8 border-l border-slate-800/50">
            <h5 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">On This Page</h5>
            <nav>
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
        </aside>
    );
};

export default OnThisPage;
