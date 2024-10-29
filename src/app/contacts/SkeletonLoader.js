// src/components/SkeletonLoader.js
import styles from './SkeletonLoader.module.scss';

export default function SkeletonLoader() {
    return (
        <div className={styles.skeletonLoader}>
            <div className={styles.skeletonBody}></div>
        </div>
    );
}
