import {
  Building2,
  Heart,
  Landmark,
  Factory,
  ShoppingCart,
  Plane,
} from 'lucide-react';
import { useI18n } from '../../i18n';

export default function Industries() {
  const { t } = useI18n();
  const industries = [
    { icon: Landmark, name: t.industries.names.finance, regulation: 'NIS2, DORA' },
    { icon: Heart, name: t.industries.names.healthcare, regulation: 'NIS2, GDPR' },
    { icon: Building2, name: t.industries.names.publicSector, regulation: 'NIS2' },
    { icon: Factory, name: t.industries.names.manufacturing, regulation: 'NIS2' },
    { icon: ShoppingCart, name: t.industries.names.retail, regulation: 'GDPR' },
    { icon: Plane, name: t.industries.names.transport, regulation: 'NIS2, DORA' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cyber-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left - Text */}
          <div className="lg:max-w-md">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.industries.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.industries.title}
            </h2>
            <p className="text-text-muted">
              {t.industries.subtitle}
            </p>
          </div>

          {/* Right - Industry Icons */}
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 bg-cyber-card border border-border rounded-full px-5 py-3 hover:border-white/20 transition-colors"
              >
                <industry.icon className="w-5 h-5 text-accent-red" />
                <span className="text-text-primary text-sm font-medium whitespace-nowrap">
                  {industry.name}
                </span>
                <span className="text-[10px] font-medium text-accent-cyan bg-accent-cyan/10 rounded px-1.5 py-0.5">
                  {industry.regulation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
