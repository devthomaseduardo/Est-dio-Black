import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const GallerySection = ({
  title = "Galeria",
  subtitle = "Flash, projetos autorais e detalhes de cicatrização. Tudo em alta definição.",
  images = [
    "/editorial/dragon-tattoo-1.png",
    "/editorial/artist-work-1.png",
    "/editorial/studio-portrait-1.png",
    "/editorial/artist-work-2.png",
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg", 
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/hero/hero.jpg",
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg"
  ]
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="relative min-h-screen py-20 px-4 md:px-8 text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl tracking-tight text-white mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-3xl cursor-pointer group"
            onClick={() => openModal(index)}
          >
            {/* frame */}
            <div className="absolute inset-0 rounded-3xl border border-white/12 bg-white/5 backdrop-blur-md shadow-[0_30px_140px_-80px_rgba(0,0,0,0.95)]" />
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(520px_300px_at_20%_20%,rgba(138,3,3,0.22),transparent_60%),radial-gradient(520px_300px_at_80%_10%,rgba(255,255,255,0.10),transparent_60%)]" />

            <img 
              src={image}
              alt={`Trabalho ${index + 1}`}
              className="relative w-full h-full object-cover transition-transform duration-\\[1400ms\\] ease-out group-hover:scale-[1.08]"
            />

            {/* editorial overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 backdrop-blur-md">
                Flash
                <span className="h-1 w-1 rounded-full bg-brand-red" />
                Detalhe
              </div>
              <div className="rounded-full border border-white/12 bg-black/35 p-2 backdrop-blur-md">
                <ZoomIn className="h-5 w-5 text-white/80" />
              </div>
            </div>

            <div className="absolute left-5 right-5 bottom-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
                    Coleção
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-white/90">
                    Trabalho {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
                  Toque para ampliar
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/75 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Selected tattoo artwork"
              className="max-h-[90vh] max-w-[92vw] object-contain rounded-3xl border border-white/12 bg-white/5 shadow-[0_40px_160px_-80px_rgba(0,0,0,0.95)]"
            />

            <button
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl" />
    </section>
  );
};

export default GallerySection;