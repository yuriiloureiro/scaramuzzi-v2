"use client";

import { Property } from "@/data/properties";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PropertyHero({ property }: { property: Property }) {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Cabeçalho do Imóvel */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-4">
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full">
            {property.type}
          </span>
          <span className="text-secondary/30 text-[10px] uppercase tracking-[0.3em] font-bold">
            Código: {property.code}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-secondary tracking-tighter leading-[1.1]">
          {property.title}
        </h1>

        <p className="text-secondary/50 text-sm md:text-base font-light flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
          {property.location}
        </p>
      </div>

      {/* Galeria Estilo Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
        {/* Foto Principal (Grande) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group"
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </motion.div>

        {/* Fotos Secundárias */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 h-full">
          {property.gallery.slice(0, 4).map((foto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 1) * 0.1 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <Image
                src={foto}
                alt={`${property.title} - foto ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

              {/* Botão "Ver todas" na última foto */}
              {i === 3 && (
                <button className="absolute inset-0 bg-secondary/60 backdrop-blur-sm flex items-center justify-center text-white text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Ver todas as fotos
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
