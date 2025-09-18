"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./../../store/cartSlice"; // 👈 importa tu acción
import { X } from "lucide-react"; // icono más bonito
import Image from "next/image";

export default function CarritoSidebar({ onClose }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
  // Crear mensaje para WhatsApp
  const mensaje = encodeURIComponent(
    items.map((item) => `${item.name} x${item.quantity} - Tamaño: ${item.tamano}`).join("\n")
  );
  const phoneNumber = '528713561876';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensaje}`;

  return (
    <div className="absolute inset-0 flex justify-end z-50" style={{ backdropFilter: "blur(5px)" }}>
      <div className="ml-auto w-96 bg-white h-full p-6 flex flex-col shadow-xl rounded-l-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-2xl font-bold text-gray-800">🛒 Carrito</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition hover:cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Productos */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              El carrito está vacío
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <div className="flex gap-2">
                  <Image
                    width={64}
                    height={64}
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                    aria-labelledby={"Imagen del producto " + item.name}
                    aria-label={"Imagen del producto " + item.name}
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Tamaño: {item.tamano}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <button
                    aria-label={"Remover producto del carrito " + item.name}
                    aria-labelledby={"Remover producto del carrito " + item.name}
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 font-bold hover:cursor-pointer"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer con total y botón */}
        {items.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <a
              aria-labelledby="Enviar pedido por WhatsApp"
              aria-label="Enviar pedido por WhatsApp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition hover:cursor-pointer"
            >
              Enviar pedido por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
