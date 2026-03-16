"use client";

import { motion } from "framer-motion";
import { featuredProperties } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import { useState } from "react";

export default function ImoveisPage() {
  const [filter, setFilter] = useState("Todos");

  // Lógica simples de filtro
  const filteredProperties =
    filter === "Todos"
      ? featuredProperties
      : featuredProperties.filter((p) => p.type.includes(filter));

  const categories = ["Todos", "Casa Triplex", "Casa de Condomínio"];

  return (
    <main className="pt-40 pb-24 px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Página */}
        <header className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4 block">
            Nosso Portfólio
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-secondary tracking-tighter mb-8">
            Imóveis <span className="italic text-primary">Exclusivos</span>
          </h1>

          {/* Filtros Minimalistas */}
          <div className="flex flex-wrap gap-4 border-b border-secondary/5 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-full border ${
                  filter === cat
                    ? "bg-secondary text-white border-secondary"
                    : "bg-transparent text-secondary/40 border-secondary/10 hover:border-secondary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Grid de Imóveis */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {filteredProperties.map((property) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={property.id}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="py-20 text-center text-secondary/40 italic">
            Nenhum imóvel encontrado nesta categoria.
          </div>
        )}
      </div>
    </main>
  );
}
