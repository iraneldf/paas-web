import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutSectionComponent() {
    return (
        <section id="about" className="bg-[#EF8422] pb-2 flex flex-col items-center gap-2">

            <h1 className={'text-xl md:text-3xl bg-gray-100 w-full text-center font-bold p-10 text-[#EF8422]'}>El
                Programa adopta
                los siguientes enfoques en su gestión de proyectos</h1>


            <div className={'w-[95vw] md:w-[85vw] flex flex-col items-center gap-2'}>

                <div className="container bg-gray-100 shadow-2xl rounded-2xl overflow-hidden">

                    <div className="flex flex-col md:flex-row  items-center">
                        <div className="md:w-1/2 order-2 md:order-1 md:mb-0">
                            <Image className={'object-cover w-full '} src={'/image/home/Esquema.svg'}
                                   alt={'foto 2'}
                                   width={200} height={200}/>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 p-5">
                            <h2 className="text-xl md:text-3xl font-bold mb-4">Enfoque de Cadenas de Valor Locales
                                Sostenibles</h2>
                            <p className="text-gray-600 md:text-xl mb-6">
                                Con la participación de la totalidad de los actores de las diferentes cadenas, de la
                                finca
                                hasta el municipio, contribuyendo al desarrollo local al alcanzar la mayor soberanía
                                alimentaria posible desde un involucramiento consciente de todos y todas, sostenido por
                                un
                                efectivo programa de comunicación social, que optimice el empleo eficiente de las
                                potencialidades locales, y acerque cada día más la oferta de alimentos a la demanda
                                local en
                                cantidad, diversidad, estabilidad, formatos y transformaciones.
                            </p>
                            <Link href={'/proyectos/en-proceso'}>
                                <Button variant="outline" className={'hover:bg-[#EF8422]'}>Conoce Nuestros
                                    Proyectos</Button>
                            </Link>

                        </div>
                    </div>

                </div>

                <div className="container bg-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center ">
                        <div className="md:w-1/2 p-5">
                            <h2 className="text-3xl font-bold mb-4">Gestión de riesgos</h2>
                            <p className="text-gray-600 text-xl mb-6">
                                Se aborda este enfoque con un alcance que va desde la resiliencia ante fenómenos
                                biológicos
                                y climáticos extremos, y los debidos al cambio climático, hasta la gestión de inocuidad,
                                calidad y estrategia de comercialización incorporando el Sistema Participativo de
                                Garantía,
                                con el fin de satisfacer a los clientes y garantizar mayores ingresos a los productores
                                y
                                productoras.
                            </p>
                            <Link href={'/nuestro-equipo'}>
                                <Button variant="outline" className={'hover:bg-[#EF8422]'}>Conoce Nuestro
                                    Equipo</Button>
                            </Link>
                        </div>

                        <div className="md:w-1/2 md:mb-0">
                            <Image className={'object-cover w-full '} src={'/image/home/Riesgos Foto.svg'}
                                   alt={'foto 2'}
                                   width={200} height={200}/>
                        </div>
                    </div>
                </div>

                <div className="container bg-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row  items-center">
                        <div className="md:w-1/2 order-2 md:order-1 md:mb-0">
                            <Image className={'object-cover w-full '} src={'/image/home/Esquema2.svg'}
                                   alt={'foto 2'}
                                   width={200} height={200}/>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 p-5">
                            <h2 className="text-3xl font-bold mb-4">Economía Circular Sostenible</h2>
                            <p className="text-gray-600 text-xl mb-6">
                                Concebida la ECS desde tres enfoques: Económico, social, ambiental y, como objetivos de
                                las
                                acciones: reducir demanda de recursos externos, optimizar el aprovechamiento de recursos
                                disponibles, minimizar pérdidas y deshechos y la consiguientemente contaminación
                                ambiental,
                                empleando para ello los principios y concepciones de la agroecología, partiendo del
                                rescate
                                y aprovechamiento de los saberes y cultura agraria local, debidamente contextualizada y
                                validada con el aporte de la ciencia e innovación.
                            </p>
                            <Button variant="outline" className={'hover:bg-[#EF8422]'}>Conoce Nuestros
                                Resultados</Button>
                        </div>
                    </div>
                </div>

                <div className="container bg-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center ">
                        <div className="md:w-1/2 p-5">
                            <h2 className="text-3xl font-bold mb-4">Equidad de Género y Generacional</h2>
                            <p className="text-gray-600 text-xl mb-6">
                                Sin considerar la equidad de género y generacional resulta imposible hablar de verdadera
                                participación ni de sostenibilidad, por lo cual se promoverá la presencia de mujeres y
                                jóvenes tanto en el diseño como en la implementación de los proyectos, incluyendo la
                                presencia de las personas de la tercera edad, decisivos en el rescate y
                                contextualización de
                                los imprescindibles saberes locales. Solo desde este enfoque inclusivo será posible
                                lograr
                                la elevación de la autoestima y sentido de pertenencia en actores y actoras de las
                                Cadenas
                                de Valor.
                            </p>
                            <Button variant="outline" className={'hover:bg-[#EF8422]'}>Conoce Nuestra Historia</Button>
                        </div>

                        <div className="md:w-1/2 md:mb-0">
                            <Image className={'object-cover w-full '} src={'/image/home/Riesgos Foto.svg'}
                                   alt={'foto 2'}
                                   width={200} height={200}/>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

