import { useNavigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  scrollToForm?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  scrollToForm = false,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200';

  const variants = {
    primary:
      'bg-accent-red hover:bg-accent-red-hover text-white hover:shadow-lg hover:shadow-accent-red/20',
    secondary:
      'bg-cyber-card hover:bg-cyber-darker text-text-primary border border-border hover:border-white/30',
    outline:
      'border border-white/30 text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-[19px]',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      e.preventDefault();

      if (scrollToForm && href === '/kontakt') {
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
      } else {
        navigate(href);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }
    }
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
