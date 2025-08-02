import type { Metadata } from 'next'

// Business information
export const businessInfo = {
  name: "Окна и двери ПВХ",
  description: "Качественные окна и двери ПВХ по доступным ценам с бесплатной доставкой по РБ. Качественные ПВХ конструкции, гарантия качества.",
  phone: "+375293423221",
  email: "vitaliy9977@mail.ru",
  address: "Лельчицы, Гомельская область, Беларусь",
  website: "https://dverivokna.by",
  workingHours: "9:00 – 19:00, без выходных",
  services: [
    "Пластиковые окна",
    "Входные двери",
    "Остекление балконов и лоджий",
    "Ремонт и обслуживание окон",
    "Замер и консультация",
    "Изготовление под заказ"
  ]
}

// Default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: "Окна и двери ПВХ",
    template: "%s | Окна и двери ПВХ"
  },
  description: businessInfo.description,
  keywords: [
    "пластиковые окна",
    "окна ПВХ Беларусь",
    "двери ПВХ Беларусь",
    "остекление балконов",
    "окна под заказ",
    "бесплатная доставка",
    "без монтажа и переплат",
    "бесплатная доставка по РБ"
  ].join(", "),
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(businessInfo.website),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: "website",
    locale: "ru_BY",
    url: businessInfo.website,
    siteName: businessInfo.name,
    title: "Окна и двери ПВХ",
    description: businessInfo.description,
    images: [
      {
        url: "/lovable-uploads/c28c989c-3309-4eb0-9ef8-2cd5e9c2acec.png",
        width: 1200,
        height: 630,
        alt: "Пластиковые окна и двери - наша работа",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: "Окна и двери ПВХ | Калькулятор стоимости онлайн",
    description: "Качественные пластиковые окна и двери. Рассчитайте стоимость онлайн на нашем калькуляторе. Гарантия качества. Звоните +375293423221. Работаем без выходных.",
    keywords: "пластиковые окна и двери ПВХ, остекление балконов, калькулятор стоимости окон, рассчитать цену окон онлайн",
  },
  calculator: {
    title: "Калькулятор стоимости окон и дверей | Рассчитать цену онлайн",
    description: "Рассчитайте стоимость пластиковых окон и дверей онлайн. Калькулятор учитывает размеры, тип конструкции и дополнительные опции.",
    keywords: "калькулятор окон, стоимость пластиковых окон, расчет цены окон",
  },
  portfolio: {
    title: "Наши работы",
    description: "Посмотрите примеры наших работ. Фото реальных объектов.",
    keywords: "примеры работ окна, портфолио оконной компании",
  },
}

// Structured data for business
export function generateBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessInfo.website,
    "name": businessInfo.name,
    "description": businessInfo.description,
    "url": businessInfo.website,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "openingHours": "Mo-Su 09:00-19:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Окна и двери ПВХ",
      "itemListElement": businessInfo.services.map((service, index) => ({
        "@type": "Offer",
        "name": service,
        "description": `Профессиональная услуга: ${service.toLowerCase()}`,
        "areaServed": "Гомельская область, Беларусь"
      }))
    },
    "sameAs": [
      "https://www.instagram.com/dveri_okna_krovlya_lelchicy/",
    ]
  }
}

// Generate page-specific structured data
export function generateWebPageStructuredData(page: keyof typeof pageMetadata) {
  const pageData = pageMetadata[page]
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": `${businessInfo.website}${page === 'home' ? '' : `/${page}`}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": businessInfo.name,
      "url": businessInfo.website
    },
    "about": {
      "@type": "Thing",
      "name": "Окна и двери ПВХ"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": businessInfo.website
        }
      ]
    }
  }
}

// FAQ structured data for better search visibility
export function generateFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько стоят окна и двери ПВХ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость пластиковых окон зависит от размеров, типа конструкции и дополнительных опций. Используйте наш онлайн калькулятор для расчета точной стоимости или звоните +375293423221 для консультации."
        }
      },
      {
        "@type": "Question",
        "name": "Какая гарантия на пластиковые окна?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы предоставляем гарантию на все виды работ и используемые материалы. Гарантийный срок зависит от типа конструкции и составляет от 3 до 10 лет."
        }
      },
      {
        "@type": "Question",
        "name": "Бесплатная ли доставка окон по РБ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предоставляем бесплатную доставку пластиковых окон и дверей по всей территории Беларуси. Точные условия доставки уточняйте при оформлении заказа."
        }
      },
    ]
  }
}

// Service schema for each service offered
export function generateServiceStructuredData() {
  return businessInfo.services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "telephone": businessInfo.phone,
    },
    "serviceType": service,
    "description": `Профессиональная услуга ${service.toLowerCase()} в Лельчицах и Гомельской области`
  }))
}

// Organization schema
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessInfo.name,
    "url": businessInfo.website,
    "logo": `${businessInfo.website}/lovable-uploads/c28c989c-3309-4eb0-9ef8-2cd5e9c2acec.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessInfo.phone,
      "contactType": "customer service",
      "areaServed": "BY",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://www.instagram.com/dveri_okna_krovlya_lelchicy/"
    ]
  }
} 
