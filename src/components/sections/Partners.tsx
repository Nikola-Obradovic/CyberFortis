import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import checkPointLogo from '../../assets/Check-Point-2024-logo-reversed.png';

const partners = [
  { name: 'Check Point', logo: checkPointLogo },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/200x80/161b22/8a8a8a?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/200x80/161b22/8a8a8a?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/200x80/161b22/8a8a8a?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/200x80/161b22/8a8a8a?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/200x80/161b22/8a8a8a?text=Partner+6' },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalPartners = partners.length;
  // Create extended array for seamless loop: [...partners, ...partners, ...partners]
  const extendedPartners = [...partners, ...partners, ...partners];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      // Reset to middle section for seamless loop
      if (currentIndex >= totalPartners * 2) {
        setCurrentIndex(currentIndex - totalPartners);
      } else if (currentIndex < totalPartners) {
        setCurrentIndex(currentIndex + totalPartners);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, totalPartners]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused || isTransitioning) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning, nextSlide]);

  // Initialize to middle section
  useEffect(() => {
    setCurrentIndex(totalPartners);
  }, [totalPartners]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(totalPartners + index);
  };

  // Calculate actual index for dots (0 to totalPartners-1)
  const actualIndex = ((currentIndex % totalPartners) + totalPartners) % totalPartners;

  return (
    <section className="py-20 lg:py-24 bg-cyber-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-red font-medium mb-3">Partneri</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Tvrtke koje nam vjeruju
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 bg-cyber-card border border-border rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-white/30 transition-all"
            aria-label="Prethodni partner"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Partners Display */}
          <div className="overflow-hidden mx-12 md:mx-16">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {extendedPartners.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex-shrink-0 w-1/3 px-2 md:px-4"
                >
                  <div className="flex items-center justify-center p-4 md:p-6 h-24 md:h-28 bg-cyber-card border border-border rounded-xl transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 md:max-h-20 w-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 bg-cyber-card border border-border rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-white/30 transition-all"
            aria-label="Sljedeći partner"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {partners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === actualIndex
                  ? 'bg-accent-red w-6'
                  : 'bg-border hover:bg-text-muted w-2'
              }`}
              aria-label={`Idi na partner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
