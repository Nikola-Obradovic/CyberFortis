import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';

const navLinks = [
  { name: 'Početna', path: '/' },
  { name: 'Usluge', path: '/usluge' },
  { name: 'O nama', path: '/o-nama' },
  { name: 'Karijere', path: '/karijere' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const ticking = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking.current = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/kontakt') {
      const form = document.getElementById('contact-form');
      form?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/kontakt');
      setTimeout(() => {
        const form = document.getElementById('contact-form');
        form?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-cyber-darker/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex-shrink-0">
            <img src={logo} alt="CyberFortis" width={120} height={48} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-text-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/kontakt"
              onClick={handleCtaClick}
              className="bg-accent-red hover:bg-accent-red-hover text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent-red/20"
            >
              NIS2 procjena
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    </header>

    {/* Mobile Menu - Full Screen Overlay (outside header) */}
    <div
      className={`md:hidden fixed top-20 left-0 right-0 bottom-0 z-40 bg-[#0b0e13] flex flex-col items-center justify-center pt-8 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}
    >
      <nav className={`flex flex-col items-center space-y-6 transition-all duration-300 ease-out ${
        isMobileMenuOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-4 opacity-0'
      }`}>
        {navLinks.map((link, index) => (
          <a
            key={link.path}
            href={link.path}
            onClick={(e) => {
              handleNavClick(e, link.path);
              setIsMobileMenuOpen(false);
            }}
            className={`text-2xl font-medium transition-all duration-200 hover:text-white ${
              location.pathname === link.path
                ? 'text-white'
                : 'text-text-muted'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="/kontakt"
          onClick={(e) => {
            handleCtaClick(e);
            setIsMobileMenuOpen(false);
          }}
          className="mt-4 bg-accent-red hover:bg-accent-red-hover text-white px-8 py-4 rounded-lg text-xl font-medium transition-all duration-200"
          style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms' }}
        >
          NIS2 procjena
        </a>
      </nav>
    </div>
    </>
  );
}
