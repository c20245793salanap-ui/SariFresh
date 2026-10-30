# SariFresh — Fresh Fruits & Drinks

**Live site:** https://YOUR-USERNAME.github.io/YOUR-REPO/

## About

SariFresh is a small neighborhood shop concept for fresh fruits and refreshing drinks. The single-page website introduces the shop, displays six sample products, supports light and dark themes, and provides a demo contact form.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---:|---|---|
| Dominant | 60% | `#F7F8F2` | Main page background and large open areas |
| Secondary | 30% | `#245C3A` | Brand color, buttons, and highlighted sections |
| Accent | 10% | `#F4B942` | Progress bar, small highlights, and decorative details |

Dark theme supporting colors:

- Background: `#14251A`
- Surface: `#1C2D22`
- Primary text: `#F1F6EC`
- Muted text: `#C1D0C1`
- Border: `#395342`

### Visual Style

**Style chosen:** Minimalism with a clean card-based product grid.

**Why I chose it:**

The simple layout, generous spacing, and clear product cards make the fruit and drink offerings easy to browse on phones, tablets, and desktop screens.

### Contrast Check

Body text color vs. light background: `#26352A` on `#F7F8F2`

Contrast ratio: approximately **11.2:1**, above the 4.5:1 WCAG AA target for normal text.

Dark body text vs. dark background: `#F1F6EC` on `#14251A`

Contrast ratio: approximately **14.5:1**, above the 4.5:1 WCAG AA target for normal text.

Tool used: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

Recheck the final deployed page if colors are changed.

## Features

- [x] Mobile-first responsive layout using Tailwind CSS breakpoints
- [x] Light and dark mode toggle
- [x] Saves theme preference using localStorage
- [x] GSAP intro animation timeline
- [x] Timeline defaults, stagger, overlap, and easing
- [x] Replay intro button
- [x] Scroll reveals for sections below the hero using ScrollTrigger
- [x] Scroll progress bar driven by scrub and `ease: "none"`
- [x] Reduced-motion support
- [x] Reusable Tailwind `@apply` classes
- [x] Contact form with associated labels and required fields
- [x] Six product cards for fruits and drinks
- [x] Responsive navigation and page layout

## Built With

- HTML5
- Tailwind CSS v4 browser CDN
- JavaScript
- GSAP 3.13.0
- ScrollTrigger 3.13.0

## Contrast Verification Note

The contrast ratios above are approximate documentation values. Before submission, enter the listed foreground and background color pairs in the contrast checker and confirm the results.

Check any other color combinations you modify, especially text on buttons and colored banners.

## GitHub Pages Deployment

1. Create a new public repository named `sarifresh-small-business`.
2. Upload `index.html`, `script.js`, and `README.md` to the repository root.
3. Commit your files with descriptive commit messages.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)` folder.
7. Click **Save**.
8. After GitHub Pages publishes the website, replace the Live site URL at the top of this README with your actual URL.

## Suggested Commit History

1. `Create SariFresh page structure and responsive layout`
2. `Add design tokens and dark mode toggle`
3. `Add GSAP intro timeline and replay interaction`
4. `Add ScrollTrigger reveals and reduced-motion support`
5. `Document palette, contrast, and deployment steps`

Make the relevant changes before creating each commit.

## Notes

The contact form is front-end only. It validates required fields in the browser and displays a confirmation message, but it does not send or store submissions.