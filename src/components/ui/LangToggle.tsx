import { useI18n } from '../../i18n';
import type { Lang } from '../../i18n';

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
  en: { Flag: FlagEN, label: 'English' },
} satisfies Record<Lang, { Flag: () => React.ReactElement; label: string }>;

/** Shows the flag of the language you'd switch TO; clicking switches. */
export default function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const next: Lang = lang === 'hr' ? 'en' : 'hr';
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
