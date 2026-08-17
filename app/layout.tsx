import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  variable: '--font-noto-devanagari',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agarwal Dental Clinic | Dental Clinic in Bilaspur, Chhattisgarh',
  description:
    'Visit Agarwal Dental Clinic in Govind Nagar, Jarahbhata, Bilaspur, Chhattisgarh for professional dental care and appointment enquiries.',
  generator: 'v0.app',
  keywords: [
    'Dental clinic in Bilaspur',
    'Dentist in Bilaspur',
    'Dental clinic in Jarahbhata',
    'Dentist near Govind Nagar',
    'Agarwal Dental Clinic Bilaspur',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f0f9fa',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${plusJakarta.variable} ${notoDevanagari.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
