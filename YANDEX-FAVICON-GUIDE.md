# Руководство по обновлению favicon для Яндекса

## Что было сделано

1. Обновлена конфигурация favicon в файле `app/layout.tsx`:
   - Добавлен специальный тег `<link rel="yandex-tableau-widget" href="/favicon.ico?v=3" />` для корректного отображения в Яндексе
   - Обновлены версии favicon для принудительного обновления кэша (`?v=3`)

## Как проверить результат

1. **Очистите кэш Яндекса**:
   - Откройте Яндекс Браузер
   - Нажмите Ctrl+Shift+Delete (или Cmd+Shift+Delete на Mac)
   - Выберите "Очистить кэш" и нажмите "Очистить"

2. **Проверьте отображение favicon**:
   - Добавьте сайт в закладки в Яндекс Браузере
   - Проверьте, отображается ли ваша иконка вместо стандартного фиолетового домика
   - Проверьте отображение в результатах поиска Яндекса

3. **Если иконка не обновилась**:
   - Подождите некоторое время (до 24 часов), так как обновление кэша может занять время
   - Убедитесь, что файл favicon.ico имеет правильный формат и размеры (рекомендуется 16x16, 32x32 и 48x48 пикселей)

## Рекомендации по favicon

- **Формат**: ICO файл, содержащий несколько размеров (16x16, 32x32, 48x48)
- **Цвета**: Используйте контрастные цвета для лучшей видимости
- **Простота**: Избегайте мелких деталей, которые будут плохо видны в маленьком размере

## Дополнительная информация

Яндекс использует favicon для отображения сайта в закладках, истории и результатах поиска. Правильно настроенная favicon улучшает узнаваемость вашего сайта и профессиональный вид в браузере пользователя.