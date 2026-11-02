import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '../data/servicesData';
import { ServiceItem, ProfessionalType } from '../types/barbershop';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
  selectedProfessional?: ProfessionalType;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  selectedProfessional = 'equipe',
}) => {
  const [serviceId, setServiceId] = useState<string>(
    selectedService?.id || SERVICES_DATA[0].id
  );
  const [professional, setProfessional] = useState<ProfessionalType>(selectedProfessional);
  const [clientName, setClientName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredShift, setPreferredShift] = useState('tarde');

  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedProfessional) {
      setProfessional(selectedProfessional);
    }
  }, [selectedProfessional]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const currentPrice =
    professional === 'jeferson' && currentService.priceJeferson
      ? currentService.priceJeferson
      : currentService.priceEquipe;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const profText = professional === 'jeferson' ? 'Jeferson (Master Barber)' : 'Equipe Classe A';
    const shiftText =
      preferredShift === 'manha'
        ? 'Manhã (09h - 12h)'
        : preferredShift === 'tarde'
        ? 'Tarde (13h - 18h)'
        : 'Noite (18h - 20h)';

    const msg = encodeURIComponent(
      `Olá! Meu nome é ${clientName || 'Cliente'}.\n` +
      `Gostaria de agendar na Barbearia Classe A:\n\n` +
      `✂️ Serviço: ${currentService.name}\n` +
      `💈 Barbeiro: ${profText}\n` +
      `⏱️ Duração: ${currentService.duration}\n` +
      `💰 Valor: R$ ${currentPrice.toFixed(2).replace('.', ',')}\n` +
      `📅 Data: ${preferredDate || 'Hoje/Próximo disponível'}\n` +
      `⏰ Turno: ${shiftText}\n\n` +
      `Podem confirmar a disponibilidade?`
    );

    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#0D0D0D] border border-[#D4AF37]/40 rounded-sm p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                Reserva Imediata
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Agende seu Horário
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-sm hover:bg-neutral-800 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleConfirm} className="space-y-4">
            {/* Service selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Serviço
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full bg-black border border-neutral-800 text-neutral-100 px-3.5 py-2.5 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.duration}) — R$ {s.priceEquipe},00
                  </option>
                ))}
              </select>
            </div>

            {/* Professional toggle */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Barbeiro
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setProfessional('equipe')}
                  className={`cursor-pointer px-3 py-2 text-xs font-semibold rounded-sm border transition-all ${
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
                  className={`cursor-pointer px-3 py-2 text-xs font-semibold rounded-sm border transition-all ${
                    professional === 'jeferson'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                      : 'border-neutral-800 bg-black text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Jeferson (Master)
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Seu Nome
              </label>
              <input
                type="text"
                required
                placeholder="Como prefere ser chamado"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-black border border-neutral-800 text-neutral-100 px-3.5 py-2.5 rounded-sm text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Date & Shift */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Data
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-black border border-neutral-800 text-neutral-100 px-3 py-2 rounded-sm text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Turno
                </label>
                <select
                  value={preferredShift}
                  onChange={(e) => setPreferredShift(e.target.value)}
                  className="w-full bg-black border border-neutral-800 text-neutral-100 px-3 py-2 rounded-sm text-xs focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </div>
            </div>

            {/* Price Preview */}
            <div className="bg-black border border-neutral-900 p-3 rounded-sm flex items-center justify-between mt-2">
              <span className="text-xs text-neutral-400">Total Previsto:</span>
              <span className="text-lg font-serif font-bold text-[#D4AF37]">
                R$ {currentPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar no WhatsApp</span>
              </button>

              <a
                href={CONTACT_INFO.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs text-neutral-400 hover:text-[#D4AF37] py-2 transition-colors"
              >
                Ou abrir página direta do MaApp →
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
