"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Imóveis", href: "/imoveis" },
    { name: "A Imobiliária", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 px-4 py-3 md:px-6 md:py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4 bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm rounded-2xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-serif font-bold text-secondary tracking-tighter"
          >
            SCARAMUZZI<span className="text-primary">.</span>
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-secondary/60">
            {menuLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botão Contato Desktop / Menu Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/contato"
              className="hidden md:block px-6 py-2.5 bg-secondary text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-lg shadow-secondary/10"
            >
              Contato
            </Link>

            {/* Ícone Hamburguer Estilizado */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] bg-secondary block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1.5px] bg-secondary block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] bg-secondary block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-secondary border-b border-secondary/5 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
