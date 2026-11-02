import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-black"
    >
      {/* Background Subtle Ambience & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neutral-900/50 blur-[120px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Official Brand Logo Plaque */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E7E7E7] px-4 py-1.5 sm:py-2 rounded-sm border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(212,175,55,0.25)] flex items-center justify-center">
                <img
                  src="/assets/aistudio/image_2b4e8259.png"
                  alt="Barbearia Classe A"
                  className="h-7 sm:h-9 w-auto object-contain"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold hidden sm:inline-block">
                Formiga · MG
              </span>
            </div>

            {/* Massive confident headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.02] font-black text-white tracking-tight mb-6">
              Estilo &{' '}
              <span className="text-gold-gradient italic font-normal">
                Tradição
              </span>
            </h1>

            {/* Single punchy supporting sentence */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl mb-9">
              O corte de precisão e a barboterapia que transformam sua presença diária.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer bg-[#D4AF37] hover:bg-[#F3E5AB] text-black px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span>Agende seu Horário</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#servicos"
                className="cursor-pointer border border-[#D4AF37]/40 hover:border-[#D4AF37] text-neutral-200 hover:text-[#D4AF37] px-7 py-4 rounded-sm text-sm font-semibold tracking-wider transition-colors duration-200 text-center flex items-center justify-center"
              >
                Explorar Serviços
              </a>
            </div>

            {/* Quick Micro Proof Bar */}
            <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-neutral-400">
              <div>
                <span className="text-[#D4AF37] font-bold text-sm block">15+ Anos</span>
                <span className="text-neutral-400 tracking-wider">Tradição em Formiga</span>
              </div>
              <div className="w-[1px] h-6 bg-neutral-800" />
              <div>
                <span className="text-[#D4AF37] font-bold text-sm block">Nota 4.9 ★</span>
                <span className="text-neutral-400 tracking-wider">Avaliação máxima</span>
              </div>
              <div className="w-[1px] h-6 bg-neutral-800" />
              <div>
                <span className="text-neutral-200 font-semibold text-sm block">Centro</span>
                <span className="text-neutral-400 tracking-wider">Av. Paulo de Brito, 12A</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 border border-[#D4AF37]/30 rounded-sm pointer-events-none -rotate-1 hidden sm:block" />
              
              {/* Image Container with Luxury Vignette */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-black border border-[#D4AF37]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
                  alt="Interior vintage luxuoso da Barbearia Classe A com poltronas clássicas e iluminação refinada"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[530px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                {/* Subtle in-image floating badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                    Atendimento de Alto Padrão
                  </p>
                  <p className="text-xs text-neutral-300">
                    Cerveja gelada, café especial e atendimento com hora marcada.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle indicator inviting to scroll & revealing next section */}
      <div className="relative z-10 flex justify-center pt-8">
        <a
          href="#servicos"
          className="flex flex-col items-center gap-1 text-neutral-400 hover:text-[#D4AF37] transition-colors text-xs tracking-widest uppercase group"
          aria-label="Rolar para serviços"
        >
          <span className="text-[11px] font-medium">Ver Menu</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
};
