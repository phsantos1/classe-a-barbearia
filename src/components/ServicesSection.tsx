import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ExternalLink, Calendar, UserCheck } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '../data/servicesData';
import { ServiceCategory, ProfessionalType, ServiceItem } from '../types/barbershop';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem, professional: ProfessionalType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('todos');
  const [selectedProfessional, setSelectedProfessional] = useState<ProfessionalType>('equipe');

  // Filter services by category
  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'todos') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'cabelo', label: 'Cabelo' },
    { id: 'barba', label: 'Barba & Rituais' },
    { id: 'combos', label: 'Combos VIP' },
  ];

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-900/80 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header: Minimalist and punchy */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
            Menu Oficial · Barbearia Classe A
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Serviços & <span className="text-gold-gradient italic font-normal">Valores</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            Transparência e excelência em cada detalhe. Escolha seu profissional e agende com facilidade.
          </p>
        </div>

        {/* Top Featured 3 Signature Services Pillars (Required Highlight) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: Corte Masculino */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#0D0D0D] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-sm overflow-hidden p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80"
                  alt="Corte masculino de precisão com tesoura e pente na Barbearia Classe A"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold px-3 py-1">
                  Popular
                </div>
              </div>

              <div className="text-xs text-neutral-400 mb-2 flex items-center gap-2">
                <span>30 minutos</span>
                <span aria-hidden="true">·</span>
                <span>Finalização completa</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Corte Masculino
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                Degradê alinhado, tesoura ou máquina. Lavagem especial com massagem capilar e produtos de alta fixação.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">A partir de</span>
                <span className="text-2xl font-serif font-bold text-[#D4AF37]">
                  R$ 50,00
                </span>
              </div>
              <button
                onClick={() => {
                  const s = SERVICES_DATA.find((x) => x.id === 'cabelo')!;
                  onSelectServiceForBooking(s, selectedProfessional);
                }}
                className="cursor-pointer bg-[#D4AF37] hover:bg-[#F3E5AB] text-black px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Agendar
              </button>
            </div>
          </motion.div>

          {/* Card 2: Barba & Barboterapia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#0D0D0D] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-sm overflow-hidden p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
                  alt="Ritual de barboterapia com toalha quente e lâmina afiada"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold px-3 py-1">
                  Assinatura
                </div>
              </div>

              <div className="text-xs text-neutral-400 mb-2 flex items-center gap-2">
                <span>30 minutos</span>
                <span aria-hidden="true">·</span>
                <span>Toalha Quente</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Barba & Barboterapia
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                Alinhamento milimétrico com navalhete, toalha aromatizada, esfoliação facial e hidratação profunda.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">A partir de</span>
                <span className="text-2xl font-serif font-bold text-[#D4AF37]">
                  R$ 50,00
                </span>
              </div>
              <button
                onClick={() => {
                  const s = SERVICES_DATA.find((x) => x.id === 'barboterapia')!;
                  onSelectServiceForBooking(s, selectedProfessional);
                }}
                className="cursor-pointer bg-[#D4AF37] hover:bg-[#F3E5AB] text-black px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Agendar
              </button>
            </div>
          </motion.div>

          {/* Card 3: Combo Completo VIP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#0D0D0D] border-2 border-[#D4AF37] rounded-sm overflow-hidden p-6 transition-all duration-300 shadow-[0_10px_35px_rgba(212,175,55,0.25)] flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517832606589-7629c339590a?auto=format&fit=crop&w=800&q=80"
                  alt="Experiência completa de corte, barba e tratamento capilar na Barbearia Classe A"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-black uppercase tracking-wider px-3 py-1">
                  VIP Classe A
                </div>
              </div>

              <div className="text-xs text-[#D4AF37] mb-2 flex items-center gap-2 font-semibold">
                <span>1 hora</span>
                <span aria-hidden="true">·</span>
                <span>Cabelo + Barba + Sobrancelha</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Combo Completo VIP
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                A experiência definitiva. Transformação total do visual com corte, barboterapia relaxante e alinhamento do olhar.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">A partir de</span>
                <span className="text-2xl font-serif font-bold text-[#D4AF37]">
                  R$ 120,00
                </span>
              </div>
              <button
                onClick={() => {
                  const s = SERVICES_DATA.find((x) => x.id === 'combo-completo')!;
                  onSelectServiceForBooking(s, selectedProfessional);
                }}
                className="cursor-pointer bg-[#D4AF37] hover:bg-[#F3E5AB] text-black px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Agendar
              </button>
            </div>
          </motion.div>

        </div>

        {/* Interactive Master Control: Professional Switcher & Category Filters */}
        <div className="bg-[#0A0A0A] border border-neutral-900 rounded-sm p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-900">
            
            {/* Professional Picker */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                Selecione o Barbeiro:
              </span>
              
              <div className="flex items-center gap-2 p-1 bg-black border border-neutral-800 rounded-sm">
                <button
                  onClick={() => setSelectedProfessional('equipe')}
                  className={`cursor-pointer px-4 py-2 text-xs font-semibold tracking-wider rounded-sm transition-all duration-200 ${
                    selectedProfessional === 'equipe'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Equipe Especialista
                </button>
                <button
                  onClick={() => setSelectedProfessional('jeferson')}
                  className={`cursor-pointer px-4 py-2 text-xs font-semibold tracking-wider rounded-sm transition-all duration-200 ${
                    selectedProfessional === 'jeferson'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Jeferson (Master Barber)
                </button>
              </div>
            </div>

            {/* Quick External Links */}
            <div className="flex items-center gap-4">
              <a
                href={CONTACT_INFO.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1.5 transition-colors tracking-wide underline underline-offset-4"
              >
                <span>Acessar sistema MaApp oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            <span className="text-xs text-neutral-400 uppercase tracking-wider mr-2 hidden sm:inline">
              Filtrar:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ServiceCategory)}
                className={`cursor-pointer text-xs font-medium px-4 py-2 rounded-sm border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                    : 'border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200 bg-black/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Table / Grid with Micro-Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const currentPrice =
                selectedProfessional === 'jeferson' && service.priceJeferson
                  ? service.priceJeferson
                  : service.priceEquipe;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0A0A0A] hover:bg-[#121212] border border-neutral-900 hover:border-[#D4AF37]/50 rounded-sm p-5 transition-all duration-300 flex items-center justify-between gap-4 group"
                >
                  <div className="flex-1 pr-2">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {service.name}
                      </h4>
                      {selectedProfessional === 'jeferson' && (
                        <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold border border-[#D4AF37]/30 px-1.5 py-0.5 rounded-sm">
                          com Jeferson
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-300 line-clamp-1 mb-2 font-light">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{service.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{service.category}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-lg sm:text-xl font-serif font-bold text-[#D4AF37]">
                      R$ {currentPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <button
                      onClick={() => onSelectServiceForBooking(service, selectedProfessional)}
                      className="cursor-pointer bg-black hover:bg-[#D4AF37] text-neutral-200 hover:text-black border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Booking Assurance */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Prefere reservar no horário que quiser pelo WhatsApp?{' '}
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Classe%20A.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline font-semibold"
            >
              Clique aqui para falar diretamente com o atendente
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
};
