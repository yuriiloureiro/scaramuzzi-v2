"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-28 md:pt-0">
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

      {/* Barra de Busca Premium */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl mt-12 px-4"
      >
        <div className="bg-white/90 backdrop-blur-2xl p-2 md:p-3 rounded-3xl md:rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex flex-col md:flex-row items-center gap-2 border border-white">
          {/* Localização */}
          <div className="flex-1 w-full px-8 py-4 text-left group flex items-center gap-4">
            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-primary/80 mb-1">
                Localização
              </span>
              <input
                type="text"
                placeholder="Onde você quer morar?"
                className="w-full bg-transparent outline-none text-secondary font-semibold placeholder:text-secondary/30 text-sm"
              />
            </div>
          </div>

          {/* Divisor Vertical */}
          <div className="hidden md:block w-[1px] h-12 bg-secondary/5" />

          {/* Tipo de Imóvel */}
          <div className="flex-1 w-full px-8 py-4 text-left group flex items-center gap-4">
            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-primary/80 mb-1">
                Tipo de Imóvel
              </span>
              <select className="w-full bg-transparent outline-none text-secondary font-semibold appearance-none cursor-pointer text-sm">
                <option>Casa Triplex</option>
                <option>Casa de Condomínio</option>
                <option>Cobertura</option>
              </select>
            </div>
          </div>

          {/* Botão de Busca */}
          <button className="w-full md:w-auto px-12 py-5 bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-2xl md:rounded-full hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 active:scale-95">
            Buscar Agora
          </button>
        </div>
      </motion.div>
    </section>
  );
}
