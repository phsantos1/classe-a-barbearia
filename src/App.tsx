/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceItem, ProfessionalType } from './types/barbershop';
import { SERVICES_DATA, CONTACT_INFO } from './data/servicesData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);
  const [modalProfessional, setModalProfessional] = useState<ProfessionalType>('equipe');

  const handleOpenBookingModal = (serviceId?: string, professional: ProfessionalType = 'equipe') => {
    if (serviceId) {
      const found = SERVICES_DATA.find((s) => s.id === serviceId) || null;
      setModalService(found);
    } else {
      setModalService(null);
    }
    setModalProfessional(professional);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceFromCards = (service: ServiceItem, professional: ProfessionalType) => {
    setModalService(service);
    setModalProfessional(professional);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBookingModal()} />

        {/* 2. Serviços */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceFromCards} />

        {/* 3. Tradição / Sobre Nós */}
        <AboutSection />

        {/* 4. Galeria */}
        <GallerySection />

        {/* 5. Contato & Agendamento */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={modalService}
        selectedProfessional={modalProfessional}
      />

      {/* Floating Discrete WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Classe%20A.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black p-3.5 sm:p-4 rounded-full shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider pr-1">
          Agendar via WhatsApp
        </span>
      </a>
    </div>
  );
}
