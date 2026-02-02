import {
  Shield,
  Search,
  Monitor,
  AlertTriangle,
  FileCheck,
  Users,
  Lock,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import CTA from '../components/sections/CTA';

const services = [
  {
    id: 'procjene',
    icon: Search,
    title: 'Sigurnosne procjene i auditi',
    description:
      'Temeljita analiza vaše IT infrastrukture, politika i procedura za identifikaciju sigurnosnih propusta.',
    features: [
      'Analiza mrežne infrastrukture',
      'Pregled sigurnosnih politika',
      'Procjena ranjivosti sustava',
      'Analiza konfiguracija',
      'Detaljno izvješće s preporukama',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
  },
  {
    id: 'pentest',
    icon: Shield,
    title: 'Penetracijsko testiranje',
    description:
      'Simulirani napadi na vaše sustave kako bismo otkrili ranjivosti prije pravih napadača.',
    features: [
      'Web aplikacijsko testiranje',
      'Testiranje mrežne infrastrukture',
      'Socijalni inženjering',
      'Testiranje bežičnih mreža',
      'Red team operacije',
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
  },
  {
    id: 'soc',
    icon: Monitor,
    title: 'Security Operations Center (SOC)',
    description:
      'Neprekidni nadzor vaših sustava. Detektiramo i reagiramo na prijetnje u realnom vremenu.',
    features: [
      'Kontinuirani nadzor sigurnosnih događaja',
      'SIEM implementacija i upravljanje',
      'Analiza prijetnji',
      'Automatizirana detekcija anomalija',
      'Redovito izvještavanje',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 'incident',
    icon: AlertTriangle,
    title: 'Odgovor na incidente',
    description:
      'Brza i učinkovita reakcija kada se dogodi sigurnosni incident. Minimiziramo štetu i ubrzavamo oporavak.',
    features: [
      'Hitna reakcija na incidente',
      'Forenzička analiza',
      'Izolacija prijetnji',
      'Oporavak sustava',
      'Post-incident izvještavanje',
    ],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
  },
  {
    id: 'uskladjenost',
    icon: FileCheck,
    title: 'Usklađenost i upravljanje rizicima',
    description:
      'Pomoć pri usklađivanju s regulativama i standardima te procjena i upravljanje sigurnosnim rizicima.',
    features: [
      'GDPR usklađenost',
      'NIS2 direktivna priprema',
      'ISO 27001 certifikacija',
      'Procjena rizika',
      'Izrada sigurnosnih politika',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
  },
  {
    id: 'edukacija',
    icon: Users,
    title: 'Edukacija i podizanje svijesti',
    description:
      'Programi obuke koji vaše zaposlenike pretvaraju u prvu liniju obrane protiv kibernetičkih prijetnji.',
    features: [
      'Simulacije phishing napada',
      'Interaktivne radionice',
      'E-learning platforme',
      'Testiranje znanja',
      'Prilagođeni programi po industriji',
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud sigurnost',
    description:
      'Zaštita vaših resursa u oblaku. Osiguravamo sigurnu migraciju i kontinuiranu zaštitu cloud okruženja.',
    features: [
      'Procjena cloud sigurnosti',
      'Konfiguracija sigurnosnih postavki',
      'Identity and Access Management',
      'Nadzor cloud okruženja',
      'Zaštita podataka',
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
  },
  {
    id: 'kripto',
    icon: Lock,
    title: 'Kriptografske usluge',
    description:
      'Implementacija i upravljanje kriptografskim rješenjima za zaštitu osjetljivih podataka.',
    features: [
      'PKI implementacija',
      'Upravljanje certifikatima',
      'Enkripcija podataka',
      'Sigurna komunikacija',
      'Key management',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-medium mb-3">Usluge</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sveobuhvatne sigurnosne usluge
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Od procjene rizika do aktivne obrane - pokrivamo sve aspekte kibernetičke
              sigurnosti. Prilagođena rješenja za vaše specifične potrebe.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="w-8 h-8 text-accent-red" />
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-text-muted mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-text-primary"
                        >
                          <ArrowRight className="w-4 h-4 text-accent-red flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button href="/kontakt" scrollToForm>Zatražite ponudu</Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
