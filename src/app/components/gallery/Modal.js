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

    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHandlers({
        onNext: () => { setZoom(1); onNext(); }, // Сброс зума при перелистывании
        onPrev: () => { setZoom(1); onPrev(); },
        setZoom,
    });

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

            <ZoomControls onZoomIn={() => setZoom(Math.min(zoom + 0.2, 3))} onZoomOut={() => setZoom(Math.max(zoom - 0.2, 1))} />
        </div>
    );
}
