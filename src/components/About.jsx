import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div>
        <div className='bg-homecolor flex items-center px-20 py-10'>
            {/* <div className='border w-full mx-auto'></div> */}
            <div className='flex pr-10 animate-marquee'>
                <h1 className='text-white px-2 py-4 text-7xl'>
                    NOSOTROS
                </h1>
                <p className='text-cyan-400 text-7xl px-2 py-4'>MARBELLA S.R.L.</p>
            </div>
        </div>
        <div className="bg-homecolor relative overflow-hidden flex items-center">
            <div className="">
                <Image src="/images/about.jpg" alt="about" width={1200} height={100} className="rounded-r-3xl mb-10" />
            </div>
            <div className="absolute left-1/2 p-10 bg-white rounded-l-3xl">
                <h1 className="text-xl text-gray-700 pb-6">
                Más de 23 años creciendo junto con el Perú en el sector de construcción de edificaciones siendo reconocidos por nuestra excelencia. Nuestra experiencia y profesionalismo nos avalan <br />como una empresa líder en el mercado, ofreciendo soluciones integrales en cada proyecto que emprendemos.
                </h1>
                <button className='border py-2 px-2 rounded-xl border-homecolor text-white bg-homecolor hover:bg-white hover:text-homecolor'> 
                    Conoce más
                </button>
            </div>
        </div>
    </div>
  )
}
