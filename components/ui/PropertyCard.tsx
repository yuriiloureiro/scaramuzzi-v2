"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/imoveis/${property.id}`}>
      <motion.div
        whileHover={{ y: -10 }}
        className="group cursor-pointer bg-white border border-accent/20 overflow-hidden"
      >
        {/* Imagem com Zoom */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
            {property.type}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2 block">
            {property.location}
          </span>
          <h3 className="font-serif text-xl text-secondary mb-4 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          <div className="flex items-center gap-4 text-xs text-secondary/50 mb-6 border-y border-accent/20 py-3">
            <span>{property.bedrooms} Quartos</span>
            <span>{property.bathrooms} Banheiros</span>
            <span>{property.area} m²</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-sans font-bold text-lg text-secondary">
              {property.price}
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold border-b border-primary text-secondary">
              Ver Detalhes →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
