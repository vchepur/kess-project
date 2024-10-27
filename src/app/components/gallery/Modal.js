import { useState, useEffect } from 'react';
import Image from 'next/image';
import CloseButton from './CloseButton';
import NavigationButton from './NavigationButton';
import ZoomControls from './ZoomControls';
import ImageCounter from './ImageCounter';
import styles from './imageModal.module.scss';

export default function ImageModal({ images, currentIndex, onClose, onNext, onPrev }) {
    const [zoom, setZoom] = useState(1);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [initialDistance, setInitialDistance] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') handleNext();
            else if (event.key === 'ArrowLeft') handlePrev();
            else if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext, onPrev, onClose]);

    const resetZoomAndPosition = () => {
        setZoom(1);
        setDragPosition({ x: 0, y: 0 });
    };

    const handleNext = () => {
        resetZoomAndPosition();
        onNext();
    };

    const handlePrev = () => {
        resetZoomAndPosition();
        onPrev();
    };

    const handleTouchStart = (event) => {
        if (event.touches.length === 1 && zoom === 1) {
            // Начало одиночного свайпа
            setStartDragPosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });
        } else if (event.touches.length === 2) {
            // Начало пинч-зумирования
            const distance = Math.sqrt(
                Math.pow(event.touches[0].clientX - event.touches[1].clientX, 2) +
                Math.pow(event.touches[0].clientY - event.touches[1].clientY, 2)
            );
            setInitialDistance(distance);
        }
    };

    const handleTouchMove = (event) => {
        if (event.touches.length === 1 && zoom === 1 && startDragPosition) {
            // Обработка свайпа
            const deltaX = event.touches[0].clientX - startDragPosition.x;
            if (Math.abs(deltaX) > 50) { // Чувствительность свайпа
                if (deltaX > 0) handlePrev();
                else handleNext();
                setStartDragPosition(null); // Сбрасываем начальную позицию свайпа
            }
        } else if (event.touches.length === 2 && initialDistance) {
            // Обработка пинч-зумирования
            const distance = Math.sqrt(
                Math.pow(event.touches[0].clientX - event.touches[1].clientX, 2) +
                Math.pow(event.touches[0].clientY - event.touches[1].clientY, 2)
            );
            const scale = distance / initialDistance;
            setZoom(Math.min(Math.max(1, scale), 3)); // Ограничиваем зум от 1x до 3x
        }
    };

    const handleTouchEnd = () => {
        setInitialDistance(null);
        setStartDragPosition(null);
    };

    return (
        <div className={styles.modal}>
            <CloseButton onClose={onClose} />
            <NavigationButton direction="left" onClick={handlePrev} />
            <NavigationButton direction="right" onClick={handleNext} />

            <ImageCounter currentIndex={currentIndex} totalImages={images.length} />

            <div
                className={styles.modalImageContainer}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    transform: `scale(${zoom}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                    cursor: zoom > 1 ? 'grab' : 'default',
                }}
            >
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    layout="responsive"
                    width={1200}
                    height={800}
                    objectFit="contain"
                />
            </div>

            <ZoomControls zoomIn={() => setZoom(Math.min(zoom + 0.2, 3))} zoomOut={() => setZoom(Math.max(zoom - 0.2, 1))} />
        </div>
    );
}
