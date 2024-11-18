import React, {useState} from 'react'
import Image from 'next/image'
import {Leaf, Sprout} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {ProjectCarousel} from "@/components/proyectos/ProjectCarousel";

export function PoyectoEnProcesoContent({images}) {

    return (
        <section id="noticias">
            <h1 className={'font-bold text-xl lg:text-3xl text-center'}>NOTICIAS SOBRE LA
                MARCHA</h1>
            <div className={'p-5 lg:p-10 text-sm lg:text-xl flex flex-col gap-2 lg:gap-10'}>
                <p>Taller de inicio del proyecto en el municipio Guanabacoa.</p>
                <p>
                    El pasado 21 de junio de 2024 se efectuó el Taller de Arrancada del proyecto, en
                    el
                    Centro
                    de
                    Capacitación “La Cascada”, de la Empresa Agropecuaria Bacuranao, Guanabacoa, con
                    la
                    asistencia
                    de 46 personas. Estaban presentes los beneficiarios directos del proyecto,
                    autoridades
                    de
                    Gobierno municipal, actores directos e indirectos de las acciones previstas, el
                    representantes
                    de ACTAF nacional, provincial y municipal, el Equipo Gestor de PAAS, y una
                    amplia
                    representación
                    de la oficina de AICS en Cuba, encabezada por su Director Antonio Festa.
                </p>
                <p>
                    En el taller, el Director del Programa PAAS, Juan Perez Lamas, compartió el
                    camino
                    recorrido
                    para llegar a este momento y el objetivo perseguido con el mismo. También se
                    presentaron
                    los
                    integrantes del Equipo Externo y el Equipo local de ejecución. A continuación
                    Roberto
                    Caballero
                    (Miembro del Equipo de Gestión) presentó los contenidos generales y la lógica
                    prevista
                    de
                    iontervención. Se continuó con la explicación del procedimiento para las
                    adquisiciones
                    por
                    William Graupera, la explicaciómn del Plan de Actividades y Sistema de
                    Monitoreo,
                    por
                    parte
                    de
                    Elieser Perera, concluyendo con la socialización del proceso que se iniciaría de
                    inmediato
                    para
                    el diagnóstico de la situación actual y proyecciones previstas para cada finca.
                    Todo
                    ello
                    estuvo
                    acompañado de una activa participación de los presentes.
                </p>
            </div>

            <ProjectCarousel images={images}/>

        </section>
    )
}