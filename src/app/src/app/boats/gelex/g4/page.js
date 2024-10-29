// pages/boat/page.js
"use client";

import { useState, useEffect } from 'react';
import Gallery from '/src/app/components/gallery/Gallery';
import styles from './boatPage.module.scss';

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
                        <li>Gewicht*: 180 kg / 396 lbs</li>
                        <li>Länge: 3930 mm / 12' 11" ft/inches</li>
                        <li>Breite: 1640 mm / 5' 4" ft/inches</li>
                        <li>Höhe: 710 mm / 2' 4" ft/inches</li>
                        <li>Heckhöhe: 381/508 mm / 1'3"/1'8" ft/inches</li>
                        <li>Maximale Motorleistung: 30 PS / 22.1 kW</li>
                        <li>Empfohlene Motorleistung: 20 PS / 14.7 kW</li>
                        <li>Maximales Motorengewicht: 70 kg / 154 lbs</li>
                        <li>Maximale Tragfähigkeit: 320 kg / 704 lbs</li>
                        <li>Passagierkapazität: 3 Personen</li>
                        <li>Mittlere Seitenhöhe (Deadrise): 15°</li>
                        <li>Heckwinkel (Deadrise): 12°</li>
                        <li>Tiefgang: 250 mm / 10" ft/inches</li>
                        <li>Materialdicke (Bord/Boden): 2.5/2.5 mm / 0.1"/0.1" inches</li>
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
                        <li>Verstärkte Bugplattform mit der Möglichkeit, zusätzliche Ausrüstung zu installieren
                            (Ankerwinde, elektrischer Anker)
                        </li>
                        <li>T-förmiges Profil für die Installation von Sitzen, Sofas und anderer Ausrüstung auf beiden
                            Seiten der Cockpit-Nischen
                        </li>
                        <li>Einsätze für den Sitzständer, 2 Stk.</li>
                        <li>Scharniere für Deckel der Schließfächer</li>
                        <li>Schlösser aus Edelstahl für die Schließfächer</li>
                        <li>Schutzleiste aus dunkelgrauem PVC-Profil</li>
                        <li>Bugklampe 1 Stk., Heckklampe 2 Stk.</li>
                        <li>Innere Aluminium-Heckabdeckung, 1 Stk.</li>
                        <li>Externe Kunststoff-Heckabdeckung, 1 Stk.</li>
                        <li>Montageplattform für Echolot-Installation</li>
                        <li>Auftriebskörper gemäß ISO 6185 Standard</li>
                        <li>Entwässerungssystem</li>
                        <li>Schließfächer:
                            <ul>
                                <li>Bug-Schließfach mit Selbstentleerung, 1 Stk.</li>
                                <li>Seitliches Schließfach für Zubehör, 3 Stk.</li>
                                <li>Ankerfach, 1 Stk.</li>
                            </ul>
                        </li>
                        <li>Verstellbare Griffe im Cockpit, 4 Stk.</li>
                        <li>Kielschutz</li>
                        <li>Mooring-Klampen aus Polyamid, 4 Stk.</li>
                        <li>Klappbare Ruder mit Tasche, 2 Stk.</li>
                    </ul>
                )}
                {activeFeaturesTab === 'optional' && (
                    <ul>
                        <li>Lackierung des Bootsrumpfs in einer anderen Farbe</li>
                        <li>Seitenverkleidung mit dekorativer Folie</li>
                        <li>Beschichtung des Innenraums mit Marine-Teppich</li>
                        <li>Verkleidung der Cockpit-Oberflächen mit EVA Marine Deck Material (SeaDeck)</li>
                        <li>Lenkkonsolen:
                            <ul>
                                <li>GC-01</li>
                                <li>GC-01L</li>
                            </ul>
                        </li>
                        <li>Mechanisches Lenksystem:
                            <ul>
                                <li>Lenkrad</li>
                                <li>Getriebe</li>
                                <li>Lenkkabel</li>
                            </ul>
                        </li>
                        <li>Abnehmbare Seitengeländer, 4 Stk.</li>
                        <li>Aluminiumsitze mit Fixierung und Verstellmöglichkeit</li>
                        <li>Drehbare Sitze</li>
                        <li>Zweisitziges verstellbares Sofa GS 03</li>
                        <li>Weiche Bezüge für Aluminiumsitze</li>
                        <li>Mooring-Verdeck (abhängig von der installierten Konsole)</li>
                        <li>Hochdruckpumpe mit Spritzpistole</li>
                        <li>Elektronik-Kit:
                            <ul>
                                <li>Steuerblock (Schalter - 5 Stk., Ersatz - 1 Stk.)</li>
                                <li>12V-Steckdose</li>
                                <li>Sicherungssatz</li>
                                <li>Positionslichter (grün, rot)</li>
                                <li>Toplicht (weiß)</li>
                                <li>Hauptschalter</li>
                                <li>Batteriewanne</li>
                                <li>Automatische Bilgenpumpe</li>
                            </ul>
                        </li>
                        <li>Stautasche unter dem Sitz</li>
                        <li>Ruderset: Ruder - 2 Stk., Universalverschluss - 2 Stk.</li>
                        <li>Tasche - Netz für kleine Gegenstände, 4 Stk.</li>
                        <li>Angelpaket: Rutenhalter auf der Innenseite, 4 Stk.</li>
                        <li>Borika-Befestigungssystem:
                            <ul>
                                <li>Plattform mit Universalverschluss, 2 Stk.</li>
                                <li>Zusätzlicher Rutenhalter, 2 Stk.</li>
                                <li>Universalverschluss an der Bordwand, 2 Stk.</li>
                                <li>Montageplattform für Echolot</li>
                                <li>Ankerhalterung mit automatischem Stopper an der Bordwand</li>
                            </ul>
                        </li>
                        <li>Mooring- / Transportverdeck</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
