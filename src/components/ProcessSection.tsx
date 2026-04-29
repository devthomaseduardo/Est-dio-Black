import React from "react";
import { motion } from "framer-motion";
import { CalendarMarkIcon, InkDropIcon, NeedleIcon, RazorIcon } from "./StudioIcons";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const ProcessSection = ({
  title = "Como Funciona",
  subtitle = "Direto ao ponto. Você chama, escolhe o estilo e sai com presença.",
  steps = [
    {
      icon: <NeedleIcon className="h-8 w-8 text-brand-red" />,
      title: "Briefing e desenho",
      description:
        "Você manda a ideia e o local do corpo. A gente traduz em um desenho que funciona na pele.",
    },
    {
      icon: <CalendarMarkIcon className="h-8 w-8 text-brand-red" />,
      title: "Orçamento e agenda",
      description:
        "Fechou no WhatsApp. Valor, data e tempo de sessão confirmados, sem enrolação.",
    },
    {
      icon: <RazorIcon className="h-8 w-8 text-brand-red" />,
      title: "Stencil e sessão",
      description:
        "Aplicação do stencil, ajuste fino e execução. Higiene séria e traço consistente.",
    },
    {
      icon: <InkDropIcon className="h-8 w-8 text-brand-red" />,
      title: "Cicatrização e retoque",
      description:
        "Você sai com os cuidados certos. Se precisar, a gente avalia e faz o retoque.",
    },
  ],
}: ProcessSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="font-display text-5xl md:text-6xl tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_18px_70px_-42px_rgba(0,0,0,0.9)]">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-white/10 -z-10 transform -translate-x-10">
                    <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-brand-red transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
              <p className="text-white/65">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
