'use client';

import { useState } from 'react';

export default function ContactAndDealForm() {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dealName, setDealName] = useState('');
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        const data = {
            email,
            firstname,
            lastname,
            dealName,
            amount,
        };

        try {
            const response = await fetch('/api/hubspot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Ошибка сервера: ${errorText}`);
            }

            const result = await response.json();
            setSuccessMessage('Контакт и сделка успешно созданы!');
            console.log('Ответ от сервера:', result);
        } catch (error) {
            console.error('Ошибка:', error);
            setErrorMessage('Ошибка при создании контакта или сделки. Попробуйте позже.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Фамилия:</label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Название сделки:</label>
                    <input
                        type="text"
                        value={dealName}
                        onChange={(e) => setDealName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Сумма сделки:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Создать контакт и сделку</button>
            </form>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}
