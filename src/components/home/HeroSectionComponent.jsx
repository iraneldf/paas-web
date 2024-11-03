import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function HeroSectionComponent() {
    return (
        <section id="home" className="relative h-[600px] flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{backgroundImage: "url('/placeholder.svg?height=600&width=1200')"}}
            />
            <div className="absolute inset-0 bg-black opacity-30 z-10"/>
            <Image src={'/image/fondo.png'} priority alt={'Fondo'} layout={'fill'}/>
            <div className="relative z-20 text-center">
                <h2 className="text-5xl font-bold mb-4">Soluciones tecnológicas para el campo del mañana</h2>
                <p className="text-xl mb-8">Por un mayor acceso a una alimentación sana, diversa y estable de la
                    población de Cuba</p>
                <Button className='hover:bg-green-800' size="lg">Descubre Más</Button>
            </div>
        </section>
    )
}