// One deploy, three domains, each with its own default language. Shared by the app and worker.js.
// Unknown hosts fall back to .hr; locally, me.localhost / org.localhost select the others.
// Contact details follow the domain, not the language (.me can be viewed in English).
// address: null = the Zagreb address from the locale, whose country name is translated.
const ZAGREB = {
  phone: '+385 99 3022 490',
  address: null,
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.0!2d15.9816!3d45.7950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d70b94b6848d%3A0x1!2sTrnjanska%20cesta%2059%2C%2010000%20Zagreb!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr',
};

export const SITES = {
  hr: { origin: 'https://cyberfortis.hr', lang: 'hr', hreflang: 'hr', ogLocale: 'hr_HR', ...ZAGREB },
  me: {
    origin: 'https://cyberfortis.me',
    lang: 'cnr',
    hreflang: 'cnr',
    ogLocale: 'cnr_ME',
    phone: '+382 67 500 130',
    address: ['Vojvode Maša Đurovića br. 33/6', 'Podgorica'],
    map: `https://maps.google.com/maps?q=${encodeURIComponent('Vojvode Maša Đurovića 33, Podgorica')}&output=embed`,
  },
  org: { origin: 'https://cyberfortis.org', lang: 'en', hreflang: 'en', ogLocale: 'en_GB', ...ZAGREB },
} as const;

export function siteFor(hostname: string) {
  const key = hostname.split('.').find((label) => Object.hasOwn(SITES, label));
  return SITES[key as keyof typeof SITES] ?? SITES.hr;
}
