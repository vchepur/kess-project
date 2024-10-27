// components/Gallery.js
'use client';
import ImageGalleryComponent from '/src/app/components/ImageGalleryComponent'

export default function Gallery() {
    const images = [
        { src: '/boats/gelex/g4-5/1.jpg', alt: 'Boat 1' },
        { src: '/boats/gelex/g4-5/2.jpg', alt: 'Boat 2' },
        { src: '/boats/gelex/g4-5/3.jpg', alt: 'Boat 3' },
        { src: '/boats/gelex/g4-5/4.jpg', alt: 'Boat 4' },
        { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boat 6' },
        { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boat 7' },
        { src: '/boats/gelex/g4-5/2.jpg', alt: 'Boat 8' },
        { src: '/boats/gelex/g4-5/3.jpg', alt: 'Boat 9' },
        { src: '/boats/gelex/g4-5/4.jpg', alt: 'Boat 10' },
    ];

    return (
        <div>
            <h1>Image Gallery</h1>
            <ImageGalleryComponent images={images} />
        </div>
    );
}
