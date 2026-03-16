import FadeIn from "@/components/ui/FadeIn";
import { featuredProperties } from "@/data/properties";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyStats from "@/components/property/PropertyStats";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyContact from "@/components/property/PropertyContact";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const property = featuredProperties.find((p) => p.id === id);

  if (!property) notFound();

  return (
    <main className="bg-white min-h-screen pb-32">
      {/* 1. Hero com Galeria e Título */}
      <PropertyHero property={property} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Coluna da Esquerda: Conteúdo */}
          <div className="lg:col-span-8 space-y-16">
            {/* 2. Grid de Atributos */}
            <PropertyStats property={property} />

            {/* 3. Descrição Detalhada e Diferenciais */}
            <PropertyDescription property={property} />

            {/* 4. Localização */}
            <section className="pt-16 border-t border-secondary/5">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">
                    Localização Privilegiada
                  </h2>
                  <p className="text-secondary/60 font-light text-lg">
                    {property.location}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.title + " " + property.location)}`}
                  target="_blank"
                  className="text-[10px] uppercase tracking-widest font-bold text-secondary border-b border-secondary/20 pb-1 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  Abrir no Google Maps
                </a>
              </div>

              <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-secondary/5 shadow-2xl shadow-secondary/5 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58753.3448446444!2d-43.40354455!3d-23.0033306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0999999999999%3A0x9999999999999999!2sBarra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1710500000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform duration-700 group-hover:scale-105"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
              </div>
            </section>
          </div>
          {/* Fim Coluna Esquerda */}

          {/* Coluna da Direita: Contato Sticky */}
          <div className="lg:col-span-4 relative">
            <PropertyContact property={property} />
          </div>
        </div>
      </div>
    </main>
  );
}
