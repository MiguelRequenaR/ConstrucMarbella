import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'

export const CardManagement = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-20'>
            <h1 className='text-3xl font-semibold text-gray-800'>
                Tecnología e Innovación en cada proyecto
            </h1>
            <div className='bg-white space-x-5'>
                <i class="ri-arrow-left-line border text-homecolor border-homecolor rounded-full p-4
                            duration-200 hover:bg-cyan-400 hover:text-white hover:border-cyan-400"></i>
                <i class="ri-arrow-right-line border text-homecolor border-homecolor rounded-full p-4
                            duration-200 hover:bg-cyan-400 hover:text-white hover:border-cyan-400"></i>
            </div>
        </div>
        
    </div>
 )
}
