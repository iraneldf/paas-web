import Image from "next/image";

export default function NavBar() {
    return (
        <header className="bg-gray-300 text-black">
            <div className=" mx-auto px-20 py-2 flex justify-between items-center">

                <Image src={'/image/Logo PAAS.svg'} alt={'Logo'} width={100} height={50}/>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:underline">¿Quiénes somos?</a></li>
                        <li><a href="#services" className="hover:underline">Proyectos en curso</a></li>
                        <li><a href="#about" className="hover:underline">Proyectos terminados</a></li>
                        <li><a href="#contact" className="hover:underline">Productos y resultados</a></li>
                        <li><a href="#contact" className="hover:underline">Nuestro equipo</a></li>
                        <li><a href="#contact" className="hover:underline">Contáctanos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}