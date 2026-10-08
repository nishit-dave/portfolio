# Nishit Dave — personal portfolio

A static React + Vite + TypeScript portfolio, styled with Tailwind CSS and custom editorial CSS. Motion provides restrained entrance animations and honors reduced-motion preferences. No server, API key, database, analytics, or subscription is required.

## Development

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

The production output is `dist/`. Commit `package-lock.json` for reproducible installs.

### Opening from VS Code

Opening the source `index.html` directly (or with the Live Server extension) cannot compile React/TypeScript. In VS Code, open this project folder, then use Terminal → Run Task → **Start portfolio**, or run `npm run dev` in the terminal. Open the localhost URL Vite prints. To check the compiled version, run `npm run build` then `npm run preview`. The included VS Code tasks also offer build and production preview commands.

GitHub Pages serves the compiled `dist/` files. With the included Actions workflow, push the **whole source project**, including `package.json`, `package-lock.json`, `src/`, `public/`, and `.github/`, then choose GitHub Actions in Pages settings. Do not select a branch containing the source `index.html` as the deployment source. If manually deploying without Actions, publish the **contents of `dist/`**, not the source files. Even the built page should be previewed through a local HTTP server rather than a `file://` URL.

## Edit the content

`src/data.ts` contains all apps, official App Store links, local asset paths, descriptions, skills, upcoming projects, and contact settings. Add an app to the array to create another alternating project card. Set `profile.email` only after the actual mailbox is configured. Set LinkedIn, GitHub, and X URLs to your real profiles. Unconfigured entries display honest placeholders, without broken or fabricated links.

The hero uses your supplied illustrated avatar, locally stored in `public/nishit-avatar.png`, displayed without cropping on a muted sage gradient that complements the site. Email, GitHub, and X are configured from your supplied details; LinkedIn is removed.

## Verified sources and assets

Verified October 8, 2026 against Apple's live US lookup endpoint:
https://itunes.apple.com/lookup?id=1807529288&entity=software&country=us

The source response is preserved in `appstore.json`; local JPGs in `public/apps/` are official Apple-hosted app icons and screenshots. The page displays the first two screenshots without altering their content. The third is stored for future use. Check current metadata again before publishing if names or features change.

- Never: Quit Lust & Control — https://apps.apple.com/us/app/id6797847280
- Bitey: AI Calorie Tracker — https://apps.apple.com/us/app/id6765836514
- Stay Fit: Workout Tracker — https://apps.apple.com/us/app/id6758268967
- Cram AI - Study Notes, Quiz — https://apps.apple.com/us/app/id6755719229
- FitChase: Gym & Home Workouts — https://apps.apple.com/us/app/id6749707513

Clipzer's live page describes an AI video repurposing platform being built: https://clipzer.app/. Its portfolio illustration is abstract, not a screenshot or claim of a launched interface.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository with a `main` branch.
2. In Settings → Pages, choose **GitHub Actions** as the build source.
3. The included `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. You can also run it manually.
4. Verify the deployed repository URL before adding a custom domain.

Vite uses relative production asset URLs (`base: './'`). This supports both `https://USERNAME.github.io/REPOSITORY/` and a custom-domain root. Navigation uses in-page anchors, so no SPA routing fallback is necessary. If absolute paths are needed, supply `VITE_BASE_PATH=/REPOSITORY/` at build time.

### Custom domain: confirm before enabling

`nishitdave.dev` resolved to `207.207.210.107` and `207.207.210.229` during this session. DNS resolution does **not** establish ownership, email configuration, or a GitHub Pages association. The existing records are not GitHub Pages apex addresses. No DNS changes were made and no CNAME file is included.

After confirming that you own the domain and want to replace its current hosting:

1. Verify the domain in GitHub account Settings → Pages using GitHub's provided TXT verification record.
2. Add `nishitdave.dev` in repository Settings → Pages → Custom domain.
3. Add `public/CNAME` containing just `nishitdave.dev` so every future deployment preserves the setting.
4. Configure DNS using the current official GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site . Preserve existing MX/TXT mail records.
5. Enable Enforce HTTPS after DNS and certificate provisioning complete. `.dev` requires HTTPS.
6. Add a canonical link and `og:url` in `index.html` once the final deployment URL is confirmed. A custom social preview image can be added at that point.

## Before publishing

- Confirm custom-domain ownership and hosting changes.
- Verify that nishit@nishitdave.dev receives mail. GitHub and X links are already configured.
- Review copy and verified app descriptions.
- Check desktop/mobile navigation, App Store links, and keyboard focus.
- Optional: provide a social sharing image.

No personal/business statistics, clients, testimonials, certifications, or registered company claims are included.




