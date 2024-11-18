'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {
    Users,
    MapPin,
    CheckCircle,
    BadgeDollarSignIcon,
} from "lucide-react"
import {useRouter, useSearchParams} from "next/navigation";
import {ProjectCarousel} from "@/components/proyectos/ProjectCarousel";
import {NoticiaComponent} from "@/components/proyectos/proyecto en proceso/NoticiaComponent";
import {Inicio} from "@/components/proyectos/proyecto en proceso/Inicio";
import {Progreso} from "@/components/proyectos/proyecto en proceso/Progreso";
import {Resultados} from "@/components/proyectos/proyecto terminado/Resultados";

export default function ProjectDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get('proyectoID');
    const progress = searchParams.get('progress');
    const [project, setProject] = useState(null)

    useEffect(() => {
        // En una aplicación real, aquí harías una llamada a la API para obtener los detalles del proyecto
        // Por ahora, simularemos esto con datos estáticos

        const mockProjectEncurso = {
            id: "1",
            title: "Diversificación productiva y fortalecimiento del Sistema Alimentario Local del Municipio de Guanabacoa.",
            description: "El proyecto busca contribuir a la sostenibilidad del sistema alimentario local del municipio Guanabacoa a través del fortalecimiento de la cadena de valor láctea en el territorio, fundamentalmente bubalina, con un enfoque diversificado, a partir de prácticas agroecológicas, el manejo eficiente de los recursos naturales, la introducción de los principios de la economía circular y el empleo de fuentes renovables de energía. La propuesta busca contribuir al aumento de la insuficiente oferta de alimentos, sobre todo proteínas de origen animal que es uno de los principales problemas de nutrición en la población de la municipalidad. Además, impacta en la solución de otros problemas presentes especialmente en las comunidades rurales, entre los que se encuentran las oportunidades de empleo, las condiciones de trabajo y de vida fundamentalmente de mujeres y jóvenes.",
            coverImage: '/image/proyectos/FondoDetails.svg',
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
            carouselImages2: ["/image/proyectos/carrusel/carruselImage2.png", "/image/proyectos/carrusel/carruselImage3.png"],

        }

        const mockProjectTerminado = {
            id: "2",
            title: "PROYECTO DE APOYO A UNA AGRICULTURA SOSTENIBLE EN CUBA. PAAS, FASE 3.",
            description: "El proyecto PAAS se ha desarrollado en una relación estrecha, de diálogo e interacción las políticas agropecuarias nacionales que se han venido implementado en el país desde inicios de la década  pasada. En buena medida, su desarrollo es el producto o resultado de esas políticas, pero a la vez el proyecto ha contribuido a la implementación de esas políticas. La estrategia de participación y articulación de actores que implementó PAAS, es posiblemente uno de los principales aspectos que ha contribuido al éxito en el desarrollo de las CV. El proyecto evidenció la importancia de   disponer de mecanismos de innovación tecnológica y del acompañamiento técnico-científico por parte de las entidades correspondientes, así como la participación de los actores municipales-locales en todos los eslabones de la cadena.\n" +
                "El proyecto ha permitido comprobar que la producción y gestión de determinados productos ( pollo de ceba, cultivo protegido en casas rústicas), resulta eficaz cuando se realiza a nivel  de finca o cooperativa, más que desde grandes empresas estatales en las condiciones económicas actuales del país. Para que eso sea posible, sin embargo, se requiere contar con el   apoyo/respaldo de las instituciones reguladoras del país, encargadas de otorgar los avales correspondientes, así como que el productor cuente con el compromiso e iniciativa necesarias para proyectar y potenciar el desarrollo de la cadena.\n" +
                "Se pudo comprobar que siempre, las CV contribuyeron a la generación de empleo a nivel local,  es-pecialmente de mujeres y jóvenes; mejorando los niveles de ingreso y la actividad  económica local, y han aumentado la producción de alimentos para el consumo local.\n" +
                "La estrategia propuesta y demostrada, garantiza la sostenibilidad de las CV al potenciar y apoyarse fundamentalmente en las capacidades locales existentes, razón por la cual la participación de los  gobiernos municipales es crucial, así como de otros actores locales, municipales y provinciales.",
            coverImage: '/image/proyectos/FondoDetails2.svg',
            results: [' R1: Aumentada la producción de leche bubalina de calidad, con enfoque agroecológico diversificado y aplicación de principios de economía circular.',
                'R2: Mejoradas las capacidades para la transformación y comercialización de lácteos a nivel local.',
                'R3: Mejoradas las capacidades de gobernanza local de los sistemas agroalimentarios y promovida la educación alimentaria y nutricional en sectores vulnerables de la población.'],
            companyLogos: ["/image/proyectos/logos/PAAS2.svg", "/image/proyectos/logos/Group.svg",],
            carouselImages: ["/image/proyectos/carrusel/carruselImage4.png", "/image/proyectos/carrusel/carruselImage2.png"],
        }

        // Establecer el proyecto basado en el valor de progress
        if (progress) {
            setProject(progress === 'true' ? mockProjectEncurso : mockProjectTerminado);
        }
    }, [id, progress])

    const router = useRouter();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#noticias') {
            // Usar setTimeout para esperar un poco antes de buscar el elemento
            setTimeout(() => {
                const element = document.getElementById('noticias');
                console.log('Element:', element); // Verificar si se encuentra
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100); // Esperar 100 ms
        }
    }, [router]);

    if (!project) return <div>Cargando...</div>

    return (
        <div className="min-h-screen bg-green-50 py-12">
            <div className="container mx-auto px-4">
                <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-green-700 text-white">
                        <CardTitle className="text-xl lg:text-3xl">
                            {project.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 flex flex-col gap-7">
                        {/*Foto y lista de logos*/}
                        <div>
                            <Image src={project.coverImage} alt={project.title} width={800} height={400}
                                   className="w-full rounded-t-lg"/>

                            <div className="flex flex-wrap gap-2 justify-evenly rounded-b-lg bg-gray-300 p-2">
                                {project.companyLogos.map((logo, index) => (
                                    <Image key={index} src={logo} alt={`Company ${index + 1}`} width={140} height={140}
                                           className="size-1/4 lg:size-max"/>))}
                            </div>
                        </div>

                        {/*Inicio*/}
                        {project.startDate && <Inicio startDate={project.startDate}/>}

                        {/*Descripcion*/}
                        <p className="text-gray-600 mb-6">{project.description}</p>

                        {/*Equipo y ubicacion*/}
                        {project.team && project.location &&
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
                        }

                        {project.progress && <Progreso progress={project.progress}/>}

                        {progress === 'true' && <>
                            {/*Monto y Financista*/}
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
                                        Área de incidencia: 3 UBPC (“13 de marzo”, “Juan Oramas” y “26 de julio”) y
                                        una
                                        UEB
                                        (“Victoria
                                        de Girón”), además del PDL “Vista Hermosa&#34;, y entidades locales de
                                        servicios
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

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Empresas Implicadas</h3>
                                <div className="flex space-x-4 flex-wrap">
                                    {project.companyLogos.map((logo, index) => (
                                        <Image key={index} src={logo} alt={`Company ${index + 1}`} width={50}
                                               height={50}
                                               className="rounded-full"/>))}
                                </div>
                            </div>
                        </>}

                        {/*Carrusel 1*/}
                        <ProjectCarousel images={project.carouselImages}/>

                        {progress === 'true' ? <NoticiaComponent images={project.carouselImages2}/> : <Resultados/>}

                    </CardContent>
                </Card>
            </div>
        </div>)
}
