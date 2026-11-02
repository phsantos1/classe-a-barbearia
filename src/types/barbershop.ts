export type ServiceCategory = 'todos' | 'cabelo' | 'barba' | 'combos' | 'outros';

export type ProfessionalType = 'equipe' | 'jeferson';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'cabelo' | 'barba' | 'combos' | 'outros';
  duration: string;
  priceEquipe: number;
  priceJeferson?: number;
  description: string;
  isPopular?: boolean;
  image?: string;
}

export interface BookingState {
  serviceId: string;
  professional: ProfessionalType;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
}
