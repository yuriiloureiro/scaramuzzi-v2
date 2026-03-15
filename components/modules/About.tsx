"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Imagem com moldura elegante */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
              alt="Escritório Scaramuzzi"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Detalhe decorativo dourado */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10" />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">
            Nossa História
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary leading-tight mb-8">
            Excelência em curadoria de{" "}
            <span className="italic text-primary">estilo de vida</span>.
          </h2>
          <p className="text-secondary/70 leading-relaxed mb-6">
            A Scaramuzzi Imóveis nasceu da paixão por conectar pessoas a espaços
            que transcendem o morar. Especializados no mercado de alto padrão,
            nossa missão é oferecer uma consultoria exclusiva e personalizada.
          </p>
          <p className="text-secondary/70 leading-relaxed mb-10">
            Cada imóvel em nosso portfólio passa por uma rigorosa análise de
            qualidade, design e localização, garantindo que seu próximo
            investimento seja também o seu próximo refúgio.
          </p>
          <button className="px-10 py-4 bg-secondary text-white text-xs uppercase tracking-widest font-bold hover:bg-primary transition-all duration-500">
            Conheça nossa equipe
          </button>
        </motion.div>
      </div>
    </section>
  );
}
