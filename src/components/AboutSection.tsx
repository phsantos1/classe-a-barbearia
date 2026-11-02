import React from 'react';
import { motion } from 'motion/react';
import { BARBERSHOP_STATS } from '../data/servicesData';
import { Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tradicao" className="py-24 sm:py-32 bg-[#050505] border-y border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition with Luxury Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div className="relative">
              {/* Gold Accent Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-sm blur-lg" />
              
              <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-black">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80"
                  alt="Instrumentos clássicos de barbearia profissional com navalha, pincel e navalhete"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Subtle Overlaid Citation */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/95 backdrop-blur-md border-l-2 border-[#D4AF37]">
                  <p className="font-serif italic text-sm text-neutral-200">
                    "Cada cliente que senta em nossa cadeira não busca apenas um corte, mas a sua melhor versão."
                  </p>
                  <p className="text-[11px] text-[#D4AF37] uppercase tracking-widest mt-2 font-medium">
                    Jeferson · Master Barber
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & 4 Clean Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sobre Nós · Tradição & Excelência</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              A maestria da navalha no{' '}
              <span className="text-gold-gradient italic font-normal">
                coração de Formiga
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
              A Barbearia Classe A nasceu para resgatar a elegância do atendimento cavalheiro. Aliamos técnicas clássicas de barbearia internacional a um ambiente acolhedor, onde café de qualidade, cerveja gelada e precisão milimétrica fazem parte da sua rotina.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-12">
              Seja para um alinhamento rápido no dia a dia ou o relaxamento completo da nossa barboterapia com toalha quente, aqui o seu tempo é respeitado e seu estilo elevado.
            </p>

            {/* 4 Clean Stats Grid (Required Numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-900">
              {BARBERSHOP_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#D4AF37] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-neutral-200 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-light mt-0.5">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
