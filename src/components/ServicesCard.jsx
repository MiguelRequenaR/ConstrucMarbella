import React from 'react'
import Image from 'next/image'

export default function ServicesCard({imageSrc, subTitle}) {
  return (
    <div>
        <div className="flex justify-around bg-homecolor py-5">
            <div className="w-[300px] rounded-3xl overflow-hidden shadow-2xl duration-200 group hover:bg-white">
                <Image src={imageSrc} alt="fondo" width={400} height={50}/>
                <div className="px-10 py-4">
                    <h1 className="font-bold text-xl text-white pb-3 group-hover:text-homecolor">
                        {subTitle}
                    </h1>
                </div>
                <div className="flex justify-end items-end py-4 px-10">
                    <a href="#" className="flex items-center">
                      <h1 className="px-4 text-white font-bold group-hover:text-homecolor">Ver más</h1>
                      <i className="ri-add-fill bg-white rounded-3xl px-1 group-hover:bg-cyan-400 group-hover:text-white"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
