// components/Counter.js
import styles from './imageCounter.module.scss';

export default function Counter({ currentIndex, totalImages }) {
    return (
        <div className={styles.counter}>
            {currentIndex + 1} / {totalImages}
        </div>
    );
}
