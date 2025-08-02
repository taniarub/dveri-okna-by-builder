import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Настройки Telegram бота (токен публичный для работы на продакшн)
const TELEGRAM_BOT_TOKEN = '7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE';
const TELEGRAM_CHAT_ID = '-1002709982809';

// Временный режим отладки (установите в true для отключения Telegram)
const DEBUG_MODE = false; // Отключаем режим отладки для продакшн

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
    console.log('DEBUG_MODE:', DEBUG_MODE);
    console.log('TELEGRAM_BOT_TOKEN:', TELEGRAM_BOT_TOKEN);
    console.log('TELEGRAM_CHAT_ID:', TELEGRAM_CHAT_ID);

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

    // В режиме отладки пропускаем отправку в Telegram
    if (DEBUG_MODE) {
      console.log('=== SUCCESS (DEBUG MODE) ===');
      console.log('Form data validated successfully');
      console.log('Name:', name);
      console.log('Phone:', phone);
      console.log('Email:', email || 'Не указан');
      console.log('Message:', message || 'Не указано');
      console.log('Windows config:', windows_configuration || 'Не указано');
      
      return NextResponse.json({ 
        success: true, 
        message: 'Сообщение отправлено успешно! (режим отладки - Telegram отключен)',
        debug: {
          receivedData: {
            name: name.trim(),
            phone: phone.trim(),
            email: email?.trim() || null,
            message: message?.trim() || null,
            windows_configuration: windows_configuration || null
          }
        }
      });
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
    console.log('Telegram URL:', `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`);

    // Отправляем сообщение в Telegram с таймаутом
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 секунд таймаут

    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Dverivokna-Contact-Form/1.0'
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
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    let errorMessage = 'Неизвестная ошибка';
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        errorMessage = 'Превышено время ожидания ответа от сервера';
      } else if (error.message.includes('Telegram API error')) {
        errorMessage = 'Ошибка отправки в Telegram. Попробуйте позже.';
      } else if (error.message.includes('fetch')) {
        errorMessage = 'Ошибка сети. Проверьте подключение к интернету.';
      } else {
        errorMessage = error.message || 'Внутренняя ошибка сервера';
      }
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