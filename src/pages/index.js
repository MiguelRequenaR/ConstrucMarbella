import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
        <div>
            <div
              className="min-h-screen bg-cover bg-center w-full"
              style={{ backgroundImage: "url('/images/carrousel1.png')" }}
            >
            </div>
              <div className="container mx-auto absolute inset-0 flex items-center px-40">
                <div className="text-left"> {/* Envuelve el texto y el botón en un div */}
                  <h1 className="text-7xl font-bold text-white shadow-lg py-6">
                    Construyendo <br /> tu vida
                  </h1>
                  <button className="text-lg mt-4 px-6 py-3 bg-blue-800 text-white rounded-full shadow-md hover:bg-blue-600 ">
                    Conocer más
                  </button>
                </div>
              </div>
              <div className="absolute bottom-10 right-52 m-4 p-8 bg-white rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl shadow-lg space-y-4">
                <div className="flex space-x-4">
                  <i className="ri-ruler-fill text-2xl text-blue-600"></i>
                  <h2 className="text-lg font-semibold text-gray-600">Obras contruidas</h2>
                </div>
                <div className="w-full mx-auto border border-blue-400"></div>
                <p className="text-blue-800 text-3xl font-bold">+350 ejecutadas</p>
              </div>
            <div>
              asdghasdgh asdhasdh
            </div>
        </div>
    </div>
  );
}
