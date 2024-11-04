'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Calendar, Users, CheckCircle } from "lucide-react"
import Link from 'next/link'
import ProyectoItem from "@/components/proyectos/ProyectoItem";


export default function CompletedProjects() {
    const [projects] = useState([
        {
            id: "4",
            goal: 'Contribuir a la soberanía alimentaria de 8 provincias cubanas, mediante la generalización de un modelo de gestión que desarrolle sistemas agroalimentarios locales sostenibles y resilientes.' ,
            title: "PROYECTO DE APOYO A UNA AGRICULTURA SOSTENIBLE EN CUBA. PAAS, FASE 3.",
            description: "El modelo de gestión de cadenas de valor propuesto y validado por el proyecto, con todas las dimensiones de sostenibilidad   se ha incorporado sistemáticamente a las políticas agroalimentarias del país puestas en vigor en estos últimos años. Teniendo en cuenta y asumiendo, las buenas prácticas, experiencias, y tecnologías , el proyecto ha incorporado nuevos enfoques al modelo de gestión de cadena de valor con énfasis en la gestión de riesgos y economía circular sostenible (ECS), dándole una mayor relevancia y pertinencia a la propuesta y todo lo cual se ve reflejado en los  programas y medidas establecidas recientemente por el país, para la soberanía alimentaria cubana, lo que constituye una oportunidad para continuar incidiendo en su implementación y perfeccionamiento.",
            coverImage: "/image/proyectos/FotoProyecto3.svg",
            completionDate: "2023-01-20",
            team: "Equipo Sostenibilidad",
            type: "Medio Ambiente",
            impact: "Reducción de residuos orgánicos en un 30%",
            companyLogos: ["/image/proyectos/logos/PAAS.svg", "/image/proyectos/logos/BFA.svg"]
        },
        {
            id: "5",
            goal: 'Fortalecer la producción orgánica y certificada de especies de frutales, forestales y plantas ornamentales para cubrir la demanda de la población y alcanzar un estado de satisfacción.',
            title: "PRODUCCIÓN DE ESPECIES DE FRUTALES, FORESTALES Y PLANTAS ORNAMENTALES PARA UNA GESTIÓN DE DESARROLLO LOCAL, EN EL MUNICIPIO DE CUMANAYAGUA, PROVINCIA DE CIENFUEGOS, CUBA.",
            description: "Creación de huertos en escuelas para educación ambiental",
            coverImage: "/image/proyectos/FotoProyecto4.svg",
            completionDate: "2023-04-05",
            team: "Equipo Educación",
            type: "Educación",
            impact: "5 escuelas beneficiadas, 500 estudiantes involucrados",
            companyLogos: ["/image/proyectos/logos/Actaf.svg"]
        },

    ])

    return (
        <div className="min-h-screen bg-green-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Proyectos Terminados</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (

                        <ProyectoItem
                            key={project.id}
                            id={project.id}
                            companyLogos={project.companyLogos}
                            type={project.type}
                            coverImage={project.coverImage}
                            description={project.description}
                            startDate={project.startDate}
                            impact={project.impact}
                            title={project.title}
                            team={project.team}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}