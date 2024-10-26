import { NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

export async function POST(req) {
    try {
        const { email, firstname, lastname, dealName, amount } = await req.json();

        // Валидация email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return NextResponse.json({ message: 'Неверный формат email' }, { status: 400 });
        }

        const hubspotClient = new Client({ accessToken: 'pat-na1-92949acc-4880-44a1-a9b4-2cb325de5578' });

        // 1. Создаем контакт
        const contactData = {
            properties: {
                firstname: firstname,
                lastname: lastname,
                email: email,
            },
        };

        const contactResponse = await hubspotClient.crm.contacts.basicApi.create(contactData);
        const contactId = contactResponse.id;

        // 2. Создаем сделку и связываем ее с контактом
        const dealData = {
            properties: {
                dealname: dealName || 'Стандартный заказ',
                amount: amount || '1000',
                dealstage: 'qualifiedtobuy',
                closedate: new Date().toISOString(),
                pipeline: 'default',
            },
            associations: [
                {
                    to: { id: contactId },  // ID контакта, с которым связываем сделку
                    types: [
                        {
                            associationCategory: 'HUBSPOT_DEFINED',
                            associationTypeId: 3,  // Связь "Контакт" и "Сделка"
                        },
                    ],
                },
            ],
        };

        const dealResponse = await hubspotClient.crm.deals.basicApi.create(dealData);

        return NextResponse.json({ message: 'Контакт и сделка успешно созданы', contactId, dealId: dealResponse.id });
    } catch (error) {
        console.error('Ошибка при создании контакта или сделки:', error.response?.body || error.message);
        return NextResponse.json({ message: 'Ошибка при создании', error: error.response?.body || error.message }, { status: 500 });
    }
}
