// components/ImageGalleryComponent.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import styles from './ImageGalleryComponent.module.scss';

export default function ImageGalleryComponent({ images }) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        document.body.style.overflow = ''; // Включаем прокрутку обратно
    };

    // Блокируем зум всей страницы на мобильных устройствах
    useEffect(() => {
        const viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute(
            "content",
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        );
        return () => viewport.setAttribute("content", "width=device-width, initial-scale=1");
    }, []);

    return (
        <div className={styles.galleryContainer}>
            {/* Большое изображение */}
            <div className={styles.largeThumbnail} onClick={() => openLightbox(0)}>
                <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    layout="responsive"
                    width={400}
                    height={300}
                    objectFit="cover"
                />
            </div>

            {/* Миниатюры */}
            <div className={styles.thumbnailContainer}>
                {images.slice(1).map((image, index) => (
                    <div
                        key={index + 1}
                        className={styles.thumbnail}
                        onClick={() => openLightbox(index + 1)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            width={100}
                            height={100}
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>

            {/* Модальное окно Lightbox */}
            {isLightboxOpen && (
                <Lightbox
                    images={images.map((image) => ({
                        url: image.src,
                        title: image.alt,
                    }))}
                    startIndex={currentImageIndex}
                    onClose={closeLightbox}
                    zoomable={true} // Разрешаем зум изображения
                    doubleClickZoom={2} // Зум изображения по двойному нажатию
                />
            )}
        </div>
    );
}
