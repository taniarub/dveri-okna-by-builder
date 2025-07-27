import { NextRequest, NextResponse } from 'next/server';

// Настройки Telegram бота
const TELEGRAM_BOT_TOKEN = '7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE';
const TELEGRAM_CHAT_ID = '-1002709982809';

// Словарь для перевода технических названий на русский
const translateOptions = (options: string[]): string => {
  const translations: { [key: string]: string } = {
    'mosquito': 'Москитная сетка',
    'drain': 'Отлив',
    'sill': 'Подоконник',
    'none': 'Ничего из перечисленного',
    'description': 'Описание'
  };
  
  return options.map(option => translations[option] || option).join(", ");
};

// Валидация данных
const validateContactData = (data: any) => {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Имя должно содержать минимум 2 символа');
  }
  
  if (!data.phone || data.phone.trim().length < 10) {
    errors.push('Телефон должен содержать минимум 10 символов');
  }
  
  return errors;
};

export async function POST(request: NextRequest) {
  try {
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Time:', new Date().toISOString());

    // Проверяем метод запроса
    if (request.method !== 'POST') {
      return NextResponse.json(
        { success: false, message: 'Метод не поддерживается' },
        { status: 405 }
      );
    }

    // Парсим тело запроса
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, message: 'Неверный формат данных' },
        { status: 400 }
      );
    }

    const { name, phone, email, message, windows_configuration } = body;

    // Валидируем данные
    const validationErrors = validateContactData(body);
    if (validationErrors.length > 0) {
      console.error('Validation errors:', validationErrors);
      return NextResponse.json(
        { success: false, message: validationErrors.join(', ') },
        { status: 400 }
      );
    }

    // Формируем сообщение для Telegram
    let telegramMessage = `🔔 *Новая заявка с сайта*\n\n`;
    
    if (name) telegramMessage += `👤 *Имя:* ${name.trim()}\n`;
    if (phone) telegramMessage += `📞 *Телефон:* ${phone.trim()}\n`;
    if (email) telegramMessage += `📧 *Email:* ${email?.trim() || 'Не указан'}\n`;
    if (message) telegramMessage += `💬 *Сообщение:* ${message.trim()}\n`;
    
    if (windows_configuration) {
      let translatedConfiguration = windows_configuration;
      
      // Заменяем технические названия опций на русские
      translatedConfiguration = translatedConfiguration.replace(/mosquito/g, 'Москитная сетка');
      translatedConfiguration = translatedConfiguration.replace(/drain/g, 'Отлив');
      translatedConfiguration = translatedConfiguration.replace(/sill/g, 'Подоконник');
      translatedConfiguration = translatedConfiguration.replace(/none/g, 'Ничего из перечисленного');
      
      telegramMessage += `\n🏠 *Конфигурация окон:*\n${translatedConfiguration}\n`;
    }

    telegramMessage += `\n⏰ *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}`;
    telegramMessage += `\n🌐 *IP:* ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Неизвестно'}`;

    console.log('=== SENDING TO TELEGRAM ===');
    console.log('Message length:', telegramMessage.length);

    // Отправляем сообщение в Telegram с таймаутом
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд таймаут

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
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const telegramResult = await telegramResponse.json();
    console.log('=== TELEGRAM RESPONSE ===');
    console.log('Status:', telegramResponse.status);
    console.log('OK:', telegramResponse.ok);
    console.log('Result:', JSON.stringify(telegramResult, null, 2));

    if (!telegramResponse.ok) {
      throw new Error(`Telegram API error: ${telegramResult.description || JSON.stringify(telegramResult)}`);
    }

    console.log('=== SUCCESS ===');
    return NextResponse.json({ 
      success: true, 
      message: 'Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время.' 
    });

  } catch (error) {
    console.error('=== ERROR ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    let errorMessage = 'Неизвестная ошибка';
    
    if (error.name === 'AbortError') {
      errorMessage = 'Превышено время ожидания ответа от сервера';
    } else if (error.message.includes('Telegram API error')) {
      errorMessage = 'Ошибка отправки в Telegram. Попробуйте позже.';
    } else if (error.message.includes('fetch')) {
      errorMessage = 'Ошибка сети. Проверьте подключение к интернету.';
    } else {
      errorMessage = error.message || 'Внутренняя ошибка сервера';
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage
      },
      { status: 500 }
    );
  }
} 