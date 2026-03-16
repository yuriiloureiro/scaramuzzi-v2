export interface Property {
  id: string;
  code: string;
  title: string;
  price: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  garage: number;
  area: string;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
  gallery: string[];
}

const generateGallery = (id: string) => {
  return [1, 2, 3, 4, 5, 6].map(
    (n) => `/images/properties/${id}/${id}-gallery-${n}.webp`,
  );
};

export const featuredProperties: Property[] = [
  {
    id: "imovel-01",
    code: "0050",
    title: "Casa Triplex Condomínio Santa Monica Jardins",
    price: "R$ 23.900.000",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Casa Triplex",
    bedrooms: 6,
    bathrooms: 6,
    suites: 6,
    garage: 4,
    area: "1463",
    image: "/images/properties/imovel-01/main.webp",
    description: `Excelente Casa Triplex com subsolo e elevador, rica em detalhes, disponível para venda no Condomínio Santa Mônica Jardins, localizado na Barra da Tijuca com infraestrutura de lazer, segurança 24 horas e próximo aos principais comércios, escolas e shoppings da região.

1° Pavimento: Amplo living em vários ambientes, rico em luz natural e ventilação, parte dele com um imponente pé direito duplo, revestimento de parede com lâmina de madeira, painel planejado para TV, projeto de iluminação e climatização. Suíte térrea com revestimento ripado na parede, closet e piso em porcelanato. Copa cozinha com ilha, bancada com cuba dupla com vista para jardim vertical. Área de serviço com lavanderia e lavabo de apoio.

2° Pavimento: Hall de circulação com elevador, 4 suítes com closet, claraboia no banheiro e varanda. Master com salão de banho composto por 2 cubas, 2 sanitários independentes, ducha dupla e banheira de hidromassagem.

3° Pavimento: Suíte, espaço para escritório e cinema privativo.

Subsolo: Capacidade para 10 carros, 2 pontos para carregamento elétrico, 2 dependências para funcionários e adega com capacidade para 800 rótulos.

Área de Lazer: Piscina com iluminação, cascata, prainha e hidromassagem aquecida. Sauna, espaço gourmet com churrasqueira e forno a lenha, bancadas em granito Preto São Gabriel flameado e jardim com paisagismo exclusivo.`,
    features: [
      "Automação completa",
      "57 placas solares",
      "Cabeamento internet e som em todos os cômodos",
      "Elevador privativo",
      "Adega para 800 rótulos",
      "2 pontos de carregamento elétrico",
      "Lareira ecológica",
      "Irrigação automática",
      "Oliveira de 200 anos",
      "Palmeira camaronense de 60 anos",
    ],
    amenities: [
      "Piscina aquecida",
      "Hidromassagem",
      "Sauna",
      "Churrasqueira",
      "Forno a lenha",
      "Área gourmet",
      "Segurança 24h",
      "Garagem para 10 carros",
      "Cinema privativo",
      "Jardim paisagístico",
    ],
    gallery: generateGallery("imovel-01"),
  },
  {
    id: "imovel-02",
    code: "0051",
    title: "Cobertura Duplex Península",
    price: "R$ 18.500.000",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Cobertura",
    bedrooms: 5,
    bathrooms: 5,
    suites: 4,
    garage: 3,
    area: "980",
    image: "/images/properties/imovel-02/main.webp",
    description:
      "Cobertura duplex com vista panorâmica para a Lagoa de Jacarepaguá e o mar. Terraço privativo com piscina aquecida, churrasqueira e jardim suspenso. O ápice do viver contemporâneo na Península.",
    features: [
      "Automação completa",
      "Vista panorâmica para o mar",
      "Terraço privativo",
      "Piscina aquecida",
      "Elevador privativo",
    ],
    amenities: [
      "Piscina aquecida",
      "Churrasqueira",
      "Jardim suspenso",
      "Segurança 24h",
      "Academia",
    ],
    gallery: generateGallery("imovel-02"),
  },
  {
    id: "imovel-03",
    code: "0052",
    title: "Mansão Alphaville Barra",
    price: "R$ 31.000.000",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Mansão",
    bedrooms: 8,
    bathrooms: 9,
    suites: 7,
    garage: 8,
    area: "2100",
    image: "/images/properties/imovel-03/main.webp",
    description:
      "Mansão de alto padrão em condomínio fechado com segurança 24h. Projeto assinado por renomado escritório de arquitetura, com adega climatizada, home theater, spa completo e garagem para 8 veículos.",
    features: [
      "Projeto arquitetônico assinado",
      "Adega climatizada",
      "Home theater",
      "Spa completo",
      "Automação completa",
    ],
    amenities: [
      "Piscina",
      "Spa",
      "Home theater",
      "Churrasqueira",
      "Segurança 24h",
      "Garagem para 8 carros",
    ],
    gallery: generateGallery("imovel-03"),
  },
  {
    id: "imovel-04",
    code: "0053",
    title: "Casa Condomínio Novo Leblon",
    price: "R$ 14.200.000",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Casa de Condomínio",
    bedrooms: 4,
    bathrooms: 4,
    suites: 4,
    garage: 3,
    area: "720",
    image: "/images/properties/imovel-04/main.webp",
    description:
      "Residência sofisticada no exclusivo Novo Leblon, com integração total entre os ambientes internos e externos. Piscina com raia, jardim paisagístico e acabamentos importados em cada detalhe.",
    features: [
      "Acabamentos importados",
      "Piscina com raia",
      "Jardim paisagístico",
      "Automação",
    ],
    amenities: [
      "Piscina com raia",
      "Churrasqueira",
      "Jardim paisagístico",
      "Segurança 24h",
    ],
    gallery: generateGallery("imovel-04"),
  },
  {
    id: "imovel-05",
    code: "0054",
    title: "Casa Moderna Barra da Tijuca",
    price: "R$ 9.800.000",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 4,
    suites: 3,
    garage: 2,
    area: "650",
    image: "/images/properties/imovel-05/main.webp",
    description:
      "Residência contemporânea com arquitetura clean e linhas retas. Amplos espaços integrados, pé-direito duplo na sala, piscina com deck de madeira e área gourmet completa.",
    features: [
      "Pé-direito duplo",
      "Deck de madeira",
      "Área gourmet completa",
      "Automação",
    ],
    amenities: ["Piscina", "Deck de madeira", "Área gourmet", "Churrasqueira"],
    gallery: generateGallery("imovel-05"),
  },
  {
    id: "imovel-06",
    code: "0055",
    title: "Cobertura Garden Park Premium",
    price: "R$ 12.400.000",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Cobertura",
    bedrooms: 4,
    bathrooms: 5,
    suites: 4,
    garage: 3,
    area: "820",
    image: "/images/properties/imovel-06/main.webp",
    description:
      "Cobertura garden com amplo terraço privativo e vista livre para área verde. Projeto de interiores assinado, cozinha gourmet integrada e suíte master com closet e banheiro de luxo.",
    features: [
      "Terraço privativo",
      "Vista para área verde",
      "Projeto de interiores assinado",
      "Cozinha gourmet integrada",
    ],
    amenities: ["Terraço garden", "Churrasqueira", "Segurança 24h", "Academia"],
    gallery: generateGallery("imovel-06"),
  },
];
