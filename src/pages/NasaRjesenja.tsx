import SEO from '../components/SEO';
import CTA from '../components/sections/CTA';

export default function NasaRjesenja() {
  return (
    <div className="pt-20">
      <SEO
        title="Naša rješenja"
        description="Cyberfortis SIEM pruža pouzdan i efikasan način za unapređenje sigurnosnog nadzora u svim organizacijama."
        path="/nasa-rjesenja"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-bold text-[19px] mb-3">Naša rješenja</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Vlastita rješenja za kibernetičku sigurnost
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Razvijamo vlastite alate prilagođene stvarnim potrebama sigurnosnih timova.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-32 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Cyberfortis SIEM */}
            <div className="bg-cyber-dark border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Cyberfortis SIEM
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed">
                    Cyberfortis SIEM pruža pouzdan i efikasan način za unapređenje sigurnosnog nadzora u svim organizacijama. Naš SIEM nudi jasan uvid u ključne događaje i potencijalne rizike, što omogućava brzu reakciju i brže donošenje odluka. Sistem posjeduje mogućnosti za identifikaciju sumnjivih aktivnosti i upozorava sigurnosne timove prije eskalacije incidenta. Integracijom podataka iz različitih izvora na jedinstvenoj platformi dobiva se prikaz i konsolidacija svih sigurnosno-važnih događaja unutar IT infrastrukture, a i šire. Njegova skalabilnost omogućava nesmetan rast i prilagođavanje u poslovnom okruženju. Integracije sa različitim servisima te mogućnosti trijažiranja incidenata čine ga jednim od neizostavnih alata sigurnosnih timova.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="Cyberfortis SIEM"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="rounded-2xl w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
