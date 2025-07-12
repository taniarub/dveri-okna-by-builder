import type { Metadata } from 'next'
import Index from "@/pages/Index"
import { 
  pageMetadata, 
  generateWebPageStructuredData, 
  generateFAQStructuredData,
  generateServiceStructuredData 
} from '@/lib/seo'

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
}

export default function HomePage() {
  const pageStructuredData = generateWebPageStructuredData('home')
  const faqStructuredData = generateFAQStructuredData()
  const serviceStructuredData = generateServiceStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <Index />
    </>
  )
} 