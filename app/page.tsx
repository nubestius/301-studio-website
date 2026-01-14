"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "301 Studio",
  url: "https://301studio.com",
  logo: "https://301studio.com/logo.png",
  description: "Expert development of WordPress plugins, Perfex CRM modules, and custom solutions",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  sameAs: ["https://twitter.com/301studio", "https://linkedin.com/company/301studio", "https://github.com/301studio"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "info@301studio.com",
  },
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="min-h-screen">
        <Header language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Expertise language={language} />
        <Products language={language} />
        <Contact language={language} />
        <Footer language={language} />
        <CookieBanner language={language} />
      </div>
    </>
  )
}
