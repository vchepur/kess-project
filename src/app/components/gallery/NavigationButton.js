import styles from './navigationButton.module.scss';

export default function NavigationButton({ direction, onClick }) {
    return (
        <button
            className={direction === "left" ? styles.modalArrowLeft : styles.modalArrowRight}
            onClick={onClick}
        >
            {direction === "left" ? "<" : ">"}
        </button>
    );
}
