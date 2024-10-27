// components/ImageModal.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './imageModal.module.scss';

export default function ImageModal({ images, currentIndex, onClose, onNext, onPrev }) {
    const [zoom, setZoom] = useState(1);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [touchStartDistance, setTouchStartDistance] = useState(null);
    const [initialZoom, setInitialZoom] = useState(1);

    const maxZoom = 3;
    const minZoom = 1;
    const maxOffset = 50; // Максимальный отскок в 50 пикселей

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

    const zoomIn = () => setZoom(prevZoom => Math.min(prevZoom + 0.2, maxZoom));
    const zoomOut = () => setZoom(prevZoom => Math.max(prevZoom - 0.2, minZoom));

    // Перетаскивание на десктопе
    const handleMouseDown = (event) => {
        if (zoom > 1) {
            setIsDragging(true);
            setStartDragPosition({ x: event.clientX - dragPosition.x, y: event.clientY - dragPosition.y });
            event.preventDefault();
        }
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const newX = event.clientX - startDragPosition.x;
            const newY = event.clientY - startDragPosition.y;

            setDragPosition({
                x: Math.min(Math.max(newX, -maxOffset), maxOffset),
                y: Math.min(Math.max(newY, -maxOffset), maxOffset)
            });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    // Свайп и мультитач-зумирование на мобильных устройствах
    const handleTouchStart = (event) => {
        if (event.touches.length === 1 && zoom === 1) {
            setIsDragging(true);
            setStartDragPosition({
                x: event.touches[0].clientX - dragPosition.x,
                y: event.touches[0].clientY - dragPosition.y
            });
        } else if (event.touches.length === 2) {
            // Начало мультитач-зумирования
            const touchDistance = calculateDistance(event.touches);
            setTouchStartDistance(touchDistance);
            setInitialZoom(zoom);
        }
    };

    const handleTouchMove = (event) => {
        if (event.touches.length === 1 && isDragging) {
            const newX = event.touches[0].clientX - startDragPosition.x;
            const newY = event.touches[0].clientY - startDragPosition.y;

            setDragPosition({
                x: Math.min(Math.max(newX, -maxOffset), maxOffset),
                y: Math.min(Math.max(newY, -maxOffset), maxOffset)
            });
        } else if (event.touches.length === 2 && touchStartDistance) {
            // Обработка жеста "щипка" для зумирования
            const touchDistance = calculateDistance(event.touches);
            const scaleFactor = touchDistance / touchStartDistance;
            const newZoom = Math.min(Math.max(initialZoom * scaleFactor, minZoom), maxZoom);
            setZoom(newZoom);
        }
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            setDragPosition((prevPosition) => ({
                x: Math.min(Math.max(prevPosition.x, -maxOffset + 50), maxOffset - 50),
                y: Math.min(Math.max(prevPosition.y, -maxOffset + 50), maxOffset - 50)
            }));
            setIsDragging(false);
        }
        setTouchStartDistance(null); // Сбрасываем расстояние для мультитач-зумирования
    };

    // Функция для расчета расстояния между двумя касаниями
    const calculateDistance = (touches) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    return (
        <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>✕</button>
            <button className={styles.modalArrowLeft} onClick={handlePrev}>←</button>
            <button className={styles.modalArrowRight} onClick={handleNext}>→</button>

            <div className={styles.counter}>
                {currentIndex + 1} / {images.length}
            </div>

            <div
                className={`${styles.modalImageContainer} ${styles.smoothTransition}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    transform: `scale(${zoom}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
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

            <div className={styles.zoomControls}>
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>−</button>
            </div>
        </div>
    );
}
