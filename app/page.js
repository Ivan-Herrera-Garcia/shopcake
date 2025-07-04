'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function getMinSelectableDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1); // bloquea hoy y los próximos 3 días
  return date;
}

const COLORS = {
  primary: '#1e3932',
  secondary: '#d4e9e2',
  accent: '#00754a',
  background: '#f3f1e7',
  text: '#000000'
};

const products = [
  {
    name: 'Pastel de Chocolate',
    ingredientes: ['chocolate', 'harina', 'azúcar', 'huevo'],
    precio: [250, 350, 450], // precios para diferentes tamaños
    porciones: [8, 12, 16], // porciones para cada tamaño
    descripcion: 'Delicioso pastel de chocolate con cobertura de ganache.',
    image: '/cake_1.jpg', // chocolate cake
  },
  {
    name: 'Muffins de Arándano',
    ingredientes: ['arándano', 'harina', 'azúcar', 'huevo'],
    precio: [150, 200, 250], // precios para diferentes tamaños
    porciones: [6, 9, 12], // porciones para cada tamaño
    descripcion: 'Suaves muffins de arándano con un toque de canela.',
    image: '/cake_2.jpg', // blueberry muffins
  },
  {
    name: 'Cupcakes de Vainilla',
    ingredientes: ['vainilla', 'harina', 'azúcar', 'huevo'],
    precio: [120, 180, 240], // precios para diferentes tamaños
    porciones: [4, 6, 8], // porciones para cada tamaño
    descripcion: 'Esponjosos cupcakes de vainilla con crema de mantequilla.',
    image: '/cake_3.jpg', // vanilla cupcakes
  },
  {
    name: 'Cheesecake',
    ingredientes: ['queso crema', 'galleta', 'azúcar', 'huevo'],
    precio: [300, 400, 500], // precios para diferentes tamaños
    porciones: [10, 14, 18], // porciones para cada tamaño
    descripcion: 'Clásico cheesecake con base de galleta y mermelada de fresa.',
    image: '/cake_4.jpg', // cheesecake
  },
  {
    name: 'Tarta de Fresa',
    ingredientes: ['fresa', 'harina', 'azúcar', 'huevo'],
    precio: [280, 380, 480], // precios para diferentes tamaños
    porciones: [8, 12, 16], // porciones para cada tamaño
    descripcion: 'Fresca tarta de fresa con crema pastelera y masa quebrada.',
    image: '/cake_5.png', // strawberry tart
  },
];


export default function Home() {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [personas, setPersonas] = useState('');

  const openModal = (product) => {
    var productoCustom = {
      name: product.name,
      ingredientes: product.ingredientes,
      precio: [...product.precio, 'Personalizado'],
      porciones: [...product.porciones, 'Personalizado'],
      descripcion: product.descripcion,
      image: product.image
    }

    setSelectedProduct(productoCustom);
    setShowModal(true);
  };

  const handleSendWhatsApp = () => {

    var formatearFecha = (date) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Intl.DateTimeFormat('es-MX', options).format(date);
    };

    var formatearPersonas = personas === 'Personalizado' ? 'personalizado' : ("para "+personas+" personas."); // Si no se especifica, por defecto es 1 persona
    const mensaje = `Hola, quiero encargar el producto "${selectedProduct.name}" para el día ${formatearFecha(date)}, ${formatearPersonas}`;
    const url = `https://wa.me/5218711453898?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`min-h-screen`} style={{ backgroundColor: COLORS.background }}>
      <Navbar />
      <main className="p-8">
        <h2 className={`text-3xl font-bold text-[${COLORS.primary}] mb-6`}>Nuestros productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Card key={i} className="hover:shadow-xl cursor-pointer">
              <Image
                src={p.image}
                alt={p.name}
                width={500}
                height={300}
                className="w-full h-[200px] object-fill !rounded-2xl"
              />
              <CardContent>
                <h3 className={`text-lg font-semibold mt-2 text-[${COLORS.text}]}`}>{p.name}</h3>
                <p className={`text-sm text-[${COLORS.text}] mb-2`}>{p.descripcion}</p>
                <ul className={`text-sm text-[${COLORS.text}] mb-2`}>
                  <li><strong>Ingredientes:</strong> {p.ingredientes.join(', ')}</li>
                  <li><strong>Porciones:</strong> {p.porciones.join(', ')}</li>
                  <li><strong>Precios:</strong> {p.precio.map((price, index) => (
                    <span key={index}>
                      ${price} ({p.porciones[index]} porciones)
                      {index < p.precio.length - 1 ? ', ' : ''}
                    </span>
                  ))}</li>
                </ul>
                <button
                  className={`bg-[${COLORS.accent}] bg-green-700 mb-7 text-white font-semibold py-2 px-4 rounded hover:cursor-pointer hover:bg-green-800 transition-colors duration-200`}
                  onClick={() => openModal(p)}
                >
                  Encargar
                </button>

              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Encargar {selectedProduct.name}</h3>
            <label className="block mb-2 text-sm font-semibold">Selecciona una fecha:</label>
            <label className="block text-sm text-red-500">Las fechas en rojo son fechas no disponibles</label>
            <Calendar date={date} onChange={setDate} color={COLORS.accent} minDate={getMinSelectableDate()} />
            <label className="block mb-2 text-sm font-semibold">¿Para cuántas personas?</label>
            {
              selectedProduct.porciones.map((porciones, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`porciones-${index}`}
                    name="porciones"
                    value={porciones}
                    onChange={(e) => setPersonas(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`porciones-${index}`} className="text-sm text-gray-700">
                    {porciones === 'Personalizado' ? (
                      <input
                        type="number"
                        min="1"
                        className="w-16 border border-gray-300 p-1 rounded"
                        placeholder="Ej. 12"
                        onChange={(e) => setPersonas(e.target.value)}
                      />
                    ) : (
                      <>
                        {porciones} porciones - ${selectedProduct.precio[index]}
                      </>
                    )}
                  </label>
                </div>
              ))
            }
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 hover:cursor-pointer transition-colors duration-200"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 hover:cursor-pointer transition-colors duration-200"
                onClick={handleSendWhatsApp}
              >
                Enviar a WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

