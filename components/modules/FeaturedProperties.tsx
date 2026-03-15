"use client";

import { motion } from "framer-motion";
import { featuredProperties } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">
              Seleção Exclusiva
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary leading-tight">
              Imóveis em <span className="italic">Destaque</span>
            </h2>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-2 hover:text-primary transition-colors">
            Ver todos os imóveis
          </button>
        </div>

        {/* Grid de Imóveis */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
