// components/ImageModal.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './imageModal.module.scss';

export default function ImageModal({ images, currentIndex, onClose, onNext, onPrev }) {
    const [zoom, setZoom] = useState(1);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
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

    const zoomIn = () => setZoom(prevZoom => Math.min(prevZoom + 0.2, 3));
    const zoomOut = () => setZoom(prevZoom => Math.max(prevZoom - 0.2, 1));

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

            // Ограничиваем перемещение для эффекта отскока
            setDragPosition({
                x: Math.min(Math.max(newX, -maxOffset), maxOffset),
                y: Math.min(Math.max(newY, -maxOffset), maxOffset)
            });
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            // Отскок до границ при отпускании
            setDragPosition((prevPosition) => ({
                x: Math.min(Math.max(prevPosition.x, -maxOffset + 50), maxOffset - 50),
                y: Math.min(Math.max(prevPosition.y, -maxOffset + 50), maxOffset - 50)
            }));
            setIsDragging(false);
        }
    };

    const handleTouchStart = (event) => {
        if (zoom > 1 && event.touches.length === 1) {
            setIsDragging(true);
            setStartDragPosition({
                x: event.touches[0].clientX - dragPosition.x,
                y: event.touches[0].clientY - dragPosition.y
            });
        }
    };

    const handleTouchMove = (event) => {
        if (isDragging && event.touches.length === 1) {
            const newX = event.touches[0].clientX - startDragPosition.x;
            const newY = event.touches[0].clientY - startDragPosition.y;

            // Ограничиваем перемещение для эффекта отскока
            setDragPosition({
                x: Math.min(Math.max(newX, -maxOffset), maxOffset),
                y: Math.min(Math.max(newY, -maxOffset), maxOffset)
            });
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
