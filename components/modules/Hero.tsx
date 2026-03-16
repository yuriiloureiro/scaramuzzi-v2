"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/background-hero.webp"
          alt="Imóvel de Luxo"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-secondary/60 backdrop-brightness-75" />
      </div>

      {/* Conteúdo (Z-index alto para ficar acima da imagem) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
          Encontre o seu refúgio de{" "}
          <span className="text-primary italic">luxo</span> exclusivo.
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Curadoria especializada de imóveis de alto padrão nas localizações
          mais privilegiadas do Rio de Janeiro.
        </p>
      </motion.div>

      {/* Barra de Busca */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-4xl bg-white p-4 md:p-2 flex flex-col md:flex-row items-center gap-4 shadow-2xl"
      >
        <div className="flex-1 w-full px-4 py-3 text-left border-b md:border-b-0 md:border-r border-accent/30">
          <span className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-1">
            Localização
          </span>
          <input
            type="text"
            placeholder="Onde você quer morar?"
            className="w-full bg-transparent outline-none text-secondary"
          />
        </div>

        <div className="flex-1 w-full px-4 py-3 text-left border-b md:border-b-0 md:border-r border-accent/30">
          <span className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-1">
            Tipo
          </span>
          <select className="w-full bg-transparent outline-none text-secondary appearance-none cursor-pointer">
            <option>Casa Triplex</option>
            <option>Casa de Condomínio</option>
            <option>Cobertura</option>
          </select>
        </div>

        <button className="w-full md:w-auto px-12 py-4 bg-secondary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all duration-500">
          Buscar
        </button>
      </motion.div>
    </section>
  );
}
