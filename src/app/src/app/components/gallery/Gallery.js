// components/Gallery.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageModal from './Modal';
import styles from './gallery.module.scss';

export default function Gallery({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
    const [maxThumbnails, setMaxThumbnails] = useState(5);

    useEffect(() => {
        const updateMaxThumbnails = () => {
            setMaxThumbnails(window.innerWidth < 768 ? 3 : window.innerWidth < 1200 ? 5 : 10);
        };
        updateMaxThumbnails();
        window.addEventListener('resize', updateMaxThumbnails);
        return () => window.removeEventListener('resize', updateMaxThumbnails);
    }, []);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => setCurrentImageIndex((currentImageIndex + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);

    const nextThumbnailSet = () => {
        if (thumbnailStartIndex + maxThumbnails < images.length) {
            setThumbnailStartIndex(thumbnailStartIndex + 1);
        }
    };

    const prevThumbnailSet = () => {
        if (thumbnailStartIndex > 0) {
            setThumbnailStartIndex(thumbnailStartIndex - 1);
        }
    };

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.largeImageContainer}>
                <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    // layout="responsive"
                    width={800}
                    height={600}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    onClick={() => openModal(currentImageIndex)}
                />
            </div>

            <div className={styles.thumbnailWrapper}>
                <button className={styles.sliderButton} onClick={prevThumbnailSet}>{"<"}</button>
                <div className={styles.thumbnailContainer}>
                    {images.slice(thumbnailStartIndex, thumbnailStartIndex + maxThumbnails).map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.thumbnail} ${index + thumbnailStartIndex === currentImageIndex ? styles.active : ''}`}
                            onClick={() => setCurrentImageIndex(index + thumbnailStartIndex)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={100}
                                height={100}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
                <button className={styles.sliderButton} onClick={nextThumbnailSet}>{">"}</button>
            </div>

            {isModalOpen && (
                <ImageModal
                    images={images}
                    currentIndex={currentImageIndex}
                    onClose={closeModal}
                    onNext={nextImage}       // Передаём функцию перемотки вперёд
                    onPrev={prevImage}       // Передаём функцию перемотки назад
                />
            )}
        </div>
    );
}
