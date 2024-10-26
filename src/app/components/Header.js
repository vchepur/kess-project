// components/Header.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const closeMenu = () => {
        setIsBurgerOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Логотип */}
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/logo-kessler-footer.webp" alt="Logo" width={200} />
                    </Link>
                </div>

                {/* Навигация */}
                <nav className={styles.menu}>
                    <ul>
                        <li><a href="/boats" onClick={closeMenu}>Katalog</a></li>
                        <li><a href="/reviews" onClick={closeMenu}>Bootsbewertungen</a></li>
                        <li><a href="/activities" onClick={closeMenu}>Aktivitäten</a></li>
                        <li><a href="/dealers" onClick={closeMenu}>Händler</a></li>
                        <li><a href="/service" onClick={closeMenu}>Dienst</a></li>
                        <li><a href="/contacts" onClick={closeMenu}>Kontakt</a></li>
                    </ul>
                </nav>

                {/* Контактный блок с телефоном */}
                <div className={styles.contact}>
                    <div className={styles.phoneDropdown}>
                        <p>+49 162 987 28 71</p>
                        <span className={styles.arrow}></span>
                    </div>
                    {/* Выпадающее меню появляется по наведению благодаря CSS */}
                    <div className={styles.dropdownMenu}>
                        <p>Email: info@kessler-boote.com</p>
                        <p>Adresse 1: Gewerbestraße 6/1, D-78244 Gottmadingen</p>
                        <p>Adresse 2: Gotenstraße 50, D-56567 Neuwied</p>
                        <p>Открыть страницу контактов</p>
                    </div>
                </div>

                {/* Бургер-меню для мобильной версии */}
                <div className={`${styles.burger} ${isBurgerOpen ? styles.open : ''}`} onClick={toggleBurgerMenu}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>

                {/* Само бургер-меню */}
                {isBurgerOpen && (
                    <div className={styles.burgerMenu}>
                        <ul>
                            <li><a href="/" onClick={closeMenu}>Home</a></li>
                            <li><a href="/boats" onClick={closeMenu}>Katalog</a></li>
                            <li><a href="/reviews" onClick={closeMenu}>Bootsbewertungen</a></li>
                            <li><a href="/activities" onClick={closeMenu}>Aktivitäten</a></li>
                            <li><a href="/dealers" onClick={closeMenu}>Händler</a></li>
                            <li><a href="/service" onClick={closeMenu}>Dienst</a></li>
                            <li><a href="/contacts" onClick={closeMenu}>Kontakt</a></li>
                            <div className={styles.BurgerMenuContactsMini}>
                                <p>+49 162 987 28 71</p>
                                <p>info@kessler-boote.com</p>
                                <p>Gewerbestraße 6/1, D-78244 Gottmadingen</p>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
