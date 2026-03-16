"use client";

import { useState, useMemo, useEffect } from "react";
import { featuredProperties } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import PropertyFilters from "@/components/ui/PropertyFilters";
import FadeIn from "@/components/ui/FadeIn";

const typeFilters = [
  { label: "Todos", value: "todos" },
  { label: "Casa Triplex", value: "Casa Triplex" },
  { label: "Casa de Condomínio", value: "Casa de Condomínio" },
  { label: "Cobertura", value: "Cobertura" },
  { label: "Casa", value: "Casa" },
];

const suiteFilters = [
  { label: "Todas as Suítes", value: "todos" },
  { label: "3+ Suítes", value: "3" },
  { label: "4+ Suítes", value: "4" },
  { label: "5+ Suítes", value: "5" },
];

export default function FeaturedProperties() {
  const [activeType, setActiveType] = useState("todos");
  const [activeSuites, setActiveSuites] = useState("todos");

  // Ouve o evento da Hero Section
  useEffect(() => {
    const handleHeroSearch = (e: any) => {
      setActiveType(e.detail.type);
    };
    window.addEventListener("hero-search", handleHeroSearch);
    return () => window.removeEventListener("hero-search", handleHeroSearch);
  }, []);

  const filtered = useMemo(() => {
    return featuredProperties.filter((p) => {
      const matchType = activeType === "todos" || p.type === activeType;
      const matchSuites =
        activeSuites === "todos" || p.suites >= parseInt(activeSuites);
      return matchType && matchSuites;
    });
  }, [activeType, activeSuites]);

  return (
    <section id="imoveis-destaque" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
        </FadeIn>

        {/* Filtros */}
        <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 mb-12">
          <PropertyFilters
            filters={typeFilters}
            active={activeType}
            onChange={setActiveType}
          />
          <div className="w-px bg-secondary/10 hidden sm:block" />
          <PropertyFilters
            filters={suiteFilters}
            active={activeSuites}
            onChange={setActiveSuites}
          />
        </FadeIn>

        {/* Grid ou mensagem vazia */}
        {filtered.length === 0 ? (
          <FadeIn>
            <div className="py-24 text-center text-secondary/30 text-sm uppercase tracking-widest">
              Nenhum imóvel encontrado para esse filtro.
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((property, index) => (
              <FadeIn key={property.id} delay={index * 0.1} direction="up">
                <PropertyCard property={property} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
