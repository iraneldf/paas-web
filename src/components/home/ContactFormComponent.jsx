'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
    loading: () => <p>Cargando mapa...</p>,
    ssr: false
})

export function ContactSectionForm() {
    return (
        <section id={'contact'} className="py-12 bg-green-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Contáctenos</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className={'flex flex-col justify-between'}>
                        <CardHeader>
                            <CardTitle>Envíenos un mensaje</CardTitle>
                        </CardHeader>
                        <CardContent className={'flex-1'}>
                            <form className="min-h-full space-y-4 flex flex-col justify-around">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Nombre"/>
                                    <Input placeholder="Apellido"/>
                                </div>
                                <Input placeholder="Correo electrónico" type="email"/>
                                <Input placeholder="Teléfono" type="tel"/>
                                <Textarea placeholder="Su mensaje" rows={4}/>
                                <Button type="submit" className="w-full hover:bg-green-700">Enviar mensaje</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6 h-[300px]">
                                <MapComponent/>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <MapPin className="h-5 w-5 text-green-600 mr-2"/>
                                        <span>Calle 7ma entre 30 y 32. Municipio Playa.Provincia La Habana</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Phone className="h-5 w-5 text-green-600 mr-2"/>
                                        <span>537-2025526 ext 17</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Mail className="h-5 w-5 text-green-600 mr-2"/>
                                        <span>paasdirector@iift.cu</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}