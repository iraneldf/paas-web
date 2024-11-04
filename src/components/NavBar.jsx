'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Asegúrate de que estás importando correctamente el componente Image
import { Menu } from 'lucide-react'; // Asegúrate de importar el ícono Menu

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-300 text-black relative">
            <div className="mx-auto px-5 xl:px-20 py-2 flex justify-between items-center">
                <Image src={'/image/Logo PAAS.svg'} alt={'Logo'} width={100} height={50} />

                <nav className={'hidden lg:block'}>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:underline">¿Quiénes somos?</a></li>
                        <li><a href="#services" className="hover:underline">Proyectos en curso</a></li>
                        <li><a href="#about" className="hover:underline">Proyectos terminados</a></li>
                        <li><a href="#contact" className="hover:underline">Productos y resultados</a></li>
                        <li><a href="#team" className="hover:underline">Nuestro equipo</a></li>
                        <li><a href="#contact" className="hover:underline">Contáctanos</a></li>
                    </ul>
                </nav>

                <button className={'lg:hidden'} onClick={toggleMenu}>
                    <Menu />
                </button>
            </div>

            {/* Menú desplegable */}
            <div
                className={`lg:hidden bg-gray-300  absolute w-full top-20 z-30 transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? 'max-h-48' : 'max-h-0'
                }`}
            >
                <nav className="w-full">
                    <ul className="flex flex-col items-center gap-2 pb-10">
                        <li><a href="#home" className="hover:underline">¿Quiénes somos?</a></li>
                        <li><a href="#services" className="hover:underline">Proyectos en curso</a></li>
                        <li><a href="#about" className="hover:underline">Proyectos terminados</a></li>
                        <li><a href="#contact" className="hover:underline">Productos y resultados</a></li>
                        <li><a href="#team" className="hover:underline">Nuestro equipo</a></li>
                        <li><a href="#contact" className="hover:underline">Contáctanos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;