import {motion} from 'framer-motion';

const Home = () => {
  return (
    <div>   
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
              <div
                className="min-h-screen bg-cover bg-center w-full z-0"
                style={{ backgroundImage: "url(./images/fondo1.jpg)" }}
              >
              </div>
            </motion.div>
            <div className="container mx-auto absolute inset-0 flex items-center lg:px-40 sm:px-10">

                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-1/2 text-left"
                >
                  <h1 className="lg:text-7xl font-bold text-white py-6 sm:text-5xl">
                    Construyendo <br /> tu vida
                  </h1>
                  <button className="lg:text-lg mt-4 px-6 py-3 bg-homecolor text-white rounded-full font-bold shadow-md hover:bg-blue-900 sm:text-sm">
                    Conocer más
                  </button>
                </motion.div>
 
            </div>

              <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute bottom-10 lg:right-52 sm:right-10 m-4 p-8 bg-white rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl shadow-lg space-y-4"
                >   
                <div className="flex space-x-4">
                  <i className="ri-ruler-fill text-2xl text-blue-600"></i>
                  <h2 className="text-lg font-semibold text-gray-600">
                    Obras Ejecutadas
                  </h2>
                  </div>
                  <div className="w-full mx-auto border border-blue-400"></div>
                  <p className="text-blue-800 lg:text-3xl font-bold sm:text-xl">+350 ejecutadas</p>
              </motion.div>

        </div>
  )
}

export default Home