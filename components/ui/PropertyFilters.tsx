"use client";

interface Filter {
  label: string;
  value: string;
}

interface PropertyFiltersProps {
  filters: Filter[];
  active: string;
  onChange: (value: string) => void;
}

export default function PropertyFilters({
  filters,
  active,
  onChange,
}: PropertyFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`
            text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full border transition-all duration-300
            ${
              active === filter.value
                ? "bg-secondary text-white border-secondary"
                : "bg-transparent text-secondary/50 border-secondary/10 hover:border-secondary/30 hover:text-secondary"
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
