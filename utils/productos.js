const products = [
  {
    id: 1,
    nameNormalidazo: 'Beijinho',
    name: 'Beijinho',
    ingredientes: ['Leche Condensada', 'Coco Rallado', 'Mantequilla'],
    precio: [15, 25, 35], // precios para diferentes cantidades
    tamano: ["Grande", "Chico"], // unidades por porción
    descripcion: 'Tradicional Brasiliuseño hecho con leche condensada y coco.',
    image: '/Beijinho 1.jpg',
    isDulce: true, // Indica que es un dulce
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 2,
    nameNormalidazo: 'Bicho-de-Pe',
    name: 'Bicho de Pé',
    ingredientes: ['Leche Condensada', 'Maní', 'Chocolate'],
    precio: [18, 30, 42], 
    tamano: ["Grande", "Chico"],
    descripcion: 'Delicioso Brasiliuseño con maní y chocolate.',
    image: '/Bicho de pé 1.jpg',
    isDulce: true, // Indica que es un dulce,
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    nameNormalidazo: 'Bolo-de-Cenoura',
    name: 'Bolo de Cenoura',
    ingredientes: ['Zanahoria', 'Harina', 'Azúcar', 'Huevo', 'Chocolate'],
    precio: [180, 280, 380],
    tamano: ["Grande", "Chico"],
    descripcion: 'Esponjoso pastel de zanahoria con cobertura de chocolate.',
    image: '/Bolo cenoura chico2 .jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 4,
    nameNormalidazo: 'Brigadeiro',
    name: 'Brigadeiro',
    ingredientes: ['Leche Condensada', 'Cacao en polvo', 'Mantequilla', 'Granulado'],
    precio: [12, 20, 28],
    tamano: ["Grande", "Chico"],
    descripcion: 'El dulce más famoso de Brasil, irresistible brigadeiro.',
    image: '/Brigadeiro.jpg',
    isDulce: true, // Indica que es un dulce
    descripcion: 'Brigadeiro hecho de chocolate semiamargo, típico dulce presente en todos los cumpleaños brasileños.'
  },
  {
    id: 5,
    nameNormalidazo: 'Pastel-de-Limon',
    name: 'Pastel de Limón',
    ingredientes: ['Limón', 'Harina', 'Azúcar', 'Huevo', 'Crema'],
    precio: [200, 300, 400],
    tamano: ["Grande", "Chico"],
    descripcion: 'Refrescante pastel de limón con crema suave y esponjosa.',
    image: '/Pastel de Limón CH.jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Pastel de limón: suave, esponjoso y con su característico color verde, con una refrescante cobertura de mousse de limón.'
  },
  {
    id: 6,
    nameNormalidazo: 'Pastel-de-Naranja-Pequeno',
    name: 'Pastel de Naranja Pequeño',
    ingredientes: ['Naranja', 'Harina', 'Azúcar', 'Huevo', 'Ralladura'],
    precio: [150, 220, 300],
    tamano: ["Grande", "Chico"],
    descripcion: 'Pastel individual de naranja con sabor cítrico intenso.',
    image: '/Pastel de Naranja Pequeño .jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Pastel de naranja natural jugoso, bañado en un almíbar de naranja dulce y aromático.'
  },
  {
    id: 7,
    nameNormalidazo: 'Pastel-de-Naranja',
    name: 'Pastel de Naranja',
    ingredientes: ['Naranja', 'Harina', 'Azúcar', 'Huevo', 'Glaseado'],
    precio: [220, 320, 420],
    tamano: ["Grande", "Chico"],
    descripcion: 'Jugoso pastel de naranja con glaseado cítrico.',
    image: '/Pastel Naranja.jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Pastel de naranja natural jugoso, bañado en un almíbar de naranja dulce y aromático.'
  },
  {
    id: 8,
    nameNormalidazo: 'Pastel-Pao-de-Mel',
    name: 'Pastel Pão de Mel',
    ingredientes: ['Miel', 'Especias', 'Harina', 'Chocolate', 'Nueces'],
    precio: [190, 290, 390],
    tamano: ["Grande", "Chico"],
    descripcion: 'Tradicional pan de miel brasileño con chocolate y especias.',
    image: '/Pastel Pao de Mel Op2.jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Pastel de Pão de Mel, especiado y relleno con dulce de leche, cubierto con una irresistible capa de chocolate semiamargo.'
  },
  {
    id: 9,
    nameNormalidazo: 'Pastel-de-Zanahoria-Chico',
    name: 'Pastel de Zanahoria Chico',
    ingredientes: ['Zanahoria', 'Harina', 'Azúcar', 'Canela', 'Nueces'],
    precio: [160, 240, 320],
    tamano: ["Grande", "Chico"],
    descripcion: 'Pastel de zanahoria tamaño individual con canela y nueces.',
    image: '/Pastel Zanahoria CH.jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Pastel de zanahoria con 100% de zanahoria, esponjoso y con una cobertura de ganache de chocolate semiamargo.'
  },
  {
    id: 10,
    nameNormalidazo: 'Pastel-de-Zanahoria-Grande',
    name: 'Pastel de Zanahoria Grande',
    ingredientes: ['Zanahoria', 'Harina', 'Azúcar', 'Canela', 'Crema Cheese'],
    precio: [250, 350, 450],
    tamano: ["Grande", "Chico"],
    descripcion: 'Generoso pastel de zanahoria con cobertura de queso crema.',
    image: '/Pastel Zanahoria G.jpg',
    isDulce: false, // Indica que es un pastel
    descripcion: 'Pastel de zanahoria con 100% de zanahoria, esponjoso y con una cobertura de ganache de chocolate semiamargo.'
  },
];

export default products;