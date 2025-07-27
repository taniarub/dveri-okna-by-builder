'use client'

import { useState } from 'react'

export default function TestTelegramPage() {
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTest = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/test-telegram')
      const data = await response.json()
      setResult({
        status: response.status,
        ok: response.ok,
        data
      })
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Тест Telegram API</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Проверка настроек Telegram</h2>
          <p className="text-gray-600 mb-4">
            Этот тест проверит:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Валидность токена бота</li>
            <li>Информацию о боте</li>
            <li>Отправку тестового сообщения</li>
            <li>Права бота в группе</li>
          </ul>
          
          <button
            onClick={handleTest}
            disabled={isLoading}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:opacity-50"
          >
            {isLoading ? 'Тестирование...' : 'Запустить тест Telegram'}
          </button>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Результат теста</h2>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
            
            {result.data && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Анализ результата:</h3>
                <ul className="space-y-2">
                  {result.data.success ? (
                    <>
                      <li className="text-green-600">✅ Тест прошел успешно</li>
                      {result.data.botInfo && (
                        <li className="text-blue-600">🤖 Бот: {result.data.botInfo.result?.first_name || 'Неизвестно'}</li>
                      )}
                      {result.data.sendMessageResult?.ok && (
                        <li className="text-green-600">📨 Сообщение отправлено в Telegram</li>
                      )}
                    </>
                  ) : (
                    <>
                      <li className="text-red-600">❌ Тест не прошел</li>
                      {result.data.error && (
                        <li className="text-red-600">Ошибка: {result.data.error}</li>
                      )}
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h3 className="font-semibold mb-2">Возможные проблемы:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li><strong>Неверный токен бота</strong> - проверьте токен в @BotFather</li>
            <li><strong>Бот не добавлен в группу</strong> - добавьте бота в группу</li>
            <li><strong>Неверный Chat ID</strong> - проверьте ID группы</li>
            <li><strong>Нет прав на отправку</strong> - дайте боту права администратора</li>
            <li><strong>Сетевые проблемы</strong> - проверьте подключение к интернету</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 