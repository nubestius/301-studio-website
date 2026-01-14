import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://301studio.com"),
  title: {
    default: "301 Studio - WordPress & Perfex CRM Development Experts",
    template: "%s | 301 Studio",
  },
  description:
    "Expert development of WordPress plugins, Perfex CRM modules, and custom solutions. Creators of Singflow digital signature solutions and 301 Accessibility plugin.",
  keywords: [
    "WordPress plugins",
    "Perfex CRM",
    "custom development",
    "digital signatures",
    "Singflow",
    "accessibility plugin",
    "WordPress development",
    "CRM extensions",
  ],
  authors: [{ name: "301 Studio" }],
  creator: "301 Studio",
  publisher: "301 Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: "/icon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: "https://301studio.com",
    siteName: "301 Studio",
    title: "301 Studio - WordPress & Perfex CRM Development Experts",
    description:
      "Expert development of WordPress plugins, Perfex CRM modules, and custom solutions. Creators of Singflow digital signature solutions and 301 Accessibility plugin.",
    images: [
      {
        url: "https://301studio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "301 Studio - WordPress & Perfex CRM Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "301 Studio - WordPress & Perfex CRM Development Experts",
    description: "Expert development of WordPress plugins, Perfex CRM modules, and custom solutions.",
    images: ["https://301studio.com/og-image.jpg"],
    creator: "@301studio",
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
  verification: {
    // TODO: Add your actual verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://301studio.com",
    languages: {
      "en": "https://301studio.com",
      "es": "https://301studio.com/es",
    },
  },
  category: "technology",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
