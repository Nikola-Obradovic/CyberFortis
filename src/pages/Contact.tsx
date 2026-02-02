import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Hvala na upitu! Javit ćemo vam se u najkraćem mogućem roku.');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-red font-medium mb-3">Kontakt</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kontaktirajte nas
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Spremni smo odgovoriti na vaša pitanja i pomoći vam u zaštiti vašeg
              poslovanja. Javite nam se - prvi korak prema sigurnijem poslovanju.
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
                <h2 className="text-2xl font-bold text-white mb-6">Informacije</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
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
                      <h3 className="font-semibold text-white mb-1">Telefon</h3>
                      <a
                        href="tel:+385123456789"
                        className="text-text-muted hover:text-white transition-colors"
                      >
                        +385 1 234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Adresa</h3>
                      <p className="text-text-muted">
                        Ulica grada Vukovara 269
                        <br />
                        10000 Zagreb, Hrvatska
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Radno vrijeme</h3>
                      <p className="text-text-muted">
                        Pon - Pet: 08:00 - 17:00
                        <br />
                        <span className="text-accent-red">SOC: Non-stop</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-cyber-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Pošaljite upit
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Ime i prezime *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                        placeholder="vas@email.hr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Tvrtka
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                        placeholder="Naziv tvrtke"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                        placeholder="+385 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Usluga koja vas zanima
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyber-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                    >
                      <option value="">Odaberite uslugu</option>
                      <option value="procjena">Sigurnosna procjena</option>
                      <option value="pentest">Penetracijsko testiranje</option>
                      <option value="soc">SOC usluge</option>
                      <option value="incident">Odgovor na incidente</option>
                      <option value="uskladjenost">Usklađenost i rizici</option>
                      <option value="edukacija">Edukacija zaposlenika</option>
                      <option value="ostalo">Ostalo</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Poruka *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyber-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors resize-none"
                      placeholder="Opišite vaše potrebe ili postavite pitanje..."
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Pošalji upit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-cyber-card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4686464832514!2d15.981389315556!3d45.80047097910655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6f5f9999999%3A0x9999999999999999!2sUlica%20grada%20Vukovara%20269%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1600000000000!5m2!1sen!2shr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CyberFortis lokacija"
        />
      </section>
    </div>
  );
}
