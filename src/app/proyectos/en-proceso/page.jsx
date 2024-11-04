'use client'
import {useState} from 'react'
import ProyectoItem from "@/components/proyectos/ProyectoItem";


export default function OngoingProjects() {
    const [projects] = useState([{
        id: "1",
        title: "Diversificación productiva y fortalecimiento del Sistema Alimentario Local del Municipio de Guanabacoa.",
        description: "El proyecto busca contribuir a la sostenibilidad del sistema alimentario local del municipio Guanabacoa a través del fortalecimiento de la cadena de valor láctea en el territorio, fundamentalmente bubalina, con un enfoque diversificado, a partir de prácticas agroecológicas, el manejo eficiente de los recursos naturales, la introducción de los principios de la economía circular y el empleo de fuentes renovables de energía. La propuesta busca contribuir al aumento de la insuficiente oferta de alimentos, sobre todo proteínas de origen animal que es uno de los principales problemas de nutrición en la población de la municipalidad. Además, impacta en la solución de otros problemas presentes especialmente en las comunidades rurales, entre los que se encuentran las oportunidades de empleo, las condiciones de trabajo y de vida fundamentalmente de mujeres y jóvenes.",
        coverImage: "/image/proyectos/FotoProyecto1.svg",
        progress: 65,
        startDate: "2023-03-15",
        team: "Equipo Agua",
        type: "Tecnología",
        companyLogos: ["/image/proyectos/logos/Actaf.svg",
            "/image/proyectos/logos/Oficina.svg",
            "/image/proyectos/logos/GEGAN.svg",
            "/image/proyectos/logos/AICD.svg",
            "/image/proyectos/logos/MINAGRI.svg",
        ]
    }, {
        id: "2",
        title: "“MUJERES PROTAGONISTAS EN EL MOVIMIENTO DE LA AGRICULTURA URBANA ECOLOGICA EN SANTIAGO DE CUBA”",
        description: "Este proyecto contribuye a la sostenibilidad alimentaria local, a través del impulso al PNI-AUSF, específicamente del subprograma avícola, para lograr la elevación de los niveles productivos, la eficiencia, la mejora de la gestión económica financiera y por consiguiente el nivel de satisfacción social de la población. La forma de potenciar el empoderamiento económico de las mujeres será apoyando el desarrollo productivo de la finca a través de la instalación y explotación de un área de incubación de pollitos y la crianza de traspatio, a partir de la creación de capacidades técnicas en cuanto a la producción avícola y la comercialización local.",
        coverImage: "/image/proyectos/FotoProyecto2.svg",
        progress: 40,
        startDate: "2023-05-01",
        team: "Equipo Innovación",
        type: "Agricultura Urbana",
        companyLogos: ["/image/proyectos/logos/Actaf.svg",
            "/image/proyectos/logos/BFA.svg",
            "/image/proyectos/logos/EUSKADI.svg",
        ]
    }, {
        id: "3",
        title: "Monitoreo de Cultivos por Drones",
        description: "Uso de drones para supervisión y análisis de cultivos",
        coverImage: "/image/proyectos/FotoProyecto3.svg",
        progress: 80,
        startDate: "2023-02-10",
        team: "Equipo Tech",
        type: "Tecnología",
        companyLogos: ["/image/proyectos/logos/Actaf.svg",]
    },])

    return (<div className="min-h-screen bg-green-50 py-12">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Proyectos en Curso</h1>

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
                        progress={project.progress}
                        title={project.title}
                        team={project.team}
                    />

                ))}
            </div>
        </div>
    </div>)
}