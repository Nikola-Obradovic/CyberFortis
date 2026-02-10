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
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const services = [
  {
    id: 'procjene',
    icon: Search,
    title: 'Sigurnosne procjene',
    description:
      'Temeljita analiza vaše IT infrastrukture za identifikaciju ranjivosti i sigurnosnih propusta prije nego ih napadači iskoriste.',
  },
  {
    id: 'pentest',
    icon: Shield,
    title: 'Penetracijsko testiranje',
    description:
      'Simulirani napadi na vaše sustave kako bismo otkrili slabosti i testirali vašu obranu u kontroliranim uvjetima.',
  },
  {
    id: 'soc',
    icon: Monitor,
    title: 'SOC usluge',
    description:
      'Neprekidni nadzor vaše mreže i sustava. Naš Security Operations Center detektira i reagira na prijetnje u realnom vremenu.',
  },
  {
    id: 'baze-podataka',
    icon: Database,
    title: 'Zaštita baza podataka',
    description:
      'Kompletan monitoring, blokiranje i zaštita strukturiranih podataka u vašim bazama podataka, brže vrijeme rješavanja revizije i compliance-a (NIS2, DORA).',
  },
  {
    id: 'pam',
    icon: Key,
    title: 'Upravljanje privilegiranim pristupom (PAM)',
    description:
      'Zaštita administratorskih rola, upravljanje zaporkama i kompletan monitoring.',
  },
  {
    id: 'ranjivosti',
    icon: Bug,
    title: 'Upravljanje ranjivostima',
    description:
      'Rješenje za upravljanje ranjivostima i proaktivno patchiranje kritičnih sistema.',
  },
  {
    id: 'edr',
    icon: Laptop,
    title: 'Zaštita endpointa (EDR)',
    description:
      'Kompletno rješenje za upravljanje serverima i radnim stanicama. Proaktivna odbrana protiv kibernetičkih prijetnji.',
  },
  {
    id: 'mrezna-zastita',
    icon: Network,
    title: 'Mrežna zaštita',
    description:
      'U suradnji s vodećim vendorima za zaštitu mrežne infrastrukture, možemo vam ponuditi najbolja rješenja.',
  },
  {
    id: 'incident',
    icon: AlertTriangle,
    title: 'Odgovor na incidente',
    description:
      'Brza i učinkovita reakcija na sigurnosne incidente. Minimiziramo štetu i pomažemo u oporavku vaših sustava.',
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-20 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-accent-red font-medium mb-3">Što radimo</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sveobuhvatna zaštita za vaše digitalno poslovanje
          </h2>
          <p className="text-text-muted text-lg">
            Od procjene rizika do aktivne obrane - pokrivamo sve aspekte kibernetičke sigurnosti.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/usluge#${service.id}`}
              className="group py-8 border-b border-border first:border-t hover:bg-white/[0.02] transition-colors cursor-pointer block"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Number */}
                <div className="text-text-muted/30 text-5xl font-bold w-20 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 md:w-80 flex-shrink-0">
                  <service.icon className="w-6 h-6 text-accent-red" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-red transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-text-muted flex-grow">
                  {service.description}
                </p>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent-red group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/usluge" variant="outline">
            Pogledajte sve usluge
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
