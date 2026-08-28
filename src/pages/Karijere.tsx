import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Briefcase, ChevronDown, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { useI18n } from '../i18n';
import type { JobId } from '../i18n';

const positions: { id: JobId; deadline: string }[] = [
  { id: 'junior-cyber-security', deadline: '31.03.2026.' },
  { id: 'medior-cyber-security', deadline: '31.03.2026.' },
];

function JobCard({
  id,
  deadline,
  defaultOpen,
}: {
  id: JobId;
  deadline: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);
  const { t } = useI18n();
  const job = t.careers.jobs[id];

  const sections = [
    { heading: t.careers.tasksHeading, items: job.tasks },
    { heading: t.careers.qualificationsHeading, items: job.qualifications },
    {
      heading:
        id === 'junior-cyber-security'
          ? t.careers.preferredHeadingJunior
          : t.careers.preferredHeadingMedior,
      items: job.preferred,
    },
    { heading: t.careers.benefitsHeading, items: job.benefits },
  ];

  return (
    <div id={id} className="bg-cyber-card border border-border rounded-xl overflow-hidden hover:border-accent-red/30 transition-all scroll-mt-28">
      {/* Card Header - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{job.title}</h3>
            <span className="text-xs font-semibold bg-accent-red/15 text-accent-red px-3 py-1 rounded-full">
              {job.level}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {t.careers.fullTime}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {t.careers.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {t.careers.deadlineLabel}: {deadline}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-text-muted flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable Details */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 sm:px-8 pb-8 space-y-8 border-t border-border pt-6">
          {/* Description */}
          <p className="text-text-muted text-base leading-relaxed">{job.description}</p>

          {sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent-red rounded-full" />
                {section.heading}
              </h4>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted">
                    <ArrowRight className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Apply CTA */}
          <div className="bg-cyber-darker border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">{t.careers.interested}</p>
              <p className="text-text-muted text-sm">{t.careers.applyText}</p>
            </div>
            <a
              href="mailto:info@cyberfortis.hr"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent-red/20"
            >
              <Mail className="w-4 h-4" />
              info@cyberfortis.hr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Karijere() {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  const { t } = useI18n();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-cyber-dark">
      <SEO
        title={t.careers.seo.title}
        description={t.careers.seo.description}
        path="/karijere"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-accent-red" />
            <span className="text-sm text-text-muted font-medium">{t.careers.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.careers.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-8">
            {t.careers.subtitle}
          </p>

          <div className="inline-flex items-center gap-3 bg-accent-red/10 border border-accent-red/20 rounded-full px-5 py-2.5">
            <Briefcase className="w-5 h-5 text-accent-red" />
            <span className="text-white font-semibold">{t.careers.openPositions}</span>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {positions.map((position) => (
              <JobCard
                key={position.id}
                id={position.id}
                deadline={position.deadline}
                defaultOpen={position.id === hash}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-cyber-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t.careers.bottomTitle}
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            {t.careers.bottomText}
          </p>
          <Button href="/kontakt" size="lg" scrollToForm>
            {t.careers.bottomCta}
          </Button>
        </div>
      </section>
    </div>
  );
}
