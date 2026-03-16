"use client";

import { Property } from "@/data/properties";
import { motion } from "framer-motion";

export default function PropertyContact({ property }: { property: Property }) {
  return (
    <aside className="sticky top-32 space-y-8">
      {/* Card de Preço e Ação Rápida */}
      <div className="bg-secondary p-10 rounded-3xl text-white shadow-2xl shadow-secondary/20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">
          Valor de Investimento
        </span>
        <h3 className="text-4xl font-serif mb-8 tracking-tighter">
          {property.price}
        </h3>

        <div className="space-y-4">
          <button className="w-full py-5 bg-primary text-secondary text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 rounded-full">
            Agendar Visita Privada
          </button>
          <a
            href={`https://wa.me/5521983300099?text=Olá, tenho interesse no imóvel ${property.code}: ${property.title}`}
            target="_blank"
            className="w-full py-5 border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white/5 transition-all duration-500 rounded-full flex items-center justify-center gap-3"
          >
            Falar via WhatsApp
          </a>
        </div>
      </div>

      {/* Formulário de Interesse (Estilo Realisting) */}
      <div className="bg-white border border-secondary/5 p-10 rounded-3xl shadow-sm">
        <h4 className="text-secondary font-serif text-xl mb-2 tracking-tight">
          Solicitar Informações
        </h4>
        <p className="text-secondary/40 text-[11px] uppercase tracking-widest mb-8 leading-relaxed">
          Preencha os dados abaixo para receber o book completo do imóvel.
        </p>

        <form className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[9px] uppercase tracking-widest font-bold text-secondary/30 ml-4">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-6 py-4 bg-secondary/[0.02] border border-secondary/5 rounded-full text-sm focus:outline-none focus:border-primary/30 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] uppercase tracking-widest font-bold text-secondary/30 ml-4">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-6 py-4 bg-secondary/[0.02] border border-secondary/5 rounded-full text-sm focus:outline-none focus:border-primary/30 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] uppercase tracking-widest font-bold text-secondary/30 ml-4">
              Telefone
            </label>
            <input
              type="tel"
              placeholder="(21) 99999-9999"
              className="w-full px-6 py-4 bg-secondary/[0.02] border border-secondary/5 rounded-full text-sm focus:outline-none focus:border-primary/30 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-secondary text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary hover:text-secondary transition-all duration-500 rounded-full mt-4"
          >
            Enviar Solicitação
          </button>
        </form>
      </div>
    </aside>
  );
}
