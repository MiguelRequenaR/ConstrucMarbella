import Header from "../components/Header";
import edificacionesImage from "../../public/images/card.jpg";
import ServicesCard from "../components/ServicesCard";
import CoverPage from "./CoverPage";
import { About } from "../components/About";
import { motion } from "framer-motion";

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
              className="flex justify-between p-14 px-40"
            >    
              <h1 className="text-3xl text-white font-bold">Conoce los Servicios que tenemos para ti</h1>
                <button className="border px-3 py-2 rounded-full text-white font-bold hover:bg-white hover:text-blue-700">
                    Ver Proyectos
                </button>
            </motion.div>

            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-around"
            >    
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
              <ServicesCard subTitle="Edificaciones de viviendas modernas" imageSrc={edificacionesImage}/>
            </motion.div>
        </div>
      <About/>
    </div>
  );
}