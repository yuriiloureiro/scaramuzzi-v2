"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [type, setType] = useState("todos");

  const handleSearch = () => {
    const section = document.getElementById("imoveis-destaque");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      const event = new CustomEvent("hero-search", { detail: { type } });
      window.dispatchEvent(event);
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] md:h-[110vh] flex flex-col items-center justify-center text-center overflow-hidden bg-secondary px-4"
    >
      {/* Background */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
          src="/images/hero/background-hero.webp"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary" />
      </motion.div>

      {/* Conteúdo Principal */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl w-full flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[9px] md:text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 md:mb-8 block"
        >
          Estilo de vida exclusivo no Rio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-4xl md:text-8xl text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-16"
        >
          Encontre o seu <br />
          <span className="italic text-primary">refúgio</span> de luxo.
        </motion.h1>

        {/* Barra de Busca Integrada ao Fluxo (Não absoluta no mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full max-w-md md:max-w-5xl z-[100]"
        >
          <div className="bg-white/10 backdrop-blur-3xl p-3 md:p-3 rounded-[2rem] md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-1 border border-white/10">
            {/* Localização */}
            <div className="w-full md:flex-1 px-5 md:px-8 py-3 md:py-4 text-left flex items-center gap-3 border-b md:border-b-0 md:border-r border-white/5">
              <div className="text-primary shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="block text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black text-primary/80">
                  Localização
                </span>
                <input
                  type="text"
                  placeholder="Onde quer morar?"
                  className="w-full bg-transparent outline-none text-white font-medium placeholder:text-white/20 text-xs md:text-sm"
                />
              </div>
            </div>

            {/* Tipo */}
            <div className="w-full md:flex-1 px-5 md:px-8 py-3 md:py-4 text-left flex items-center gap-3">
              <div className="text-primary shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="block text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black text-primary/80">
                  Tipo
                </span>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-transparent outline-none text-white font-medium appearance-none cursor-pointer text-xs md:text-sm"
                >
                  <option value="todos" className="bg-secondary">
                    Todos os tipos
                  </option>
                  <option value="Casa Triplex" className="bg-secondary">
                    Casa Triplex
                  </option>
                  <option value="Casa de Condomínio" className="bg-secondary">
                    Casa de Condomínio
                  </option>
                  <option value="Cobertura" className="bg-secondary">
                    Cobertura
                  </option>
                  <option value="Casa" className="bg-secondary">
                    Casa
                  </option>
                </select>
              </div>
            </div>

            {/* Botão */}
            <button
              onClick={handleSearch}
              className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-primary text-secondary font-bold uppercase tracking-[0.2em] text-[10px] rounded-[1.5rem] md:rounded-full hover:bg-white transition-all shadow-lg mt-1 md:mt-0"
            >
              Buscar Agora
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
