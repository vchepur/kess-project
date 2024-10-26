// components/Gallery.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import styles from './Gallery.module.scss';

export default function Gallery() {
    const images = [
        { src: '/boats/gelex/g4-5/1.jpg', alt: 'Boat 1' },
        { src: '/boats/gelex/g4-5/2.jpg', alt: 'Boat 2' },
        { src: '/boats/gelex/g4-5/3.jpg', alt: 'Boat 3' },
        { src: '/boats/gelex/g4-5/4.jpg', alt: 'Boat 4' },
        { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/g4-5/1.jpg', alt: 'Boat 1' },
        { src: '/boats/gelex/g4-5/2.jpg', alt: 'Boat 2' },
        { src: '/boats/gelex/g4-5/3.jpg', alt: 'Boat 3' },
        { src: '/boats/gelex/g4-5/4.jpg', alt: 'Boat 4' },
        { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boat 5' },
    ];

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

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
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
        </div>
    );
}
