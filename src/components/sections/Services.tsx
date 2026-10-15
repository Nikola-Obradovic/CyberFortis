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
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import artboard1 from '../../assets/Artboard 1@2x.webp';
import artboard2 from '../../assets/Artboard 2@2x.webp';
import artboard3 from '../../assets/Artboard 3@2x.webp';
import { useI18n } from '../../i18n';
import type { ServiceId } from '../../i18n';

const services: { id: ServiceId; icon: typeof Shield; iconImage?: string }[] = [
  { id: 'uskladjenost', icon: FileCheck },
  { id: 'pentest', icon: Shield, iconImage: artboard2 },
  { id: 'soc', icon: Monitor, iconImage: artboard3 },
  { id: 'baze-podataka', icon: Database },
  { id: 'pam', icon: Key },
  { id: 'ranjivosti', icon: Bug },
  { id: 'edr', icon: Laptop },
  { id: 'mrezna-zastita', icon: Network },
  { id: 'incident', icon: AlertTriangle },
  { id: 'procjene', icon: Search, iconImage: artboard1 },
];


export default function Services() {
  const { t } = useI18n();

  return (
    <section className="py-16 lg:py-20 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-accent-red font-bold text-[19px] mb-3">{t.services.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-text-muted text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const text = t.services.items[service.id];
            return (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group py-8 border-b border-border first:border-t hover:bg-white/[0.02] transition-colors cursor-pointer block"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Number */}
                <div className="text-text-muted/50 text-5xl font-bold w-20 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 md:w-80 flex-shrink-0">
                  {service.iconImage ? (
                    <img src={service.iconImage} alt={text.title} className="w-9 h-9" />
                  ) : (
                    <service.icon className="w-6 h-6 text-accent-red" />
                  )}
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-red transition-colors">
                    {text.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-text-muted flex-grow">
                  {text.description}
                </p>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent-red group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block" />
              </div>
            </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <Button href="/services" variant="outline">
            {t.services.viewAll}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
