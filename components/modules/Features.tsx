"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Curadoria Exclusiva",
    description:
      "Cada imóvel em nosso portfólio passa por uma curadoria rigorosa, focada em design, localização e potencial de valorização.",
  },
  {
    number: "02",
    title: "Consultoria 360°",
    description:
      "Oferecemos suporte completo, desde a análise jurídica e financeira até o acompanhamento pós-venda personalizado.",
  },
  {
    number: "03",
    title: "Privacidade Absoluta",
    description:
      "Entendemos a necessidade de discrição. Garantimos total confidencialidade em todas as etapas da sua negociação.",
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              {/* Número Gigante (Background) */}
              <span className="absolute -top-12 -left-8 text-[180px] font-serif leading-none text-secondary/[0.03] select-none transition-colors duration-700 group-hover:text-primary/[0.08]">
                {feature.number}
              </span>

              {/* Conteúdo */}
              <div className="relative z-10 pt-12">
                {/* Linha de Detalhe */}
                <div className="w-12 h-[1px] bg-primary mb-8 transition-all duration-500 group-hover:w-24" />

                <h3 className="text-3xl font-serif text-secondary mb-6 tracking-tighter">
                  {feature.title}
                </h3>

                <p className="text-secondary/50 font-light leading-relaxed text-base max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
