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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll-triggered animations
              const initScrollAnimations = () => {
                const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('show');
                    }
                  });
                }, observerOptions);

                // Observe all elements with animate-on-scroll class
                const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
                elementsToObserve.forEach((element) => {
                  observer.observe(element);
                });
              };

              // Initialize animations when DOM is loaded
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initScrollAnimations);
              } else {
                initScrollAnimations();
              }
            `,
          }}
        />
      </body>
    </html>
  )
} console.log('Force deploy trigger');
// Deploy trigger Sun Jul 13 17:29:16 +03 2025
// Force re-deploy Sun Jul 13 18:00:43 +03 2025
