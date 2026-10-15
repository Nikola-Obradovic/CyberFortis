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
import { useI18n } from '../i18n';
import type { ServiceId } from '../i18n';

const services: { id: ServiceId; icon: typeof Shield; iconImage?: string; image: string }[] = [
  { id: 'uskladjenost', icon: FileCheck, image: nis2IllustrationImg },
  { id: 'pentest', icon: Shield, iconImage: artboard2, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop' },
  { id: 'soc', icon: Monitor, iconImage: artboard3, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  { id: 'baze-podataka', icon: Database, image: databaseProtectionImg },
  { id: 'pam', icon: Key, image: pamIllustrationImg },
  { id: 'ranjivosti', icon: Bug, image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop' },
  { id: 'edr', icon: Laptop, image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&h=400&fit=crop' },
  { id: 'mrezna-zastita', icon: Network, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' },
  { id: 'incident', icon: AlertTriangle, image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop' },
  { id: 'procjene', icon: Search, iconImage: artboard1, image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop' },
];


export default function ServicesPage() {
  const location = useLocation();
  const { t } = useI18n();

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
        title={t.services.seo.title}
        description={t.services.seo.description}
        path="/services"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.services.pageEyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.services.pageTitle}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t.services.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const text = t.services.items[service.id];
              return (
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
                        <img src={service.iconImage} alt={text.title} width={44} height={44} loading="lazy" className="w-11 h-11" />
                      ) : (
                        <service.icon className="w-8 h-8 text-accent-red" />
                      )}
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {text.title}
                      </h2>
                    </div>
                    <p className="text-text-muted mb-8 text-lg leading-relaxed">
                      {text.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {text.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-text-primary"
                        >
                          <ArrowRight className="w-4 h-4 text-accent-red flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" scrollToForm>{t.services.requestQuote}</Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={text.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="rounded-2xl w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
