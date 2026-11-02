import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=85',
      title: 'Ambiente & Ritual',
      subtitle: 'Conforto autêntico e atendimento dedicado',
      span: 'md:col-span-8 md:row-span-2 h-[450px] md:h-[540px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
      title: 'Precisão Milimétrica',
      subtitle: 'Degradê impecável e linhas limpas',
      span: 'md:col-span-4 h-[255px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
      title: 'O Clássico & O Moderno',
      subtitle: 'Poltronas de couro e navalhas selecionadas',
      span: 'md:col-span-4 h-[255px]',
    },
  ];

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>O Espaço · Barbearia Classe A</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Galeria de <span className="text-gold-gradient italic font-normal">Experiências</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 font-light max-w-md leading-relaxed">
            Um ambiente pensado para o homem contemporâneo que valoriza o próprio tempo e estilo.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-sm overflow-hidden group cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 ${item.span}`}
              onClick={() => setActiveImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light">
                    {item.subtitle}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-sm bg-black/80 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-6 flex items-center justify-center cursor-pointer"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-neutral-300 hover:text-[#D4AF37] p-2"
              aria-label="Fechar visualização"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage}
              alt="Visualização ampliada do espaço Barbearia Classe A"
              className="max-w-5xl max-h-[85vh] object-contain rounded-sm border border-[#D4AF37]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
