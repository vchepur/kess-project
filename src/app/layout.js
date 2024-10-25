import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Boat Store</title>
            <meta name="description" content="Online store for boats and accessories" />
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
        <Header />  {/* Хедер на всю ширину экрана */}
        <div className="content-wrapper">  {/* Обертка для основного контента */}
            <main className="content-container">  {/* Контейнер с max-width для контента */}
                {children}
            </main>
        </div>
        <Footer />  {/* Футер на всю ширину экрана */}
        </body>
        </html>
    );
}
