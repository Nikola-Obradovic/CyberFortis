import { Check } from 'lucide-react';
import { useI18n } from '../../i18n';

export default function WhyUs() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=760&h=570&fit=crop&q=65&fm=webp&auto=format"
                alt={t.whyUs.imageAlt}
                width={760}
                height={570}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#b91c1c] text-white rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-white">{t.whyUs.badge}</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.whyUs.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.whyUs.title}
            </h2>
            <p className="text-text-muted text-lg mb-10">
              {t.whyUs.subtitle}
            </p>

            {/* Feature List */}
            <div className="space-y-8 mb-10">
              {t.whyUs.features.map((feature) => (
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
              {t.whyUs.benefits.map((benefit) => (
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
