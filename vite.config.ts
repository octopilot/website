import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import solid from 'vite-plugin-solid'
import { generateAiAssets } from './src/build/generate-ai-assets'

/** When request has X-Show-Pricing: 1 (or true), set cookie so client can show pricing. Use a browser extension to add the header. In production, configure your host (e.g. Netlify/Vercel edge) to set the same cookie when this header is present. */
function pricingHeaderPlugin(): Plugin {
  return {
    name: 'pricing-header-gate',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const value = req.headers['x-show-pricing']
        if (value === '1' || value === 'true') {
          res.setHeader('Set-Cookie', 'show_pricing=1; Path=/; Max-Age=86400; SameSite=Lax')
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    solid(),
    pricingHeaderPlugin(),
    // Generates actions.json and llms-full.txt from TypeScript data at build
    // time so AI-readable assets are never out of sync with the rendered site.
    generateAiAssets(),
  ],
})
