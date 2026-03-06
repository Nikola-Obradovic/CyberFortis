import SEO from '../components/SEO';
import CTA from '../components/sections/CTA';
import assetManagementImg from '../assets/asset-management.png';
import databaseProtectionImg from '../assets/database-protection.svg';

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

            {/* Cyberfortis Asset Management */}
            <div className="bg-cyber-dark border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Cyberfortis Asset Management
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed">
                    Cyberfortis Asset Management platforma je softversko rješenje koje organizacijama omogućava centralizirano upravljanje, praćenje i optimizaciju digitalnih i fizičkih resursa. Korištenjem jedinstvene platforme, kompanije mogu na jednom mjestu imati pregled nad svojom IT infrastrukturom, opremom, aplikacijama i digitalnim sadržajem.
                    <br /><br />
                    Ovakve platforme pomažu u boljoj kontroli troškova, povećanju sigurnosti i efikasnijem upravljanju resursima kroz cijeli njihov životni ciklus – od nabavke do zamjene ili povlačenja iz upotrebe. Automatsko praćenje promjena i detaljni izvještaji omogućavaju menadžmentu da donosi informisane odluke i optimizira poslovne procese.
                  </p>
                </div>
                <div>
                  <img
                    src={assetManagementImg}
                    alt="Cyberfortis Asset Management"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="rounded-2xl w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Cyberfortis Data Protection */}
            <div className="bg-cyber-dark border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Cyberfortis Data Protection
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed">
                    Cyberfortis rješenje za monitoring i hardening baza podataka omogućava organizacijama da zaštite svoje najvrijednije podatke kroz kontinuirano praćenje aktivnosti i jačanje sigurnosnih postavki baza. Platforma nadzire pristup bazama podataka u realnom vremenu, prepoznaje sumnjive aktivnosti i pomaže u sprječavanju neovlaštenog pristupa ili zloupotrebe podataka.
                    <br /><br />
                    Pored monitoringa, rješenje omogućava hardening baza podataka, odnosno automatsku provjeru sigurnosnih konfiguracija i preporuke za njihovo unapređenje u skladu sa sigurnosnim standardima i najboljim praksama. Na taj način organizacije mogu smanjiti sigurnosne rizike, povećati usklađenost sa regulativama i osigurati stabilno i sigurno okruženje za rad svojih aplikacija.
                  </p>
                </div>
                <div>
                  <img
                    src={databaseProtectionImg}
                    alt="Cyberfortis Data Protection"
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
