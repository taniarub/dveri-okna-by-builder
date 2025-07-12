import type { Metadata } from 'next'
import CalculatorPage from "@/pages/CalculatorPage"
import { pageMetadata, generateWebPageStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
  title: pageMetadata.calculator.title,
  description: pageMetadata.calculator.description,
  keywords: pageMetadata.calculator.keywords,
  openGraph: {
    title: pageMetadata.calculator.title,
    description: pageMetadata.calculator.description,
  },
}

export default function Calculator() {
  const pageStructuredData = generateWebPageStructuredData('calculator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
      <CalculatorPage />
    </>
  )
} 