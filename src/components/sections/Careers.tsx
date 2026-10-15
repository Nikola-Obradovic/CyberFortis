import { ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import matrixImg from '../../assets/matrix.webp';
import { useI18n } from '../../i18n';

export default function Careers() {
  const { t } = useI18n();
  const positions = (
    Object.keys(t.careersSection.cards) as (keyof typeof t.careersSection.cards)[]
  ).map((hash) => ({
    hash,
    title: t.careersSection.cards[hash],
    type: t.careersSection.fullTime,
  }));

  return (
    <section className="py-24 lg:py-32 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.careersSection.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.careersSection.title}
            </h2>

            <img
              src={matrixImg}
              alt="Matrix"
              width={600}
              height={400}
              loading="lazy"
              className="rounded-xl mb-8 w-full"
            />

            <p className="text-text-muted text-lg mb-8">
              {t.careersSection.text}
            </p>

            {/* Open positions count */}
            <div className="inline-flex items-center gap-3 bg-accent-red/10 border border-accent-red/20 rounded-full px-5 py-2.5">
              <Briefcase className="w-5 h-5 text-accent-red" />
              <span className="text-white font-semibold">{t.careersSection.openPositions}</span>
            </div>
          </div>

          {/* Right - Position cards */}
          <div className="space-y-4">
            {positions.map((position, index) => (
              <Link
                key={index}
                to={`/careers#${position.hash}`}
                className="group block bg-cyber-card border border-border rounded-xl p-6 hover:border-accent-red/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {position.title}
                    </h3>
                    <span className="text-text-muted text-sm">{position.type}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent-red group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}

            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-accent-red hover:text-white transition-colors mt-4 font-bold text-[19px]"
            >
              {t.careersSection.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
