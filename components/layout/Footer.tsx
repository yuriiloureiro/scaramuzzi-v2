"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/scaramuzzi.imoveis/",
    },
    { name: "Facebook", href: "https://www.facebook.com/Scaramuzzimoveis" },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@scaramuzziimoveisriodejane995",
    },
    { name: "TikTok", href: "https://www.tiktok.com/@scaramuzzi.imveis" },
  ];

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Seção Superior: CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">
              Pronto para o próximo passo?
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter">
              Vamos encontrar o <br />
              seu{" "}
              <span className="italic text-primary text-4xl md:text-6xl">
                refúgio
              </span>{" "}
              ideal.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:items-end gap-6"
          >
            <p className="text-white/40 max-w-sm lg:text-right font-light leading-relaxed">
              Nossa equipe de especialistas está pronta para oferecer uma
              consultoria exclusiva e personalizada.
            </p>
            <Link
              href="/contato"
              className="px-10 py-5 bg-primary text-secondary text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 shadow-xl shadow-primary/10 rounded-full"
            >
              Falar com um Especialista
            </Link>
          </motion.div>
        </div>

        {/* Seção Inferior: Dados e Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/5">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-xl font-serif font-bold tracking-tighter"
            >
              SCARAMUZZI<span className="text-primary">.</span>
            </Link>
            <p className="text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">
              Curadoria de imóveis de alto padrão no Rio de Janeiro.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-white/50 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/imoveis"
                  className="hover:text-white transition-colors"
                >
                  Imóveis
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-white transition-colors"
                >
                  A Imobiliária
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato Real */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
              Contato
            </h4>
            <div className="space-y-4 text-sm text-white/50 font-light">
              <p className="leading-relaxed">
                Av. das Américas, 8.585 – Sala 333 <br />
                Barra da Tijuca, Rio de Janeiro – RJ <br />
                CEP: 22793-081
              </p>
              <p className="text-white font-medium">(21) 97610-9651</p>
            </div>
          </div>

          {/* Redes Sociais Reais */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
              Siga-nos
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-primary transition-colors border border-white/10 px-4 py-2 rounded-full hover:border-primary"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
          <p>© 2026 Scaramuzzi Imóveis. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <span className="text-white/40">Yuri Loureiro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
