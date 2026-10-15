// Serves dist/ for all domains. Rewrites the static <head> so crawlers and link
// previews (which don't run JS) get per-page meta in the domain's language (see src/sites.ts).
import { hr } from './src/locales/hr.ts';
import { en } from './src/locales/en.ts';
import { cnr } from './src/locales/cnr.ts';
import { SITES, siteFor } from './src/sites.ts';

const dictionaries = { hr, en, cnr };

// Mirrors the routes in src/App.tsx → locale section holding `seo`.
const PAGES = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/contact': 'contact',
  '/careers': 'careers',
  '/solutions': 'solutions',
};

export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const url = new URL(request.url);
    const site = siteFor(url.hostname);

    if (site !== SITES.hr && (url.pathname === '/robots.txt' || url.pathname === '/sitemap.xml')) {
      return new Response((await res.text()).replaceAll(SITES.hr.origin, site.origin), res);
    }
    if (!res.headers.get('content-type')?.includes('text/html')) return res;

    const requested = url.pathname.replace(/\/$/, '') || '/';
    const known = requested in PAGES;
    const path = known ? requested : '/';
    const { title, description } = dictionaries[site.lang][PAGES[path]].seo;
    const fullTitle = path === '/' ? title : `${title} | CyberFortis`; // same as SEO.tsx
    const canonical = `${site.origin}${path}`;

    const meta = {
      'name="title"': fullTitle,
      'name="description"': description,
      'property="og:title"': fullTitle,
      'property="og:description"': description,
      'property="og:url"': canonical,
      'property="og:locale"': site.ogLocale,
      'property="twitter:title"': fullTitle,
      'property="twitter:description"': description,
      'property="twitter:url"': canonical,
    };
    // Unknown paths get the SPA shell (200); keep them out of the index.
    if (!known) meta['name="robots"'] = 'noindex';

    const alternates = Object.values(SITES)
      .map((s) => `<link rel="alternate" hreflang="${s.hreflang}" href="${s.origin}${path}" />`)
      .join('');

    const rewriter = new HTMLRewriter()
      .on('html', { element: (el) => el.setAttribute('lang', site.lang) })
      .on('title', { element: (el) => el.setInnerContent(fullTitle) })
      .on('link[rel="canonical"]', { element: (el) => el.setAttribute('href', canonical) })
      .on('head', {
        element: (el) =>
          el.append(
            alternates +
              `<link rel="alternate" hreflang="x-default" href="${SITES.org.origin}${path}" />`,
            { html: true }
          ),
      });
    for (const [attr, value] of Object.entries(meta)) {
      rewriter.on(`meta[${attr}]`, { element: (el) => el.setAttribute('content', value) });
    }
    return rewriter.transform(res);
  },
};
