import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}

const PricingSection = ({
  title = "Sessões e Valores",
  subtitle = "Orçamento varia por tamanho, complexidade e estilo. Chamando no WhatsApp, a gente fecha na hora.",
  plans = [
    {
      id: "basic",
      name: "Flash",
      price: "A partir de R$180",
      description: "Artes prontas do estúdio. Direto, rápido e com acabamento limpo.",
      features: [
        "Escolha do catálogo",
        "Aplicação no mesmo dia (quando disponível)",
        "Higiene e esterilização",
        "Orientação de cuidados",
        "Retoque conforme avaliação",
      ],
    },
    {
      id: "standard",
      name: "Sessão",
      price: "A partir de R$350",
      description: "Sessão para projetos médios. Ideal para realismo, blackwork e fine line.",
      features: [
        "Briefing e alinhamento",
        "Arte adaptada ao corpo",
        "Higiene e esterilização",
        "Orientação de cuidados",
        "Retoque conforme avaliação",
        "Prioridade de agenda",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Projeto autoral",
      price: "Sob consulta",
      description: "Criação exclusiva. Peças grandes, composições e múltiplas sessões.",
      features: [
        "Design exclusivo",
        "Planejamento por sessões",
        "Acompanhamento do projeto",
        "Higiene e esterilização",
        "Orientação de cuidados",
        "Agenda dedicada",
      ],
    },
  ],
}: PricingSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col relative ${plan.popular ? "ring-1 ring-brand-red/60" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] shadow-[0_16px_60px_-20px_rgba(138,3,3,0.9)]">
                    Mais pedido
                  </div>
                )}
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-bold tracking-tight text-white">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl text-white font-bold tracking-tight">{plan.price}</span>
                  </div>
                  <p className="text-white/70 mt-3">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 mt-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-white/80 mr-2 shrink-0" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Agendar
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
