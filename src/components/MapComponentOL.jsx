'use client'

import React, {useRef, useEffect, useState} from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import {fromLonLat} from 'ol/proj'
import {Feature} from 'ol'
import {Point} from 'ol/geom'
import {Vector as VectorLayer} from 'ol/layer'
import {Vector as VectorSource} from 'ol/source'
import {Style, Icon} from 'ol/style'
import Overlay from 'ol/Overlay'
import {X} from 'lucide-react'
import 'ol/ol.css'
import '@/app/styles/map.css'

const MapComponent = () => {
    const mapRef = useRef()
    const mapInstance = useRef(null)
    const popupRef = useRef()
    const [showPopup, setShowPopup] = useState(true)

    useEffect(() => {
        if (mapInstance.current) return // initialize map only once

        const position = fromLonLat([-82.42337592903205, 23.11742570503209])

        // Create a marker feature
        const marker = new Feature({
            geometry: new Point(position)
        })

        // Create an SVG for the marker
        const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="size-9 lucide lucide-map-pin">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" fill="#4CAF50"/>
        <circle cx="12" cy="10" r="3" fill="#EF8422"/>
      </svg>
    `

        // Convert SVG string to data URL
        const svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString)

        // Create a style for the marker
        const markerStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                src: svgUrl,
                scale: 1.5 // Adjust this value to change the size of the marker
            })
        })

        marker.setStyle(markerStyle)

        // Create vector source and layer for the marker
        const vectorSource = new VectorSource({
            features: [marker]
        })

        const vectorLayer = new VectorLayer({
            source: vectorSource
        })

        mapInstance.current = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                vectorLayer
            ],
            view: new View({
                center: position,
                zoom: 15
            }),
            controls: [] // Remove all default controls
        })

        // Create and add the popup overlay
        const popup = new Overlay({
            element: popupRef.current,
            positioning: 'bottom-center',
            offset: [0, -40]
        })

        mapInstance.current.addOverlay(popup)

        // Set popup position
        popup.setPosition(position)

        return () => {
            if (mapInstance.current) {
                mapInstance.current.setTarget(null)
                mapInstance.current = null
            }
        }
    }, [])

    const handleClosePopup = () => {
        setShowPopup(false)
    }

    const handleOpenPopup = () => {
        setShowPopup(true)
    }

    return (
        <div className="relative w-full h-full" style={{minHeight: '200px'}}>
            <div ref={mapRef} onClick={handleOpenPopup} className="w-full h-full"></div>

            <div
                ref={popupRef}
                className={`ol-popup transition-opacity duration-300 ease-in-out transform ${
                    showPopup ? 'opacity-100' : 'opacity-0 '
                }`}
            >
                <button
                    onClick={handleClosePopup}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Cerrar información"
                >
                    <X size={20}/>
                </button>
                <h3 className="text-lg font-semibold mb-2">Programa Paas</h3>
                <p>Calle 7ma entre 30 y 32. Municipio Playa.</p>
            </div>

        </div>
    )
}

export default MapComponent