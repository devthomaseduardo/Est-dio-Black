import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const FAQSection = ({
  title = "Perguntas Frequentes",
  subtitle = "Tudo o que você precisa saber antes da sua sessão.",
  faqs = [
    {
      question: "Preciso agendar com antecedência?",
      answer:
        "Recomendamos. O estúdio trabalha com agenda. Para encaixe, chame no WhatsApp e a gente te diz o melhor horário disponível.",
    },
    {
      question: "Vocês fazem tatuagem colorida e preta e cinza?",
      answer:
        "Sim. Trabalhamos com estilos diferentes. O ideal é você mandar referências para a gente alinhar o que combina com sua pele e com o estilo da arte.",
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer:
        "Depende do tamanho e da complexidade. Flash costuma ser mais rápido. Projetos autorais podem exigir mais de uma sessão.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos dinheiro, PIX, cartão de crédito e débito. Para projetos maiores, combinamos sinal e datas das sessões.",
    },
    {
      question: "E se eu me atrasar ou precisar remarcar?",
      answer:
        "Avise assim que souber. Dependendo do atraso, pode reduzir o tempo da sessão ou exigir remarcação para manter a qualidade do trabalho.",
    },
    {
      question: "Vocês fazem retoque?",
      answer:
        "Sim. Quando necessário, avaliamos caso a caso. O objetivo é manter o trabalho firme e bem cicatrizado.",
    },
    {
      question: "Como escolher o estilo ideal?",
      answer:
        "Mande referências e diga o local do corpo. A gente orienta pelo tamanho, anatomia e estilo do seu projeto.",
    },
    {
      question: "Posso levar referência em foto?",
      answer:
        "Sim. Referências ajudam muito. A gente adapta para o seu corpo e cria uma versão que funcione como tatuagem.",
    },
  ],
}: FAQSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-4xl mx-auto">
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

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-white hover:text-white/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
