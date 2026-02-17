import {
  Shield,
  Search,
  Monitor,
  AlertTriangle,
  Database,
  Key,
  Bug,
  Laptop,
  Network,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import CTA from '../components/sections/CTA';
import nis2IllustrationImg from '../assets/nis2-illustration.svg';
import databaseProtectionImg from '../assets/database-protection.svg';
import pamIllustrationImg from '../assets/pam-illustration.svg';
import artboard1 from '../assets/Artboard 1@2x.webp';
import artboard2 from '../assets/Artboard 2@2x.webp';
import artboard3 from '../assets/Artboard 3@2x.webp';

const services = [
  {
    id: 'uskladjenost',
    icon: FileCheck,
    title: 'NIS2 i regulatorna usklađenost',
    description:
      'Gap analiza i procjena spremnosti za NIS2, DORA i GDPR. Izrada sigurnosnih politika i kontinuirana podrška za regulatornu usklađenost.',
    features: [
      'NIS2 gap analiza',
      'DORA procjena spremnosti',
      'GDPR revizija i usklađenost',
      'Izrada sigurnosnih politika i procedura',
      'Priprema za regulatorne audite',
    ],
    image: nis2IllustrationImg,
  },
  {
    id: 'pentest',
    icon: Shield,
    iconImage: artboard2,
    title: 'Penetracijsko testiranje',
    description:
      'Simulirani napadi na vaše sustave kako bismo otkrili slabosti i testirali vašu obranu u kontroliranim uvjetima.',
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
    iconImage: artboard3,
    title: 'SOC usluge',
    description:
      'Neprekidni nadzor vaše mreže i sustava. Naš Security Operations Center detektira i reagira na prijetnje u realnom vremenu.',
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
    id: 'baze-podataka',
    icon: Database,
    title: 'Zaštita baza podataka',
    description:
      'Kompletan monitoring, blokiranje i zaštita strukturiranih podataka u vašim bazama podataka, brže vrijeme rješavanja revizije i compliance-a (NIS2, DORA).',
    features: [
      'Monitoring baza podataka u realnom vremenu',
      'Blokiranje neovlaštenog pristupa',
      'Zaštita strukturiranih podataka',
      'Ubrzana revizija i compliance',
      'Podrška za NIS2 i DORA regulativu',
    ],
    image: databaseProtectionImg,
  },
  {
    id: 'pam',
    icon: Key,
    title: 'Upravljanje privilegiranim pristupom (PAM)',
    description:
      'Zaštita administratorskih rola, upravljanje zaporkama i kompletan monitoring.',
    features: [
      'Zaštita privilegiranih računa',
      'Centralizirano upravljanje zaporkama',
      'Sesijski nadzor i snimanje',
      'Just-in-time pristup',
      'Detaljni revizijski tragovi',
    ],
    image: pamIllustrationImg,
  },
  {
    id: 'ranjivosti',
    icon: Bug,
    title: 'Upravljanje ranjivostima',
    description:
      'Rješenje za upravljanje ranjivostima i proaktivno patchiranje kritičnih sistema.',
    features: [
      'Kontinuirano skeniranje ranjivosti',
      'Prioritizacija prema riziku',
      'Proaktivno patchiranje',
      'Integracija s ITSM alatima',
      'Izvještavanje i praćenje napretka',
    ],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
  },
  {
    id: 'edr',
    icon: Laptop,
    title: 'Zaštita endpointa (EDR)',
    description:
      'Kompletno rješenje za upravljanje serverima i radnim stanicama. Proaktivna odbrana protiv kibernetičkih prijetnji.',
    features: [
      'Real-time detekcija prijetnji',
      'Automatska izolacija zaraženih uređaja',
      'Forenzička analiza',
      'Centralizirano upravljanje',
      'Integracija s SIEM sustavima',
    ],
    image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&h=400&fit=crop',
  },
  {
    id: 'mrezna-zastita',
    icon: Network,
    title: 'Mrežna zaštita',
    description:
      'U suradnji s vodećim vendorima za zaštitu mrežne infrastrukture, možemo vam ponuditi najbolja rješenja.',
    features: [
      'Next-gen firewall rješenja',
      'Segmentacija mreže',
      'IDS/IPS implementacija',
      'Zaštita od DDoS napada',
      'VPN i siguran udaljeni pristup',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
  {
    id: 'incident',
    icon: AlertTriangle,
    title: 'Odgovor na incidente',
    description:
      'Brza i učinkovita reakcija na sigurnosne incidente. Minimiziramo štetu i pomažemo u oporavku vaših sustava.',
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
    id: 'procjene',
    icon: Search,
    iconImage: artboard1,
    title: 'Sigurnosne procjene',
    description:
      'Temeljita analiza vaše IT infrastrukture za identifikaciju ranjivosti i sigurnosnih propusta prije nego ih napadači iskoriste.',
    features: [
      'Analiza mrežne infrastrukture',
      'Pregled sigurnosnih politika',
      'Procjena ranjivosti sustava',
      'Analiza konfiguracija',
      'Detaljno izvješće s preporukama',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
  },
];

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="pt-20">
      <SEO
        title="Usluge"
        description="Sveobuhvatne usluge kibernetičke sigurnosti - penetracijsko testiranje, SOC, NIS2 usklađenost, zaštita baza podataka, EDR i mrežna zaštita."
        path="/usluge"
      />
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
                      {service.iconImage ? (
                        <img src={service.iconImage} alt={service.title} width={44} height={44} loading="lazy" className="w-11 h-11" />
                      ) : (
                        <service.icon className="w-8 h-8 text-accent-red" />
                      )}
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
                      width={600}
                      height={400}
                      loading="lazy"
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
