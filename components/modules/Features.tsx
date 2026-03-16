"use client";

import { motion, Variants } from "framer-motion";

const features = [
  {
    title: "Curadoria Exclusiva",
    description:
      "Cada imóvel em nosso portfólio passa por uma curadoria rigorosa, focada em design, localização e potencial de valorização.",
    icon: "01",
  },
  {
    title: "Consultoria 360°",
    description:
      "Oferecemos suporte completo, desde a análise jurídica e financeira até o acompanhamento pós-venda personalizado.",
    icon: "02",
  },
  {
    title: "Privacidade Absoluta",
    description:
      "Entendemos a necessidade de discrição. Garantimos total confidencialidade em todas as etapas da sua negociação.",
    icon: "03",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  return (
    <section className="py-40 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Número Gigante de Fundo */}
              <span className="absolute -top-16 -left-8 font-serif text-[12rem] leading-none text-primary/5 select-none group-hover:text-primary/10 transition-colors duration-700">
                {feature.icon}
              </span>

              {/* Conteúdo */}
              <div className="relative z-10 pt-8">
                <h3 className="font-serif text-3xl text-secondary mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h3>
                <div className="w-12 h-[1px] bg-primary mb-6 group-hover:w-20 transition-all duration-700" />
                <p className="text-secondary/60 text-base leading-relaxed font-sans max-w-xs">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
