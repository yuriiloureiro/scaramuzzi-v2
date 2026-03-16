"use client";

import { Property } from "@/data/properties";

export default function PropertyDescription({
  property,
}: {
  property: Property;
}) {
  return (
    <div className="space-y-16">
      {/* Descrição Principal */}
      <section>
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-8 block">
          Sobre o Imóvel
        </h2>
        <div className="prose prose-secondary max-w-none">
          {property.description.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-secondary/70 font-light leading-relaxed text-lg mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Diferenciais e Tecnologia */}
      <section className="pt-16 border-t border-secondary/5">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-10 block">
          Diferenciais e Tecnologia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
          {property.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
              <span className="text-secondary/60 font-light text-sm tracking-tight group-hover:text-secondary transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Citação de Estilo (Inspirado na Referência) */}
      <div className="bg-secondary/[0.02] border-l-2 border-primary p-12 italic">
        <p className="text-secondary/40 text-xl font-serif leading-relaxed">
          "Uma residência que redefine o conceito de luxo na Barra da Tijuca,
          unindo tecnologia de ponta a um paisagismo que conta histórias."
        </p>
      </div>
    </div>
  );
}
