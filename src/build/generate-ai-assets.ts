/**
 * Vite build plugin — generates static assets from TypeScript data sources.
 *
 * Outputs written to the build output directory:
 *   - actions.json      — machine-readable actions registry (for AI agents)
 *   - llms-full.txt     — full LLM-readable documentation (llmstxt.org format)
 *   - sitemap.xml       — XML sitemap for SEO crawlers
 */

import type { Plugin } from 'vite';
import { githubActions } from '../data/github-actions';
import { blogPosts } from '../data/blog-posts';

// ── actions.json ──────────────────────────────────────────────────────────────
// Strip rendering-only fields (icon, iconColor, iconBg) so agents get a clean
// functional schema.

function buildActionsJson(): string {
  const clean = githubActions.map(({ icon: _i, iconColor: _ic, iconBg: _ib, ...rest }) => rest);
  return JSON.stringify({ version: '1', actions: clean }, null, 2);
}

// ── llms-full.txt ─────────────────────────────────────────────────────────────

function buildLlmsFullTxt(): string {
  const lines: string[] = [
    '# Octopilot — Full Action Reference',
    '',
    '> Complete documentation for all Octopilot GitHub Actions.',
    '> Generated from source data. Concise overview: https://octopilot.app/llms.txt',
    '',
  ];

  for (const action of githubActions) {
    lines.push(`## ${action.title}`);
    lines.push('');
    lines.push(`**Path:** \`${action.path}\``);
    lines.push('');
    lines.push(action.description);
    lines.push('');

    if (action.features.length > 0) {
      lines.push('**Features:**');
      for (const f of action.features) lines.push(`- ${f}`);
      lines.push('');
    }

    if (action.inputs.length > 0) {
      lines.push('**Inputs:**');
      lines.push('');
      lines.push('| Name | Required | Default | Description |');
      lines.push('|------|----------|---------|-------------|');
      for (const inp of action.inputs) {
        const req = inp.required ? 'Yes' : 'No';
        const def = inp.default ?? '—';
        lines.push(`| \`${inp.name}\` | ${req} | ${def} | ${inp.description} |`);
      }
      lines.push('');
    }

    if (action.outputs && action.outputs.length > 0) {
      lines.push('**Outputs:**');
      lines.push('');
      lines.push('| Name | Description |');
      lines.push('|------|-------------|');
      for (const out of action.outputs) {
        lines.push(`| \`${out.name}\` | ${out.description} |`);
      }
      lines.push('');
    }

    lines.push('**Example:**');
    lines.push('');
    lines.push('```yaml');
    lines.push(action.example);
    lines.push('```');
    lines.push('');

    if (action.gotchas && action.gotchas.length > 0) {
      lines.push('**Known Gotchas:**');
      lines.push('');
      for (const g of action.gotchas) {
        const lang = g.language ? `[${g.language}] ` : '';
        lines.push(`### ${lang}${g.title}`);
        lines.push('');
        lines.push(`**Symptom:** ${g.symptom}`);
        lines.push('');
        lines.push(`**Fix:** ${g.fix}`);
        if (g.code) {
          lines.push('');
          lines.push('```');
          lines.push(g.code);
          lines.push('```');
        }
        lines.push('');
      }
    }

    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

// ── sitemap.xml ───────────────────────────────────────────────────────────────

const BASE_URL = 'https://octopilot.app';

// Static routes with their SEO priority and change frequency
const STATIC_ROUTES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/',                        priority: '1.0', changefreq: 'weekly'  },
  { path: '/pricing',                 priority: '0.9', changefreq: 'monthly' },
  { path: '/product/architecture',    priority: '0.8', changefreq: 'monthly' },
  { path: '/product/security',        priority: '0.8', changefreq: 'monthly' },
  { path: '/product/governance',      priority: '0.8', changefreq: 'monthly' },
  { path: '/docs/intro',              priority: '0.9', changefreq: 'weekly'  },
  { path: '/docs/core-concepts',      priority: '0.8', changefreq: 'weekly'  },
  { path: '/docs/key-attestation',    priority: '0.7', changefreq: 'monthly' },
  { path: '/docs/admin-configuration',priority: '0.7', changefreq: 'monthly' },
  { path: '/docs/github-actions',     priority: '0.9', changefreq: 'weekly'  },
  { path: '/docs/mcp',               priority: '0.8', changefreq: 'weekly'  },
  { path: '/blog',                    priority: '0.7', changefreq: 'weekly'  },
  { path: '/resources/case-studies',  priority: '0.6', changefreq: 'monthly' },
  { path: '/best-practices',          priority: '0.6', changefreq: 'monthly' },
  { path: '/about',                   priority: '0.5', changefreq: 'monthly' },
];

function buildSitemapXml(): string {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = [
    // Static routes
    ...STATIC_ROUTES.map(r => `
  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`),
    // One URL per GitHub Action
    ...githubActions.map(a => `
  <url>
    <loc>${BASE_URL}/docs/github-actions/${a.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`),
    // One URL per blog post
    ...blogPosts.map(p => `
  <url>
    <loc>${BASE_URL}/blog/${p.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('')}
</urlset>`;
}

// ── Plugin ────────────────────────────────────────────────────────────────────

export function generateAiAssets(): Plugin {
  return {
    name: 'generate-ai-assets',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'actions.json',   source: buildActionsJson()  });
      this.emitFile({ type: 'asset', fileName: 'llms-full.txt',  source: buildLlmsFullTxt()  });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml',    source: buildSitemapXml()   });
    },
  };
}
