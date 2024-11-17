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
        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Contáctenos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Envíenos un mensaje</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Nombre" />
                                    <Input placeholder="Apellido" />
                                </div>
                                <Input placeholder="Correo electrónico" type="email" />
                                <Input placeholder="Teléfono" type="tel" />
                                <Textarea placeholder="Su mensaje" rows={4} />
                                <Button type="submit" className="w-full">Enviar mensaje</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6 h-[300px]">
                                <MapComponent />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <MapPin className="h-5 w-5 text-green-600 mr-2" />
                                        <span>Av. Agricultura 123, Col. Tecnológica, Ciudad de México, 12345</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Phone className="h-5 w-5 text-green-600 mr-2" />
                                        <span>+52 (55) 1234-5678</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Mail className="h-5 w-5 text-green-600 mr-2" />
                                        <span>contacto@agritech.com</span>
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