// components/Gallery.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.scss';

export default function Gallery() {
    const images = [
        '/boats/gelex/G4-5/1.jpg',
        '/boats/gelex/G4-5/2.jpg',
        '/boats/gelex/G4-5/3.jpg',
        '/boats/gelex/G4-5/4.jpg',
        '/boats/gelex/G4-5/5.jpg',
        '/boats/gelex/G4-5/1.jpg',
        '/boats/gelex/G4-5/2.jpg',
        '/boats/gelex/G4-5/3.jpg',
        '/boats/gelex/G4-5/4.jpg',
        '/boats/gelex/G4-5/5.jpg',
    ]; // пути к изображениям

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleThumbnailClick = (src) => {
        setSelectedImage(src);
        setIsZoomed(false);
    };

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className={styles.galleryContainer}>
            {/* Большое изображение */}
            <div className={`${styles.mainImage} ${isZoomed ? styles.zoomed : ''}`} onClick={handleImageClick}>
                <Image src={selectedImage} alt="Selected boat" layout="fill" objectFit="contain" />
                {isZoomed && <span className={styles.closeZoom}>Закрыть</span>}
            </div>

            {/* Миниатюры */}
            <div className={styles.thumbnailContainer}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.thumbnail} ${selectedImage === src ? styles.active : ''}`}
                        onClick={() => handleThumbnailClick(src)}
                    >
                        <Image src={src} alt={`Boat ${index + 1}`} layout="responsive" width={100} height={100} objectFit="cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}
