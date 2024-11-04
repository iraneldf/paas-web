'use client'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Progress} from "@/components/ui/progress"
import {Leaf, Calendar, Users, MapPin, Target, CheckCircle} from "lucide-react"
import {Carousel} from "@/components/ui/carousel"
import {useSearchParams} from "next/navigation";


export default function ProjectDetails({params}) {
    // const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('proyectoID');
    const [project, setProject] = useState(null)

    useEffect(() => {
        // En una aplicación real, aquí harías una llamada a la API para obtener los detalles del proyecto
        // Por ahora, simularemos esto con datos estáticos
        const mockProject = {
            id: "1",
            title: "Irrigación Inteligente",
            description: "Sistema de riego automatizado con sensores de humedad para optimizar el uso del agua en cultivos extensivos.",
            coverImage: "/placeholder.svg?height=400&width=800",
            progress: 65,
            startDate: "2023-03-15",
            team: "Equipo Agua",
            type: "Tecnología",
            location: "Valle Central",
            objectives: [
                "Reducir el consumo de agua en un 30%",
                "Aumentar la eficiencia de riego en un 40%",
                "Implementar en al menos 5 granjas piloto"
            ],
            companyLogos: ["/placeholder.svg?height=50&width=50", "/placeholder.svg?height=50&width=50", "/placeholder.svg?height=50&width=50"],
            carouselImages: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600"
            ]
        }
        setProject(mockProject)
    }, [id])

    if (!project) return <div>Cargando...</div>

    return (
        <div className="min-h-screen bg-green-50 py-12">
            <div className="container mx-auto px-4">
                <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-green-700 text-white">
                        <CardTitle className="text-3xl">{project.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">{project.type}</Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                        <Image src={project.coverImage} alt={project.title} width={800} height={400}
                               className="w-full h-64 object-cover rounded-lg mb-6"/>

                        <p className="text-gray-600 mb-6">{project.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-green-600"/>
                                <span>Inicio: {project.startDate}</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-2 text-green-600"/>
                                <span>{project.team}</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-green-600"/>
                                <span>{project.location}</span>
                            </div>
                            {project.completionDate && (
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 mr-2 text-green-600"/>
                                    <span>Completado: {project.completionDate}</span>
                                </div>
                            )}
                        </div>

                        {project.progress !== undefined && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Progreso del Proyecto</h3>
                                <Progress value={project.progress} className="mb-2"/>
                                <p className="text-sm text-gray-500">Progreso: {project.progress}%</p>
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Objetivos del Proyecto</h3>
                            <ul className="list-disc list-inside">
                                {project.objectives.map((objective, index) => (
                                    <li key={index} className="text-gray-600">{objective}</li>
                                ))}
                            </ul>
                        </div>

                        {project.impact && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Impacto del Proyecto</h3>
                                <p className="text-gray-600">{project.impact}</p>
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Empresas Implicadas</h3>
                            <div className="flex space-x-4">
                                {project.companyLogos.map((logo, index) => (
                                    <Image key={index} src={logo} alt={`Company ${index + 1}`} width={50} height={50}
                                           className="rounded-full"/>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Galería de Imágenes</h3>
                            <Carousel>
                                {project.carouselImages.map((image, index) => (
                                    <Image key={index} src={image} alt={`Project Image ${index + 1}`} width={600}
                                           height={400} className="w-full h-64 object-cover rounded-lg"/>
                                ))}
                            </Carousel>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
