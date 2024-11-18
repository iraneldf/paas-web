import React, {useState} from 'react'
import Image from 'next/image'
import {Download, Leaf, Sprout} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {ProjectCarousel} from "@/components/proyectos/ProjectCarousel";

export function Resultados({images}) {

    return (
        <div className="p-4 sm:p-6 md:py-10 md:px-20">
            <h1 className="text-3xl font-bold text-black text-center">Principales resultados</h1>
            <ul className="mt-4 list-disc flex flex-col items-start gap-2 md:gap-10">
                <li className="py-2 text-lg text-gray-900"> Incidencia relevante en políticas y estrategias nacionales
                    como: Decreto Ley de Agroecología, Programa y subprogramas de Agricultura Urbana, Suburbana y
                    Familiar, Programas de Autoabastecimiento Municipales, Política cubana de extensión agraria,
                    Estrategia Hortícola Nacional, Decreto 18/2020 sobre inocuidad alimentaria, entre otros.
                </li>
                <li className="py-2 text-lg text-gray-900"> Extensión del cultivo protegido y la producción de carne de
                    aves a escala de pequeños productores.
                </li>
                <li className="py-2 text-lg text-gray-900"> Incremento del cultivo y la producción de harina de yuca de
                    manera sostenible.
                </li>
                <li className="py-2 text-lg text-gray-900"> Fortalecimiento de la producción de leche de cabra y sus
                    derivados, con la introducción de razas más productivas y la formación de maestros queseros.
                </li>
                <li className="py-2 text-lg text-gray-900"> Escalado y diversificación del procesamiento postcosecha de
                    frutas, viandas y hortalizas.
                </li>

                <Button variant={'link'}
                    className="text-lg text-[#0A21F2] font-bold py-2 px-4 rounded mt-4 flex items-center gap-2 text-wrap"
                >
                    <Download className="w-5 h-5"/>
                    Descargar informe final el proyecto
                </Button>


            </ul>
        </div>

    )
}