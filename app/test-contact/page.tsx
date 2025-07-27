'use client'

import { useState } from 'react'

export default function TestContactPage() {
  const [testData, setTestData] = useState({
    name: 'Тестовое имя',
    phone: '+375291234567',
    email: 'test@example.com',
    message: 'Тестовое сообщение'
  })
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTest = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      })

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
        <h1 className="text-3xl font-bold text-center mb-8">Тест контактной формы</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Тестовые данные</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Имя</label>
              <input
                type="text"
                value={testData.name}
                onChange={(e) => setTestData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Телефон</label>
              <input
                type="text"
                value={testData.phone}
                onChange={(e) => setTestData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={testData.email}
                onChange={(e) => setTestData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Сообщение</label>
              <input
                type="text"
                value={testData.message}
                onChange={(e) => setTestData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          
          <button
            onClick={handleTest}
            disabled={isLoading}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Тестирование...' : 'Отправить тест'}
          </button>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Результат</h2>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h3 className="font-semibold mb-2">Инструкция:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Проверьте, что сервер разработки запущен: <code>npm run dev</code></li>
            <li>Убедитесь, что в <code>next.config.js</code> убрана строка <code>output: 'export'</code></li>
            <li>Проверьте настройки Telegram бота в <code>app/api/contact/route.ts</code></li>
            <li>Нажмите "Отправить тест" и проверьте результат</li>
            <li>Проверьте консоль сервера на наличие ошибок</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 