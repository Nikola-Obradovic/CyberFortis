import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import contactIllustration from '../assets/contact-illustration.svg';
import { useI18n } from '../i18n';
import { siteFor } from '../sites';

const site = siteFor(location.hostname);

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      <SEO
        title={t.contact.seo.title}
        description={t.contact.seo.description}
        path="/contact"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-bold text-[19px] mb-3">{t.contact.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-cyber-darker scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t.contact.infoHeading}</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{t.contact.email}</h3>
                      <a
                        href="mailto:info@cyberfortis.hr"
                        className="text-text-muted hover:text-white transition-colors"
                      >
                        info@cyberfortis.hr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{t.contact.phone}</h3>
                      <a
                        href={`tel:${site.phone.replaceAll(' ', '')}`}
                        className="text-text-muted hover:text-white transition-colors"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{t.contact.address}</h3>
                      <p className="text-text-muted">
                        {site.address?.[0] ?? t.contact.addressLine1}
                        <br />
                        {site.address?.[1] ?? t.contact.addressLine2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{t.contact.hours}</h3>
                      <p className="text-text-muted">
                        {t.contact.hoursValue}
                        <br />
                        <span className="text-accent-red">{t.contact.socHours}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <img
                src={contactIllustration}
                alt={t.contact.illustrationAlt}
                width={512}
                height={512}
                loading="lazy"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-cyber-card">
        <iframe
          src={site.map}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t.contact.mapTitle}
        />
      </section>
    </div>
  );
}
