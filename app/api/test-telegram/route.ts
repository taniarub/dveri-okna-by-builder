import { NextRequest, NextResponse } from 'next/server';

// Настройки Telegram бота (токен публичный для работы на продакшн)
const TELEGRAM_BOT_TOKEN = '7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE';
const TELEGRAM_CHAT_ID = '-1002709982809';

export async function GET() {
  try {
    console.log('=== TESTING TELEGRAM API ===');
    console.log('BOT_TOKEN:', TELEGRAM_BOT_TOKEN);
    console.log('CHAT_ID:', TELEGRAM_CHAT_ID);

    // Тест 1: Проверяем информацию о боте
    console.log('Testing bot info...');
    const botInfoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
    const botInfo = await botInfoResponse.json();
    console.log('Bot info response:', botInfo);

    if (!botInfoResponse.ok) {
      return NextResponse.json({
        success: false,
        error: 'Bot token is invalid',
        botInfo
      });
    }

    // Тест 2: Отправляем тестовое сообщение
    console.log('Sending test message...');
    const testMessage = `🧪 *Тестовое сообщение*\n\nВремя: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}\n\nЭто тестовое сообщение для проверки работы бота.`;

    const sendMessageResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: testMessage,
        parse_mode: 'Markdown',
      }),
    });

    const sendMessageResult = await sendMessageResponse.json();
    console.log('Send message response:', sendMessageResult);

    return NextResponse.json({
      success: true,
      botInfo,
      sendMessageResult,
      status: sendMessageResponse.status,
      ok: sendMessageResponse.ok
    });

  } catch (error) {
    console.error('=== TELEGRAM TEST ERROR ===');
    console.error('Error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 