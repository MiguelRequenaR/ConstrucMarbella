import {motion} from 'framer-motion';

const Home = () => {
  return (
    <div>
            <div
              className="min-h-screen bg-cover bg-center w-full z-0"
              style={{ backgroundImage: "url(./images/fondo1.jpg)" }}
            >
            </div>
            <div className="container mx-auto absolute inset-0 flex items-center px-40">

                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-1/2 text-left"
                >
                  <h1 className="text-7xl font-bold text-white py-6">
                    Construyendo <br /> tu vida
                  </h1>
                  <button className="text-lg mt-4 px-6 py-3 bg-homecolor text-white rounded-full shadow-md hover:bg-blue-900 ">
                    Conocer más
                  </button>
                </motion.div>
 
            </div>

              <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute bottom-10 right-52 m-4 p-8 bg-white rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl shadow-lg space-y-4"
                >   
                <div className="flex space-x-4">
                  <i className="ri-ruler-fill text-2xl text-blue-600"></i>
                  <h2 className="text-lg font-semibold text-gray-600">
                    Obras Ejecutadas
                  </h2>
                  </div>
                  <div className="w-full mx-auto border border-blue-400"></div>
                  <p className="text-blue-800 text-3xl font-bold">+350 ejecutadas</p>
              </motion.div>

        </div>
  )
}

export default Home