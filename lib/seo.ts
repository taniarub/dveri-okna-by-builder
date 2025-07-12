import type { Metadata } from 'next'

// Business information
export const businessInfo = {
  name: "Окна и двери ПВХ - Лельчицы",
  description: "Качественные окна и двери ПВХ по доступным ценам с бесплатной доставкой по РБ. Качественные ПВХ конструкции, быстрый монтаж, гарантия качества.",
  phone: "+375293423221",
  email: "vitaliy9977@mail.ru",
  address: "Лельчицы, Гомельская область, Беларусь",
  website: "https://dverivokna.by",
  workingHours: "9:00 – 19:00, без выходных",
  services: [
    "Установка пластиковых окон",
    "Установка входных дверей",
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
    "монтаж пластиковых окон",
    "ремонт окон",
    "энергосберегающие окна"
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
  twitter: {
    card: "summary_large_image",
    title: "Окна и двери ПВХ",
    description: businessInfo.description,
    images: ["/lovable-uploads/c28c989c-3309-4eb0-9ef8-2cd5e9c2acec.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
    yandex: "your-yandex-verification-code", // Replace with actual code from Yandex Webmaster
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
    title: "Окна и двери ПВХ",
    description: "Качественные пластиковые окна и двери. Гарантия качества. Звоните +375293423221. Работаем без выходных.",
    keywords: "пластиковые окна и двери ПВХ, остекление балконов",
  },
  calculator: {
    title: "Калькулятор стоимости окон и дверей | Рассчитать цену онлайн",
    description: "Рассчитайте стоимость пластиковых окон и дверей онлайн. Калькулятор учитывает размеры, тип конструкции и дополнительные опции.",
    keywords: "калькулятор окон, стоимость пластиковых окон, расчет цены окон",
  },
  portfolio: {
    title: "Наши работы",
    description: "Посмотрите примеры наших работ по установке пластиковых окон и дверей. Фото реальных объектов.",
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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Лельчицы",
      "addressRegion": "Гомельская область",
      "addressCountry": "BY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7875,
      "longitude": 28.3214
    },
    "openingHours": "Mo-Su 09:00-19:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.7875,
        "longitude": 28.3214
      },
      "geoRadius": 50000
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по установке окон и дверей",
      "itemListElement": businessInfo.services.map((service, index) => ({
        "@type": "Offer",
        "name": service,
        "description": `Профессиональная услуга: ${service.toLowerCase()}`,
        "areaServed": "Гомельская область, Беларусь"
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 47,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Анна М."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Отличная работа! Установили окна быстро и качественно. Рекомендую!"
      }
    ],
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
      "name": "Установка пластиковых окон и дверей"
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
        "name": "Сколько стоит установка пластиковых окон в Лельчицах?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость установки пластиковых окон зависит от размеров, типа конструкции и дополнительных опций. Используйте наш онлайн калькулятор для расчета точной стоимости или звоните +375293423221 для консультации."
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
        "name": "Бесплатная ли доставка окон в Гомельской области?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предоставляем бесплатную доставку пластиковых окон и дверей по всей территории Беларуси. Точные условия доставки уточняйте при оформлении заказа."
        }
      },
      {
        "@type": "Question",
        "name": "Как быстро можно установить пластиковые окна?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Время установки зависит от количества и сложности конструкций. Обычно установка одного окна занимает 2-4 часа. Работаем без выходных с 9:00 до 19:00."
        }
      }
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
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Лельчицы",
        "addressRegion": "Гомельская область",
        "addressCountry": "BY"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.7875,
        "longitude": 28.3214
      },
      "geoRadius": 50000
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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Лельчицы",
      "addressRegion": "Гомельская область",
      "addressCountry": "BY"
    },
    "sameAs": [
      "https://www.instagram.com/dveri_okna_krovlya_lelchicy/"
    ]
  }
} 