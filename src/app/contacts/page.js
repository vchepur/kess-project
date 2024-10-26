import './Contacts.module.scss'; // Импортируем стили

export default function Contacts() {
    return (
        <main className="contacts-container">
            <h1>Контактная информация</h1>
            <p>Мы будем рады вашим вопросам и предложениям. Свяжитесь с нами любым удобным для вас способом!</p>

            <section>
                <h2>Контакты</h2>
                <p><strong>Email:</strong> info@kessler-boote.com</p>
                <p><strong>Телефоны:</strong></p>
                <p>+41 76 400 67 17</p>
                <p>+49 162 987 28 71</p>
                <p><strong>Адреса:</strong></p>
                <p>Gewerbestraße 6/1, D-78244 Gottmadingen</p>
                <p>Gotenstraße 50, D-56567 Neuwied</p>
            </section>

            <section>
                <h2>Расположение на карте</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42965.6876832689!2d8.751326219961353!3d47.69693565317121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a87fd9bf32953%3A0xf55d9bcb1ca3597e!2sKESSLER%20Boote%20%26%20Meer!5e0!3m2!1sde!2sde!4v1729669543462!5m2!1sde!2sde"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
