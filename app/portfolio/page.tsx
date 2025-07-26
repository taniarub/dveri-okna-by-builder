import type { Metadata } from 'next'
import PortfolioPage from "./components/PortfolioPage"
import { pageMetadata, generateWebPageStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
  title: pageMetadata.portfolio.title,
  description: pageMetadata.portfolio.description,
  keywords: pageMetadata.portfolio.keywords,
  openGraph: {
    title: pageMetadata.portfolio.title,
    description: pageMetadata.portfolio.description,
  },
}

export default function Portfolio() {
  const pageStructuredData = generateWebPageStructuredData('portfolio')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
      <PortfolioPage />
    </>
  )
} 