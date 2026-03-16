"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/imoveis/${property.id}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        {/* Container da Imagem com Badge */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-accent/10">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Badge Flutuante */}
          <div className="absolute top-6 right-6 bg-[#E2F1E7] text-[#4A7C59] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
            Disponível para Venda
          </div>
        </div>

        {/* Informações do Imóvel */}
        <div className="space-y-4 px-2">
          {/* Endereço com Ícone de Pin */}
          <div className="flex items-center gap-2 text-secondary/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
            <span className="text-[11px] font-bold uppercase tracking-wider">
              {property.location}
            </span>
          </div>

          {/* Meta-dados com Ícones e Preço */}
          <div className="flex items-center justify-between border-b border-secondary/5 pb-4">
            <div className="flex items-center gap-4 text-secondary/80">
              <div className="flex items-center gap-1.5">
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
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                  <path d="M12 4v16" />
                  <rect width="16" height="6" x="4" y="14" rx="1" />
                </svg>
                <span className="text-xs font-medium">{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1.5">
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
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-1.88 1.88a1.5 1.5 0 0 0 0 2.12L5 10" />
                  <path d="M10 5 5 10" />
                  <path d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7" />
                  <path d="M7 15h.01" />
                  <path d="M17 15h.01" />
                </svg>
                <span className="text-xs font-medium">
                  {property.bathrooms}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 3v18" />
                </svg>
                <span className="text-xs font-medium">{property.area} m²</span>
              </div>
            </div>
            <span className="text-xl font-serif text-secondary">
              {property.price}
            </span>
          </div>

          {/* Título do Imóvel */}
          <h3 className="text-xl md:text-2xl font-serif text-secondary leading-tight group-hover:text-primary transition-colors duration-300">
            {property.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
