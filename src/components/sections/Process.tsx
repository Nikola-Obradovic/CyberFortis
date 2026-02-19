const steps = [
  {
    number: '01',
    title: 'Inicijalna konzultacija',
    description:
      'Analiziramo vaše poslovanje, identificiramo kritične sustave i definiramo prioritete zaštite.',
  },
  {
    number: '02',
    title: 'Procjena sigurnosti',
    description:
      'Provodimo detaljnu analizu vaše infrastrukture, tražeći ranjivosti i potencijalne prijetnje.',
  },
  {
    number: '03',
    title: 'Implementacija zaštite',
    description:
      'Postavljamo sigurnosne mjere, konfiguriramo sustave i aktiviramo neprekidni nadzor.',
  },
  {
    number: '04',
    title: 'Kontinuirano praćenje',
    description:
      'Redovito izvještavanje, optimizacija zaštite i prilagodba novim prijetnjama.',
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent-red font-bold text-[19px] mb-3">Naš proces</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Kako radimo
          </h2>
          <p className="text-text-muted text-lg">
            Strukturiran pristup koji osigurava temeljitu zaštitu vašeg poslovanja.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent-red bg-cyber-darker text-accent-red text-2xl font-bold mb-6 relative z-10">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-px h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
