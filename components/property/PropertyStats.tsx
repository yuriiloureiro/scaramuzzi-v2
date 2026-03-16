"use client";

import { Property } from "@/data/properties";

export default function PropertyStats({ property }: { property: Property }) {
  const stats = [
    {
      label: "Área",
      value: `${property.area} m²`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      ),
    },
    {
      label: "Quartos",
      value: property.bedrooms,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
          <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M12 4v6" />
          <rect width="16" height="6" x="4" y="14" rx="1" />
        </svg>
      ),
    },
    {
      label: "Banheiros",
      value: property.bathrooms,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-1.88 1.88a1.5 1.5 0 0 0 0 2.12L5 10" />
          <path d="M10 5 5 10" />
          <path d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7" />
        </svg>
      ),
    },
    {
      label: "Suítes",
      value: property.suites,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22V8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
          <circle cx="12" cy="5" r="3" />
        </svg>
      ),
    },
    {
      label: "Garagem",
      value: property.garage,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 17H5v-7l7-5 7 5v7z" />
          <path d="M9 17v-5h6v5" />
        </svg>
      ),
    },
    {
      label: "Código",
      value: property.code,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-secondary/5 border border-secondary/5 rounded-2xl overflow-hidden">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white flex flex-col items-center justify-center gap-2 py-6 px-4 text-center"
        >
          <div className="text-primary">{stat.icon}</div>
          <span className="text-xl font-serif text-secondary">
            {stat.value}
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-secondary/30">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
