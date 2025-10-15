"use client"

import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface HeaderProps {
  language: "en" | "es"
  setLanguage: (lang: "en" | "es") => void
}

const content = {
  en: {
    services: "Services",
    products: "Products",
    contact: "Contact",
    singflowWordPress: "Singflow for WordPress",
    singflowPerfex: "Singflow for Perfex CRM",
    accessibility: "301 Accessibility",
  },
  es: {
    services: "Servicios",
    products: "Productos",
    contact: "Contacto",
    singflowWordPress: "Singflow para WordPress",
    singflowPerfex: "Singflow para Perfex CRM",
    accessibility: "301 Accesibilidad",
  },
}

export function Header({ language, setLanguage }: HeaderProps) {
  const t = content[language]
  const [showProductsMenu, setShowProductsMenu] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              301 Studio
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.services}
            </button>

            <div
              className="relative"
              onMouseEnter={() => setShowProductsMenu(true)}
              onMouseLeave={() => setShowProductsMenu(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t.products}
                <ChevronDown className="h-4 w-4" />
              </button>

              {showProductsMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                  <Link
                    href="/products/singflow-wordpress"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                  >
                    {t.singflowWordPress}
                  </Link>
                  <Link
                    href="/products/singflow-perfex"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors border-t border-border"
                  >
                    {t.singflowPerfex}
                  </Link>
                  <Link
                    href="/products/301-accessibility"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors border-t border-border"
                  >
                    {t.accessibility}
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
