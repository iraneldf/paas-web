'use client'

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
    const mapRef = useRef(null)
    const mapContainerRef = useRef(null)
    const position = [23.11765764182264, -82.42333116721034] // Coordenadas de La Habana

    useEffect(() => {
        if (typeof window !== 'undefined' && !mapRef.current && mapContainerRef.current) {
            mapRef.current = L.map(mapContainerRef.current).setView(position, 13)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: ''
            }).addTo(mapRef.current)

            const customIcon = L.divIcon({
                html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="size-9 lucide lucide-map-pin">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" fill="#4CAF50"/>
                        <circle cx="12" cy="10" r="3" fill="#EF8422"/>
                    </svg>
                `,
                className: 'custom-icon',
                iconSize: [24, 24],
                iconAnchor: [12, 24],
                popupAnchor: [0, -24]
            })

            L.marker(position, { icon: customIcon }).addTo(mapRef.current)
                .bindPopup('Programa Paas')
                .openPopup()

            // Asegurarse de que el mapa se ajuste correctamente
            setTimeout(() => {
                mapRef.current.invalidateSize()
            }, 0)
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [])

    return <div ref={mapContainerRef} className="w-full h-full" style={{ minHeight: '300px' }}></div>
}

export default MapComponent