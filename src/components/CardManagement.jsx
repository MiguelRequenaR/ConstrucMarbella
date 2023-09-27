import Image from 'next/image'


export const CardManagement = () => {
  return (
    <div className='bg-white'>
        <div className='flex justify-between items-center p-20'>
            <h1 className='text-3xl font-semibold text-gray-800'>
                Conoce nuestras novedades
            </h1>
            <div className='bg-white space-x-5'>
                <button className="border bg-[#00c2b6] text-white py-2 px-3 font-bold rounded-lg shadow-md hover:bg-[#89ccc8]">
                    Visita nuestro blog
                </button>
            </div>
        </div>
        <div className='flex justify-around items-center mb-20'>
            <div className='w-[400px] rounded-3xl overflow-hidden shadow-2xl duration-200 group hover:bg-white'>
                <Image src='/images/card.jpg' alt='fondo' width={500} height={50}/>
                <div className='px-10 py-4'>
                    <h1 className='font-bold text-xl text-black pb-3 group-hover:text-[#00c2b6]'>
                        Construcción de la nueva carretera central
                    </h1>
                    <p className='text-black group-hover:text-[#00c2b6]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos porro in ipsa labore, fugit dicta consequatur necessitatibus obcaecati fugiat? Facilis sit libero repellendus ipsum exercitationem pariatur neque veniam at?.
                    </p>
                </div>
                <div className='flex justify-end items-end py-4 px-10'>
                    <a href='#' className='flex items-center'>
                      <h1 className='px-4 text-black font-bold group-hover:text-[#00c2b6]'>Ver más</h1>
                      <i className='ri-add-fill bg-white rounded-3xl px-1 group-hover:bg-[#00c2b6] group-hover:text-white'></i>
                    </a>
                </div>
            </div>
            <div className='w-[400px] rounded-3xl overflow-hidden shadow-2xl duration-200 group hover:bg-white'>
                <Image src='/images/card.jpg' alt='fondo' width={500} height={50}/>
                <div className='px-10 py-4'>
                    <h1 className='font-bold text-xl text-black pb-3 group-hover:text-[#00c2b6]'>
                        Construcción de la nueva carretera central
                    </h1>
                    <p className='text-black group-hover:text-[#00c2b6]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi atque amet iure debitis consectetur mollitia pariatur quasi, numquam sint minima soluta iusto alias quisquam animi doloremque, ad, ipsam expedita culpa!
                    </p>
                </div>
                <div className='flex justify-end items-end py-4 px-10'>
                    <a href='#' className='flex items-center'>
                      <h1 className='px-4 text-black font-bold group-hover:text-[#00c2b6]'>Ver más</h1>
                      <i className='ri-add-fill bg-white rounded-3xl px-1 group-hover:bg-[#00c2b6] group-hover:text-white'></i>
                    </a>
                </div>
            </div>
            <div className='w-[400px] rounded-3xl overflow-hidden shadow-2xl duration-200 group hover:bg-white'>
                <Image src='/images/card.jpg' alt='fondo' width={500} height={50}/>
                <div className='px-10 py-4'>
                    <h1 className='font-bold text-xl text-black pb-3 group-hover:text-[#00c2b6]'>
                        Construcción de la nueva carretera central
                    </h1>
                    <p className='text-black group-hover:text-[#00c2b6]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi atque amet iure debitis consectetur mollitia pariatur quasi, numquam sint minima soluta iusto alias quisquam animi doloremque, ad, ipsam expedita culpa!
                    </p>
                </div>
                <div className='flex justify-end items-end py-4 px-10'>
                    <a href='#' className='flex items-center'>
                      <h1 className='px-4 text-black font-bold group-hover:text-[#00c2b6]'>Ver más</h1>
                      <i className='ri-add-fill bg-white rounded-3xl px-1 group-hover:bg-[#00c2b6] group-hover:text-white'></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
 )
}
