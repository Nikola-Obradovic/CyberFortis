import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const BASE_URL = 'https://cyberfortis.hr';
const SITE_NAME = 'CyberFortis';

function setMeta(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) ||
           document.querySelector(`meta[name="${property}"]`);
  if (el) {
    el.setAttribute('content', content);
  } else {
    el = document.createElement('meta');
    if (property.startsWith('og:') || property.startsWith('twitter:')) {
      el.setAttribute('property', property);
    } else {
      el.setAttribute('name', property);
    }
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (el) {
    el.href = url;
  } else {
    el = document.createElement('link');
    el.rel = 'canonical';
    el.href = url;
    document.head.appendChild(el);
  }
}

export default function SEO({ title, description, path }: SEOProps) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('title', fullTitle);
    setCanonical(url);

    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:url', url);

    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:url', url);
  }, [fullTitle, description, url]);

  return null;
}
