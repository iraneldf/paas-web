'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Progress} from "@/components/ui/progress"
import {

    Calendar,
    Users,
    MapPin,
    CheckCircle,
    BadgeDollarSignIcon,
} from "lucide-react"
import {useSearchParams} from "next/navigation";
import {ProjectCarousel} from "@/components/proyectos/ProjectCarousel";

export default function ProjectDetails() {
    // const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('proyectoID');
    const [project, setProject] = useState(null)

    useEffect(() => {
        // En una aplicación real, aquí harías una llamada a la API para obtener los detalles del proyecto
        // Por ahora, simularemos esto con datos estáticos
        const mockProject = {
            id: "1",
            title: "Diversificación productiva y fortalecimiento del Sistema Alimentario Local del Municipio de Guanabacoa.",
            description: "El proyecto busca contribuir a la sostenibilidad del sistema alimentario local del municipio Guanabacoa a través del fortalecimiento de la cadena de valor láctea en el territorio, fundamentalmente bubalina, con un enfoque diversificado, a partir de prácticas agroecológicas, el manejo eficiente de los recursos naturales, la introducción de los principios de la economía circular y el empleo de fuentes renovables de energía. La propuesta busca contribuir al aumento de la insuficiente oferta de alimentos, sobre todo proteínas de origen animal que es uno de los principales problemas de nutrición en la población de la municipalidad. Además, impacta en la solución de otros problemas presentes especialmente en las comunidades rurales, entre los que se encuentran las oportunidades de empleo, las condiciones de trabajo y de vida fundamentalmente de mujeres y jóvenes.",
            coverImage: "/image/proyectos/FondoDetails.svg",
            progress: 65,
            startDate: "2023-03-15",
            team: "Equipo Agua",
            type: "Tecnología",
            location: "Guanabacoa",
            objectives: ["  Objetivo General: Contribuir al desarrollo socioeconómico y al abastecimiento alimentario\n" +
            "                        municipal sostenible.", " Objetivo Específico: Fortalecer la cadena de valor del sector lácteo en su contribución a la\n" +
            "                        gestión diversificada del Sistema Alimentario Local del Municipio de Guanabacoa"],
            results: [' R1: Aumentada la producción de leche bubalina de calidad, con enfoque agroecológico diversificado y aplicación de principios de economía circular.',
                'R2: Mejoradas las capacidades para la transformación y comercialización de lácteos a nivel local.',
                'R3: Mejoradas las capacidades de gobernanza local de los sistemas agroalimentarios y promovida la educación alimentaria y nutricional en sectores vulnerables de la población.'],
            companyLogos: ["/image/proyectos/logos/Actaf.svg", "/image/proyectos/logos/Oficina.svg", "/image/proyectos/logos/GEGAN.svg", "/image/proyectos/logos/AICD.svg", "/image/proyectos/logos/MINAGRI.svg",],
            carouselImages: ["/image/proyectos/carrusel/carruselImage.png", "/image/proyectos/carrusel/carruselImage4.png"],
            carouselImages2: ["/image/proyectos/carrusel/carruselImage2.png", "/image/proyectos/carrusel/carruselImage3.png"]

        }
        setProject(mockProject)
    }, [id])

    if (!project) return <div>Cargando...</div>

    return (
        <div className="min-h-screen bg-green-50 py-12">
            <div className="container mx-auto px-4">
                <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-green-700 text-white">
                        <CardTitle className="text-xl lg:text-3xl">{project.title}</CardTitle>
                        {/*<Badge variant="secondary" className="mt-2 w-24">{project.type}</Badge>*/}
                    </CardHeader>

                    <CardContent className="p-6 flex flex-col gap-7">
                        <div>
                            <Image src={project.coverImage} alt={project.title} width={800} height={400}
                                   className="w-full rounded-t-lg"/>

                            <div className="flex flex-wrap gap-2 justify-evenly rounded-b-lg bg-gray-300 p-2">
                                {project.companyLogos.map((logo, index) => (
                                    <Image key={index} src={logo} alt={`Company ${index + 1}`} width={140} height={140}
                                           className="size-1/4 lg:size-max"/>))}
                            </div>
                        </div>


                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-green-600"/>
                            <span>Inicio: {project.startDate}</span>
                        </div>

                        <p className="text-gray-600 mb-6">{project.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">


                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-2 text-green-600"/>
                                <span>{project.team}</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-green-600"/>
                                <span>{project.location}</span>
                            </div>
                            {project.completionDate && (<div className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-green-600"/>
                                <span>Completado: {project.completionDate}</span>
                            </div>)}
                        </div>

                        {project.progress !== undefined && (<div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Progreso del Proyecto</h3>
                            <Progress value={project.progress} className="mb-2"/>
                            <p className="text-sm text-gray-500">Progreso: {project.progress}%</p>
                        </div>)}

                        <div>
                            <div className="flex items-center">
                                <BadgeDollarSignIcon className="w-5 h-5 mr-2 text-green-600"/>
                                <h6 className="mr-2 font-semibold">Monto financiamiento: </h6>
                                <span>2,634.800,00 euros</span>

                            </div>
                            <div className={'mt-2.5'}>
                                <span className={'font-bold'}>Financista: </span>
                                <span className={'text-green-600'}>Agencia Italiana de Colaboración al Desarrollo
                                (AICS)</span>
                                <p>
                                    Área de incidencia: 3 UBPC (“13 de marzo”, “Juan Oramas” y “26 de julio”) y una UEB
                                    (“Victoria
                                    de Girón”), además del PDL “Vista Hermosa&#34;, y entidades locales de servicios
                                    técnicos.
                                    Municipio
                                    Guanabacoa. La Habana.
                                </p>

                            </div>
                        </div>


                        <div className="">
                            <h3 className="text-lg font-semibold mb-2">Objetivos del Proyecto</h3>
                            <ul className="list-disc list-inside">
                                {project.objectives.map((objective, index) => (
                                    <li key={index} className="text-gray-600">{objective}</li>))}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2"> Resultados esperados:</h3>
                            <ul className="list-disc list-inside">
                                {project.results.map((objective, index) => (
                                    <li key={index} className="text-gray-600">{objective}</li>))}
                            </ul>
                        </div>

                        {project.impact && (<div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Impacto del Proyecto</h3>
                            <p className="text-gray-600">{project.impact}</p>
                        </div>)}


                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Empresas Implicadas</h3>
                            <div className="flex space-x-4 flex-wrap">
                                {project.companyLogos.map((logo, index) => (
                                    <Image key={index} src={logo} alt={`Company ${index + 1}`} width={50} height={50}
                                           className="rounded-full"/>))}
                            </div>
                        </div>


                        <ProjectCarousel images={project.carouselImages}/>

                        <h1 className={'font-bold text-xl lg:text-3xl text-center'}>NOTICIAS SOBRE LA MARCHA</h1>
                        <div className={'p-5 lg:p-10 text-sm lg:text-xl flex flex-col gap-2 lg:gap-10'}>
                            <p>Taller de inicio del proyecto en el municipio Guanabacoa.</p>
                            <p>
                                El pasado 21 de junio de 2024 se efectuó el Taller de Arrancada del proyecto, en el
                                Centro
                                de
                                Capacitación “La Cascada”, de la Empresa Agropecuaria Bacuranao, Guanabacoa, con la
                                asistencia
                                de 46 personas. Estaban presentes los beneficiarios directos del proyecto, autoridades
                                de
                                Gobierno municipal, actores directos e indirectos de las acciones previstas, el
                                representantes
                                de ACTAF nacional, provincial y municipal, el Equipo Gestor de PAAS, y una amplia
                                representación
                                de la oficina de AICS en Cuba, encabezada por su Director Antonio Festa.
                            </p>
                            <p>
                                En el taller, el Director del Programa PAAS, Juan Perez Lamas, compartió el camino
                                recorrido
                                para llegar a este momento y el objetivo perseguido con el mismo. También se presentaron
                                los
                                integrantes del Equipo Externo y el Equipo local de ejecución. A continuación Roberto
                                Caballero
                                (Miembro del Equipo de Gestión) presentó los contenidos generales y la lógica prevista
                                de
                                iontervención. Se continuó con la explicación del procedimiento para las adquisiciones
                                por
                                William Graupera, la explicaciómn del Plan de Actividades y Sistema de Monitoreo, por
                                parte
                                de
                                Elieser Perera, concluyendo con la socialización del proceso que se iniciaría de
                                inmediato
                                para
                                el diagnóstico de la situación actual y proyecciones previstas para cada finca. Todo
                                ello
                                estuvo
                                acompañado de una activa participación de los presentes.
                            </p>
                        </div>

                        <ProjectCarousel images={project.carouselImages2}/>

                    </CardContent>
                </Card>
            </div>
        </div>)
}
