// pages/boat/page.js
"use client";

import { useState, useEffect } from 'react';
import Gallery from '/src/app/components/gallery/Gallery';
import styles from './boatPage.module.scss';
import BoatConfigurator from '/src/app/components/configurator/BoatConfigurator';

const images = [
    { src: '/boats/gelex/g4-5/1.jpg', alt: 'Boot 1' },
    { src: '/boats/gelex/g4-5/2.jpg', alt: 'Boot 2' },
    { src: '/boats/gelex/g4-5/3.jpg', alt: 'Boot 3' },
    { src: '/boats/gelex/g4-5/4.jpg', alt: 'Boot 4' },
    { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boot 5' },
];

const colors = [
    { name: 'Grau', colorCode: '#7D7D7D' },
    { name: 'Olivgrün', colorCode: '#556B2F' },
    { name: 'Weiß', colorCode: '#FFFFFF' },
    { name: 'Schwarz', colorCode: '#000000' },
];

export default function BoatPage() {
    const [activeTab, setActiveTab] = useState('description');
    const [activeFeaturesTab, setActiveFeaturesTab] = useState('standard');
    const [selectedColor, setSelectedColor] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Первоначальная установка при загрузке
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTabClick = (tab) => setActiveTab(tab);
    const handleFeaturesTabClick = (tab) => setActiveFeaturesTab(tab);
    const handleColorClick = (color) => setSelectedColor(color.name);

    const boatConfigSteps = [
        {
            title: 'Wählen Sie die Basis',
            options: [
                { name: 'Basis A', price: 500, image: '/test/1.png' },
                { name: 'Basis B', price: 700, image: '/test/2.png' },
                { name: 'Basis C', price: 1000, image: '/test/3.png' },
                { name: 'Basis D', price: 1200, image: '/test/1.png' },
                { name: 'Basis E', price: 1500, image: '/test/2.png' },
                { name: 'Basis F', price: 1900, image: '/test/3.png' },
            ],
        },
        {
            title: 'Wählen Sie den Motor',
            options: [
                { name: 'Basis A', price: 500, image: '/test/1.png' },
                { name: 'Basis B', price: 700, image: '/test/2.png' },
                { name: 'Basis C', price: 1000, image: '/test/3.png' },
                { name: 'Basis D', price: 1200, image: '/test/1.png' },
                { name: 'Basis E', price: 1500, image: '/test/2.png' },
                { name: 'Basis F', price: 1900, image: '/test/3.png' },
            ],
        },
        {
            title: 'Wählen Sie die Farbe',
            options: [
                { name: 'Basis A', price: 500, image: '/test/1.png' },
                { name: 'Basis B', price: 700, image: '/test/2.png' },
                { name: 'Basis C', price: 1000, image: '/test/3.png' },
            ],
        },
        {
            title: 'Wählen Sie die Ausstattung',
            options: [
                { name: 'Basis A', price: 500, image: '/test/1.png' },
                { name: 'Basis B', price: 700, image: '/test/2.png' },
                { name: 'Basis C', price: 1000, image: '/test/3.png' },
                { name: 'Basis D', price: 1200, image: '/test/1.png' },
            ],
        },
        {
            title: 'Zusätzliche Optionen',
            options: [
                { name: 'Basis A', price: 500, image: '/test/1.png' },
                { name: 'Basis B', price: 700, image: '/test/2.png' },
                { name: 'Basis C', price: 700, image: '/test/3.png' },
            ],
        }
    ];

    return (
        <div className={styles.boatPage}>
            <h1>Gelex G4</h1>
            <Gallery images={images}/>

            <h2>Informationen</h2>

            <div className={styles.tabButtons}>
                <button
                    className={activeTab === 'description' ? styles.active : ''}
                    onClick={() => handleTabClick('description')}
                >
                    Beschreibung
                </button>
                <button
                    className={activeTab === 'specs' ? styles.active : ''}
                    onClick={() => handleTabClick('specs')}
                >
                    Technische Daten
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <p>
                        Der Gelex G4 ist ein komfortables und stilvolles Boot, das für entspannende
                        Ausflüge auf dem Wasser konzipiert ist. Es ist mit hochwertigen Materialien
                        ausgestattet, um Zuverlässigkeit und Sicherheit für alle Passagiere zu
                        gewährleisten.
                    </p>
                )}
                {activeTab === 'specs' && (
                    <ul>
                        <li>Bootskategorie EU: D</li>
                    </ul>
                )}
            </div>

            <div className={styles.colorSection}>
                <h2>Verfügbare Farben</h2>
                <div className={styles.colorOptions}>
                    {colors.map((color) => (
                        <div
                            key={color.name}
                            className={styles.colorBox}
                            style={{backgroundColor: color.colorCode}}
                            title={color.name}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div>
                {isMobile && selectedColor && (
                    <p className={styles.selectedColorText}>Ausgewählte Farbe: {selectedColor}</p>
                )}
            </div>

            <h2>Optionen</h2>

            <div className={styles.tabButtons}>
                <button
                    className={activeFeaturesTab === 'standard' ? styles.active : ''}
                    onClick={() => handleFeaturesTabClick('standard')}
                >
                    Standardfunktionen
                </button>
                <button
                    className={activeFeaturesTab === 'optional' ? styles.active : ''}
                    onClick={() => handleFeaturesTabClick('optional')}
                >
                    Zusatzausstattung
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeFeaturesTab === 'standard' && (
                    <ul>
                        <li>Der Rumpf ist komplett mit grauer Polyester-Pulverbeschichtung (RAL 7011) lackiert</li>
                        <li>Klappbare Ruder mit Tasche, 2 Stk.</li>
                    </ul>
                )}
                {activeFeaturesTab === 'optional' && (
                    <ul>
                        <li>Lackierung des Bootsrumpfs in einer anderen Farbe</li>
                    </ul>
                )}
            </div>

            <BoatConfigurator steps={boatConfigSteps} />
        </div>
    );
}
