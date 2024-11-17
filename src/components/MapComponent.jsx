'use client'

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Sprout } from 'lucide-react'

const MapComponent = () => {
    const mapRef = useRef(null)
    const position = [19.4326, -99.1332] // Coordenadas de Ciudad de México

    useEffect(() => {
        if (typeof window !== 'undefined' && !mapRef.current) {
            mapRef.current = L.map('map').setView(position, 13)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current)

            // Crear un icono personalizado usando Lucide Sprout
            const customIcon = L.divIcon({
                html: `
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="size-10 lucide lucide-map-pin">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" fill="#4CAF50"/>
            <circle cx="12" cy="10" r="3" fill="#EF8422"/>
        </svg>
`,
                className: 'custom-icon',
                iconSize: [34, 14],
                iconAnchor: [12, 24],
                popupAnchor: [8, -24]
            })

            L.marker(position, { icon: customIcon }).addTo(mapRef.current)
                .bindPopup('Paas Solutions <br /> Av. Agricultura 123, Col. Tecnológica')
                .openPopup()
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [])

    return <div id="map" style={{ height: '100%', width: '100%' }}></div>
}

export default MapComponent