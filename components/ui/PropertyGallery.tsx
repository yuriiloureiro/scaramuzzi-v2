"use client";

import { motion } from "framer-motion";

export default function PropertyGallery({ images }: { images: string[] }) {
  return (
    <section className="mt-24">
      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4 block">
        Galeria de Fotos
      </span>
      <h2 className="font-serif text-3xl text-secondary mb-12 tracking-tight">
        Explore cada <span className="italic text-primary">detalhe</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`overflow-hidden rounded-xl bg-accent/10 shadow-lg group cursor-pointer ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={img}
              alt={`Galeria ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 aspect-[4/3]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
