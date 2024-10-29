// components/ModalEasy.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CloseButton from '../CloseButton'; // Кнопка закрытия
import ZoomControls from '../ZoomControls'; // Контролы зума
import styles from './ModalEasy.module.scss';

export default function ModalEasy({ image, alt, onClose }) {
    const [zoom, setZoom] = useState(1);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const resetZoomAndPosition = () => {
        setZoom(1);
        setDragPosition({ x: 0, y: 0 });
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
            const containerWidth = 1200;
            const containerHeight = 800;
            const scaledWidth = containerWidth * zoom;
            const scaledHeight = containerHeight * zoom;

            const maxX = Math.max((scaledWidth - containerWidth) / 2, 0);
            const maxY = Math.max((scaledHeight - containerHeight) / 2, 0);

            const newX = event.clientX - startDragPosition.x;
            const newY = event.clientY - startDragPosition.y;

            setDragPosition({
                x: Math.min(Math.max(newX, -maxX), maxX),
                y: Math.min(Math.max(newY, -maxY), maxY),
            });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    if (!isClient) return null;

    return (
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalContent}>
                <CloseButton onClose={onClose} className={styles.closeButton} />
                <div
                    className={`${styles.modalImageContainer} ${styles.smoothTransition}`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{
                        transform: `scale(${zoom}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                        cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    }}
                >
                    <Image
                        src={image}
                        alt={alt}
                        // layout="responsive"
                        width={1200}
                        height={800}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <ZoomControls zoomIn={zoomIn} zoomOut={zoomOut} />
            </div>
        </div>
    );
}
