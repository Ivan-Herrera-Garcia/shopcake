'use client'
import products from "@/utils/productos";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import CarritoSidebar from "@/components/carrito/CarritoSidebar";

import { AnimatePresence, motion } from "framer-motion";

export default function HomePage() {

  const dispatch = useDispatch();
  const [cantidad, setCantidad] = useState(1); // cantidad inicial

  const handleAddToCart = () => {
    if (cantidad < 1) return; // evitar agregar 0 o negativo
    dispatch(addToCart({ ...selectedProduct, quantity: cantidad }));
    setAnyProduct(true);
    setSelectedProduct(null); // cerrar modal
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const salados = products.filter((p) => !p.isDulce);

  const productosDulces = products.filter((p) => p.isDulce);

  const [showCart, setShowCart] = useState(false);

  const [tamano, settamano] = useState("chico"); // tamano inicial

  const [anyProduct, setAnyProduct] = useState(false);

  const pasteles = useRef(null);
  const dulces = useRef(null);
  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#606060]">

      <div className="flex items-center justify-between py-4 bg-[#244437] px-4">

        {/* Logo */}
        <div className="flex justify-center flex-1">
          <Image
            src="/logobrasilius.svg"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        {/* Botón carrito */}
        <button onClick={() => setShowCart(true)} className="relative hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-12 0a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
            />
          </svg>
          {/* Puedes agregar un contador de items */}
          {anyProduct && (
            <span className="absolute top-1 right-5 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cantidad}
            </span>
          )}
        </button>

        {/* AnimatePresence detecta mount/unmount */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              className="absolute inset-0 flex justify-end z-50"
              style={{ backdropFilter: "blur(5px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white w-80 h-full shadow-2xl"
              >
                <CarritoSidebar onClose={() => setShowCart(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>      </div>

      <div className="flex-grow bg-white flex flex-col items-center justify-center px-4 py-6">

        {/* Navbar */}
        <nav className="flex justify-center w-full mb-6">
          <ul className="flex space-x-6 md:space-x-10 text-lg md:text-2xl font-bold">
            <li><a onClick={() => scrollToSection(pasteles)} className="principal hover:cursor-pointer" aria-label="Ir a la sección de pasteles" aria-labelledby="Ir a la sección de pasteles">Pasteles</a></li>
            {/* <li><a href="#" className="principal">Roscas</a></li> */}
            <li><a onClick={() => scrollToSection(dulces)} className="principal hover:cursor-pointer" aria-label="Ir a la sección de dulces" aria-labelledby="Ir a la sección de dulces">Dulces</a></li>
            {/* <li><a href="#" className="principal">Galeria</a></li> */}
          </ul>
        </nav>

        {/* Subtitulo */}
        <h2 className="text-center text-2xl font-bold mb-8 principal">
          Descubre Brasil de una manera{" "}
          <span className="secundario cursive">deliciosa</span>
        </h2>

        <div className="w-full max-w-7xl mb-12 relative flex flex-col items-center" ref={pasteles}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: "#nextSalados",
              prevEl: "#prevSalados",
              disabledClass: "swiper-button-disabled", // clase aplicada cuando no hay más
            }}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: "auto" },
            }}
            watchSlidesProgress
            watchOverflow
            className="!px-0 !mx-0 w-full"
          >
            {salados.map((product) => (
              <SwiperSlide
                key={product.name}
                className="!w-[250px] !m-0 !p-0 relative"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-[250px] h-[250px] object-cover rounded-none brightness-90"
                  onClick={() => setSelectedProduct({ ...product, tamano })}
                />
                <h3 className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow-md">
                  {product.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones flechas */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              id="prevSalados"
              className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 font-bold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaArrowLeft />
            </button>

            <button
              id="nextSalados"
              className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 font-bold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="flex justify-center w-full mb-6">
            <ul className="flex space-x-6 md:space-x-10 text-lg md:text-2xl font-bold">
              <li><a className="principal">Ver más</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-7xl mb-12 relative flex flex-col items-center" ref={dulces}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: "#nextDulces",
              prevEl: "#prevDulces",
              disabledClass: "swiper-button-disabled", // clase aplicada cuando no hay más
            }}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: "auto" },
            }}
            watchSlidesProgress
            watchOverflow
            className="!px-0 !mx-0 w-full"
          >
            {productosDulces.map((product) => (
              <SwiperSlide
                key={product.name}
                className="!w-[250px] !m-0 !p-0 relative"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-[250px] h-[250px] object-cover rounded-none brightness-90"
                  onClick={() => setSelectedProduct(product)}
                />
                <h3 className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow-md">
                  {product.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones flechas */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              aria-label="Desplazamiento izquierdo en seccion de dulces"
              aria-labelledby="Desplazamiento izquierdo en seccion de dulces"
              id="prevDulces"
              className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 font-bold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaArrowLeft />
            </button>

            <button
              aria-label="Desplazamiento derecho en seccion de dulces"
              aria-labelledby="Desplazamiento derecho en seccion de dulces"
              id="nextDulces"
              className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 font-bold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="flex justify-center w-full mb-6">
            <ul className="flex space-x-6 md:space-x-10 text-lg md:text-2xl font-bold">
              <li><a className="principal">Ver más</a></li>
            </ul>
          </div>        
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl w-[95%] max-w-3xl relative flex flex-col md:flex-row gap-6">
              {/* Botón cerrar */}
              <button
                aria-label="Cerrar modal"
                aria-labelledby="Cerrar modal"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl hover:cursor-pointer"
              >
                ✖
              </button>

              {/* Imagen */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={400}
                  height={400}
                  objectFit="contain"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Info producto */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-gray-600 mt-2">{selectedProduct.description}</p>

                  {/* tamanos */}
                  <div className="mt-4 flex gap-6">
                    <div
                      aria-label="Seleccionar tamaño chico"
                      aria-labelledby="Seleccionar tamaño chico"
                      onClick={() => settamano("chico")}
                      className={`hover:cursor-pointer flex flex-col items-center border p-3 rounded-lg w-28 ${tamano === "chico" ? "border-green-600" : "border-gray-300"
                        }`}
                    >
                      <Image src="/PASTEL_CHICO.svg" alt="Pastel Chico" width={100} height={100} className="mb-2" />
                      <span className="font-semibold">Chico</span>
                      <span className="text-xs text-gray-500">(2 a 4 personas)</span>
                    </div>

                    <div
                      aria-label="Seleccionar tamaño grande"
                      aria-labelledby="Seleccionar tamaño grande"
                      onClick={() => settamano("grande")}
                      className={`hover:cursor-pointer flex flex-col items-center border p-3 rounded-lg w-28 ${tamano === "grande" ? "border-green-600" : "border-gray-300"
                        }`}
                    >
                      <Image src="/PASTEL_GRANDE.svg" alt="Pastel Grande" width={100} height={100} className="mb-2" />
                      <span className="font-semibold">Grande</span>
                      <span className="text-xs text-gray-500">(4 a 7 personas)</span>
                    </div>
                  </div>

                  {/* Ingredientes */}
                  <div className="mt-6">
                    <p className="font-semibold">Acerca del postre:</p>
                    <p className="text-gray-600 mt-2">{selectedProduct.descripcion}</p>
                  </div>
                </div>

                {/* Cantidad elegida */}
                <div className="mt-4">
                  <p className="font-semibold">Cantidad:</p>
                  <input
                    aria-label="Cantidad de productos"
                    aria-labelledby="Cantidad de productos"
                    type="number"
                    min="1"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                  />
                </div>

                {/* Botones */}
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    aria-label="Agregar producto al carrito"
                    aria-labelledby="Agregar producto al carrito"
                    onClick={handleAddToCart}
                    className="bg-[#244437] hover:bg-[#1a332a] text-white py-2 rounded-md hover:cursor-pointer"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Imagen banner */}
        <div className="flex justify-center md:py-4 md:p-10 bg-white">
          <Image
            src="/GALERIA.png"
            alt="Galeria"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>


      {/* Footer */}
      <footer className="text-white py-4 bg-[#244437] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-6 bg-repeat-x"
          style={{
            backgroundSize: "52px 52px", // un poco más grande que 50px
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
          <p>&copy; 2025 Brasilius. Todos los derechos reservados.</p>
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