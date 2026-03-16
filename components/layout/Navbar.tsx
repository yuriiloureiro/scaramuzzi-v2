"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-2xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-serif font-bold text-secondary tracking-tighter"
        >
          SCARAMUZZI<span className="text-primary">.</span>
        </Link>

        {/* Links Centrais - Mais sutis e menores */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-secondary/60">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/imoveis"
            className="hover:text-primary transition-colors"
          >
            Imóveis
          </Link>
          <Link href="/sobre" className="hover:text-primary transition-colors">
            A Imobiliária
          </Link>
        </div>

        {/* Botão de Contato - Estilo Realisting */}
        <Link
          href="/contato"
          className="px-6 py-2.5 bg-secondary text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-lg shadow-secondary/10"
        >
          Contato
        </Link>
      </div>
    </motion.nav>
  );
}
