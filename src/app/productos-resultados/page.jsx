'use client'
import {useState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import Image from "next/image";

const ProgramSection = () => {
    const [programs] = useState([
        {
            id: 1,
            name: 'Manual práctico para productoras y productores agrícolas: desarrollo de inversiones en fincas y cooperativas agrícolas.',
            description: 'Esta temática en nuestro entorno nacional, también ha estado marcada por criticas severas por el poco dominio y comprension del proceso inversionista, su ejecucion no eficiente y la baja calidad o inexistencia de estudios de factibilidad que sustenten la viabilidad de las mismas. De esta situacion no escapa ningun sector ni rama de la economia nacional. Sin embargo, en el sector agropecuario la situacion puede ser un poco mas complicada y acumular mayores retrasos, a pesar de esfuerzos por direccionar acciones de capacitacion en este sentido. La fortaleza de poder contar con un sector cooperativo – campesino instruido y culto, asegura que en un breve plazo ira tomando para si estas tecnicas y cambiara radicalmente su mentalidad, para bien propio y de la sociedad en su conjunto. La coyuntura y escenario actual de la economia cubana en su proceso de restructuracion exige a todos los actores economicos – sea cual fuere la forma de propiedad en que estan organizados - operar de manera eficiente, en primer lugar, y competitiva, en ultima instancia, si queremos tener una economia y sociedad sostenible.',
            document: 'documento1.pdf',
            image: '/productos/producto1.svg'
        },
        {
            id: 2,
            name: 'Sistema Participativo de Garantía para la Certificación Agroecológica.',
            description: 'Los Sistemas Participativos de Garantía (SPG) son herramientas especialmente adaptadas a la Soberanía Alimentaria, ya que permiten visibilizar la realidad productiva de la actividad agraria, y generar compromisos para compartir los riesgos de la producción y el consumo. El Manual del Sistema Participativo de Garantía (SPG) para la certificación agroecológica en la Agricultura Urbana, Suburbana y Familiar en Cuba, ha sido elaborado en el marco del proyecto PAAS-2, y permite a agricultores, técnicos y decisores locales certificar sus producciones, logrando un justo reconocimiento a quienes producen de manera sostenible sobre bases agroecológicas.',
            document: 'documento2.pdf',
            image: '/productos/producto2.svg'
        },
        {
            id: 3,
            name: 'Programa de Desarrollo Personal',
            description: 'Este programa está diseñado para ayudar a los participantes a desarrollar una mayor conciencia de sí mismos y a establecer metas personales. A través de una serie de talleres y sesiones de coaching, los participantes podrán aprender a gestionar el estrés y a mejorar su bienestar general.',
            document: 'documento3.pdf',
            image: 'https://picsum.photos/200/302'
        },
        {
            id: 4,
            name: 'Producto de Desarrollo de Habilidades',
            description: 'Este producto está diseñado para ayudar a los usuarios a desarrollar habilidades clave en áreas como la comunicación, el liderazgo y la resolución de problemas. A través de una serie de módulos y ejercicios, los usuarios podrán mejorar su confianza y habilidades para alcanzar sus objetivos.',
            document: 'documento4.pdf',
            image: 'https://picsum.photos/200/303'
        },
        {
            id: 5,
            name: 'Producto de Emprendimiento',
            description: 'Este producto está diseñado para apoyar a los emprendedores en la creación y crecimiento de sus negocios. A través de una serie de módulos y herramientas, los usuarios podrán desarrollar un plan de negocios sólido y aprender a gestionar los desafíos del emprendimiento.',
            document: 'documento5.pdf',
            image: 'https://picsum.photos/200/304'
        },
        {
            id: 6,
            name: 'Producto de Desarrollo Personal',
            description: 'Este producto está diseñado para ayudar a los usuarios a desarrollar una mayor conciencia de sí mismos y a establecer metas personales. A través de una serie de módulos y ejercicios, los usuarios podrán aprender a gestionar el estrés y a mejorar su bienestar general.',
            document: 'documento6.pdf',
            image: 'https://picsum.photos/200/305'
        }
    ]);

    return (
        <div className="flex flex-col space-y-4 p-4 md:px-8 md:py-12 bg-green-50 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Productos y Resultados del Programa</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((program) => (
                    <Card key={program.id} className="flex flex-col lg:flex-row p-4 bg-white rounded-lg shadow-md">

                        <Image src={program.image} alt={program.name} width={120} height={400}
                               className="w-52 h-72 object-fill self-center md:self-start rounded-lg mb-4 md:mr-4"/>

                        <div className="flex flex-col justify-between overflow-hidden">

                            <CardHeader className="flex justify-between items-center">
                                <CardTitle
                                    className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800">{program.name}</CardTitle>
                            </CardHeader>

                            <CardContent className="py-4 overflow-y-auto">
                                <CardDescription
                                    className="text-lg lg:text-xl text-gray-600 max-h-60">{program.description}</CardDescription>
                            </CardContent>

                            <CardFooter className="flex justify-end justify-self-end self-end overflow-hidden">
                                <Button variant="link" href={program.document} download
                                        className="text-lg md:text-xl text-blue-600 hover:text-blue-800 flex items-center gap-2">
                                    <Download className="w-5 h-5"/>
                                    Descargar documento
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProgramSection;