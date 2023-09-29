import Header from "../components/Header";
import edificacionesImage from "../../public/images/card.jpg";
import ServicesCard from "../components/ServicesCard";
import CoverPage from "./CoverPage";
import { About } from "../components/About";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div>
      <Header />
      <CoverPage/>
        <div className="bg-homecolor">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="lg:flex justify-around p-14  sm:block"
            >    
              <h1 className="text-3xl text-white font-bold mb-5">Conoce los Servicios que tenemos para ti</h1>
                <button className="border px-3 py-2 rounded-full text-white font-bold hover:bg-white hover:text-blue-700">
                    Ver Proyectos
                </button>
            </motion.div>

            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="lg:flex justify-around sm:block"
            >    
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
            </motion.div>
        </div>
      <About/>
      <Footer/>
    </div>
  );
}