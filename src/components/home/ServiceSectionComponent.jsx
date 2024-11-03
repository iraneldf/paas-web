import {Card, CardContent} from "@/components/ui/card";
import {BadgeDollarSign, CookingPot, Leaf, Sprout} from "lucide-react";
import Image from "next/image";

export default function ServiceSectionComponent() {
    return (
        <section id="services" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-12">Programa de Colaboración Internacional para
                    el Apoyo a una Agricultura Sostenible en Cuba, PAAS-ACTAF</h2>
                <p className='text-md text-center mb-12'>
                    Este Programa asume como estrategia, gestionar, acompañar y apoyar proyectos que promuevan y
                    contribuyan a la implementación de los Planes de Soberanía Alimentaria y Educación
                    Nutricional a escala municipal, mediante la consolidación y generalización de un modelo de
                    gestión de cadenas de valor autosostenibles, que a su vez sirvan de referencia al resto del
                    país, multiplicando lecciones aprendidas y buenas prácticas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tarjetas1.map((service, index) => (
                        <Card key={index} className="text-center flex flex-col justify-between">
                            <CardContent className="pt-6">
                                <div className="mb-4 flex justify-center">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.texto}</p>
                            </CardContent>
                            {service.imagen}
                        </Card>))}
                </div>
            </div>
        </section>
    )
}

const tarjetas1 = [{
    icon: <Leaf className="h-12 w-12 text-green-600"/>,
    title: "Reproducción agropecuaria",
    texto: 'Contemplando las diferentes producciones que se desarrollan en fincas, cooperativas y otras formas productivas.',
    imagen: <Image quality={100} className={'object-cover rounded-b-lg p-1  w-full h-60'}
                   src={'/image/home/FotoTarjeta1.png'} alt={'foto 1'}
                   width={300}
                   height={300}/>
}, {
    icon: <Sprout className="h-12 w-12 text-green-600"/>,
    title: "Cosecha y beneficio",
    texto: "Desde la planeación de cosecha y de momentos de acopio de la producción, hasta su beneficio.",
    imagen: <Image className={'object-cover rounded-b-lg p-1  w-full h-60'} src={'/image/home/FotoTarjeta2.png'}
                   alt={'foto 2'}
                   width={300} height={300}/>
}, {
    icon: <CookingPot className="h-12 w-12 text-green-600"/>,
    title: "Procesamiento",
    texto: 'Contempla las diferentes alternativas para la agregación de valor, desde una mayor variedad de ofertas y la conservación a medio y largo plazo.',
    imagen: <Image className={'object-cover rounded-b-lg p-1 w-full h-60'} src={'/image/home/FotoTarjeta3.png'}
                   alt={'foto 3'} width={300}
                   height={300}/>

}, {
    icon: <BadgeDollarSign className="h-12 w-12 text-green-600"/>,
    title: "Comercialización",
    texto: 'Para lograr el acceso de la población a una elevada variedad de ofertas de un producto de calidad y estabilidad',
    imagen: <Image className={'object-cover rounded-b-lg p-1  w-full h-60'} src={'/image/home/FotoTarjeta4.png'}
                   alt={'foto 4'}
                   width={300}
                   height={300}/>

},]