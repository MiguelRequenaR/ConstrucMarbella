import React from 'react'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'

export default function Header() {
  return (
    <div className='fixed w-full'>
        <header className='w-full bg-white'>
            <nav className='container mx-auto flex justify-between items-center py-3'>
                <div className='flex items-center'>
                    <Image src="/images/logoCM.png" alt="Logo" 
                        width={100} height={100} className='rounded-full'/>
                    <h1 className='text-gray-600 text-2xl font-semibold px-5'>Constructora Marbella</h1>
                </div>
                <div className='flex items-center'>
                    <div className='space-x-10 font-semibold text-gray-600 '>
                        <a href="">Proyectos</a>
                        <a href="">Sostenibilidad</a>
                        <a href="">Innovación</a>
                        <i className="text-black ri-menu-line text-2xl"></i>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
