import React from "react";
import { Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  name: string;
  photo: string;
  rating: number;
  text: string;
  tattooType: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Carlos Oliveira",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Minha experiência no Estúdio Black foi incrível. A artista entendeu exatamente o que eu queria e o resultado ficou muito acima do esperado. Ambiente limpo e seguro.",
      tattooType: "Realismo",
    },
    {
      name: "Ana Souza",
      photo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&auto=format&fit=crop",
      rating: 4.5,
      text: "Fiz minha primeira tatuagem aqui e não poderia ter escolhido lugar melhor. Profissionais atenciosos que me deixaram super à vontade durante todo o processo.",
      tattooType: "Aquarela",
    },
    {
      name: "Pedro Santos",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Já fiz tatuagens em outros lugares, mas o Estúdio Black é o mais profissional. Higiene impecável e traço firme.",
      tattooType: "Blackwork",
    },
    {
      name: "Juliana Costa",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      rating: 4.5,
      text: "Ambiente super acolhedor e profissionais talentosos. Minha tatuagem ficou exatamente como eu imaginava. Recomendo demais!",
      tattooType: "Minimalista",
    },
  ],
  title = "O que os clientes dizem",
  subtitle = "Experiências reais de quem confiou sua pele à nossa arte.",
}) => {
  // Function to render stars based on rating
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="fill-yellow-400 text-yellow-400 w-5 h-5"
        />,
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="fill-yellow-400 text-yellow-400 w-5 h-5"
        />,
      );
    }

    return stars;
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-4">{title}</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-lg">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center">
                          {renderRating(testimonial.rating)}
                          <span className="ml-2 text-sm text-white/70">
                            {testimonial.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/75 mb-4 leading-relaxed">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-2 px-3 py-2 text-white/80 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.22em]">
                        Estilo
                        <span className="h-1 w-1 rounded-full bg-brand-red" />
                        {testimonial.tattooType}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
