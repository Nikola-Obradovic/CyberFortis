import { Check } from 'lucide-react';

const features = [
  {
    title: 'Certificirani stručnjaci',
    description:
      'Naš tim čine certificirani profesionalci s CISSP, CEH, OSCP i drugim priznatim certifikatima.',
  },
  {
    title: 'Proaktivan pristup',
    description:
      'Ne čekamo da se dogodi incident. Kontinuirano tražimo i neutraliziramo prijetnje prije nego nanesu štetu.',
  },
  {
    title: 'Brza podrška',
    description:
      'Naš tim je uvijek dostupan. U slučaju incidenta, reakcija slijedi unutar nekoliko minuta.',
  },
];

const benefits = [
  'Prilagođena rješenja za vašu industriju',
  'Transparentno izvještavanje i komunikacija',
  'Bez skrivenih troškova',
  'Partnerski odnos, ne samo usluga',
  'Kontinuirano praćenje novih prijetnji',
  'Brza implementacija zaštitnih mjera',
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
                alt="Cyber Security Operations"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-accent-red text-white rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold mb-1">99.9%</div>
              <div className="text-sm opacity-90">Uspješnost u sprječavanju napada</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-accent-red font-medium mb-3">Zašto mi</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Vaša sigurnost je naša misija
            </h2>
            <p className="text-text-muted text-lg mb-10">
              Evo što nas čini drugačijima od drugih pružatelja sigurnosnih usluga.
            </p>

            {/* Feature List */}
            <div className="space-y-8 mb-10">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-red" />
                  </div>
                  <span className="text-text-primary text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
