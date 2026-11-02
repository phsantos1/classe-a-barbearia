import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand with Official Uploaded Logo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#E7E7E7] px-4 py-2 rounded-sm border border-[#D4AF37]/40 flex items-center justify-center shadow-lg shadow-black">
              <img
                src="/assets/aistudio/image_2b4e8259.png"
                alt="Logo Barbearia Classe A"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-semibold block">
                Barbearia Tradicional & Moderna
              </span>
              <span className="text-xs text-neutral-400">
                Formiga · Minas Gerais
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wider font-medium text-neutral-300">
            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
            <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Serviços</a>
            <a href="#tradicao" className="hover:text-[#D4AF37] transition-colors">Tradição</a>
            <a href="#galeria" className="hover:text-[#D4AF37] transition-colors">Galeria</a>
            <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
            <a
              href={CONTACT_INFO.maappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline flex items-center gap-1"
            >
              <span>MaApp Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Details & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Barbearia Classe A. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right text-neutral-400">
            Av. Paulo de Brito, 12A · Centro, Formiga - MG
          </p>
        </div>
      </div>
    </footer>
  );
};
