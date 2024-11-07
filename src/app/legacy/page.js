// pages/impressum.js
import styles from './Legacy.module.scss';

export default function Impressum() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Impressum</h1>
            <p className={styles.text}>Angaben nach Telemediengesetz (TMG) § 5 Allgemeine Informationspflichten</p>

            <h2 className={styles.subtitle}>KESSLER-Boote & Meer</h2>
            <p className={styles.text}>Verantwortlich für den Inhalt dieser Seite: Roman Kessler</p>
            <p className={styles.text}>Roman Kessler | DE-78345, Gewerbestraße 20, Moos</p>
            <p className={styles.text}>Rechtsform Einzelunternehmen | Steuer Nr.:</p>
            <p className={styles.text}>
                Mobil: <a href="tel:+41764006717" className={styles.link}>+41 76 400 67 17</a> |{' '}
                <a href="mailto:info@kessler-boote.com" className={styles.link}>info@kessler-boote.com</a>
            </p>

            <h2 className={styles.subtitle}>Urheberrecht</h2>
            <p className={styles.text}>
                Die durch KESSLER-Boote & Meer erstellten Inhalte sind urheberrechtlich geschützt. Darüber hinaus untersagt
                KESSLER-Boote & Meer die Übermittlung von Inhalten dieser Seiten für kommerzielle und nicht kommerzielle Zwecke
                ohne vorherige schriftliche Zustimmung.
            </p>
            <p className={styles.text}>Benutzte Quellen: Leaflet, OpenStreetMap</p>

        </div>
    );
}