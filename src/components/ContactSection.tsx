import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, ExternalLink, CheckCircle } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '../data/servicesData';
import { ProfessionalType } from '../types/barbershop';

interface ContactSectionProps {
  initialServiceId?: string;
  initialProfessional?: ProfessionalType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId = 'cabelo',
  initialProfessional = 'equipe',
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);
  const [professional, setProfessional] = useState<ProfessionalType>(initialProfessional);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('tarde');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const currentPrice =
    professional === 'jeferson' && currentService.priceJeferson
      ? currentService.priceJeferson
      : currentService.priceEquipe;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!clientName.trim()) {
      setErrorMessage('Por favor, informe seu nome.');
      return;
    }

    const professionalLabel = professional === 'jeferson' ? 'Jeferson (Master Barber)' : 'Equipe Classe A';
    const timeLabel =
      preferredTime === 'manha'
        ? 'Manhã (09h - 12h)'
        : preferredTime === 'tarde'
        ? 'Tarde (13h - 18h)'
        : 'Noite (18h - 20h)';

    const textMessage = encodeURIComponent(
      `Olá! Meu nome é ${clientName.trim()}.\n` +
      `Gostaria de agendar um horário na Barbearia Classe A:\n\n` +
      `✂️ Serviço: ${currentService.name}\n` +
      `💈 Barbeiro: ${professionalLabel}\n` +
      `⏱️ Duração: ${currentService.duration}\n` +
      `💰 Valor estimado: R$ ${currentPrice.toFixed(2).replace('.', ',')}\n` +
      `📅 Data desejada: ${preferredDate || 'A combinar'}\n` +
      `⏰ Turno preferido: ${timeLabel}\n` +
      (clientPhone ? `📱 Contato: ${clientPhone}\n` : '') +
      `\nPodem me confirmar os horários disponíveis?`
    );

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${textMessage}`;
    setFormSubmitted(true);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#050505] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
            Agendamento & Localização
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Entrar em <span className="text-gold-gradient italic font-normal">Contato</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            Monte seu agendamento abaixo e receba atendimento imediato pelo WhatsApp ou acerte pelo sistema oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-900">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Agendamento Rápido
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Confirmação instantânea via WhatsApp oficial
                </p>
              </div>

              <a
                href={CONTACT_INFO.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1 border border-[#D4AF37]/30 px-3 py-1.5 rounded-sm transition-colors"
                title="Sistema MaApp Oficial"
              >
                <span>Usar App MaApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Select Service */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Escolha o Serviço
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-black border border-neutral-800 text-neutral-100 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  {SERVICES_DATA.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({service.duration} — a partir de R$ {service.priceEquipe},00)
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Professional */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Barbeiro de Preferência
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setProfessional('equipe')}
                    className={`cursor-pointer px-4 py-3 text-xs font-semibold rounded-sm border text-center transition-all ${
                      professional === 'equipe'
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                        : 'border-neutral-800 bg-black text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Equipe Especialista
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfessional('jeferson')}
                    className={`cursor-pointer px-4 py-3 text-xs font-semibold rounded-sm border text-center transition-all ${
                      professional === 'jeferson'
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                        : 'border-neutral-800 bg-black text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Jeferson (Master Barber)
                  </button>
                </div>
              </div>

              {/* Date & Shift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Data Desejada
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-black border border-neutral-800 text-neutral-100 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Turno Preferido
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-black border border-neutral-800 text-neutral-100 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="manha">Manhã (09h às 12h)</option>
                    <option value="tarde">Tarde (13h às 18h)</option>
                    <option value="noite">Noite (18h às 20h)</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black border border-neutral-800 text-neutral-100 px-4 py-3 rounded-sm text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Seu WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(37) 99999-9999"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-black border border-neutral-800 text-neutral-100 px-4 py-3 rounded-sm text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="bg-black border border-[#D4AF37]/25 p-4 rounded-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Resumo do Atendimento</span>
                  <span className="text-sm font-semibold text-neutral-200">
                    {currentService.name} · {currentService.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 block">Total Previsto</span>
                  <span className="text-xl font-serif font-bold text-[#D4AF37]">
                    R$ {currentPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 font-medium">
                  {errorMessage}
                </p>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar Agendamento no WhatsApp</span>
              </button>

              {formSubmitted && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 justify-center">
                  <CheckCircle className="w-4 h-4" />
                  <span>WhatsApp aberto! Caso não tenha aberto, clique no botão acima novamente.</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact Details, Map & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Card */}
            <div className="bg-[#0D0D0D] border border-neutral-900 rounded-sm p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Barbearia Classe A
              </h3>

              <div className="space-y-6 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">
                      Endereço
                    </span>
                    <p className="text-neutral-200 mt-1 leading-snug">
                      {CONTACT_INFO.address}
                    </p>
                    <a
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline mt-2 font-medium"
                    >
                      <span>Traçar rota no Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">
                      Telefone & WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-serif font-bold text-white hover:text-[#D4AF37] transition-colors block mt-1"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-neutral-400">
                      Atendimento rápido e agendamentos diretos
                    </span>
                  </div>
                </div>

                {/* Schedule Note */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">
                      Horário de Funcionamento
                    </span>
                    <p className="text-neutral-200 mt-1">
                      Atendimento com hora marcada
                    </p>
                    <span className="text-xs text-neutral-400">
                      Consulte a grade disponível no sistema ou WhatsApp
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Channel Callouts */}
            <div className="p-6 bg-black border border-[#D4AF37]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                  Link Oficial MaApp
                </span>
                <span className="text-xs text-neutral-300">
                  Acesse os horários em tempo real do sistema
                </span>
              </div>
              <a
                href={CONTACT_INFO.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-transparent hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>Abrir MaApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
