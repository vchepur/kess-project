'use client';
import React, { useState } from 'react';
import styles from './GelexForm.module.scss';

export default function GelexG45Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        options: {
            aluminumSeat: false,
            seatPadding: false,
            storageBox: false,
            seaDeck: false,
            mobileConsole: false,
            sideConsole: false,
            steeringWheel: false,
            driverSeat: false,
            passengerSeat: false,
            slidingSeatWithBackrest: false,
            slidingFoldableSeat: false,
            fishingPackage: false,
            electroPackage: false,
            transportCover: false,
        },
        color: '',
        extraInfo: '',
        name: '',
        email: '',
        phone: ''
    });

    const [message, setMessage] = useState(''); // Для отображения сообщения об успешной/неудачной отправке

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                options: { ...formData.options, [name]: checked }
            });
        } else if (type === 'radio') {
            setFormData({
                ...formData,
                [name]: value
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formBody = new FormData();
        formBody.append('your-name', formData.name);
        formBody.append('your-email', formData.email);
        formBody.append('your-phone', formData.phone);
        formBody.append('your-options', JSON.stringify(formData.options));
        formBody.append('your-color', formData.color);
        formBody.append('your-extra-info', formData.extraInfo);

        fetch('https://romank48.sg-host.com/wp-json/contact-form-7/v1/contact-forms/3d26f3e/feedback', {
            method: 'POST',
            body: formBody,
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'mail_sent') {
                    setMessage('Форма успешно отправлена!');
                } else {
                    setMessage('Ошибка при отправке формы. Попробуйте позже.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                setMessage('Произошла ошибка. Проверьте соединение и попробуйте снова.');
            });
    };

    return (
        <div className={styles.formContainer}>
            {step === 1 && (
                <form onSubmit={handleNextStep}>
                    <h3>Zusatzoptionen</h3>
                    <div className={styles.checkboxGroup}>
                        <label>
                            <input
                                type="checkbox"
                                name="aluminumSeat"
                                checked={formData.options.aluminumSeat}
                                onChange={handleChange}
                            />
                            Aluminium-Sitzbank (838x202mm)
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="seatPadding"
                                checked={formData.options.seatPadding}
                                onChange={handleChange}
                            />
                            Sitzpolster für Sitzbank (985mmx202mm)
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="storageBox"
                                checked={formData.options.storageBox}
                                onChange={handleChange}
                            />
                            Staufachtasche für unter die Sitzbank (82cmx200cmx250cm)
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="seaDeck"
                                checked={formData.options.seaDeck}
                                onChange={handleChange}
                            />
                            SeaDeck Anti Rutsch Auflagen
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="mobileConsole"
                                checked={formData.options.mobileConsole}
                                onChange={handleChange}
                            />
                            Mobile Steuerkonsole
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="sideConsole"
                                checked={formData.options.sideConsole}
                                onChange={handleChange}
                            />
                            Seiten Steuerkonsole/Centersteuerkonsole
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="steeringWheel"
                                checked={formData.options.steeringWheel}
                                onChange={handleChange}
                            />
                            Lenkrad mit Lenkgetriebe und Lenkseil
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="driverSeat"
                                checked={formData.options.driverSeat}
                                onChange={handleChange}
                            />
                            Drehbarer, gepolsterter Fahrersitz
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="passengerSeat"
                                checked={formData.options.passengerSeat}
                                onChange={handleChange}
                            />
                            Drehbarer gepolsterter Beifahrersitz
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="slidingSeatWithBackrest"
                                checked={formData.options.slidingSeatWithBackrest}
                                onChange={handleChange}
                            />
                            Verschiebbare, gepolsterte Sitzbank mit Rückenlehne
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="slidingFoldableSeat"
                                checked={formData.options.slidingFoldableSeat}
                                onChange={handleChange}
                            />
                            Verschiebbare, klappbare Sitzbank
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="fishingPackage"
                                checked={formData.options.fishingPackage}
                                onChange={handleChange}
                            />
                            Fishing Paket: 4 Stück Rutenhalter Bordinnenseite, usw.
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="electroPackage"
                                checked={formData.options.electroPackage}
                                onChange={handleChange}
                            />
                            Elektro Paket: 4 Schaltknöpfe + 2 Reserves...
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="transportCover"
                                checked={formData.options.transportCover}
                                onChange={handleChange}
                            />
                            Transportpersenning
                        </label>
                    </div>
                    <h3>Farbauswahl</h3>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value="schwarz"
                            checked={formData.color === 'schwarz'}
                            onChange={handleChange}
                        />
                        Schwarz met.
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value="grau"
                            checked={formData.color === 'grau'}
                            onChange={handleChange}
                        />
                        Grau met.
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value="weiss"
                            checked={formData.color === 'weiss'}
                            onChange={handleChange}
                        />
                        Weiss
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value="olivgrün"
                            checked={formData.color === 'olivgrün'}
                            onChange={handleChange}
                        />
                        Olivgrün
                    </label>
                    <button className={styles.button} type="submit">Weiter</button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleNextStep}>
                    <label>
                        Zusätzliche Informationen:
                        <textarea
                            name="extraInfo"
                            value={formData.extraInfo}
                            onChange={handleChange}
                            className={styles.textareaInput}
                        />
                    </label>
                    <button className={styles.button} type="submit">Weiter</button>
                </form>
            )}

            {step === 3 && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Telefon:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button className={styles.button} type="submit">Senden</button>
                </form>
            )}

            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}
