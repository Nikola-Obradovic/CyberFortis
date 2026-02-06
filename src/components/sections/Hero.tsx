import { useState, useEffect, useRef } from 'react';
import { Shield } from 'lucide-react';
import Button from '../ui/Button';
import redCubes from '../../assets/red_cubes.webp';

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export default function Hero() {
  const stat1 = useCountUp(500, 2000);
  const stat2 = useCountUp(99, 2500);
  const stat3 = useCountUp(15, 1500);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-grid overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-dark to-cyber-darker" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-8 bg-repeat bg-center"
          style={{ backgroundImage: `url(${redCubes})`, backgroundSize: '150px auto' }}
        >
          <Shield className="w-4 h-4 text-white" />
          <span className="text-sm text-white font-medium">Pouzdana zaštita za vaše poslovanje</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Zaštitite svoje{' '}
          <span className="text-gradient">digitalne resurse</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-10">
          Proaktivna kibernetička sigurnost za moderne prijetnje. Naš tim stručnjaka
          štiti vaše poslovanje s najnovijim tehnologijama i metodologijama.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/kontakt" size="lg" scrollToForm>
            Besplatna procjena sigurnosti
          </Button>
          <Button href="/usluge" variant="outline" size="lg">
            Saznajte više
          </Button>
        </div>

      </div>

      {/* Stats */}
      <div
        className="relative z-10 w-full mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-16 gap-y-8 py-8">
          <div ref={stat1.ref}>
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat1.count}+</div>
            <div className="text-text-muted">Zaštićenih tvrtki</div>
          </div>
          <div className="hidden sm:block w-px bg-border" />
          <div ref={stat2.ref}>
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat2.count}.9%</div>
            <div className="text-text-muted">Uspješnost detekcije</div>
          </div>
          <div className="hidden sm:block w-px bg-border" />
          <div ref={stat3.ref}>
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat3.count}+</div>
            <div className="text-text-muted">Godina iskustva</div>
          </div>
        </div>
      </div>
    </section>
  );
}
