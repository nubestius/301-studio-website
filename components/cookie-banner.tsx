"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

interface CookieBannerProps {
  language: "en" | "es"
}

const content = {
  en: {
    title: "We use cookies",
    description:
      "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking 'Accept All', you consent to our use of cookies. You can manage your preferences or learn more in our",
    cookiePolicy: "Cookie Policy",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    customize: "Customize",
    essentialOnly: "Essential Only",
    acceptSelected: "Save Preferences",
    categories: {
      essential: {
        title: "Essential Cookies",
        description: "Required for the website to function properly. These cannot be disabled.",
      },
      analytics: {
        title: "Analytics Cookies",
        description: "Help us understand how visitors interact with our website.",
      },
      marketing: {
        title: "Marketing Cookies",
        description: "Used to deliver relevant advertisements and track campaign effectiveness.",
      },
    },
  },
  es: {
    title: "Usamos cookies",
    description:
      "Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en 'Aceptar Todo', usted consiente nuestro uso de cookies. Puede gestionar sus preferencias o obtener más información en nuestra",
    cookiePolicy: "Política de Cookies",
    acceptAll: "Aceptar Todo",
    rejectAll: "Rechazar Todo",
    customize: "Personalizar",
    essentialOnly: "Solo Esenciales",
    acceptSelected: "Guardar Preferencias",
    categories: {
      essential: {
        title: "Cookies Esenciales",
        description: "Necesarias para que el sitio web funcione correctamente. No se pueden desactivar.",
      },
      analytics: {
        title: "Cookies de Análisis",
        description: "Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.",
      },
      marketing: {
        title: "Cookies de Marketing",
        description: "Se utilizan para entregar anuncios relevantes y rastrear la efectividad de las campañas.",
      },
    },
  },
}

export function CookieBanner({ language }: CookieBannerProps) {
  const t = content[language]
  const [showBanner, setShowBanner] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(cookieConsent)
        setPreferences({
          essential: true,
          analytics: saved.analytics || false,
          marketing: saved.marketing || false,
        })
      } catch {
        // If parsing fails, show banner
        setShowBanner(true)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    // Here you would initialize analytics/marketing scripts
    initializeCookies(consent)
  }

  const handleRejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    initializeCookies(consent)
  }

  const handleSavePreferences = () => {
    const consent = {
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowCustomize(false)
    initializeCookies(consent)
  }

  const initializeCookies = (consent: {
    essential: boolean
    analytics: boolean
    marketing: boolean
  }) => {
    // Initialize analytics cookies if consented
    if (consent.analytics) {
      // Initialize Google Analytics or other analytics tools here
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' })
    }

    // Initialize marketing cookies if consented
    if (consent.marketing) {
      // Initialize marketing/advertising scripts here
      // Example: gtag('consent', 'update', { ad_storage: 'granted' })
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <Card className="max-w-4xl mx-auto shadow-2xl pointer-events-auto border-2">
        <CardContent className="pt-6 pb-6">
          {!showCustomize ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.description}{" "}
                    <Link href="/legal/cookies" className="text-primary hover:underline">
                      {t.cookiePolicy}
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCustomize(true)}
                  className="gap-2"
                >
                  <Settings className="h-4 w-4" />
                  {t.customize}
                </Button>
                <Button variant="outline" size="sm" onClick={handleRejectAll}>
                  {t.rejectAll}
                </Button>
                <Button size="sm" onClick={handleAcceptAll}>
                  {t.acceptAll}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{t.customize}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowCustomize(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies - Always enabled */}
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{t.categories.essential.title}</h4>
                      <span className="text-xs text-muted-foreground">(Required)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t.categories.essential.description}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{t.categories.analytics.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {t.categories.analytics.description}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{t.categories.marketing.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {t.categories.marketing.description}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t">
                <Link
                  href="/legal/cookies"
                  className="text-sm text-primary hover:underline"
                >
                  {t.cookiePolicy}
                </Link>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleRejectAll}>
                    {t.essentialOnly}
                  </Button>
                  <Button size="sm" onClick={handleSavePreferences}>
                    {t.acceptSelected}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
