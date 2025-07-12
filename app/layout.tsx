import { Inter } from 'next/font/google'
import Providers from '@/components/providers'
import { 
  defaultMetadata, 
  generateBusinessStructuredData, 
  generateOrganizationStructuredData 
} from '@/lib/seo'
import '@/index.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessStructuredData = generateBusinessStructuredData()
  const organizationStructuredData = generateOrganizationStructuredData()

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 