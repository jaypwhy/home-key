# Project Home Key — Site Package (built 2026-10-19)

The Project Home Key website, ready to upload to your own hosting — for the
network of collabs and projects.

## What's inside

- **`static-site/`** — the whole site as plain HTML files. **Start with this one:**
  it works on almost any host, including simple ones.
- **`node-server/`** — the same site as a tiny Bun app, for hosts that run an
  app process (a VPS, Render, Railway, or a cPanel "Node.js app").

## Option A — upload to any web host (recommended first try)

Upload the **contents** of `static-site/` into your host's web root — often
called `public_html`, `www`, or the site folder in the hosting dashboard.
Drag-and-drop hosts (Netlify Drop, Cloudflare Pages) work as-is.

The site is 9 pages:

`/` Mission · `/open-door` An Open Door · `/resources` verified free help ·
`/assistance` free help finder · `/studies` evidence · `/case-studies` seven
ways to live · `/framework` the framework · `/pilot` pilot proposal ·
`/seeds` Seed Program

Notes:

- Host it at the **root** of a domain or subdomain (not inside a subfolder).
  If your host only allows a subfolder (like `example.com/home-key/`), ask the
  team — we'll rebuild with a matching base path in about a minute.
- The "Ask about a grant" buttons open the visitor's own email app — there is
  nothing to configure on the server.

## Option B — hosts that run an app (VPS, Render, Railway, cPanel Node app)

1. Install Bun once: `curl -fsSL https://bun.sh/install | bash`
2. From inside `node-server/`: `bun serve.ts`
3. It serves on port 3000. If your host assigns the port, edit the `PORT` and
   `HOST` lines at the top of `serve.ts` — they are the first settings in the
   file. No `npm install` needed: the app has zero runtime dependencies.

## Updating later

This package is a snapshot of the site as of **2026-10-19**. When the team adds
pages or refreshes the verified-resources list, ask for a fresh package — it
regenerates in about a minute. Want the source code included too? Just ask.

**Everyone has a place to call home.**
