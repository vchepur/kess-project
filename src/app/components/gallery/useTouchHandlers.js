// components/gallery/useTouchHandlers.js
import { useState } from 'react';

export default function useTouchHandlers({ onNext, onPrev, setZoom }) {
    const [initialTouch, setInitialTouch] = useState(null);
    const [isSwiping, setIsSwiping] = useState(false);
    const [initialDistance, setInitialDistance] = useState(null);

    const handleTouchStart = (event) => {
        if (event.touches.length === 1) {
            // Начало одного касания (для свайпа)
            setInitialTouch({ x: event.touches[0].clientX, y: event.touches[0].clientY });
            setIsSwiping(true);
        } else if (event.touches.length === 2) {
            // Начало двух касаний (для зума)
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            const distance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
            setInitialDistance(distance);
            setIsSwiping(false);
        }
    };

    const handleTouchMove = (event) => {
        if (isSwiping && event.touches.length === 1) {
            // Логика для свайпа
            const deltaX = event.touches[0].clientX - initialTouch.x;

            // Определяем свайп
            if (deltaX > 50) {
                onPrev();
                setIsSwiping(false); // Сброс после свайпа
            } else if (deltaX < -50) {
                onNext();
                setIsSwiping(false); // Сброс после свайпа
            }
        } else if (initialDistance && event.touches.length === 2) {
            // Логика для зума
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            const newDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );

            // Изменение зума
            const scaleFactor = newDistance / initialDistance;
            setZoom(scaleFactor);
        }
    };

    const handleTouchEnd = () => {
        // Сброс состояния после окончания жеста
        setIsSwiping(false);
        setInitialTouch(null);
        setInitialDistance(null);
    };

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    };
}
