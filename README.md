# Vibe Portfolio Site (Astro)

This is a minimal static portfolio scaffold built with Astro and plain CSS.

Quick commands:

```
npm install
npm run dev
```

Build (production):

```
npm run build
```

**Deploy to Cloudflare Pages**

Follow these steps to deploy this site to Cloudflare Pages:

- **Push the repo to GitHub** (already done for this workspace).
- In the Cloudflare dashboard go to **Pages** → **Create a project** and connect your GitHub account.
- Select the repository `sajixd/vibe-portfolio-site`.
- Configure the build settings:
	- **Framework preset**: _None_ (static site)
	- **Build command**: `npm run build`
	- **Build output directory**: `dist`
- Save and start the deployment. Cloudflare Pages will run `npm install` then `npm run build` and publish the `dist` folder.

Notes:

- This project uses Astro's static output (`output: 'static'`) so `dist` is the output directory.
- Ensure the Pages project uses Node 18+ (Cloudflare Pages default is compatible), or set the Node version to `18` in the Pages UI if needed.
- No additional environment variables are required for this simple static site.

Optional: If you prefer automatic deployment via GitHub Actions or a programmatic approach, I can add a workflow that builds the site and uploads artifacts to Cloudflare Pages using `cloudflare/pages-action`.
