import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-20 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Coluna 1: Logo e Descrição */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="text-2xl font-serif font-bold tracking-tighter mb-6 block"
          >
            SCARAMUZZI<span className="text-primary">.</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Especialistas em curadoria de imóveis de alto padrão e investimentos
            imobiliários exclusivos.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
            Navegação
          </h4>
          <ul className="space-y-4 text-sm text-white/70">
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

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
            Contato
          </h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li>contato@scaramuzzi.com.br</li>
            <li>+55 (21) 99999-9999</li>
            <li>Barra da Tijuca, Rio de Janeiro</li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter/Social */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
            Siga-nos
          </h4>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Linha Final de Copyright */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
        <p>© 2024 Scaramuzzi Imóveis. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <span className="text-white/50">Yuri Loureiro</span>
        </p>
      </div>
    </footer>
  );
}
