'use client'
import products from "@/utils/productos";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const [showAllDulces, setShowAllDulces] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const salados = products.filter((p) => !p.isDulce);
  const productosVisibles = showAll ? salados : salados.slice(0, 4);

  const productosDulces = products.filter((p) => p.isDulce);
  const productosDulcesVisibles = showAllDulces ? productosDulces : productosDulces.slice(0, 4);

  return (
    <main className="min-h-screen flex flex-col bg-[#606060]">
      <div className="flex-grow bg-white flex flex-col items-center justify-center px-4 py-6">

        {/* Navbar */}
        <nav className="flex justify-center w-full mb-6">
          <ul className="flex space-x-6 md:space-x-10 text-lg md:text-2xl font-bold">
            <li><a href="#" className="principal">Pasteles</a></li>
            <li><a href="#" className="principal">Roscas</a></li>
            <li><a href="#" className="principal">Dulces</a></li>
            <li><a href="#" className="principal">Galeria</a></li>
          </ul>
        </nav>

        {/* Subtitulo */}
        <h2 className="text-center text-2xl font-bold mb-8 principal">
          Descubre Brasil de una manera{" "}
          <span className="secundario cursive text-[32px]">deliciosa</span>
        </h2>

        {/* Sección Productos Salados */}
        <div className="w-full max-w-7xl mb-12">
          <div
            className={`transition-all duration-500 ease-in-out ${
              showAll
                ? "grid mx-auto w-full sm:w-[90%] lg:w-1/2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center"
                : "flex w-full overflow-x-auto gap-4 justify-center touch-scroll"
            }`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {productosVisibles.map((product) => (
              <div
                key={product.name + "-salado"}
                className={`relative cursor-pointer transition-transform duration-300 hover:opacity-80 ${
                  showAll ? "" : "flex-shrink-0"
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-[250px] h-[250px] object-cover brightness-90 rounded-lg"
                />
                <h3 className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow-md">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 mx-auto hover:cursor-pointer shadow-2xl transition-colors hover:bg-gray-300"
          >
            {showAll ? "Mostrar menos" : "Mostrar más"}
            <span
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* Sección Productos Dulces */}
        <div className="w-full max-w-7xl mb-12">
          <div
            className={`transition-all duration-500 ease-in-out ${
              showAllDulces
                ? "grid mx-auto w-full sm:w-[90%] lg:w-1/2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center"
                : "flex w-full overflow-x-auto gap-4 justify-center touch-scroll"
            }`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {productosDulcesVisibles.map((product) => (
              <div
                key={product.name + "-dulce"}
                className={`relative cursor-pointer transition-transform duration-300 hover:opacity-80 ${
                  showAllDulces ? "" : "flex-shrink-0"
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-[250px] h-[250px] object-cover brightness-90 rounded-lg"
                />
                <h3 className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow-md">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAllDulces(!showAllDulces)}
            className="mt-4 px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 mx-auto hover:cursor-pointer shadow-2xl transition-colors hover:bg-gray-300"
          >
            {showAllDulces ? "Mostrar menos" : "Mostrar más"}
            <span
              className={`transition-transform duration-300 ${
                showAllDulces ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
              >
                ✖
              </button>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={250}
                height={250}
                className="w-full h-64 object-cover rounded"
              />
              <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
              <p className="text-gray-700 mt-2">
                Aquí iría la descripción o detalles del producto.
              </p>
              <button
                onClick={() => alert("Producto agregado al carrito")}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
              >
                Continuar compra
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-white py-4 bg-[#244437] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-6 bg-[length:50px_50px] bg-repeat-x"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                transparent 0%,
                transparent 25%,
                white 25%,
                white 75%,
                transparent 75%,
                transparent 100%
              )
            `,
          }}
        />
        <div className="container mx-auto text-center mt-8 relative z-10">
          <h2 className="cursive text-3xl italic">Contactanos</h2>
          <p>&copy; 2023 Brasilius. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style jsx>{`
        /* Para suavizar el scroll en iOS */
        .touch-scroll {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </main>
  );
}