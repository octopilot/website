# Styling the GitHub organization profile

## Can we use custom CSS?

**Direct CSS is not supported.** GitHub does not allow:

- Custom CSS files linked from the README
- Inline `style` attributes or `<style>` blocks in the README HTML
- Scripts or iframes

These are stripped for security. The org profile README is rendered with GitHub’s default Markdown/HTML styling only.

## Workaround: SVG with embedded HTML and CSS

You can still get **custom-styled content** by embedding HTML and CSS inside an **SVG** using the `<foreignObject>` element. When that SVG is included in the README as an image, GitHub renders it; the browser renders the SVG, so the embedded HTML/CSS is applied inside that “image” block.

- **What you get:** A styled block (e.g. a banner, card, or hero) with your own colors, fonts, gradients, and even CSS animations.
- **What you don’t get:** Styling of the rest of the README (the surrounding Markdown stays GitHub-default).

### Basic structure

Create an SVG file (e.g. `banner.svg`) in this folder or in the same repo:

```xml
<svg fill="none" viewBox="0 0 600 200" width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        .banner {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
          color: #e6edf3;
          padding: 2rem;
          border-radius: 12px;
          box-sizing: border-box;
        }
        @media (prefers-reduced-motion: reduce) { .banner { animation: none; } }
      </style>
      <div class="banner">
        <h1 style="margin:0;">Hi there 👋</h1>
        <p style="margin:0.5rem 0 0;">Welcome to OctoPilot.</p>
      </div>
    </div>
  </foreignObject>
</svg>
```

In the profile README, include it as an image:

```markdown
![OctoPilot](./banner.svg)
```

If the SVG lives in another repo or path, use the raw URL (replace `BRANCH` with your default branch, e.g. `main`):

```markdown
![OctoPilot](https://raw.githubusercontent.com/octopilot/octopilot/BRANCH/.github/profile/banner.svg)
```

When the profile is in a dedicated `.github` repo, use:

```markdown
![OctoPilot](https://raw.githubusercontent.com/octopilot/.github/BRANCH/profile/banner.svg)
```

### Tips

- **Sizing:** Set `viewBox` and `width`/`height` on the `<svg>` so the block has a fixed size; it will scale with the container.
- **Accessibility:** Use `@media (prefers-reduced-motion: reduce)` to disable or simplify animations.
- **Dark/light:** Use `@media (prefers-color-scheme: light)` (and `dark`) to adapt colors to the user’s theme.
- **Full-width:** GitHub may still constrain the image; the SVG’s aspect ratio is preserved.

### References

- [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) — GitHub Docs (relative links, images).
- [Adding custom HTML and CSS to GitHub README](https://pragmaticpineapple.com/adding-custom-html-and-css-to-github-readme/) (Pragmatic Pineapple) — SVG + `foreignObject`, animations, color scheme.
- [Customizing your organization's profile](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) — Official docs (no custom CSS).

---

**Summary:** You cannot style the whole org page with CSS. You can add one or more **styled blocks** by putting HTML+CSS inside SVG files and embedding them as images in the profile README.

---

### Live example in this org

- **`banner.svg`** — Styled hero banner used at the top of the profile README. Dark/light theme via `prefers-color-scheme`; no animation (reduced-motion friendly).
