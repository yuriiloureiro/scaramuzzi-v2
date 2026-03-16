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
  gallery: string[];
}

export const featuredProperties: Property[] = [
  {
    id: "imovel-01",
    title: "Casa Triplex Condomínio Santa Monica Jardins",
    price: "R$ 23.900.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa Triplex",
    bedrooms: 6,
    bathrooms: 6,
    area: 1463,
    image: "/images/properties/imovel-01/main.webp",
    gallery: [],
  },
  {
    id: "imovel-02",
    title: "Casa Triplex com 4 Suítes – Projeto Aurora Grei",
    price: "R$ 16.500.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa Triplex",
    bedrooms: 4,
    bathrooms: 7,
    area: 837,
    image: "/images/properties/imovel-02/main.webp",
    gallery: [],
  },
  {
    id: "imovel-03",
    title: "Casa Triplex Del Lago",
    price: "R$ 18.000.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa Triplex",
    bedrooms: 5,
    bathrooms: 7,
    area: 900,
    image: "/images/properties/imovel-03/main.webp",
    gallery: [],
  },
  {
    id: "imovel-04",
    title: "Casa Condomínio Quintas do Rio",
    price: "R$ 13.900.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa de Condomínio",
    bedrooms: 5,
    bathrooms: 7,
    area: 860,
    image: "/images/properties/imovel-04/main.webp",
    gallery: [],
  },
  {
    id: "imovel-05",
    title: "Casa Del Lago",
    price: "R$ 13.900.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa de Condomínio",
    bedrooms: 4,
    bathrooms: 5,
    area: 700,
    image: "/images/properties/imovel-05/main.webp",
    gallery: [],
  },
  {
    id: "imovel-06",
    title: "Casa Del Lago Triplex",
    price: "R$ 10.500.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa Triplex",
    bedrooms: 5,
    bathrooms: 7,
    area: 860,
    image: "/images/properties/imovel-06/main.webp",
    gallery: [],
  },
];
