import { NextRequest, NextResponse } from 'next/server';

// Настройки Telegram бота
const TELEGRAM_BOT_TOKEN = '7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE';
const TELEGRAM_CHAT_ID = '-1002709982809'; // ID вашей группы (обновлено)

export async function POST(request: NextRequest) {
  try {
    // Диагностика - выводим настройки
    console.log('=== TELEGRAM SETTINGS ===');
    console.log('BOT_TOKEN:', TELEGRAM_BOT_TOKEN);
    console.log('CHAT_ID:', TELEGRAM_CHAT_ID);
    console.log('========================');

    const body = await request.json();
    const { name, phone, email, message, windows_configuration } = body;

    // Формируем сообщение для Telegram
    let telegramMessage = `🔔 *Новая заявка с сайта*\n\n`;
    
    if (name) telegramMessage += `👤 *Имя:* ${name}\n`;
    if (phone) telegramMessage += `📞 *Телефон:* ${phone}\n`;
    if (email) telegramMessage += `📧 *Email:* ${email}\n`;
    if (message) telegramMessage += `💬 *Сообщение:* ${message}\n`;
    
    if (windows_configuration) {
      telegramMessage += `\n🏠 *Конфигурация окон:*\n${windows_configuration}\n`;
    }

    telegramMessage += `\n⏰ *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}`;

    console.log('=== SENDING MESSAGE ===');
    console.log('Message:', telegramMessage);

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const telegramResult = await telegramResponse.json();
    console.log('=== TELEGRAM RESPONSE ===');
    console.log('Status:', telegramResponse.status);
    console.log('Response:', JSON.stringify(telegramResult, null, 2));
    console.log('========================');

    if (!telegramResponse.ok) {
      throw new Error('Telegram API error: ' + JSON.stringify(telegramResult));
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Сообщение отправлено успешно в Telegram группу' 
    });

  } catch (error) {
    console.error('=== ERROR ===');
    console.error('Error sending message:', error);
    console.error('==================');
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Ошибка при отправке сообщения: ' + error.message 
      },
      { status: 500 }
    );
  }
} 