import SEO from '../components/SEO';
import CTA from '../components/sections/CTA';
import assetManagementImg from '../assets/asset-management.png';
import databaseProtectionImg from '../assets/database-protection.svg';
import { useI18n } from '../i18n';

const images = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  assetManagementImg,
  databaseProtectionImg,
];

export default function NasaRjesenja() {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      <SEO
        title={t.solutions.seo.title}
        description={t.solutions.seo.description}
        path="/nasa-rjesenja"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.solutions.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.solutions.title}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t.solutions.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-32 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {t.solutions.items.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-cyber-dark border border-white/10 rounded-2xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {solution.title}
                    </h2>
                    <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                      {solution.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <img
                      src={images[index]}
                      alt={solution.title}
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
