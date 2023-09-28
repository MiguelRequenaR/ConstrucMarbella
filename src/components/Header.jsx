import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import {motion} from 'framer-motion'

export default function Header() {
  return (
    <motion.div
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 1}}
        className='fixed z-10 w-full'
    >
        <header className='bg-white px-10'>
            <nav className='container mx-auto flex justify-between items-center py-3'>
                <div className='flex items-center'>
                    <Image src="/images/logoCM.png" alt="Logo" 
                        width={100} height={100} className='rounded-full'/>
                    <h1 className='text-gray-600 font-semibold px-5 lg:text sm:text-lg'>Constructora Marbella</h1>
                </div>
                <div className='flex flew-row-1 items-center'>
                    <div className= 'lg:flex sm:hidden'>
                        <div className='space-x-10 font-semibold text-gray-600'>
                            <a href="#" className='hover:text-gray-800'>Proyectos</a>
                            <a href="#" className='hover:text-gray-800'>Sostenibilidad</a>
                            <a href="#" className='hover:text-gray-800'>Innovación</a>
                        </div>
                    </div>
                    <i className="text-black ri-menu-line text-2xl ml-10"></i>
                </div>
            </nav>
        </header>
    </motion.div>
  )
}