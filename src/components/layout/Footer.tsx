import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin} from 'lucide-react';
import logo from '../../assets/logo.svg';
import { useI18n } from '../../i18n';
import { siteFor } from '../../sites';

const site = siteFor(window.location.hostname);

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useI18n();

  const footerLinks = {
    usluge: [
      { name: t.footer.serviceLinks.procjene, path: '/services#procjene' },
      { name: t.footer.serviceLinks.pentest, path: '/services#pentest' },
      { name: t.footer.serviceLinks.soc, path: '/services#soc' },
      { name: t.footer.serviceLinks.incident, path: '/services#incident' },
      { name: t.footer.serviceLinks.uskladjenost, path: '/services#uskladjenost' },
    ],
    tvrtka: [
      { name: t.nav.home, path: '/' },
      { name: t.nav.services, path: '/services' },
      { name: t.nav.about, path: '/about' },
      { name: t.nav.careers, path: '/careers' },
      { name: t.nav.contact, path: '/contact' },
    ],
  };

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
              <img src={logo} alt="CyberFortis" width={100} height={40} loading="lazy" className="h-10 w-auto mb-4" />
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
          
           
            </div>
          </div>

          {/* Usluge Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.servicesHeading}</h3>
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
            <h3 className="text-white font-semibold mb-4">{t.footer.companyHeading}</h3>
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
            <h3 className="text-white font-semibold mb-4">{t.footer.contactHeading}</h3>
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
                  href={`tel:${site.phone.replaceAll(' ', '')}`}
                  className="text-text-muted hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="text-text-muted text-sm flex items-start gap-2">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  {site.address?.join(', ') ?? t.footer.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} CyberFortis. {t.footer.rights}
          </p>
          <div className="flex gap-6">
        
    
          </div>
        </div>
      </div>
    </footer>
  );
}
