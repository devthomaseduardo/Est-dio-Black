import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  photo: string;
  specialties: string[];
  experience: string;
  sampleWorks: string[];
  bio: string;
}

interface ArtistsSectionProps {
  title?: string;
  subtitle?: string;
  artists?: Artist[];
}

// Implementação atualizada do ArtistCard
const ArtistCard = ({
  name,
  photo,
  specialties,
  experience,
  sampleWorks,
  bio,
}: Omit<Artist, "id">) => {
  return (
    <div className="rounded-2xl overflow-hidden w-full sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] flex flex-col border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_24px_100px_-55px_rgba(0,0,0,0.9)]">
      {/* Imagem do artista com altura responsiva */}
      <div className="full  sm:h-80 md:h-96 overflow-hidden">
        <img 
          src={photo} 
          alt={`Artista ${name}`} 
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105" 
        />
      </div>
      <div className="p-4 sm:p-6 flex-1">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">{name}</h3>
        <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">Experiência: {experience}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.20em] text-white/70 px-3 py-2 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        <p className="text-white/65 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{bio}</p>
        <Button 
          variant="outline" 
          className="w-full"
        >
          Ver perfil
        </Button>
      </div>
    </div>
  );
};

const ArtistsSection = ({
  title = "Nossos Artistas",
  subtitle = "Estilo, técnica e assinatura. Cada traço com intenção.",
  artists = [
    {
      id: "1",
      name: "Maria Silva",
      photo:
        "/tatto/Maria Silva-artista.jpg",
      specialties: ["Realismo", "Blackwork", "Aquarela"],
      experience: "8 anos",
      sampleWorks: [
        "/gallery/gallery1.jpg",
        
        "/gallery/gallery1.jpg",
          ],
      bio: "Especialista em transformar ideias em arte única na pele. Formada pela Escola de Artes Visuais, com passagens por estúdios renomados em São Paulo e Nova York.",
    },
    {
      id: "2",
      name: "Carlos Mendes",
      photo:
        "/tatto/Carlos Mendes-artista.jpg",
      specialties: ["Old School", "Tradicional", "Geométrico"],
      experience: "12 anos",
      sampleWorks: [
        "/gallery/gallery1.jpg",
        
        "/gallery/gallery1.jpg",
        
      ],
      bio: "Mestre em estilos tradicionais e contemporâneos. Participou de convenções internacionais e possui certificações em técnicas avançadas de sombreamento.",
    },
    {
      id: "3",
      name: "Ana Oliveira",
      photo:
        "/tatto/Ana Oliveira-artista.jpg",
      specialties: ["Fine line", "Minimalista", "Pontilhismo"],
      experience: "5 anos",
      sampleWorks: [
        "/gallery/gallery1.jpg",
        
        "/gallery/gallery1.jpg",
        
      ],
      bio: "Especializada em traços finos e designs minimalistas. Formada em Artes Plásticas com foco em técnicas de ilustração contemporânea.",
    },
    {
      id: "4",
      name: "Rafael Costa",
      photo:
        "/tatto/Rafael Costa-artista.jpeg",
      specialties: ["Oriental", "Colorido", "Cover up"],
      experience: "10 anos",
      sampleWorks: [
        "/gallery/gallery1.jpg",
        
        "/gallery/gallery1.jpg",
          ],
      bio: "Especialista em arte oriental e coberturas complexas. Estudou técnicas tradicionais no Japão e trabalhou em estúdios renomados na Ásia e Europa.",
    },
  ],
}: ArtistsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isMobile, setIsMobile] = useState(true);
  
  // Ajustar número de cartões baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    // Inicializar com base no tamanho de tela atual
    handleResize();
    
    // Adicionar event listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Limpar event listener quando o componente for desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, artists.length - cardsToShow);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Calcular largura e gap com base no tamanho da tela
  const getCardWidth = () => {
    if (isMobile) return window.innerWidth - 32; // Largura total menos padding
    if (window.innerWidth < 1024) return 320;
    return 350;
  };

  const getCardGap = () => {
    if (isMobile) return 0;
    if (window.innerWidth < 1024) return 24;
    return 32;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-2 sm:-left-4 md:-left-8 transform -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-2 sm:-right-4 md:-right-8 transform -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Artists cards - adaptado para dispositivos móveis */}
          <div className="overflow-hidden">
            {isMobile ? (
              // Layout para dispositivos móveis (1 cartão por vez, centralizado)
              <div className="flex justify-center items-center">
                {artists.map((artist, index) => (
                  <div 
                    key={artist.id} 
                    className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                  >
                    <ArtistCard
                      name={artist.name}
                      photo={artist.photo}
                      specialties={artist.specialties}
                      experience={artist.experience}
                      sampleWorks={artist.sampleWorks}
                      bio={artist.bio}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex justify-start gap-6 md:gap-8"
                initial={{ x: 0 }}
                animate={{ x: `-${currentIndex * (getCardWidth() + getCardGap())}px` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {artists.map((artist) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="h-full" // Garantir que o container tenha altura completa
                  >
                    <ArtistCard
                      name={artist.name}
                      photo={artist.photo}
                      specialties={artist.specialties}
                      experience={artist.experience}
                      sampleWorks={artist.sampleWorks}
                      bio={artist.bio}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Indicadores de página (dots) */}
        <div className="flex justify-center mt-6 sm:mt-8">
          {Array.from({ length: artists.length - (isMobile ? 0 : cardsToShow - 1) }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? "bg-brand-red" : "bg-white/20"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to artist group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;