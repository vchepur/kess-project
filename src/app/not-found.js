import Link from 'next/link';
import styles from './not-found.module.scss'; // Убедись, что импортируешь правильный SCSS-модуль

export default function notFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404 - Страница не найдена</h1>
            <p>К сожалению, страница, которую вы ищете, не существует.</p>
            <Link href="/" className={styles.link}>
                Вернуться на главную
            </Link>
        </div>
    );
}