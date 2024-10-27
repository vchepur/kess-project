// components/Modal.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CloseButton from './CloseButton';
import NavigationButton from './NavigationButton';
import ZoomControls from './ZoomControls';
import ImageCounter from './ImageCounter';
import useTouchHandlers from './useTouchHandlers';
import styles from './imageModal.module.scss';

export default function Modal({ images, currentIndex, onClose, onNext, onPrev }) {
    const [zoom, setZoom] = useState(1);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const handleKeyDown = (event) => {
                if (event.key === 'ArrowRight') handleNext();
                else if (event.key === 'ArrowLeft') handlePrev();
                else if (event.key === 'Escape') onClose();
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [isClient, onNext, onPrev, onClose]);

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
            setDragPosition({
                x: event.clientX - startDragPosition.x,
                y: event.clientY - startDragPosition.y
            });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    // Используем хук для обработки тач-событий
    const touchHandlers = useTouchHandlers({ onNext: handleNext, onPrev: handlePrev, setZoom, zoom });

    if (!isClient) return null;

    return (
        <div className={styles.modal}>
            <CloseButton onClose={onClose} />
            <NavigationButton direction="left" onClick={handlePrev} />
            <NavigationButton direction="right" onClick={handleNext} />

            <ImageCounter currentIndex={currentIndex} totalImages={images.length} />

            <div
                className={`${styles.modalImageContainer} ${styles.smoothTransition}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={touchHandlers.handleTouchStart}
                onTouchMove={touchHandlers.handleTouchMove}
                onTouchEnd={touchHandlers.handleTouchEnd}
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

            <ZoomControls zoomIn={zoomIn} zoomOut={zoomOut} />
        </div>
    );
}
