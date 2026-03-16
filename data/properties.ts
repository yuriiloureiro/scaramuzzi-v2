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
    code: "0040",
    title: "Casa Triplex com 4 Suítes – Projeto Aurora Grei",
    price: "R$ 16.500.000,00",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Casa Triplex",
    bedrooms: 4,
    bathrooms: 7,
    suites: 4,
    garage: 4,
    area: "837",
    image: "/images/properties/imovel-02/main.webp",
    description: `CASA TRIPLEX COM 4 SUÍTES, PROJETO AURORA GREI, À VENDA NO CONDOMÍNIO SANTA MÔNICA JARDINS NA BARRA DA TIJUCA COM SEGURANÇA 24 HORAS E ÁREA DE LAZER.

1° Pavimento: Hall de entrada com porta pivotante imponente, ampla sala em vários ambientes com captação de luz natural e pé-direito de aproximadamente 7m. Suíte térrea convertida em escritório, lavabo decorado, cozinha planejada, lavanderia e dependência.

2° Pavimento: Hall de acesso às suítes e copa de apoio. Suítes com closet e varandas. Suíte máster com cerca de 100m², closet máster com claraboia e jardim natural e salão de banho com hidromassagem.

3° Pavimento: Salão multiúso (home theater, academia etc.), copa, lavabo e varanda com hidromassagem e área para receber.

Área externa: Cinema com degrau iluminado, espaço gourmet completo (churrasqueira, forno a lenha e bancada), piscina iluminada, sauna com vista e jardim assinado pela Landscap.

OBS: Imóvel será vendido apenas com móveis fixos.`,
    features: [
      "Projeto Aurora Grei",
      "Porta pivotante imponente",
      "Pé-direito aproximado de 7m",
      "Porcelanato PortoBello (1.20 x 1.20)",
      "Suíte térrea adaptada para escritório",
      "Suíte máster ~100m²",
      "Closet máster com claraboia e jardim natural",
      "Salão de banho com cubas individuais e hidromassagem",
      "Salão multiúso no 3º pavimento",
      "Varanda com hidromassagem",
      "Cinema privativo com degrau iluminado",
      "Espaço gourmet completo com churrasqueira e forno a lenha",
      "Piscina com iluminação",
      "Sauna com vista para o lazer",
      "Paisagismo assinado (Landscap)",
    ],
    amenities: [
      "Piscina iluminada",
      "Hidromassagem",
      "Sauna",
      "Cinema privativo",
      "Área gourmet",
      "Churrasqueira",
      "Forno a lenha",
      "Jardim paisagístico",
      "Segurança 24h",
      "Varandas panorâmicas",
    ],
    gallery: generateGallery("imovel-02"),
  },
  {
    id: "imovel-03",
    code: "0015",
    title: "Casa Triplex Del Lago",
    price: "R$ 18.000.000,00",
    location: "Barra da Tijuca, Rio de Janeiro",
    type: "Casa Triplex",
    bedrooms: 5,
    bathrooms: 7,
    suites: 5,
    garage: 4,
    area: "900",
    image: "/images/properties/imovel-03/main.webp",
    description: `CASA TRIPLEX COM 5 SUÍTES, À VENDA NO CONDOMÍNIO DEL LAGO NA BARRA DA TIJUCA COM SEGURANÇA 24 HORAS, LAZER COMPLETO E TRANSPORTE PRÓPRIO.

1° Pavimento: Hall com pé-direito duplo e lago iluminado externo com acesso à sala por piso de vidro. Lavabo, ampla sala integrada à copa-cozinha, área externa, lavanderia, área de serviço e dependência.

2° Pavimento: Sala íntima com painel de madeira. Quatro quartos com closets, incluindo suíte master com salão de banho, bancada dupla e banheira de imersão.

3° Pavimento: Espaço com iluminação natural e duas varandas externas com vistas (incluindo Pedra da Gávea), ideal para cinema, brinquedoteca, escritório etc.

Lazer: Paisagismo, jardim vertical, piscina aquecida com deck molhado, hidromassagem, sauna e espaço gourmet com churrasqueira e forno a lenha integrado à cozinha.

Diferenciais técnicos: barrilete pressurizado por cômodo e 3 cisternas de 30.000L (captação de chuva para irrigação e lavagem, abastecimento sanitário e abastecimento CEDAE). Piscina e hidromassagem com controle por aplicativo (pH, temperatura e iluminação). Automação de iluminação no 1º andar e suíte do casal com possibilidade de upgrade.`,
    features: [
      "Condomínio Del Lago com lazer completo",
      "Hall com pé-direito duplo",
      "Lago iluminado externo + piso de vidro",
      "Sala integrada à copa/cozinha",
      "Suíte master com banheira de imersão",
      "2 varandas no 3º pavimento (vista Pedra da Gávea)",
      "Piscina aquecida com deck molhado",
      "Jardim vertical e paisagismo",
      "Espaço gourmet com churrasqueira e forno a lenha",
      "Barrilete pressurizado por cômodo",
      "3 cisternas de 30.000L (captação de chuva e abastecimento)",
      "Controle via app: pH, temperatura e iluminação (piscina/hidro)",
      "Automação de iluminação (1º andar e suíte do casal)",
    ],
    amenities: [
      "Piscina aquecida",
      "Deck molhado",
      "Hidromassagem",
      "Sauna",
      "Área gourmet",
      "Churrasqueira",
      "Forno a lenha",
      "Jardim vertical",
      "Segurança 24h",
      "Varandas com vista",
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
