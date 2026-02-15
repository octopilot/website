import type { Component, JSX } from 'solid-js';
import DocsSidebar from './DocsSidebar';
import OnThisPage, { type TocItem, type RelatedLink } from './OnThisPage';

interface DocsLayoutProps {
    children: JSX.Element;
    tocItems?: TocItem[];
    relatedLinks?: RelatedLink[];
}

const DocsLayout: Component<DocsLayoutProps> = (props) => {
    return (
        <div class="bg-octo-dark min-h-screen text-white pt-16">
            <div class="max-w-[1440px] mx-auto px-6 lg:px-8 flex">
                <DocsSidebar />

                <main class="flex-grow min-w-0 py-8 lg:px-8">
                    {props.children}
                </main>

                {props.tocItems && props.tocItems.length > 0 && (
                    <OnThisPage items={props.tocItems} relatedLinks={props.relatedLinks} />
                )}
            </div>
        </div>
    );
};

export default DocsLayout;
