import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Tradição', href: '#tradicao' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 shadow-2xl shadow-black'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo with Official Uploaded Image */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="bg-[#E7E7E7] px-3 sm:px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]">
            <img
              src="/assets/aistudio/image_2b4e8259.png"
              alt="Logo Barbearia Classe A"
              className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-semibold">
            Barbearia
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider text-neutral-300 hover:text-[#D4AF37] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Direct WhatsApp & Agendamento */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20hor%C3%A1rios%20na%20Barbearia%20Classe%20A.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-300 hover:text-[#D4AF37] px-3 py-2 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>(37) 99872-1528</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="cursor-pointer bg-[#D4AF37] hover:bg-[#F3E5AB] text-black px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Horário</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="cursor-pointer bg-[#D4AF37] text-black px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider"
          >
            Agendar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-300 hover:text-[#D4AF37] p-2 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 border-b border-[#D4AF37]/25 px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-neutral-200 hover:text-[#D4AF37] tracking-wider py-1 border-b border-neutral-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#D4AF37] py-2"
              >
                <Phone className="w-4 h-4" />
                <span>(37) 99872-1528</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="cursor-pointer w-full text-center bg-[#D4AF37] text-black py-3 rounded-sm text-xs font-bold uppercase tracking-widest"
              >
                Agendar Horário
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
