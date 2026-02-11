import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-cyber-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Spremni za sigurnije poslovanje?
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
          Zakažite besplatnu NIS2, DORA ili GDPR procjenu s našim stručnjacima. Analizirat ćemo vaše
          potrebe i predložiti optimalno rješenje za usklađenost vaše organizacije.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/kontakt" size="lg" scrollToForm>
            Zakažite NIS2 procjenu
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <span className="text-text-muted">
            ili nazovite{' '}
            <a
              href="tel:+385993022490"
              className="text-white hover:text-accent-red transition-colors"
            >
              +385 99 3022 490
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
