// pages/boat/page.js
"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TabButtons from '/src/app/components/buttons/TabButtons'; // Если нужны табы
import SkeletonLoader from './SkeletonLoader'; // Компонент для загрузки
import styles from './Contacts.module.scss';

// Асинхронная загрузка MapComponent с SkeletonLoader
const MapComponent = dynamic(() => import('./MapComponent'), {
    ssr: false,
    loading: () => <SkeletonLoader />
});

export default function BoatPage() {
    const [activeTab, setActiveTab] = useState('eu');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTabClick = (tab) => setActiveTab(tab);

    return (
        <div className={styles.boatPage}>
            <h1>Informationen</h1>

            <div className={styles.addressSection}>
                <p><strong>Adressen:</strong></p>
                <p><a href="https://maps.app.goo.gl/WeavKvE6tx8Lmpzs9" target="_blank" rel="noopener noreferrer">
                    DE-78345, Gewerbestraße 20, Moos
                </a></p>
                <section>
                    <h2>Öffnungszeiten</h2>
                    <ul>
                        <li>Montag - Freitag: 9:00 - 18:00</li>
                        <li>Samstag: 10:00 - 14:00</li>
                        <li>Sonntag: geschlossen</li>
                    </ul>
                </section>
            </div>

            <div className={styles.tabButtons}>
                <button
                    className={activeTab === 'eu' ? styles.active : ''}
                    onClick={() => handleTabClick('eu')}
                >
                    Europäische Union
                </button>
                <button
                    className={activeTab === 'swiss' ? styles.active : ''}
                    onClick={() => handleTabClick('swiss')}
                >
                    Schweiz
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'eu' && (
                    <div>
                        <p>Email: <a href="mailto:info@kessler-boote.com">info@kessler-boote.com</a></p>
                        <p>Telefonnummer: <a href="tel:+491629872871">+49 162 987 28 71</a></p>
                    </div>
                )}
                {activeTab === 'swiss' && (
                    <div>
                        <p>Telefonnummer: <a href="tel:+41764006717">+41 76 400 67 17</a></p>
                    </div>
                )}
            </div>

            <h2>Standort auf der Karte</h2>

            <div className={styles.mapContainerWrapper}>
                <MapComponent/>
            </div>
        </div>
    );
}
