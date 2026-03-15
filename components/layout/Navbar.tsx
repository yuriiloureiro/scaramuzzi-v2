"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md border-b border-accent/20"
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-serif font-bold text-secondary tracking-tighter"
      >
        SCARAMUZZI<span className="text-primary">.</span>
      </Link>

      {/* Links Centrais */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-secondary/70">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/imoveis" className="hover:text-primary transition-colors">
          Imóveis
        </Link>
        <Link href="/sobre" className="hover:text-primary transition-colors">
          A Imobiliária
        </Link>
      </div>

      {/* Botão de Contato */}
      <Link
        href="/contato"
        className="px-6 py-2 bg-secondary text-white text-xs uppercase tracking-widest font-bold hover:bg-primary transition-all duration-300"
      >
        Contato
      </Link>
    </motion.nav>
  );
}
