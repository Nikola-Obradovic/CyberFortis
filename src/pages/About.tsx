import { Shield, Target, Eye, Users } from 'lucide-react';
import Partners from '../components/sections/Partners';
import CTA from '../components/sections/CTA';

const values = [
  {
    icon: Shield,
    title: 'Integritet',
    description:
      'Djelujemo etički i transparentno. Vaše povjerenje je temelj našeg poslovanja.',
  },
  {
    icon: Target,
    title: 'Izvrsnost',
    description:
      'Težimo savršenstvu u svemu što radimo. Kontinuirano se usavršavamo i pratimo najnovije trendove.',
  },
  {
    icon: Eye,
    title: 'Proaktivnost',
    description:
      'Ne čekamo probleme - predviđamo ih i djelujemo preventivno kako bismo vas zaštitili.',
  },
  {
    icon: Users,
    title: 'Partnerstvo',
    description:
      'Vaš uspjeh je naš uspjeh. Gradimo dugoročne odnose temeljene na uzajamnom povjerenju.',
  },
];

const team = [
  {
    name: 'Dr. Tomislav Novak',
    role: 'Direktor i osnivač',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    bio: '20+ godina iskustva u kibernetičkoj sigurnosti. Bivši voditelj sigurnosti u nacionalnoj banci.',
  },
  {
    name: 'Marina Babić',
    role: 'Voditeljica SOC tima',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    bio: 'CISSP certificirana stručnjakinja. Specijalizirana za detekciju i odgovor na napade.',
  },
  {
    name: 'Petar Vuković',
    role: 'Voditelj penetracijskog testiranja',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    bio: 'OSCP, CEH certifikati. Otkrio ranjivosti u sustavima Fortune 500 kompanija.',
  },
  {
    name: 'Ivana Matić',
    role: 'Voditeljica usklađenosti',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    bio: 'Stručnjakinja za GDPR, NIS2 i ISO 27001. Pomaže tvrtkama u regulatornoj usklađenosti.',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-medium mb-3">O nama</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Predvodnici kibernetičke sigurnosti u Hrvatskoj
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              CyberFortis je vodeća hrvatska tvrtka za kibernetičku sigurnost.
              Osnovani smo s misijom zaštite digitalnih resursa hrvatskih tvrtki i
              institucija od sve sofisticiranijih prijetnji.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-red font-medium mb-3">Naša priča</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Od vizije do vodećeg pružatelja sigurnosti
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  CyberFortis je osnovan 2010. godine od strane grupe stručnjaka koji
                  su prepoznali rastuću potrebu za profesionalnim sigurnosnim
                  uslugama na hrvatskom tržištu.
                </p>
                <p>
                  Kroz godine, izgradili smo tim od preko 50 certificiranih
                  stručnjaka i postali pouzdani partner stotinama tvrtki - od malih
                  poduzeća do velikih korporacija i državnih institucija.
                </p>
                <p>
                  Naš pristup kombinira najnovije tehnologije s dubokim razumijevanjem
                  lokalnog tržišta i regulatornog okruženja, pružajući rješenja koja
                  su istovremeno svjetske klase i prilagođena specifičnim potrebama
                  naših klijenata.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="CyberFortis tim"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-red text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-90">Godina iskustva</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent-red font-medium mb-3">Naše vrijednosti</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Principi koji vode svaku našu odluku
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
      <section className="py-20 lg:py-32 bg-cyber-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent-red font-medium mb-3">Naš tim</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upoznajte stručnjake koji štite vaše poslovanje
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
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

      {/* Partners Section */}
      <Partners />

      <CTA />
    </div>
  );
}
