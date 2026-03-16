"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-32 pb-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Seção Superior: CTA Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8 block">
              Pronto para o próximo passo?
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tighter">
              Vamos encontrar o seu{" "}
              <span className="italic text-primary">refúgio</span> ideal.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-8"
          >
            <p className="text-white/40 text-lg max-w-sm lg:text-right leading-relaxed">
              Nossa equipe de especialistas está pronta para oferecer uma
              consultoria exclusiva e personalizada.
            </p>
            <Link
              href="/contato"
              className="group relative px-12 py-5 bg-primary text-secondary font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-500 hover:bg-white"
            >
              <span className="relative z-10">Falar com um Especialista</span>
            </Link>
          </motion.div>
        </div>

        {/* Seção Inferior: Links e Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pt-20 border-t border-white/5">
          {/* Logo e Bio */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-serif font-bold tracking-tighter mb-8 block"
            >
              SCARAMUZZI<span className="text-primary">.</span>
            </Link>
            <p className="text-white/30 text-xs leading-relaxed max-w-[200px] uppercase tracking-widest">
              Curadoria de imóveis de alto padrão no Rio de Janeiro.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">
              Navegação
            </h4>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/imoveis"
                  className="hover:text-primary transition-colors"
                >
                  Imóveis
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-primary transition-colors"
                >
                  A Imobiliária
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li>contato@scaramuzzi.com.br</li>
              <li>+55 (21) 99999-9999</li>
              <li>Barra da Tijuca, RJ</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">
              Siga-nos
            </h4>
            <div className="flex gap-8 text-sm text-white/50 font-medium">
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Final */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
          <p>© 2024 Scaramuzzi Imóveis. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <span className="text-white/40">Yuri Loureiro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
