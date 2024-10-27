import styles from './closeButton.module.scss';

export default function CloseButton({ onClose }) {
    return (
        <button className={styles.closeButton} onClick={onClose}>✕</button>
    );
}
