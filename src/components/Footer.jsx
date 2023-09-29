import Image from "next/image"

const Footer = () => {
  return (
    <div className='container mx-auto'>
        <div className="lg:flex lg:text-left justify-around mt-16 sm:block sm:text-center">
            <div>
                <Image src="/images/logoCM.png" alt="Logo" 
                width={100} height={100} className='rounded-full mx-auto lg:-mb-5 sm:mb-5'/>
            </div>
            <div className="sm:mb-5">
                <p className="text-lg font-black text-blue-900 uppercase">Correo</p>
                <span className="font-semibold">construcción@marbella.com.pe</span>
                <p className="text-lg font-black text-blue-900 uppercase">Central de atención</p>
                <span className="font-semibold">(064) 294532</span>
            </div>

            <div className="lg:hidden sm:block border border-homecolor w-[80%] mt-10 mb-5 mx-auto"></div>
            
            <div className="flex flex-col">
                <a href="">Nosotros</a>
                <a href="">Proyectos</a>
                <a href="">Sostenibilidad</a>
            </div>
            <div className="flex flex-col">
                <a href="">Innovación</a>
                <a href="">Inversionistas</a>
                <a href="">Blog</a>
            </div>
        </div>
        <div className='border border-homecolor w-[84%] mx-auto mt-10 mb-5'></div>
        
        <div className="lg:flex justify-around items-center mb-10 mt-10 sm:block sm:text-center lg:-space-y-2 sm:space-y-3">
            <div>
                <a href="">
                    <Image src="/images/redlogo.png" alt="logo" 
                    width={100} height={100}
                    className="mx-auto"
                    />
                </a>
            </div>
            <div>
                <p>Copyright 2023 - Marbella S.R.L. Todos los derechos reservados</p>
            </div>
            <div>
                <p>Diseño web - Miguel Angel</p>
            </div>
        </div>
    </div>
  )
}

export default Footer