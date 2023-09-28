import Image from 'next/image'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div>
        <div className='bg-homecolor flex items-center px-20 py-10'>
            <div className='lg:border w-[40%] mx-auto sm:bg-transparent'></div>
            <div className='flex pr-10 font-bold lg:text-7xl sm:text-4xl'>
                <h1 className='text-white px-2 py-4'>
                    NOSOTROS
                </h1>
                <p className='text-cyan-400 px-2 py-4'>MARBELLA S.R.L.</p>
            </div>
        </div>
        <div className="bg-homecolor relative flex items-center pb-20 pt-10">
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="">
                    <Image src="/images/about.jpg" alt="about" width={1100} height={100} className="w-[1200px] rounded-r-3xl shadow-lg" />
                </div>
            </motion.div>         
            <div className="absolute left-1/2 p-5 bg-white rounded-3xl mr-[100px] w-[600px] border border-gray-300 shadow-xl">
                <h1 className="text-lg text-gray-700 pb-6">
                    Más de 23 años creciendo junto con el Perú en el sector de construcción de edificaciones siendo reconocidos por nuestraexcelencia. Nuestra experiencia y profesionalismo nos avalan como una empresa líder en el mercado, ofreciendo solucionesintegrales en cada proyecto que emprendemos.
                </h1>
                <button className='border py-2 px-2 rounded-xl text-white border-gray-400 bg-homecolor transition hover:bg-white hover:text-homecolor'> 
                    Conoce más
                </button>
            </div>  
        </div>
    </div>
  )
}
