import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { generateAiAssets } from './src/build/generate-ai-assets'

export default defineConfig({
  plugins: [
    solid(),
    // Generates actions.json and llms-full.txt from TypeScript data at build
    // time so AI-readable assets are never out of sync with the rendered site.
    generateAiAssets(),
  ],
})
