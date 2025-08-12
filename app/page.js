import products from "@/utils/productos";

export default function HomePage() {
  return (
    <main className=" h-[90vh] place-content-center bg-[#606060]">
      <div className="bg-white w-full h-full">

        {/* Seccion navbar */}
        <nav className="flex place-content-center w-full  items-center">
          <ul className="flex place-content-center space-x-10">
            <li><a href="#" className="principal text-2xl font-bold">Pasteles</a></li>
            <li><a href="#" className="principal text-2xl font-bold">Roscas</a></li>
            <li><a href="#" className="principal text-2xl font-bold">Dulces</a></li>
            <li><a href="#" className="principal text-2xl font-bold">Galeria</a></li>
          </ul>
        </nav>

        {/* Subtitulo : Descubre Brasil de una manera deliciosa */}
        <h2 className="text-center text-2xl font-bold mt-4 principal">Descubre Brasil de una manera <span className="secundario cursive text-[32px]">deliciosa</span></h2>

        <div className="w-full flex overflow-x-auto place-content-center">
          {products.slice(0, 7).map((product) => (
            !product.isDulce && (
              <div key={product.name+"-salado"} className="flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-[300px] h-[300px] filter-[brightness(0.8)]"/>
                {/* Texto relativo para evitar la redimension de las imagenes */}
                <h3 className="absolute text-center text-lg font-bold -mt-8 ml-2 text-white">{product.name}</h3>
              </div>
            )
          ))}
        </div>
        <br></br>
        <div className="w-full flex overflow-x-auto place-content-center">
          {products.slice(0, 7).map((product) => (
            product.isDulce && (
              <div key={product.name+"-dulce"} className="flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-[300px] h-[300px] filter-[brightness(0.8)]"/>
                {/* Texto relativo para evitar la redimension de las imagenes */}
                <h3 className="absolute text-center text-lg font-bold -mt-8 ml-2 text-white">{product.name}</h3>
              </div>
            )
          ))}
        </div>
      </div>
      <footer className="text-white py-4 bg-[#244437]">
        <div className="container mx-auto text-center">
          <h2 className="cursive text-3xl italic">Contactanos</h2>
          <p>&copy; 2023 Brasilius. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}