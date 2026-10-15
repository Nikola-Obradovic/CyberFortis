// Run with: npx tsx src/locales/checkParity.ts
// tsc already enforces key parity (`typeof hr`); this catches array-length drift,
// which the type system can't see. Product names are allowed to be identical across locales.
import { hr } from './hr';
import { en } from './en';
import { cnr } from './cnr';

const bad: string[] = [];

function walk(a: unknown, b: unknown, path: string) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return bad.push(`${path}: not an array`);
    if (a.length !== b.length) bad.push(`${path}: hr has ${a.length}, got ${b.length}`);
    a.forEach((v, i) => b[i] !== undefined && walk(v, b[i], `${path}[${i}]`));
  } else if (a && typeof a === 'object') {
    for (const [k, v] of Object.entries(a)) {
      walk(v, (b as Record<string, unknown>)?.[k], `${path}.${k}`);
    }
  } else if (typeof a === 'string' && (typeof b !== 'string' || !b.trim())) {
    bad.push(`${path}: translation is empty or missing`);
  }
}

walk(hr, en, 'en');
walk(hr, cnr, 'cnr');

if (bad.length) throw new Error(`locale drift:\n${bad.join('\n')}`);
console.log('locales: hr/en/cnr in sync');
