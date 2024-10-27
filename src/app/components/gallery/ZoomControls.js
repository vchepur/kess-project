import styles from './zoomControls.module.scss';

export default function ZoomControls({ zoomIn, zoomOut }) {
    return (
        <div className={styles.zoomControls}>
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>−</button>
        </div>
    );
}