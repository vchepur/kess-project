// components/useTouchHandlers.js
import { useState, useEffect } from 'react';

export default function useTouchHandlers({ onNext, onPrev, setZoom, zoom }) {
    const [initialTouch, setInitialTouch] = useState(null);
    const [isSwiping, setIsSwiping] = useState(false);
    const [initialDistance, setInitialDistance] = useState(null);

    useEffect(() => {
        if (zoom > 1) return; // Свайп работает только при zoom = 1
    }, [zoom]);

    const handleTouchStart = (event) => {
        if (event.touches.length === 1) {
            setInitialTouch({ x: event.touches[0].clientX, y: event.touches[0].clientY });
            setIsSwiping(true);
        } else if (event.touches.length === 2) {
            const dist = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            setInitialDistance(dist);
        }
    };

    const handleTouchMove = (event) => {
        if (!isSwiping || zoom > 1) return;

        if (event.touches.length === 1 && initialTouch) {
            const deltaX = event.touches[0].clientX - initialTouch.x;

            if (deltaX > 50) {
                onPrev();
                setIsSwiping(false);
            } else if (deltaX < -50) {
                onNext();
                setIsSwiping(false);
            }
        } else if (event.touches.length === 2 && initialDistance) {
            const currentDistance = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            if (Math.abs(currentDistance - initialDistance) > 10) {
                setZoom(currentDistance > initialDistance ? zoom + 0.1 : zoom - 0.1);
                setInitialDistance(currentDistance);
            }
        }
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
        setInitialTouch(null);
        setInitialDistance(null);
    };

    return { handleTouchStart, handleTouchMove, handleTouchEnd };
}
