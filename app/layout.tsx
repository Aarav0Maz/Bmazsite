import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://keystoneproperties.vercel.app'),
  title: 'Keystone Property Solutions | Worry-Free Real Estate Investing',
  description: 'Full-service property management company in the Greater Toronto Area specializing in tenant selection, rent collection, maintenance coordination, inspections, and LTB assistance. Your trusted partner in worry-free real estate investing.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
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
  openGraph: {
    title: 'Keystone Property Solutions | Worry-Free Real Estate Investing',
    description:
      'Full-service property management company in the Greater Toronto Area specializing in tenant selection, rent collection, maintenance coordination, inspections, and LTB assistance.',
    url: '/',
    siteName: 'Keystone Property Solutions',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/apple-icon.png',
        width: 136,
        height: 132,
        alt: 'Keystone Property Solutions logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Keystone Property Solutions | Worry-Free Real Estate Investing',
    description:
      'Full-service property management company in the Greater Toronto Area specializing in tenant selection, rent collection, maintenance coordination, inspections, and LTB assistance.',
    images: ['/apple-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
