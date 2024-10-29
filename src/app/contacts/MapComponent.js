// src/app/contacts/MapComponent.js
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './MapComponent.module.scss'; // Подключаем новый CSS файл

// Динамически подключаем Leaflet, чтобы избежать проблем с SSR
const L = dynamic(() => import('leaflet'), { ssr: false });

const DynamicMap = dynamic(() => import('react-leaflet').then((mod) => {
    const { MapContainer, TileLayer, Marker, Popup } = mod;

    return function Map() {
        const position = [47.720500853031, 8.93679392459584];
        const googleMapsLink = `https://maps.app.goo.gl/4eG8a5YDtcJqwWzWA`;

        const [customMarker, setCustomMarker] = useState(null);

        useEffect(() => {
            const leaflet = require('leaflet');
            const markerIcon = leaflet.icon({
                iconUrl: '/map_marker.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });
            setCustomMarker(markerIcon);
        }, []);

        if (!customMarker) return null;

        return (
            <MapContainer
                center={position}
                zoom={13}
                className={styles['map-container']} // Применяем стили для карты
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={position} icon={customMarker}>
                    <Popup>
                        <h3>KESSLER Boote & Meer</h3>
                        <p><strong>Öffnungszeiten:</strong></p>
                        <ul>
                            <li>Montag - Freitag: 9:00 - 18:00</li>
                            <li>Суббота: 10:00 - 14:00</li>
                            <li>Воскресенье: закрыто</li>
                        </ul>
                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                            Открыть в Google Maps
                        </a>
                    </Popup>
                </Marker>
            </MapContainer>
        );
    };
}), { ssr: false });

export default DynamicMap;
