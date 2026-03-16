"use client";

import { useParams } from "next/navigation";
import { featuredProperties } from "@/data/properties";
import { motion } from "framer-motion";
import PropertyGallery from "@/components/ui/PropertyGallery";

import Link from "next/link";

export default function PropertyDetails() {
  const params = useParams();
  const id = params.id;

  const property = featuredProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-2xl text-secondary/40 italic text-center">
          Imóvel não encontrado.
          <br />
          <Link
            href="/imoveis"
            className="text-primary text-sm uppercase tracking-widest not-italic mt-4 block"
          >
            ← Voltar para a listagem
          </Link>
        </p>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Hero: Imagem Panorâmica */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full pt-28 md:pt-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Botão Voltar */}
        <Link
          href="/imoveis"
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/40 hover:text-primary transition-colors mb-12 block"
        >
          ← Voltar para listagem
        </Link>

        {/* Grid: Título + Infos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna 1: Título e Preço */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4 block">
              {property.type} em {property.location}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-secondary leading-tight tracking-tighter mb-8">
              {property.title}
            </h1>
            <p className="text-4xl font-light text-secondary/80">
              {property.price}
            </p>

            <p className="mt-8 text-secondary/50 leading-relaxed text-base font-light border-t border-secondary/5 pt-8">
              {property.description}
            </p>
          </motion.div>

          {/* Coluna 2: Características + Botão */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between gap-10"
          >
            {/* Características */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-secondary/5">
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-secondary/40 mb-2">
                  Quartos
                </span>
                <span className="text-2xl font-serif text-secondary">
                  {property.bedrooms}
                </span>
                <span className="text-xs text-secondary/40 ml-1">suítes</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-secondary/40 mb-2">
                  Banheiros
                </span>
                <span className="text-2xl font-serif text-secondary">
                  {property.bathrooms}
                </span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-secondary/40 mb-2">
                  Área
                </span>
                <span className="text-2xl font-serif text-secondary">
                  {property.area}
                </span>
                <span className="text-xs text-secondary/40 ml-1">m²</span>
              </div>
            </div>

            {/* Botão CTA */}
            <button className="w-full py-5 bg-secondary text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all duration-500 rounded-xl">
              Agendar Visita Exclusiva
            </button>
          </motion.div>
        </div>

        {/* Galeria */}
        <PropertyGallery images={property.gallery} />

        {/* Mapa */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4 block">
            Localização
          </span>
          <h2 className="font-serif text-3xl text-secondary mb-8 tracking-tight">
            Barra da Tijuca,{" "}
            <span className="italic text-primary">Rio de Janeiro</span>
          </h2>

          <div className="overflow-hidden rounded-2xl border border-secondary/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <div className="aspect-[2/1]">
              <iframe
                title="Mapa - Barra da Tijuca, RJ"
                src="https://www.google.com/maps?q=Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <p className="mt-4 text-xs text-secondary/40 uppercase tracking-widest">
            Barra da Tijuca · Rio de Janeiro · RJ
          </p>
        </motion.section>
      </div>
    </main>
  );
}
