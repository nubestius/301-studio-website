"use client"

import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState, useEffect } from "react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuTimeout, setProductsMenuTimeout] = useState<NodeJS.Timeout | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const handleProductsMenuEnter = () => {
    if (productsMenuTimeout) {
      clearTimeout(productsMenuTimeout)
      setProductsMenuTimeout(null)
    }
    setShowProductsMenu(true)
  }

  const handleProductsMenuLeave = () => {
    const timeout = setTimeout(() => {
      setShowProductsMenu(false)
    }, 200) // Small delay to allow clicking
    setProductsMenuTimeout(timeout)
  }

  const handleProductsMenuClick = () => {
    setShowProductsMenu(!showProductsMenu)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest("header")) {
        setMobileMenuOpen(false)
      }
      // Close products menu when clicking outside
      if (showProductsMenu && !target.closest('[aria-haspopup="true"]') && !target.closest(".absolute")) {
        setShowProductsMenu(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Add click outside listener for products menu
    if (showProductsMenu) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen, showProductsMenu])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (productsMenuTimeout) {
        clearTimeout(productsMenuTimeout)
      }
    }
  }, [productsMenuTimeout])

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
              onMouseEnter={handleProductsMenuEnter}
              onMouseLeave={handleProductsMenuLeave}
            >
              <button
                onClick={handleProductsMenuClick}
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                aria-expanded={showProductsMenu}
                aria-haspopup="true"
              >
                {t.products}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${showProductsMenu ? "rotate-180" : ""}`}
                />
              </button>

              {showProductsMenu && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
                  onMouseEnter={handleProductsMenuEnter}
                  onMouseLeave={handleProductsMenuLeave}
                >
                  <Link
                    href="/products/singflow-wordpress"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors cursor-pointer"
                    onClick={() => setShowProductsMenu(false)}
                  >
                    {t.singflowWordPress}
                  </Link>
                  <Link
                    href="/products/singflow-perfex"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors border-t border-border cursor-pointer"
                    onClick={() => setShowProductsMenu(false)}
                  >
                    {t.singflowPerfex}
                  </Link>
                  <Link
                    href="/products/301-accessibility"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors border-t border-border cursor-pointer"
                    onClick={() => setShowProductsMenu(false)}
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
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="gap-2 hidden md:flex"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col py-4 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.services}
              </button>

              <div className="px-4">
                <p className="text-sm font-medium text-foreground/80 mb-2">{t.products}</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/products/singflow-wordpress"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t.singflowWordPress}
                  </Link>
                  <Link
                    href="/products/singflow-perfex"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t.singflowPerfex}
                  </Link>
                  <Link
                    href="/products/301-accessibility"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t.accessibility}
                  </Link>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.contact}
              </button>

              <div className="px-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="gap-2 w-full justify-start"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
