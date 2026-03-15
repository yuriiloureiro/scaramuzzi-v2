export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Mansão Contemporânea na Barra",
    price: "R$ 8.500.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa de Condomínio",
    bedrooms: 5,
    bathrooms: 6,
    area: 650,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
  },
  {
    id: "2",
    title: "Cobertura Duplex com Vista Mar",
    price: "R$ 4.200.000",
    location: "Ipanema, RJ",
    type: "Cobertura",
    bedrooms: 3,
    bathrooms: 4,
    area: 280,
    image:
      "https://images.unsplash.com/photo-1600607687940-4e200310e517?q=80&w=1000",
  },
  {
    id: "3",
    title: "Apartamento Garden Exclusivo",
    price: "R$ 2.900.000",
    location: "Leblon, RJ",
    type: "Apartamento",
    bedrooms: 2,
    bathrooms: 3,
    area: 150,
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000",
  },
];
