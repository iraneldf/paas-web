'use client'
import React, {useState} from 'react';
import Image from 'next/image'; // Asegúrate de que estás importando correctamente el componente Image
import {Menu} from 'lucide-react';
import Link from "next/link";
import {usePathname} from "next/navigation"; // Asegúrate de importar el ícono Menu

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const pathname = usePathname();

    return (<header className="bg-gray-300 text-black relative">
        <div className="mx-auto px-5 xl:px-20  flex justify-between items-center">

            <Image className={'object-cover w-[130px] h-full'} src={'/image/Logo PAAS.png'} priority alt={'Logo'}
                   width={130} height={100}/>

            <nav className={'hidden lg:block'}>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/"
                              className={` ${pathname === '/' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            ¿Quiénes
                            somos?</Link>
                    </li>
                    <li>
                        <Link href="/proyectos/en-proceso"
                              className={` ${pathname === '/proyectos/en-proceso' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            Proyectos
                            en curso</Link>
                    </li>
                    <li>
                        <Link href="/proyectos/terminados"
                              className={` ${pathname === '/proyectos/terminados' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            Proyectos
                            terminados</Link>
                    </li>
                    <li>
                        <Link href="/productos-resultados"
                              className={` ${pathname === '/productos-resultados' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            Productos
                            y resultados</Link>
                    </li>
                    <li>
                        <Link href="/nuestro-equipo/"
                              className={` ${pathname === '/nuestro-equipo' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>Nuestro
                            equipo</Link>
                    </li>
                    <li>
                        <Link href="/#contact"
                              className="hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1">Contáctanos</Link>
                    </li>
                </ul>
            </nav>

            <button className={'lg:hidden'} onClick={toggleMenu}>
                <Menu/>
            </button>
        </div>

        {/* Menú desplegable */}
        <div
            className={`lg:hidden bg-gray-300  absolute w-full top-20 z-30 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-48' : 'max-h-0'}`}
        >
            <nav className="w-full">
                <ul className="flex flex-col items-center gap-2 pb-10">
                    <li>
                        <Link href="/"
                              className={` ${pathname === '/' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            ¿Quiénes
                            somos?</Link>
                    </li>
                    <li>
                        <Link href="/proyectos/en-proceso"
                              className={` ${pathname === '/proyectos/en-proceso' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            Proyectos
                            en curso</Link>
                    </li>
                    <li>
                        <Link href="/proyectos/terminados"
                              className={` ${pathname === '/proyectos/terminados' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            Proyectos
                            terminados</Link>
                    </li>
                    <li>
                        <Link href="/productos-resultados"
                              className={` ${pathname === '/productos-resultados' && 'bg-green-800 text-white'} hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1`}>
                            Productos
                            y resultados</Link>
                    </li>
                    <li>
                        <Link href="/nuestro-equipo/"
                              className="hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1">Nuestro
                            equipo</Link>
                    </li>
                    <li>
                        <Link href="/#contact"
                              className="hover:bg-green-800 hover:text-white transition duration-300 rounded px-2 py-1">Contáctanos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
};

export default Header;