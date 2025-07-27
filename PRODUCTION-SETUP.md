# Настройка продакшн среды для работы контактной формы

## Проблема
Контактная форма работает в localhost, но не работает на продакшн сайте.

## Решения

### 1. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE
TELEGRAM_CHAT_ID=-1002709982809

# Debug Mode (set to 'true' to disable Telegram in production)
DEBUG_MODE=false

# Environment
NODE_ENV=production
```

### 2. Настройка хостинга

#### Для Vercel:
1. Перейдите в настройки проекта в Vercel Dashboard
2. Добавьте переменные окружения:
   - `TELEGRAM_BOT_TOKEN` = `7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE`
   - `TELEGRAM_CHAT_ID` = `-1002709982809`
   - `DEBUG_MODE` = `false`

#### Для Netlify:
1. Перейдите в настройки сайта в Netlify Dashboard
2. В разделе "Environment variables" добавьте:
   - `TELEGRAM_BOT_TOKEN` = `7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE`
   - `TELEGRAM_CHAT_ID` = `-1002709982809`
   - `DEBUG_MODE` = `false`

#### Для других хостингов:
Добавьте переменные окружения в настройках вашего хостинга.

### 3. Проверка конфигурации Next.js

Убедитесь, что в `next.config.js`:
- Убрана строка `output: 'export'` (закомментирована)
- Настроены CORS заголовки
- Настроены rewrites для Telegram API

### 4. Тестирование

После настройки:
1. Перезапустите деплой
2. Откройте `https://ваш-сайт.com/test-contact`
3. Протестируйте отправку формы
4. Проверьте логи в консоли хостинга

### 5. Отладка

Если проблема остается:

#### Включите режим отладки:
Установите `DEBUG_MODE=true` в переменных окружения.

#### Проверьте логи:
- В Vercel: Functions → View Function Logs
- В Netlify: Functions → View Function Logs
- В других хостингах: проверьте логи сервера

#### Проверьте доступность Telegram API:
Откройте `https://ваш-сайт.com/api/test-telegram` в браузере.

### 6. Альтернативные решения

#### Если Telegram API недоступен:
1. Установите `DEBUG_MODE=true`
2. Настройте отправку на email
3. Используйте другие сервисы уведомлений (Slack, Discord)

#### Если проблема с CORS:
1. Проверьте настройки CORS в `next.config.js`
2. Убедитесь, что домен добавлен в разрешенные

#### Если проблема с таймаутом:
1. Увеличьте таймаут в коде (сейчас 15 секунд)
2. Проверьте скорость интернета на сервере

## Контакты для поддержки

Если проблема не решается:
- Проверьте логи сервера
- Создайте issue в репозитории
- Обратитесь к администратору хостинга 