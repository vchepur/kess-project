// src/app/boats/gelex/page.js
import Link from 'next/link';

export default function GelexPage() {
    return (
        <div>
            <h1>Модели лодок Gelex</h1>
            <ul>
                <li><Link href="/boats/gelex/gelex-g45">Gelex G45</Link></li>
                <li><Link href="/boats/gelex/gelex-g55">Gelex G55</Link></li>
            </ul>
        </div>
    );
}
