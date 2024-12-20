// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './Boats.module.scss';
//
// export default function Boats() {
//     return (
//         <div className={styles.catalog}>
//             <h1 className={styles.boatsTitle}>Katalog für Boote</h1>
//
//             {/* Категория Gelex */}
//             <section className={styles.catalogSection}>
//                 <h2>Gelex</h2>
//                 <div className={styles.boatList}>
//                     <Link href="/boats/gelex/g4" className={styles.boatItem}>
//                         <Image src="/boats/gelex/g4/g4-3.png" alt="Gelex G4" width={200} height={150}/>
//                         <h3>Gelex G4</h3>
//                         <p>Länge (cm): 395</p>
//                         <p>Breite (cm): 165</p>
//                         <p>Fassungsvermögen (kg): 320</p>
//                         <p>Passagierkapazität (Personen): 3</p>
//
//                     </Link>
//                     <Link href="/boats/gelex/g4-5" className={styles.boatItem}>
//                         <Image src="/boats/gelex/g4-5/g4-5-4.png" alt="Gelex G4.5" width={200} height={150} />
//                         <h3>Gelex G4.5</h3>
//                         <p>Länge (cm): 450</p>
//                         <p>Breite (cm): 180</p>
//                         <p>Fassungsvermögen (kg): 450</p>
//                         <p>Passagierkapazität (Personen): 4</p>
//                     </Link>
//                     <Link href="/boats/gelex/g5" className={styles.boatItem}>
//                         <Image src="/boats/gelex/g5/g5-3.png" alt="Gelex G5" width={200} height={150} />
//                         <h3>Gelex G5</h3>
//                         <p>Länge (cm): 495</p>
//                         <p>Breite (cm): 195</p>
//                         <p>Fassungsvermögen (kg): 490</p>
//                         <p>Passagierkapazität (Personen): 4</p>
//                     </Link>
//                     <Link href="/boats/gelex/g5-2" className={styles.boatItem}>
//                         <Image src="/boats/gelex/g5-2/g5-2-5.png" alt="Gelex G5.2" width={200} height={150} />
//                         <h3>Gelex G5.2</h3>
//                         <p>Länge (cm): 515</p>
//                         <p>Breite (cm): 205</p>
//                         <p>Fassungsvermögen (kg): 530</p>
//                         <p>Passagierkapazität (Personen): 5</p>
//                     </Link>
//                     <Link href="/boats/gelex/g5-5" className={styles.boatItem}>
//                         <Image src="/boats/gelex/g5-5/g5-5-2.png" alt="Gelex G5.5" width={200} height={150} />
//                         <h3>Gelex G5.5</h3>
//                         <p>Coming soon</p>
//                     </Link>
//                     {/*<Link href="/boats/gelex/g6" className={styles.boatItem}>*/}
//                     {/*    <Image src="/boats/gelex/G4-5/G4.5_02-0-min.png" alt="Gelex G6" width={200} height={150} />*/}
//                     {/*    <h3>Gelex G6</h3>*/}
//                     {/*    <p>Coming soon</p>*/}
//                     {/*</Link>*/}
//                 </div>
//             </section>
//
//             {/*/!* Категория Gala *!/*/}
//             {/*<section className={styles.catalogSection}>*/}
//             {/*    <h2>Gala</h2>*/}
//             {/*    <div className={styles.boatList}>*/}
//             {/*        <Link href="/boats/gala/model1" className={styles.boatItem}>*/}
//             {/*            <Image src="/boats/gala_model1.jpg" alt="Gala Model 1" width={200} height={150} />*/}
//             {/*            <h3>Gala Model 1</h3>*/}
//             {/*            <p>Удобная и надежная модель для семейного отдыха.</p>*/}
//             {/*        </Link>*/}
//             {/*        /!* Add more Gala boats similarly *!/*/}
//             {/*    </div>*/}
//             {/*</section>*/}
//
//             {/* Категория Galaxy */}
//             {/*<section className={styles.catalogSection}>*/}
//             {/*    <h2>Galaxy</h2>*/}
//             {/*    <div className={styles.boatList}>*/}
//             {/*        <Link href="/boats/galaxy/model1" className={styles.boatItem}>*/}
//             {/*            <Image src="/boats/galaxy_model1.jpg" alt="Galaxy Model 1" width={200} height={150} />*/}
//             {/*            <h3>Galaxy Model 1</h3>*/}
//             {/*            <p>Просторный и надежный катер для любых задач.</p>*/}
//             {/*        </Link>*/}
//             {/*        /!* Add more Galaxy boats similarly *!/*/}
//             {/*    </div>*/}
//             {/*</section>*/}
//         </div>
//     );
// }
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Boats.module.scss';

export default function Boats() {
    const [isMobile, setIsMobile] = useState(false);

    // Определяем, мобильное устройство или нет
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Проверка при загрузке страницы
        handleResize();

        // Слушаем изменения размера окна
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.catalog}>
            <h1 className={styles.boatsTitle}>Katalog für Boote</h1>

            {/* Категория Gelex */}
            <section className={styles.catalogSection}>
                {/*<h2>Gelex</h2>*/}
                <div className={styles.boatList}>
                    <Link href="/boats/gelex/g4" className={styles.boatItem}>
                        <Image
                            src="/boats/gelex/g4/g4-3.png"
                            alt="Gelex G4"
                            width={isMobile ? 200 : 600}  // Меняем ширину для мобильной версии
                            height={isMobile ? 200 : 450} // Меняем высоту для мобильной версии
                            quality={100} // Устанавливаем качество изображения на максимум
                        />
                        <div className={styles.textContent}>
                            <h3>Gelex G4</h3>
                            <p>Länge (cm): 395</p>
                            <p>Breite (cm): 165</p>
                            <p>Fassungsvermögen (kg): 320</p>
                            <p>Passagierkapazität (Personen): 3</p>
                        </div>
                    </Link>
                    <Link href="/boats/gelex/g4-5" className={styles.boatItem}>
                        <Image
                            src="/boats/gelex/g4-5/g4-5-4.png"
                            alt="Gelex G4.5"
                            width={isMobile ? 200 : 600}
                            height={isMobile ? 200 : 450}
                            quality={100}
                        />
                        <div className={styles.textContent}>
                            <h3>Gelex G4.5</h3>
                            <p>Länge (cm): 450</p>
                            <p>Breite (cm): 180</p>
                            <p>Fassungsvermögen (kg): 450</p>
                            <p>Passagierkapazität (Personen): 4</p>
                        </div>
                    </Link>
                    <Link href="/boats/gelex/g5" className={styles.boatItem}>
                        <Image
                            src="/boats/gelex/g5/g5-3.png"
                            alt="Gelex G5"
                            width={isMobile ? 200 : 600}
                            height={isMobile ? 200 : 450}
                            quality={100}
                        />
                        <div className={styles.textContent}>
                            <h3>Gelex G5</h3>
                            <p>Länge (cm): 495</p>
                            <p>Breite (cm): 195</p>
                            <p>Fassungsvermögen (kg): 490</p>
                            <p>Passagierkapazität (Personen): 4</p>
                        </div>
                    </Link>
                    <Link href="/boats/gelex/g5-2" className={styles.boatItem}>
                        <Image
                            src="/boats/gelex/g5-2/g5-2-5.png"
                            alt="Gelex G5.2"
                            width={isMobile ? 200 : 600}
                            height={isMobile ? 200 : 450}
                            quality={100}
                        />
                        <div className={styles.textContent}>
                            <h3>Gelex G5.2</h3>
                            <p>Länge (cm): 515</p>
                            <p>Breite (cm): 205</p>
                            <p>Fassungsvermögen (kg): 530</p>
                            <p>Passagierkapazität (Personen): 5</p>
                        </div>
                    </Link>
                    <Link href="/boats/gelex/g5-5" className={styles.boatItem}>
                        <Image
                            src="/boats/gelex/g5-5/g5-5-2.png"
                            alt="Gelex G5.5"
                            width={isMobile ? 200 : 600}
                            height={isMobile ? 200 : 450}
                            quality={100}
                        />
                        <div className={styles.textContent}>
                            <h3>Gelex G5.5</h3>
                            <p>Voraussichtlich Ende 2024/Anfang 2025</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

