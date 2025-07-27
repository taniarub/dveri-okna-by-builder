'use client'

import { useState } from 'react'

export default function TestContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      // Тест обычного API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setResult({
        endpoint: '/api/contact',
        status: response.status,
        ok: response.ok,
        data
      })
    } catch (error) {
      setResult({
        endpoint: '/api/contact',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDebugSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      // Тест debug API
      const response = await fetch('/api/debug-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setResult({
        endpoint: '/api/debug-contact',
        status: response.status,
        ok: response.ok,
        data
      })
    } catch (error) {
      setResult({
        endpoint: '/api/debug-contact',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Тест отправки контактной формы</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Форма для тестирования</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 mb-4">
            <div>
              <label className="block mb-2">Имя *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                placeholder="Введите имя"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">Телефон *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                placeholder="+375 XX XXX XX XX"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label className="block mb-2">Сообщение</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                rows={4}
                placeholder="Ваше сообщение"
              />
            </div>
            
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? 'Отправка...' : 'Тест обычного API'}
              </button>
              
              <button
                type="button"
                onClick={handleDebugSubmit}
                disabled={isLoading}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isLoading ? 'Отправка...' : 'Тест Debug API'}
              </button>
            </div>
          </form>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Результат теста</h2>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Анализ результата:</h3>
              <ul className="space-y-2">
                {result.error ? (
                  <li className="text-red-600">❌ Ошибка: {result.error}</li>
                ) : result.data?.success ? (
                  <>
                    <li className="text-green-600">✅ Запрос выполнен успешно</li>
                    <li className="text-blue-600">📡 Endpoint: {result.endpoint}</li>
                    <li className="text-blue-600">📊 Status: {result.status}</li>
                  </>
                ) : (
                  <>
                    <li className="text-red-600">❌ Запрос не выполнен</li>
                    <li className="text-red-600">📡 Endpoint: {result.endpoint}</li>
                    <li className="text-red-600">📊 Status: {result.status}</li>
                    {result.data?.message && (
                      <li className="text-red-600">💬 Сообщение: {result.data.message}</li>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h3 className="font-semibold mb-2">Возможные проблемы:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li><strong>Telegram API</strong> - проблемы с токеном бота или правами</li>
            <li><strong>Валидация данных</strong> - неверный формат имени или телефона</li>
            <li><strong>Сетевые проблемы</strong> - таймаут или проблемы с подключением</li>
            <li><strong>Формат данных</strong> - неправильный JSON</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 