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

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/product/architecture" component={Architecture} />
        <Route path="/product/security" component={Security} />
        <Route path="/product/governance" component={Governance} />
        <Route path="/resources/case-studies" component={CaseStudies} />
        <Route path="/resources/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/docs" component={Docs} />
    </Router>
), root!)
