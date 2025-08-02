import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

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
    console.log('=== EMAIL CONTACT FORM SUBMISSION ===');
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

    // Формируем сообщение для логирования
    console.log('=== SUCCESS (EMAIL MODE) ===');
    console.log('Form data validated successfully');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email || 'Не указан');
    console.log('Message:', message || 'Не указано');
    console.log('Windows config:', windows_configuration || 'Не указано');

    // Здесь можно добавить отправку на email через сервисы типа:
    // - SendGrid
    // - Mailgun
    // - Nodemailer
    // - Resend
    // - или другие email сервисы

    // Пока просто возвращаем успешный ответ
    return NextResponse.json({ 
      success: true, 
      message: 'Сообщение получено! Мы свяжемся с вами в ближайшее время.',
      receivedData: {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        message: message?.trim() || null,
        windows_configuration: windows_configuration || null,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('=== EMAIL API ERROR ===');
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Внутренняя ошибка сервера'
      },
      { status: 500 }
    );
  }
} 