// pages/example-page.js
import ImageGalleryComponent from '/src/app/components/ImageGalleryComponent'

export default function ExamplePage() {
    const images = [
        { src: '/boats/gelex/G4-5/1.jpg', alt: 'Boat 1' },
        { src: '/boats/gelex/G4-5/2.jpg', alt: 'Boat 2' },
        { src: '/boats/gelex/G4-5/3.jpg', alt: 'Boat 3' },
        { src: '/boats/gelex/G4-5/4.jpg', alt: 'Boat 4' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },
        { src: '/boats/gelex/G4-5/5.jpg', alt: 'Boat 5' },

    ];

    return (
        <div>
            <h1>Gallery Page</h1>
            <ImageGalleryComponent images={images} />
        </div>
    );
}
