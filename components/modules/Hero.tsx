"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
      {/* Título Principal com Animação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-secondary leading-tight mb-6">
          Encontre o seu refúgio de{" "}
          <span className="text-primary italic">luxo</span> exclusivo.
        </h1>
        <p className="font-sans text-lg md:text-xl text-secondary/60 max-w-2xl mx-auto mb-12">
          Curadoria especializada de imóveis de alto padrão nas localizações
          mais privilegiadas.
        </p>
      </motion.div>

      {/* Barra de Busca Flutuante (Simulada) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-4xl bg-white shadow-2xl shadow-black/5 p-4 md:p-2 flex flex-col md:flex-row items-center gap-4 border border-accent/20"
      >
        <div className="flex-1 w-full px-4 py-3 text-left border-b md:border-b-0 md:border-r border-accent/30">
          <span className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-1">
            Localização
          </span>
          <input
            type="text"
            placeholder="Onde você quer morar?"
            className="w-full bg-transparent outline-none text-secondary placeholder:text-secondary/30"
          />
        </div>

        <div className="flex-1 w-full px-4 py-3 text-left border-b md:border-b-0 md:border-r border-accent/30">
          <span className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-1">
            Tipo de Imóvel
          </span>
          <select className="w-full bg-transparent outline-none text-secondary appearance-none cursor-pointer">
            <option>Apartamento</option>
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
