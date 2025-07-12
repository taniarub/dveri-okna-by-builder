import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/providers'
import '@/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dveri Okna BY Builder',
  description: 'Professional windows and doors installation services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 