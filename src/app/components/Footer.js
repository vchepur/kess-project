// src/app/components/Footer.js
'use client'; // Указываем, что компонент клиентский

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>


                <div className={styles.linksSection}>
                    <h3>Informationen</h3>
                    <ul>
                        <li><a href="/guarantee">Garantie</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Kontakt</a></li>
                        <li><a href="/impressum">Impressum</a></li>
                        <li><a href="/privacy">Datenschutz</a></li>
                    </ul>
                </div>

                <div className={styles.linksSection}>
                    <h3>Boote</h3>
                    <ul>
                        <li><a href="/boats/gelex/page">Gelex</a></li>
                        <li><a href="/boats/gala">Gala</a></li>
                        <li><a href="/boats/galaxy">Galaxy</a></li>
                    </ul>
                </div>


                <div className={styles.contactSection}>
                    <h3>Kontakt</h3>
                    <p>info@kessler-boote.com</p>
                    <p>+41 76 400 67 17</p>
                    <p>+49 162 987 28 71</p>
                    <p>Gewerbestraße 6/1, D-78244 Gottmadingen</p>
                    <p>Gotenstraße 50, D-56567 Neuwied</p>
                    <div className={styles.separator}></div>
                    {/* Добавляем разделительную линию */}
                    <div className={styles.socialIcons}>
                        <a href="#"><img src="/instagram.png" alt="Instagram Icon"/></a>
                        <a href="#"><img src="/facebook.png" alt="Facebook Icon"/></a>
                        <a href="#"><img src="/youtube.png" alt="YouTube Icon"/></a>
                        <a href="#"><img src="/whatsapp.png" alt="WhatsApp Icon"/></a>
                        <a href="#"><img src="/google-maps.png" alt="Google Maps Icon"/></a>
                    </div>
                </div>

            </div>
            <div className={styles.socialSection}>
                <p>&copy; 2024 KESSLER Boote & Meer.</p>
            </div>
        </footer>
    );
}
