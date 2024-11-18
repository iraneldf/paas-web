'use client';

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useRouter} from 'next/navigation';

export default function TestimonialSectionComponent() {
    const router = useRouter();

    const handleNavigation = (pid) => {
        // Navegar a la ruta específica y enfocar la sección de noticias
        router.push(`/proyectos/${pid}#noticias`);
    };

    return (
        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Últimas noticias</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        pid: 1,
                        name: "Taller de inicio del proyecto en el municipio Guanabacoa.",
                        quote: " El pasado 21 de junio de 2024 se efectuó el Taller de Arrancada del proyecto, en el\n" +
                            "                                    Centro\n" +
                            "                                    de\n" +
                            "                                    Capacitación “La Cascada”, de la Empresa Agropecuaria Bacuranao, Guanabacoa, con la\n" +
                            "                                    asistencia\n" +
                            "                                    de 46 personas. Estaban presentes los beneficiarios directos del proyecto,\n" +
                            "                                    autoridades"
                    }, {
                        pid: 2,
                        name: "Taller de inicio del proyecto en el municipio Guanabacoa.",
                        quote: "En el taller, el Director del Programa PAAS, Juan Perez Lamas, compartió el camino\n" +
                            "                                    recorrido\n" +
                            "                                    para llegar a este momento y el objetivo perseguido con el mismo. También se\n" +
                            "                                    presentaron\n" +
                            "                                    los\n" +
                            "                                    integrantes del Equipo Externo y el Equipo local de ejecución."
                    }, {
                        pid: 3,
                        name: "Taller de inicio del proyecto en el municipio Guanabacoa.",
                        quote: "Estaban presentes los beneficiarios directos del proyecto,\n" +
                            "                                    autoridades\n" +
                            "                                    de\n" +
                            "                                    Gobierno municipal, actores directos e indirectos de las acciones previstas, el\n" +
                            "                                    representantes\n" +
                            "                                    de ACTAF nacional, provincial y municipal, el Equipo Gestor de PAAS, y una amplia\n" +
                            "                                    representación\n" +
                            "                                    de la oficina de AICS en Cuba, encabezada por su Director Antonio Festa."
                    }].map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6 flex flex-col h-full justify-between">
                                <p className="font-semibold mb-2">{testimonial.name}</p>
                                <div className={'overflow-hidden h-32'}>
                                    <p className="italic mb-4 line-clamp">{testimonial.quote}</p>
                                </div>
                                <Button
                                    variant={'link'}
                                    className="text-sm text-gray-600 hover:text-emerald-700"
                                    onClick={() => handleNavigation(testimonial.pid)}
                                >
                                    ver noticia <ArrowRight/>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}