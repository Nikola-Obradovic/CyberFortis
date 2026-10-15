import { Shield, Target, Eye, Users } from 'lucide-react';
import SEO from '../components/SEO';
import CTA from '../components/sections/CTA';
import { useI18n } from '../i18n';

export default function About() {
  const { t } = useI18n();
  const values = [Shield, Target, Eye, Users].map((icon, i) => ({ icon, ...t.about.values[i] }));
  const team = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
  ].map((image, i) => ({
    image,
    name: ['Dr. Tomislav Novak', 'Marina Babić', 'Petar Vuković', 'Ivana Matić'][i],
    ...t.about.team[i],
  }));

  return (
    <div className="pt-20">
      <SEO
        title={t.about.seo.title}
        description={t.about.seo.description}
        path="/about"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.about.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t.about.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-red font-bold text-[19px] mb-3">{t.about.storyEyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.about.storyTitle}
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                {t.about.storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt={t.about.teamImageAlt}
                width={600}
                height={400}
                loading="lazy"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-red text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-90">{t.about.yearsBadge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.about.valuesEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {values.map((value) => (
              <div key={value.title} className="flex gap-5">
                <div className="w-12 h-12 bg-accent-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-accent-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-cyber-darker hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.about.teamEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.about.teamTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-accent-red text-sm mb-3">{member.role}</p>
                <p className="text-text-muted text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <CTA />
    </div>
  );
}
