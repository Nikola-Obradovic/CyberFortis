import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import logo from '../../assets/logo.svg';

const footerLinks = {
  usluge: [
    { name: 'Sigurnosne procjene', path: '/usluge#procjene' },
    { name: 'Penetracijsko testiranje', path: '/usluge#pentest' },
    { name: 'SOC usluge', path: '/usluge#soc' },
    { name: 'Odgovor na incidente', path: '/usluge#incident' },
    { name: 'NIS2 usklađenost', path: '/usluge#uskladjenost' },
  ],
  tvrtka: [
    { name: 'Početna', path: '/' },
    { name: 'Usluge', path: '/usluge' },
    { name: 'O nama', path: '/o-nama' },
    { name: 'Karijere', path: '/karijere' },
    { name: 'Kontakt', path: '/kontakt' },
  ],
};

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const [basePath, hash] = path.split('#');

    if (location.pathname === basePath || (basePath === '' && location.pathname === '/')) {
      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(basePath || '/');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }
    }
  };

  return (
    <footer className="bg-cyber-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
              <img src={logo} alt="CyberFortis" className="h-10 w-auto mb-4" />
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Vaš pouzdan partner u zaštiti digitalnih resursa. Pružamo proaktivnu
              kibernetičku sigurnost za moderne prijetnje.
            </p>
            <div className="flex space-x-4">
          
           
            </div>
          </div>

          {/* Usluge Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Usluge</h3>
            <ul className="space-y-3">
              {footerLinks.usluge.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tvrtka Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tvrtka</h3>
            <ul className="space-y-3">
              {footerLinks.tvrtka.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@cyberfortis.hr"
                  className="text-text-muted hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@cyberfortis.hr
                </a>
              </li>
              <li>
                <a
                  href="tel:+385993022490"
                  className="text-text-muted hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  +385 99 3022 490
                </a>
              </li>
              <li>
                <span className="text-text-muted text-sm flex items-start gap-2">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  Trnjanska cesta 59, 10000 Zagreb, Hrvatska
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} CyberFortis. Sva prava pridržana.
          </p>
          <div className="flex gap-6">
        
    
          </div>
        </div>
      </div>
    </footer>
  );
}
