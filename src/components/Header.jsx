import React from 'react'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'

export default function Header() {
  return (
    <div>
        <header className='container mx-auto'>
            <nav className='flex justify-between items-center py-6'>
                <div>
                    <Image src="/images/logoCM.png" alt="Logo" 
                        width={100} height={100} className='rounded-full'/>
                    <h1></h1>
                </div>
                <div className='flex items-center'>
                    <div className='space-x-10 font-semibold'>
                        <a href="">Proyectos</a>
                        <a href="">Sostenibilidad</a>
                        <a href="">Innovación</a>
                        <i className="ri-menu-line text-2xl"></i>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
