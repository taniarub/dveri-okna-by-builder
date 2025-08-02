import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    console.log('=== DEBUG CONTACT FORM ===');
    console.log('Time:', new Date().toISOString());

    // Парсим тело запроса
    let body;
    try {
      body = await request.json();
      console.log('Request body:', JSON.stringify(body, null, 2));
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, message: 'Неверный формат данных', error: parseError instanceof Error ? parseError.message : String(parseError) },
        { status: 400 }
      );
    }

    const { name, phone, email, message, windows_configuration } = body;

    // Проверяем наличие обязательных полей
    const requiredFields = { name, phone };
    const missingFields = Object.entries(requiredFields)
      .filter(([key, value]) => !value || value.trim().length === 0)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json({
        success: false,
        message: `Отсутствуют обязательные поля: ${missingFields.join(', ')}`,
        missingFields
      }, { status: 400 });
    }

    // Проверяем длину полей
    const validationErrors = [];
    if (name.trim().length < 2) {
      validationErrors.push('Имя должно содержать минимум 2 символа');
    }
    if (phone.trim().length < 10) {
      validationErrors.push('Телефон должен содержать минимум 10 символов');
    }

    if (validationErrors.length > 0) {
      return NextResponse.json({
        success: false,
        message: validationErrors.join(', '),
        validationErrors
      }, { status: 400 });
    }

    // Имитируем успешную отправку без Telegram
    console.log('=== SUCCESS (DEBUG MODE) ===');
    console.log('Form data validated successfully');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email || 'Не указан');
    console.log('Message:', message || 'Не указано');
    console.log('Windows config:', windows_configuration || 'Не указано');

    return NextResponse.json({ 
      success: true, 
      message: 'Данные получены успешно (режим отладки)',
      receivedData: {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        message: message?.trim() || null,
        windows_configuration: windows_configuration || null
      }
    });

  } catch (error) {
    console.error('=== DEBUG ERROR ===');
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Внутренняя ошибка сервера',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 