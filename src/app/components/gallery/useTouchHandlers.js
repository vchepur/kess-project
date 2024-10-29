// components/useTouchHandlers.js
import { useState } from 'react';

export default function useTouchHandlers({ onNext, onPrev, setZoom, zoom }) {
    const [initialTouch, setInitialTouch] = useState(null);
    const [initialDistance, setInitialDistance] = useState(null);

    const handleTouchStart = (event) => {
        if (event.touches.length === 1) {
            // Начало одиночного касания для свайпа
            setInitialTouch({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
            });
        } else if (event.touches.length === 2) {
            // Начало двухпальцевого касания для зума
            const distance = calculateDistance(event.touches);
            setInitialDistance(distance);
        }
    };

    const handleTouchMove = (event) => {
        if (event.touches.length === 1 && initialTouch) {
            // Обработка свайпа для одиночного касания
            const deltaX = event.touches[0].clientX - initialTouch.x;
            const deltaY = event.touches[0].clientY - initialTouch.y;

            if (zoom === 1) {
                // Свайп влево или вправо для переключения изображений
                if (deltaX > 100) {
                    onPrev();
                    setInitialTouch(null); // Сброс после свайпа
                } else if (deltaX < -100) {
                    onNext();
                    setInitialTouch(null); // Сброс после свайпа
                }
            }
        } else if (event.touches.length === 2) {
            // Обработка зума для двухпальцевого касания
            const newDistance = calculateDistance(event.touches);
            const zoomFactor = newDistance / initialDistance;

            setZoom(prevZoom => Math.min(Math.max(prevZoom * zoomFactor, 1), 3));
            setInitialDistance(newDistance); // Обновляем начальное расстояние для следующего движения
        }
    };

    const handleTouchEnd = () => {
        setInitialTouch(null);
        setInitialDistance(null);
    };

    // Вспомогательная функция для расчета расстояния между двумя точками
    const calculateDistance = (touches) => {
        const [touch1, touch2] = touches;
        const dx = touch2.clientX - touch1.clientX;
        const dy = touch2.clientY - touch1.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    };
}
