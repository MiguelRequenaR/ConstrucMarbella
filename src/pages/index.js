import Header from "../components/Header";
import Image from "next/image";


export default function Home() {
  return (
    <div>
        <Header/>
        <div>
            <Image src="/images/fondo1.jpg" alt="" width={full} height={full}/>
        </div>
    </div>
  )
}
