'use client'
import Link from "next/link";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Progress} from "@/components/ui/progress";
import {ArrowRight, Calendar, CheckCircle, Users} from "lucide-react";

export default function ProyectoItem({
                                         id,
                                         coverImage,
                                         title,
                                         description,
                                         startDate,
                                         team,
                                         companyLogos,
                                         type,
                                         progress,
                                         impact
                                     }) {
    return (

        <>
            <Link href={`/proyectos/${id}`} key={id}>

                <Card
                    className="h-full relative flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer bg-white overflow-hidden">

                    {impact && <CheckCircle className="w-6 absolute h-6 text-green-500"/>}

                    <Image src={coverImage} alt={title} width={400} height={200}
                           className="w-full h-60 object-cover"/>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold text-green-700 mb-2">{title}</h2>
                        <p className="text-gray-600 mb-4 truncate-multiline">{description}</p>
                        <Badge variant="outline" className="mb-4">{type}</Badge>

                        {
                            progress &&
                            <>
                                <Progress value={progress} className="mb-4"/>
                                <p className="text-sm text-gray-500 mb-2">Progreso: {progress}%</p>
                            </>
                        }


                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar className="w-4 h-4 mr-2"/>
                            Inicio: {startDate}
                        </div>

                        <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-2"/>
                            {team}
                        </div>

                        {impact && <p className="text-sm font-medium text-green-600 mt-4">Impacto: {impact}</p>}

                        <div className="mt-4">
                            <p className="text-sm text-gray-500 mb-2">Empresas implicadas:</p>
                            <div className="flex space-x-1 flex-wrap">
                                {companyLogos.map((logo, index) => (
                                    <Image key={index} src={logo} alt={`Company ${index + 1}`} width={80} height={60}
                                    />
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-green-100 p-4">
                        <div className="flex items-center justify-center w-full text-green-700">
                            <ArrowRight className="w-5 h-5 mr-2"/>
                            Ver más
                        </div>
                    </CardFooter>
                </Card>

            </Link>

            <style>{`
                .truncate-multiline {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3; /* Limitar a 3 líneas */
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            `}</style>
        </>
    )
}