// pages/somePage.js
import BoatConfigurator from '/src/app/components/configurator/BoatConfigurator';

const boatConfigSteps = [
    {
        title: 'Wählen Sie die Basis',
        options: [
            { name: 'Basis A', price: 500, image: '/test/1.png' },
            { name: 'Basis B', price: 700, image: '/test/2.png' },
            { name: 'Basis C', price: 1000, image: '/test/3.png' },
            { name: 'Basis D', price: 1200, image: '/test/1.png' },
            { name: 'Basis E', price: 1500, image: '/test/2.png' },
            { name: 'Basis F', price: 1900, image: '/test/3.png' },
        ],
    },
    {
        title: 'Wählen Sie den Motor',
        options: [
            { name: 'Basis A', price: 500, image: '/test/1.png' },
            { name: 'Basis B', price: 700, image: '/test/2.png' },
            { name: 'Basis C', price: 1000, image: '/test/3.png' },
            { name: 'Basis D', price: 1200, image: '/test/1.png' },
            { name: 'Basis E', price: 1500, image: '/test/2.png' },
            { name: 'Basis F', price: 1900, image: '/test/3.png' },
        ],
    },
    {
        title: 'Wählen Sie die Farbe',
        options: [
            { name: 'Basis A', price: 500, image: '/test/1.png' },
            { name: 'Basis B', price: 700, image: '/test/2.png' },
            { name: 'Basis C', price: 1000, image: '/test/3.png' },
        ],
    },
    {
        title: 'Wählen Sie die Ausstattung',
        options: [
            { name: 'Basis A', price: 500, image: '/test/1.png' },
            { name: 'Basis B', price: 700, image: '/test/2.png' },
            { name: 'Basis C', price: 1000, image: '/test/3.png' },
            { name: 'Basis D', price: 1200, image: '/test/1.png' },
        ],
    },
    {
        title: 'Zusätzliche Optionen',
        options: [
            { name: 'Basis A', price: 500, image: '/test/1.png' },
            { name: 'Basis B', price: 700, image: '/test/2.png' },
            { name: 'Basis B', price: 700, image: '/test/3.png' },
        ],
    }
];

export default function SomePage() {
    return <BoatConfigurator steps={boatConfigSteps} />;
}
