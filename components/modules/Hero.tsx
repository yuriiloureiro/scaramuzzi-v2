"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  // Lógica de Parallax: Conforme o usuário scrolla, a imagem e o texto se movem em velocidades diferentes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] flex flex-col items-center justify-center text-center overflow-hidden bg-secondary"
    >
      {/* Background com Parallax e Zoom Inicial */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
          src="/images/hero/background-hero.webp"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        {/* Overlay Cinematográfico: Gradiente que dá profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary" />
      </motion.div>

      {/* Conteúdo Principal com Parallax de Texto */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-primary mb-8 block"
        >
          Estilo de vida exclusivo no Rio de Janeiro
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-12"
        >
          Encontre o seu <br />
          <span className="italic text-primary">refúgio</span> de luxo.
        </motion.h1>
      </motion.div>

      {/* Barra de Busca Flutuante (Fixa no final da Hero) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-20 left-0 w-full z-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-3xl p-2 md:p-3 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-white/10">
            {/* Localização */}
            <div className="flex-1 w-full px-8 py-4 text-left group flex items-center gap-4">
              <div className="text-primary">
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
                <span className="block text-[9px] uppercase tracking-[0.2em] font-black text-primary/80 mb-1">
                  Localização
                </span>
                <input
                  type="text"
                  placeholder="Onde você quer morar?"
                  className="w-full bg-transparent outline-none text-white font-semibold placeholder:text-white/30 text-sm"
                />
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-white/10" />

            {/* Tipo */}
            <div className="flex-1 w-full px-8 py-4 text-left group flex items-center gap-4">
              <div className="text-primary">
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
                <span className="block text-[9px] uppercase tracking-[0.2em] font-black text-primary/80 mb-1">
                  Tipo
                </span>
                <select className="w-full bg-transparent outline-none text-white font-semibold appearance-none cursor-pointer text-sm">
                  <option className="bg-secondary">Casa Triplex</option>
                  <option className="bg-secondary">Cobertura</option>
                </select>
              </div>
            </div>

            <button className="w-full md:w-auto px-12 py-5 bg-primary text-secondary font-bold uppercase tracking-[0.2em] text-[11px] rounded-2xl md:rounded-full hover:bg-white transition-all duration-500 shadow-xl shadow-primary/20">
              Buscar Agora
            </button>
          </div>
        </div>
      </motion.div>

      {/* Indicador de Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
