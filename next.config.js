/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем output: 'export' для работы API routes
  // output: 'export',
  
  // Отключаем trailing slash для API routes
  trailingSlash: false,
  
  // Настройки для API routes
  experimental: {
    serverComponentsExternalPackages: [],
  },
  
  // Настройки для работы с внешними API
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
  
  // Настройки для работы с изображениями
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  
  // Настройки для работы с внешними доменами
  async rewrites() {
    return [
      {
        source: '/api/telegram/:path*',
        destination: 'https://api.telegram.org/:path*',
      },
    ];
  },
  
  // Настройки для улучшения производительности
  compress: true,
  poweredByHeader: false,
  
  // Настройки для работы с переменными окружения
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Настройки для работы с сервером
  serverRuntimeConfig: {
    // Будет доступно только на сервере
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  },
  
  publicRuntimeConfig: {
    // Будет доступно и на клиенте, и на сервере
    staticFolder: '/static',
  },
};

export default nextConfig; 