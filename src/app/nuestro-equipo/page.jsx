import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";


const equipo = [
    {
        nombre: "Juan Pérez",
        cargo: "Director Ejecutivo",
        descripcion: "Líder visionario con más de 10 años de experiencia en la industria.",
        correo: "juan.perez@empresa.com",
        imagen: "/image/equipo/avatares/avatar1.png",
    },
    {
        nombre: "Elieser Perera Concepción",
        cargo: "Especialista Oficial de Monitoreo y Seguimiento",
        descripcion: "Experta en marketing con más de 8 años de experiencia en la creación de campañas exitosas.",
        correo: "maria.rodriguez@empresa.com",
        imagen: "/image/equipo/avatares/avatar2.png",
    },
    {
        nombre: "William Graupera Bahsamonde",
        cargo: "Especialista Oficial de Logística",
        descripcion: "Ingeniero de software con más de 12 años de experiencia en el desarrollo de soluciones innovadoras.",
        correo: "carlos.lopez@empresa.com",
        imagen: "/image/equipo/avatares/avatar3.png",
    },
    {
        nombre: "Sofía López",
        cargo: "Directora de Recursos Humanos",
        descripcion: "Experta en gestión de recursos humanos con más de 10 años de experiencia en la industria.",
        correo: "sofia.lopez@empresa.com",
        imagen: "/image/equipo/avatares/avatar1.png",
    },
];

export default function NuestroEquipo() {
    return (

        <div className={'relative min-h-screen'}>

            <div className="container mx-auto p-4 md:px-8 md:py-12 overflow-hidden">

                <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Nuestro Equipo</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {equipo.map((miembro, index) => (
                        <div key={index}
                             className="bg-gray-100 flex flex-col justify-around items-center text-center rounded-lg shadow-lg p-4">
                            <Avatar className="mb-4 w-20 h-20">
                                <AvatarImage src={miembro.imagen}/>
                                <AvatarFallback>{miembro.nombre.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl text-gray-900 font-bold mb-2">{miembro.nombre}</h2>
                            <p className="text-gray-600 mb-4">{miembro.cargo}</p>
                            <p className="text-gray-600">{miembro.descripcion}</p>
                            <p className="text-gray-600 mt-4">Contacto: {miembro.correo}</p>
                        </div>
                    ))}
                </div>

            </div>
            {/* Imagen de fondo */}
            <Image
                src={'/image/equipo/fondo.png'}
                className={'absolute top-0 left-0 right-0 bottom-0 z-[-1]'}
                alt={'fondo'}
                layout={'fill'}
            />
        </div>

    );
}