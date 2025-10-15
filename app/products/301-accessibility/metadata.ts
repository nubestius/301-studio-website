import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "301 Accessibility - WordPress Accessibility Plugin",
  description:
    "Make your WordPress site accessible to everyone. Comprehensive accessibility features including screen reader support, keyboard navigation, and WCAG compliance tools.",
  keywords: [
    "WordPress accessibility",
    "WCAG compliance",
    "accessibility plugin",
    "301 Accessibility",
    "WordPress ADA",
    "web accessibility",
    "inclusive design",
  ],
  openGraph: {
    title: "301 Accessibility - WordPress Accessibility Plugin",
    description: "Make your WordPress site accessible to everyone with comprehensive WCAG compliance tools.",
    url: "https://301studio.com/products/301-accessibility",
    type: "website",
    images: [
      {
        url: "/products/301-accessibility-og.jpg",
        width: 1200,
        height: 630,
        alt: "301 Accessibility Plugin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "301 Accessibility - WordPress Accessibility Plugin",
    description: "Make your WordPress site accessible to everyone.",
    images: ["/products/301-accessibility-og.jpg"],
  },
  alternates: {
    canonical: "https://301studio.com/products/301-accessibility",
    languages: {
      en: "https://301studio.com/products/301-accessibility",
      es: "https://301studio.com/es/products/301-accessibility",
    },
  },
}
