"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6 block"
          >
            Nossa Essência
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl text-secondary leading-[0.9] tracking-tighter mb-16"
          >
            Curadoria de <br />
            <span className="italic text-primary text-4xl md:text-7xl">
              estilo de vida
            </span>{" "}
            <br />
            em alto padrão.
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="/images/about/about.jpeg"
                alt="Escritório Scaramuzzi"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl text-secondary leading-tight">
                Mais que uma imobiliária, <br />
                um concierge imobiliário.
              </h2>
              <p className="text-secondary/60 leading-relaxed text-lg font-light">
                A Scaramuzzi Imóveis nasceu da necessidade de um atendimento
                verdadeiramente personalizado no mercado de luxo do Rio de
                Janeiro. Especializados na Barra da Tijuca e arredores,
                selecionamos cada imóvel com um olhar clínico para arquitetura,
                localização e potencial de valorização.
              </p>
              <p className="text-secondary/60 leading-relaxed text-lg font-light">
                Nossa missão é simplificar a jornada de quem busca o
                extraordinário, oferecendo uma curadoria que vai além de metros
                quadrados: entregamos refúgios que refletem a identidade de
                nossos clientes.
              </p>

              {/* Stats — agora com 3 números */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary/5">
                <div>
                  <span className="block text-3xl font-serif text-secondary mb-1">
                    15+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">
                    Anos de Experiência
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-secondary mb-1">
                    500+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">
                    Imóveis Exclusivos
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-secondary mb-1">
                    R$2Bi+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">
                    Em Negociações
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores — agora com FadeIn no scroll */}
      <section className="py-24 bg-secondary text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              num: "01.",
              title: "Exclusividade",
              text: "Trabalhamos com um portfólio selecionado, garantindo foco total em cada negociação.",
            },
            {
              num: "02.",
              title: "Transparência",
              text: "Processos claros e segurança jurídica em todas as etapas da compra ou venda.",
            },
            {
              num: "03.",
              title: "Expertise Local",
              text: "Conhecimento profundo de cada condomínio e rua da Barra da Tijuca.",
            },
          ].map((item, index) => (
            <FadeIn key={item.num} delay={index * 0.15} direction="up">
              <div className="space-y-4">
                <span className="text-primary font-serif text-4xl italic">
                  {item.num}
                </span>
                <h3 className="text-xl font-serif tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
