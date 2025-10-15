"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  language: "en" | "es"
}

const content = {
  en: {
    greeting: "Welcome to",
    title: "301 Studio",
    subtitle: "Expert Development for WordPress & Perfex CRM",
    description:
      "We specialize in building powerful plugins, custom modules, and fully tailored solutions that transform how you work with WordPress and Perfex CRM.",
    cta: "Explore Our Products",
    secondary: "Get in Touch",
  },
  es: {
    greeting: "Bienvenido a",
    title: "301 Studio",
    subtitle: "Desarrollo Experto para WordPress y Perfex CRM",
    description:
      "Nos especializamos en crear plugins potentes, módulos personalizados y soluciones completamente adaptadas que transforman tu forma de trabajar con WordPress y Perfex CRM.",
    cta: "Explorar Productos",
    secondary: "Contáctanos",
  },
}

export function Hero({ language }: HeroProps) {
  const t = content[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">{t.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">{t.title}</h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 text-balance">{t.subtitle}</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("products")} className="gap-2 text-base">
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="text-base">
              {t.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
