import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Briefcase, ChevronDown, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';

interface JobPosition {
  id: string;
  title: string;
  level: string;
  description: string;
  tasks: string[];
  qualifications: string[];
  qualificationsSub?: Record<string, string[]>;
  preferred: string[];
  benefits: string[];
  deadline: string;
}

const positions: JobPosition[] = [
  {
    id: 'junior-cyber-security',
    title: 'Junior Cyber Security Inženjer',
    level: 'Junior',
    description:
      'Zbog širenja tima tražimo Junior Cyber Security Inženjera koji želi započeti ili razvijati karijeru u domeni informacijske i cyber sigurnosti kroz praktičan rad, mentorstvo i kontinuirano učenje.',
    tasks: [
      'Praćenje sigurnosnih događaja i podrška u analizi incidenata',
      'Učešće u implementaciji i održavanju sigurnosnih rješenja (firewall, endpoint zaštita, SIEM, hardening DB)',
      'Osnovne sigurnosne provjere sustava (hardening, patching, vulnerability scanning)',
      'Pomoć u izradi i održavanju sigurnosne dokumentacije i procedura',
      'Suradnja s iskusnijim inženjerima na sigurnosnim projektima',
      'Praćenje aktualnih cyber prijetnji i učenje kroz realne scenarije',
    ],
    qualifications: [
      'Završena IT edukacija (računala, informatika, mreže ili srodno)',
      'Osnovno razumijevanje mreža i mrežne sigurnosti (TCP/IP, DNS, firewall)',
      'Osnovno razumijevanje operativnih sustava (Windows i/ili Linux)',
      'Osnovno poznavanje cyber security pojmova i praksi',
      'Spremnost za učenje i profesionalni razvoj',
      'Odgovornost, analitičnost i timski duh',
      'Osnovno znanje engleskog jezika',
    ],
    preferred: [
      'Osnovno iskustvo sa sigurnosnim alatima (SIEM, antivirus, vulnerability scanner)',
      'Certifikati ili priprema za certifikate (Security+, CEH – junior nivo)',
      'Poznavanje osnova skriptiranja (Python, Bash, PowerShell)',
      'Interes za SOC, incident response ili cloud security',
    ],
    benefits: [
      'Mentorstvo i strukturirano uvođenje u posao',
      'Rad na stvarnim sigurnosnim projektima',
      'Kontinuiranu edukaciju i razvoj karijere',
      'Podršku za certifikacije i treninge',
      'Ugodno i profesionalno radno okruženje',
      'Mogućnost napredovanja u Medior Cyber Security Inženjera',
      'Fleksibilno radno vrijeme / hibridni ili remote rad (po dogovoru)',
    ],
    deadline: '31.03.2026.',
  },
  {
    id: 'medior-cyber-security',
    title: 'Medior Cyber Security Inženjer',
    level: 'Medior',
    description:
      'Zbog rasta i razvoja našeg tima, tražimo Medior Cyber Security Inženjera koji će učestvovati u zaštiti informacijskih sustava, unapređenju sigurnosnih procesa i odgovoru na sigurnosne incidente.',
    tasks: [
      'Implementacija i održavanje sigurnosnih rješenja (SIEM, EDR, firewall, DLP i sl.)',
      'Praćenje, analiza i odgovor na sigurnosne incidente',
      'Učešće u procjeni rizika i sigurnosnim analizama (vulnerability assessment, hardening)',
      'Saradnja na internim i eksternim sigurnosnim testiranjima (penetration testing, u saradnji s timom)',
      'Izrada i održavanje sigurnosne dokumentacije, politika i procedura',
      'Praćenje novih prijetnji, ranjivosti i trendova u području cyber security-a',
      'Suradnja s IT timovima i klijentima na unapređenju sigurnosne posture',
    ],
    qualifications: [
      'Minimalno 2–4 godine iskustva u području kibernetičke / cyber sigurnosti',
      'Dobro poznavanje mrežnih protokola i sigurnosti (TCP/IP, DNS, VPN, firewall)',
      'Dobro poznavanje operativnih sustava (Linux, Windows)',
      'Dobro poznavanje sigurnosnih alata (SIEM, IDS/IPS, endpoint protection)',
      'Razumijevanje standarda i okvira (ISO 27001, NIST, CIS)',
      'Analitičko razmišljanje i sposobnost samostalnog rada',
      'Dobro znanje engleskog jezika (pisano i usmeno)',
    ],
    preferred: [
      'Relevantnim certifikatima (CEH, Security+, CySA+, OSCP, ISO 27001 LI/LA)',
      'Iskustvom u incident response ili SOC okruženju',
      'Poznavanjem alata za automatizaciju i skriptiranje (Python, Bash, PowerShell)',
      'Iskustvom u radu sa regulativama (GDPR, NIS2)',
    ],
    benefits: [
      'Rad u stručnom i motiviranom timu',
      'Rad na zanimljivim i izazovnim sigurnosnim projektima',
      'Kontinuirano učenje i profesionalni razvoj',
      'Podršku za certifikacije i edukacije',
    ],
    deadline: '31.03.2026.',
  },
];

function JobCard({ position, defaultOpen }: { position: JobPosition; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <div id={position.id} className="bg-cyber-card border border-border rounded-xl overflow-hidden hover:border-accent-red/30 transition-all scroll-mt-28">
      {/* Card Header - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{position.title}</h3>
            <span className="text-xs font-semibold bg-accent-red/15 text-accent-red px-3 py-1 rounded-full">
              {position.level}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Puno radno vrijeme
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Hrvatska / Remote
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Rok: {position.deadline}
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
          <p className="text-text-muted text-base leading-relaxed">{position.description}</p>

          {/* Tasks */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent-red rounded-full" />
              Opis posla
            </h4>
            <ul className="space-y-2.5">
              {position.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <ArrowRight className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent-red rounded-full" />
              Potrebne kvalifikacije
            </h4>
            <ul className="space-y-2.5">
              {position.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <ArrowRight className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent-red rounded-full" />
              {position.id === 'junior-cyber-security'
                ? 'Prednost (nije uvjet)'
                : 'Prednost imaju kandidati s'}
            </h4>
            <ul className="space-y-2.5">
              {position.preferred.map((pref, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <ArrowRight className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                  <span>{pref}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent-red rounded-full" />
              Nudimo
            </h4>
            <ul className="space-y-2.5">
              {position.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <ArrowRight className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply CTA */}
          <div className="bg-cyber-darker border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">Zainteresirani?</p>
              <p className="text-text-muted text-sm">
                Prijave (CV + kratko motivacijsko pismo) slati na:
              </p>
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
        title="Karijere"
        description="Pridruži se CyberFortis timu - otvorene pozicije za cyber security inženjere. Gradi karijeru u kibernetičkoj sigurnosti u Hrvatskoj."
        path="/karijere"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-accent-red" />
            <span className="text-sm text-text-muted font-medium">Karijere</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pridruži se našem timu
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-8">
            Tražimo motivirane stručnjake koji žele raditi na najizazovnijim
            sigurnosnim projektima. Gradi karijeru u kibernetičkoj sigurnosti s nama.
          </p>

          <div className="inline-flex items-center gap-3 bg-accent-red/10 border border-accent-red/20 rounded-full px-5 py-2.5">
            <Briefcase className="w-5 h-5 text-accent-red" />
            <span className="text-white font-semibold">
              Otvorenih pozicija: 6
            </span>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {positions.map((position) => (
              <JobCard key={position.id} position={position} defaultOpen={position.id === hash} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-cyber-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ne pronalaziš odgovarajuću poziciju?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Uvijek smo otvoreni za razgovor s talentiranim stručnjacima.
            Pošalji nam svoj CV i javit ćemo ti se kad se otvori prilika.
          </p>
          <Button href="/kontakt" size="lg" scrollToForm>
            Kontaktiraj nas
          </Button>
        </div>
      </section>
    </div>
  );
}
