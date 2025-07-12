const products = [
  {
    nameNormalidazo: 'Beijinho',
    name: 'Beijinho',
    ingredientes: ['leche condensada', 'coco rallado', 'mantequilla'],
    precio: [15, 25, 35], // precios para diferentes cantidades
    porciones: [12, 24, 36], // unidades por porción
    descripcion: 'Tradicional dulce brasileño hecho con leche condensada y coco.',
    image: '/Beijinho 1.jpg',
    isDulce: true, // Indica que es un dulce
  },
  {
    nameNormalidazo: 'Bicho-de-Pe',
    name: 'Bicho de Pé',
    ingredientes: ['leche condensada', 'maní', 'chocolate'],
    precio: [18, 30, 42], 
    porciones: [10, 20, 30],
    descripcion: 'Delicioso dulce brasileño con maní y chocolate.',
    image: '/Bicho de pé 1.jpg',
    isDulce: true, // Indica que es un dulce
  },
  {
    nameNormalidazo: 'Bolo-de-Cenoura',
    name: 'Bolo de Cenoura',
    ingredientes: ['zanahoria', 'harina', 'azúcar', 'huevo', 'chocolate'],
    precio: [180, 280, 380],
    porciones: [8, 12, 16],
    descripcion: 'Esponjoso pastel de zanahoria con cobertura de chocolate.',
    image: '/Bolo cenoura chico2 .jpg',
    isDulce: false, // Indica que es un pastel
  },
  {
    nameNormalidazo: 'Brigadeiro',
    name: 'Brigadeiro',
    ingredientes: ['leche condensada', 'cacao en polvo', 'mantequilla', 'granulado'],
    precio: [12, 20, 28],
    porciones: [15, 30, 45],
    descripcion: 'El dulce más famoso de Brasil, irresistible brigadeiro.',
    image: '/Brigadeiro.jpg',
    isDulce: true, // Indica que es un dulce
  },
  {
    nameNormalidazo: 'Pastel-de-Limon',
    name: 'Pastel de Limón',
    ingredientes: ['limón', 'harina', 'azúcar', 'huevo', 'crema'],
    precio: [200, 300, 400],
    porciones: [8, 12, 16],
    descripcion: 'Refrescante pastel de limón con crema suave y esponjosa.',
    image: '/Pastel de Limón CH.jpg',
    isDulce: false, // Indica que es un pastel
  },
  {
    nameNormalidazo: 'Pastel-de-Naranja-Pequeno',
    name: 'Pastel de Naranja Pequeño',
    ingredientes: ['naranja', 'harina', 'azúcar', 'huevo', 'ralladura'],
    precio: [150, 220, 300],
    porciones: [6, 10, 14],
    descripcion: 'Pastel individual de naranja con sabor cítrico intenso.',
    image: '/Pastel de Naranja Pequeño .jpg',
    isDulce: false, // Indica que es un pastel
  },
  {
    nameNormalidazo: 'Pastel-de-Naranja',
    name: 'Pastel de Naranja',
    ingredientes: ['naranja', 'harina', 'azúcar', 'huevo', 'glaseado'],
    precio: [220, 320, 420],
    porciones: [8, 12, 16],
    descripcion: 'Jugoso pastel de naranja con glaseado cítrico.',
    image: '/Pastel Naranja.jpg',
    isDulce: false, // Indica que es un pastel
  },
  {
    nameNormalidazo: 'Pastel-Pao-de-Mel',
    name: 'Pastel Pão de Mel',
    ingredientes: ['miel', 'especias', 'harina', 'chocolate', 'nueces'],
    precio: [190, 290, 390],
    porciones: [8, 12, 16],
    descripcion: 'Tradicional pan de miel brasileño con chocolate y especias.',
    image: '/Pastel Pao de Mel Op2.jpg',
    isDulce: false, // Indica que es un pastel
  },
  {
    nameNormalidazo: 'Pastel-de-Zanahoria-Chico',
    name: 'Pastel de Zanahoria Chico',
    ingredientes: ['zanahoria', 'harina', 'azúcar', 'canela', 'nueces'],
    precio: [160, 240, 320],
    porciones: [6, 10, 14],
    descripcion: 'Pastel de zanahoria tamaño individual con canela y nueces.',
    image: '/Pastel Zanahoria CH.jpg',
    isDulce: false, // Indica que es un pastel
  },
  {
    nameNormalidazo: 'Pastel-de-Zanahoria-Grande',
    name: 'Pastel de Zanahoria Grande',
    ingredientes: ['zanahoria', 'harina', 'azúcar', 'canela', 'crema cheese'],
    precio: [250, 350, 450],
    porciones: [10, 15, 20],
    descripcion: 'Generoso pastel de zanahoria con cobertura de queso crema.',
    image: '/Pastel Zanahoria G.jpg',
    isDulce: false, // Indica que es un pastel
  },
];

export default products;