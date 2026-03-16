"use client";

import { motion } from "framer-motion";

export default function ContatoPage() {
  return (
    <main className="pt-40 pb-24 px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Coluna 1: Texto e Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4 block">
            Atendimento Exclusivo
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-secondary tracking-tighter mb-12 leading-tight">
            Vamos conversar sobre o seu{" "}
            <span className="italic text-primary">próximo passo</span>.
          </h1>

          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 mb-2">
                E-mail
              </h4>
              <p className="text-xl font-serif text-secondary">
                contato@scaramuzzi.com.br
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 mb-2">
                Telefone
              </h4>
              <p className="text-xl font-serif text-secondary">
                +55 (21) 97610-9651
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 mb-2">
                Endereço
              </h4>
              <p className="text-xl font-serif text-secondary italic">
                Av. das Américas, 8.585 – Sala 333 – Barra da Tijuca CEP:
                22793-081 – Rio de Janeiro – RJ
              </p>
            </div>
          </div>
        </motion.div>

        {/* Coluna 2: Formulário */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-12 shadow-2xl border border-secondary/5"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full border-b border-secondary/10 py-2 focus:border-primary outline-none transition-colors bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full border-b border-secondary/10 py-2 focus:border-primary outline-none transition-colors bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">
                Assunto
              </label>
              <select className="w-full border-b border-secondary/10 py-2 focus:border-primary outline-none transition-colors bg-transparent">
                <option>Interesse em Imóvel</option>
                <option>Venda meu Imóvel</option>
                <option>Outros Assuntos</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-secondary/10 py-2 focus:border-primary outline-none transition-colors bg-transparent resize-none"
              />
            </div>
            <button className="w-full py-5 bg-secondary text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all duration-500">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
