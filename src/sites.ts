// One deploy, three domains, each with its own default language. Shared by the app and worker.js.
// Unknown hosts fall back to .hr; locally, me.localhost / org.localhost select the others.
export const SITES = {
  hr: { origin: 'https://cyberfortis.hr', lang: 'hr', hreflang: 'hr', ogLocale: 'hr_HR' },
  me: { origin: 'https://cyberfortis.me', lang: 'cnr', hreflang: 'cnr', ogLocale: 'cnr_ME' },
  org: { origin: 'https://cyberfortis.org', lang: 'en', hreflang: 'en', ogLocale: 'en_GB' },
} as const;

export function siteFor(hostname: string) {
  const key = hostname.split('.').find((label) => Object.hasOwn(SITES, label));
  return SITES[key as keyof typeof SITES] ?? SITES.hr;
}
