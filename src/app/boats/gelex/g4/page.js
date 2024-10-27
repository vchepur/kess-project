// pages/galleryPage.js
import Gallery from '/src/app/components/Gallery';

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
    { src: '/boats/gelex/g4-5/1.jpg', alt: 'Boat 1' },
    { src: '/boats/gelex/g4-5/2.jpg', alt: 'Boat 2' },
    { src: '/boats/gelex/g4-5/3.jpg', alt: 'Boat 3' },
    { src: '/boats/gelex/g4-5/4.jpg', alt: 'Boat 4' },
    { src: '/boats/gelex/g4-5/5.jpg', alt: 'Boat 5' },

    // добавьте другие изображения по необходимости
];

export default function GalleryPage() {
    return (
        <div>
            <h1>Gelex G4</h1>
            <Gallery images={images} />
        </div>
    );
}
