# Sujith Kulal Portfolio

Modern portfolio built with Next.js App Router, TypeScript, and static export for GitHub Pages.

## Run locally

```bash
npm run dev
```

Then open http://localhost:3000.

## Build static export

```bash
npm run build
```

The static output is generated in the `out` folder.

## GitHub Pages settings

Set the base path to your repository name when building for GitHub Pages:

```bash
setx NEXT_PUBLIC_BASE_PATH "/sujith-portfolio"
npm run build
```

Then deploy the contents of the `out` folder to GitHub Pages.

## GitHub Actions deployment

This repo includes a Pages workflow at `.github/workflows/deploy.yml`.
Push to the `main` branch and enable GitHub Pages with "GitHub Actions" as the source.
