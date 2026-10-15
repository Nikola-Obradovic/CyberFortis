import { useI18n } from '../../i18n';
import type { Lang } from '../../i18n';
import { siteFor } from '../../sites';

// Crown = five shields (Croatia, Dubrovnik, Dalmatia, Istria, Slavonia) in a shallow arc.
// At 28x20px the charges inside them are sub-pixel, so they're suggested with accent marks.
const CROWN = [
  { x: 22.6, y: 6.9, fill: '#0f3f8f', accent: '#f5d033' },
  { x: 26.3, y: 6.1, fill: '#1450a0', accent: '#d32d2d' },
  { x: 30.0, y: 5.8, fill: '#0f3f8f', accent: '#f5d033' },
  { x: 33.7, y: 6.1, fill: '#1450a0', accent: '#f5d033' },
  { x: 37.4, y: 6.9, fill: '#0f3f8f', accent: '#ffffff' },
];

const shield = (cx: number, ty: number, w: number, h: number) => {
  const hw = w / 2;
  return `M${cx - hw} ${ty}h${w}v${h * 0.5}c0 ${h * 0.28}-${hw * 0.5} ${h * 0.42}-${hw} ${h * 0.5}c-${hw * 0.5}-${h * 0.08}-${hw}-${h * 0.22}-${hw}-${h * 0.5}V${ty}z`;
};

function FlagHR() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full">
      <rect width="60" height="40" fill="#ff0000" />
      <rect y="13.333" width="60" height="13.333" fill="#ffffff" />
      <rect y="26.667" width="60" height="13.333" fill="#171796" />
      <defs>
        {/* 5x5 checkerboard, top-left square red */}
        <pattern id="hr-check" x="22" y="10.8" width="6.4" height="8.8" patternUnits="userSpaceOnUse">
          <rect width="6.4" height="8.8" fill="#ffffff" />
          <rect width="3.2" height="4.4" fill="#ff0000" />
          <rect x="3.2" y="4.4" width="3.2" height="4.4" fill="#ff0000" />
        </pattern>
        <clipPath id="hr-shield">
          <path d="M22 10.8h16v11.4c0 4.8-4 8.1-8 9.6-4-1.5-8-4.8-8-9.6V10.8z" />
        </clipPath>
      </defs>

      {CROWN.map((s) => (
        <g key={s.x}>
          <path d={shield(s.x, s.y, 3.7, 4.4)} fill={s.fill} stroke="#ffffff" strokeWidth="0.5" />
          <circle cx={s.x} cy={s.y + 1.5} r="0.62" fill={s.accent} />
        </g>
      ))}

      <rect x="22" y="10.8" width="16" height="21" fill="url(#hr-check)" clipPath="url(#hr-shield)" />
      <path
        d="M22 10.8h16v11.4c0 4.8-4 8.1-8 9.6-4-1.5-8-4.8-8-9.6V10.8z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.1"
      />
    </svg>
  );
}

// Gold double-headed eagle under one crown, holding sceptre and orb, with the lion shield
// (gold lion on blue over green) on its breast. Flag is 1:2 officially; squeezed to 3:2 like the rest.
const ME_WING = 'M28.6 14 23 10.2 18 7.4c-.6 5.2.4 10 2.9 14.4l7.7-1.4z';

function FlagME() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full">
      <rect width="60" height="40" fill="#d3ae3b" />
      <rect x="2" y="2" width="56" height="36" fill="#c40308" />
      <defs>
        <clipPath id="me-shield">
          <path d={shield(30, 15.4, 4.4, 6.2)} />
        </clipPath>
      </defs>

      <g fill="#d3ae3b" stroke="#d3ae3b">
        <path d="M26.9 9.3 27.4 5.9l1.4 1.3L30 4.9l1.2 2.3 1.4-1.3.5 3.4z" stroke="none" />
        <path d={ME_WING} stroke="none" />
        <path d={ME_WING} transform="matrix(-1 0 0 1 60 0)" stroke="none" />
        <path d="M29.4 14.5 27.2 11M30.6 14.5 32.8 11M25.2 21.5 23.2 28M34.8 21.5 36 24.4" strokeWidth="1.3" />
        <circle cx="26.8" cy="10.6" r="1.4" stroke="none" />
        <circle cx="33.2" cy="10.6" r="1.4" stroke="none" />
        <path d="M25.6 10.2l-1.6.6 1.6.6zM34.4 10.2l1.6.6-1.6.6z" stroke="none" />
        <ellipse cx="30" cy="18.2" rx="2.9" ry="5.4" stroke="none" />
        <path d="M28.2 22.6 26 29.4l4 1.4 4-1.4-2.2-6.8z" stroke="none" />
        <circle cx="36.3" cy="25.4" r="1.3" stroke="none" />
      </g>

      <path d={shield(30, 15.4, 4.4, 6.2)} fill="#1d5e91" stroke="#d3ae3b" strokeWidth="0.4" />
      <rect x="27" y="19.4" width="6" height="3" fill="#2c8a3c" clipPath="url(#me-shield)" />
      <ellipse cx="30" cy="18" rx="1.3" ry="0.7" fill="#d3ae3b" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#c8102e" strokeWidth="4" />
      <path d="M30 0v40M0 20h60" stroke="#ffffff" strokeWidth="13" />
      <path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="8" />
    </svg>
  );
}

const flags = {
  hr: { Flag: FlagHR, label: 'Hrvatski' },
  cnr: { Flag: FlagME, label: 'Crnogorski' },
  en: { Flag: FlagEN, label: 'English' },
} satisfies Record<Lang, { Flag: () => React.ReactElement; label: string }>;

// Each domain toggles between its own language and English; .org (English) pairs with Croatian.
const site = siteFor(location.hostname);
const local: Lang = site.lang === 'en' ? 'hr' : site.lang;

/** Shows the flag of the language you'd switch TO; clicking switches. */
export default function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const next: Lang = lang === local ? 'en' : local;
  const { Flag, label } = flags[next];

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={`${label}`}
      title={label}
      className={`w-7 h-5 rounded-sm overflow-hidden border border-white/30 opacity-70 hover:opacity-100 hover:border-white transition-all duration-200 cursor-pointer ${className}`}
    >
      <Flag />
    </button>
  );
}
