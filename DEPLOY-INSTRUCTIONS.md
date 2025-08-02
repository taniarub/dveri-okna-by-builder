# Инструкции по деплою на Vercel

## Шаг 1: Создание аккаунта на Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "Continue with GitHub"
3. Авторизуйтесь через ваш GitHub аккаунт
4. Разрешите доступ к репозиториям

## Шаг 2: Импорт проекта

1. В панели Vercel нажмите "New Project"
2. Выберите репозиторий `dada-world/dveri-okna-by-builder`
3. Нажмите "Import"

## Шаг 3: Настройка проекта

### Framework Preset
- Выберите: **Next.js**

### Root Directory
- Оставьте пустым (по умолчанию)

### Build Command
- Оставьте по умолчанию: `npm run build`

### Output Directory
- Оставьте по умолчанию: `.next`

## Шаг 4: Настройка переменных окружения

В разделе "Environment Variables" добавьте:

### Для Telegram бота:
```
BOT_TOKEN=7974395055:AAEAjacUbgE6cq77I6h_PItbWLyCgbOx1cE
CHAT_ID=-1002709982809
```

### Для email отправки (если нужно):
```
EMAIL_SERVICE=gmail
EMAIL_USER=vitaliy9977@mail.ru
EMAIL_PASS=ваш_пароль_приложения
```

## Шаг 5: Деплой

1. Нажмите "Deploy"
2. Дождитесь завершения сборки
3. Получите URL вашего сайта

## Шаг 6: Настройка домена (опционально)

1. В настройках проекта перейдите в "Domains"
2. Добавьте ваш домен (например, dverivokna.by)
3. Настройте DNS записи согласно инструкциям Vercel

## Проверка работоспособности

После деплоя проверьте:

1. **Главная страница**: `https://your-project.vercel.app`
2. **Калькулятор**: `https://your-project.vercel.app/calculator`
3. **Портфолио**: `https://your-project.vercel.app/portfolio`
4. **Политика конфиденциальности**: `https://your-project.vercel.app/privacy`
5. **Тест контактов**: `https://your-project.vercel.app/test-contact`
6. **Тест Telegram**: `https://your-project.vercel.app/test-telegram`

## Автоматический деплой

После настройки каждый push в ветку `main` будет автоматически деплоиться на Vercel.

## Полезные ссылки

- [Документация Vercel](https://vercel.com/docs)
- [Next.js на Vercel](https://vercel.com/docs/functions/serverless-functions/runtimes/nodejs)
- [Переменные окружения](https://vercel.com/docs/projects/environment-variables) 