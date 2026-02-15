/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router';
import './index.css'
import App from './App.tsx'

// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Architecture from './pages/product/Architecture';
import Security from './pages/product/Security';
import Governance from './pages/product/Governance';
import CaseStudies from './pages/resources/CaseStudies';
import Blog from './pages/resources/Blog';
import BlogPost from './pages/resources/BlogPost';
import Docs from './pages/Docs';
import DocsIndex from './pages/docs/DocsIndex';
import CoreConcepts from './pages/docs/CoreConcepts';
import KeyAttestation from './pages/docs/KeyAttestation';
import AdminConfiguration from './pages/docs/AdminConfiguration';

import About from './pages/company/About';
import Privacy from './pages/company/Privacy';
import Terms from './pages/company/Terms';
import SecurityPolicy from './pages/company/SecurityPolicy';
import Compliance from './pages/company/Compliance';
import BestPractices from './pages/resources/BestPractices';

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/product/architecture" component={Architecture} />
        <Route path="/product/security" component={Security} />
        <Route path="/product/governance" component={Governance} />
        <Route path="/resources/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/docs" component={Docs} />
        <Route path="/documentation" component={DocsIndex} />
        <Route path="/documentation/core-concepts" component={CoreConcepts} />
        <Route path="/documentation/key-attestation" component={KeyAttestation} />
        <Route path="/documentation/admin-configuration" component={AdminConfiguration} />

        {/* Company / Legal Routes */}
        <Route path="/best-practices" component={BestPractices} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/security" component={SecurityPolicy} />
        <Route path="/compliance" component={Compliance} />
    </Router>
), root!)
