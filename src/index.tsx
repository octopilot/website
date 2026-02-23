/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, useNavigate } from '@solidjs/router';
import { createEffect, Show } from 'solid-js';
import './index.css'
import App from './App.tsx'
import { usePricingVisible } from './lib/pricingGate';

// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Architecture from './pages/product/Architecture';
import Security from './pages/product/Security';
import Governance from './pages/product/Governance';
import CaseStudies from './pages/resources/CaseStudies';
import Blog from './pages/resources/Blog';
import BlogPost from './pages/resources/BlogPost';
// import Docs from './pages/Docs';
import DocsIndex from './pages/docs/DocsIndex';
import CoreConcepts from './pages/docs/CoreConcepts';
import KeyAttestation from './pages/docs/KeyAttestation';
import AdminConfiguration from './pages/docs/AdminConfiguration';
import GithubActions from './pages/docs/GithubActions';
import GithubActionDetail from './pages/docs/GithubActionDetail';
import McpServer from './pages/docs/McpServer';

import About from './pages/company/About';
import Privacy from './pages/company/Privacy';
import Terms from './pages/company/Terms';
import SecurityPolicy from './pages/company/SecurityPolicy';
import Compliance from './pages/company/Compliance';
import BestPractices from './pages/resources/BestPractices';

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

const DocsRedirect = () => {
    const navigate = useNavigate();
    navigate('/docs/intro', { replace: true });
    return null;
};

/** Renders Pricing only when the pricing gate is open (?show_pricing=1); otherwise redirects to home. */
const PricingGate = () => {
    const navigate = useNavigate();
    const pricingVisible = usePricingVisible();
    createEffect(() => {
        if (!pricingVisible()) navigate('/', { replace: true });
    });
    return <Show when={pricingVisible()}><Pricing /></Show>;
};

render(() => (
    <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={PricingGate} />
        <Route path="/product/architecture" component={Architecture} />
        <Route path="/product/security" component={Security} />
        <Route path="/product/governance" component={Governance} />
        <Route path="/resources/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />

        <Route path="/docs" component={DocsRedirect} />
        <Route path="/docs/intro" component={DocsIndex} />
        <Route path="/docs/core-concepts" component={CoreConcepts} />
        <Route path="/docs/key-attestation" component={KeyAttestation} />
        <Route path="/docs/admin-configuration" component={AdminConfiguration} />
        <Route path="/docs/github-actions" component={GithubActions} />
        <Route path="/docs/github-actions/:id" component={GithubActionDetail} />
        <Route path="/docs/mcp" component={McpServer} />

        {/* Legacy Redirects */}
        <Route path="/documentation/*" component={DocsRedirect} />

        {/* Company / Legal Routes */}
        <Route path="/best-practices" component={BestPractices} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/security" component={SecurityPolicy} />
        <Route path="/compliance" component={Compliance} />
    </Router>
), root!)
