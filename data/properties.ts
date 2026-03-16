export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  description: string;
  gallery: string[];
}

// Função para gerar os caminhos da galeria automaticamente
const generateGallery = (id: string) => {
  return [1, 2, 3, 4, 5, 6].map(
    (num) => `/images/properties/${id}/${id}-gallery-${num}.webp`,
  );
};

export const featuredProperties: Property[] = [
  {
    id: "imovel-01",
    title: "Casa Triplex Condomínio Santa Monica Jardins",
    price: "R$ 23.900.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa Triplex",
    bedrooms: 6,
    bathrooms: 6,
    area: "1463",
    image: "/images/properties/imovel-01/main.webp",
    description:
      "Uma obra-prima da arquitetura contemporânea localizada no prestigiado Santa Monica Jardins. Esta residência triplex oferece o máximo em luxo e sofisticação, com acabamentos em mármore, automação completa e uma área de lazer privativa inigualável.",
    gallery: generateGallery("imovel-01"),
  },
  {
    id: "imovel-02",
    title: "Cobertura Duplex Península",
    price: "R$ 18.500.000",
    location: "Barra da Tijuca, RJ",
    type: "Cobertura",
    bedrooms: 5,
    bathrooms: 5,
    area: "980",
    image: "/images/properties/imovel-02/main.webp",
    description:
      "Cobertura duplex com vista panorâmica para a Lagoa de Jacarepaguá e o mar. Terraço privativo com piscina aquecida, churrasqueira e jardim suspenso. O ápice do viver contemporâneo na Península.",
    gallery: generateGallery("imovel-02"),
  },
  {
    id: "imovel-03",
    title: "Mansão Alphaville Barra",
    price: "R$ 31.000.000",
    location: "Barra da Tijuca, RJ",
    type: "Mansão",
    bedrooms: 8,
    bathrooms: 9,
    area: "2100",
    image: "/images/properties/imovel-03/main.webp",
    description:
      "Mansão de alto padrão em condomínio fechado com segurança 24h. Projeto assinado por renomado escritório de arquitetura, com adega climatizada, home theater, spa completo e garagem para 8 veículos.",
    gallery: generateGallery("imovel-03"),
  },
  {
    id: "imovel-04",
    title: "Casa Condomínio Novo Leblon",
    price: "R$ 14.200.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa de Condomínio",
    bedrooms: 4,
    bathrooms: 4,
    area: "720",
    image: "/images/properties/imovel-04/main.webp",
    description:
      "Residência sofisticada no exclusivo Novo Leblon, com integração total entre os ambientes internos e externos. Piscina com raia, jardim paisagístico e acabamentos importados em cada detalhe.",
    gallery: generateGallery("imovel-04"),
  },
  {
    id: "imovel-05",
    title: "Casa Moderna Barra da Tijuca",
    price: "R$ 9.800.000",
    location: "Barra da Tijuca, RJ",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 4,
    area: "650",
    image: "/images/properties/imovel-05/main.webp",
    description:
      "Residência contemporânea com arquitetura clean e linhas retas. Amplos espaços integrados, pé-direito duplo na sala, piscina com deck de madeira e área gourmet completa. Perfeita para quem busca modernidade e conforto.",
    gallery: generateGallery("imovel-05"),
  },
  {
    id: "imovel-06",
    title: "Cobertura Garden Park Premium",
    price: "R$ 12.400.000",
    location: "Barra da Tijuca, RJ",
    type: "Cobertura",
    bedrooms: 4,
    bathrooms: 5,
    area: "820",
    image: "/images/properties/imovel-06/main.webp",
    description:
      "Cobertura garden com amplo terraço privativo e vista livre para área verde. Projeto de interiores assinado, cozinha gourmet integrada e suíte master com closet e banheiro de luxo. Uma experiência única de morar bem.",
    gallery: generateGallery("imovel-06"),
  },
];
