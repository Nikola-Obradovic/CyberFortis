import {
  Building2,
  Heart,
  Landmark,
  Factory,
  ShoppingCart,
  Plane,
} from 'lucide-react';

const industries = [
  { icon: Landmark, name: 'Financije i bankarstvo', regulation: 'NIS2, DORA' },
  { icon: Heart, name: 'Zdravstvo', regulation: 'NIS2, GDPR' },
  { icon: Building2, name: 'Javni sektor', regulation: 'NIS2' },
  { icon: Factory, name: 'Proizvodnja', regulation: 'NIS2' },
  { icon: ShoppingCart, name: 'Maloprodaja', regulation: 'GDPR' },
  { icon: Plane, name: 'Transport i logistika', regulation: 'NIS2, DORA' },
];

export default function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-cyber-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left - Text */}
          <div className="lg:max-w-md">
            <p className="text-accent-red font-medium mb-3">Industrije</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industrije koje štitimo
            </h2>
            <p className="text-text-muted">
              Specijalizirane sigurnosne usluge prilagođene specifičnim zahtjevima vaše industrije.
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
