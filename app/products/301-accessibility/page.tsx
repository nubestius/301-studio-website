"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Check, Eye, Keyboard, Volume2, ArrowLeft, Palette } from "lucide-react"
import Link from "next/link"

const content = {
  en: {
    backToHome: "Back to Home",
    hero: {
      title: "301 Accessibility",
      subtitle: "WordPress Accessibility Plugin",
      description:
        "Make your WordPress site accessible to everyone. Comprehensive accessibility features that help you meet WCAG standards and provide an inclusive experience for all visitors.",
      cta: "Get Started",
      ctaSecondary: "View Demo",
    },
    features: {
      title: "Key Features",
      subtitle: "Comprehensive accessibility tools for WordPress",
      list: [
        {
          icon: Eye,
          title: "Visual Adjustments",
          description:
            "Text size controls, contrast adjustments, color filters, and readable fonts for better visibility.",
        },
        {
          icon: Keyboard,
          title: "Keyboard Navigation",
          description:
            "Full keyboard navigation support with visible focus indicators and skip links for better usability.",
        },
        {
          icon: Volume2,
          title: "Screen Reader Support",
          description: "Optimized for screen readers with proper ARIA labels, semantic HTML, and descriptive content.",
        },
        {
          icon: Palette,
          title: "Customizable Interface",
          description:
            "Accessibility toolbar that matches your brand. Customizable position, colors, and available features.",
        },
      ],
    },
    benefits: {
      title: "Why Choose 301 Accessibility?",
      list: [
        "Meet WCAG 2.1 AA/AAA standards",
        "Improve SEO and search rankings",
        "Expand your audience reach",
        "Reduce legal compliance risks",
        "Easy installation and setup",
        "No coding knowledge required",
        "Regular updates and support",
        "Lightweight and fast performance",
      ],
    },
    useCases: {
      title: "Accessibility Features",
      list: [
        "Text size and spacing adjustments",
        "High contrast modes",
        "Color blindness filters",
        "Dyslexia-friendly fonts",
        "Keyboard navigation",
        "Screen reader optimization",
        "Focus indicators",
        "Alt text management",
      ],
    },
    cta: {
      title: "Make your website accessible to everyone",
      description: "Join thousands of websites using 301 Accessibility to create inclusive digital experiences.",
      button: "Get Started Today",
    },
  },
  es: {
    backToHome: "Volver al Inicio",
    hero: {
      title: "301 Accessibility",
      subtitle: "Plugin de Accesibilidad para WordPress",
      description:
        "Haz que tu sitio WordPress sea accesible para todos. Características completas de accesibilidad que te ayudan a cumplir con los estándares WCAG y proporcionar una experiencia inclusiva para todos los visitantes.",
      cta: "Comenzar",
      ctaSecondary: "Ver Demo",
    },
    features: {
      title: "Características Principales",
      subtitle: "Herramientas completas de accesibilidad para WordPress",
      list: [
        {
          icon: Eye,
          title: "Ajustes Visuales",
          description:
            "Controles de tamaño de texto, ajustes de contraste, filtros de color y fuentes legibles para mejor visibilidad.",
        },
        {
          icon: Keyboard,
          title: "Navegación por Teclado",
          description:
            "Soporte completo de navegación por teclado con indicadores de enfoque visibles y enlaces de salto para mejor usabilidad.",
        },
        {
          icon: Volume2,
          title: "Soporte para Lectores de Pantalla",
          description:
            "Optimizado para lectores de pantalla con etiquetas ARIA apropiadas, HTML semántico y contenido descriptivo.",
        },
        {
          icon: Palette,
          title: "Interfaz Personalizable",
          description:
            "Barra de herramientas de accesibilidad que coincide con tu marca. Posición, colores y características disponibles personalizables.",
        },
      ],
    },
    benefits: {
      title: "¿Por Qué Elegir 301 Accessibility?",
      list: [
        "Cumple con estándares WCAG 2.1 AA/AAA",
        "Mejora SEO y clasificaciones de búsqueda",
        "Amplía el alcance de tu audiencia",
        "Reduce riesgos de cumplimiento legal",
        "Instalación y configuración fáciles",
        "No se requiere conocimiento de codificación",
        "Actualizaciones y soporte regulares",
        "Rendimiento ligero y rápido",
      ],
    },
    useCases: {
      title: "Características de Accesibilidad",
      list: [
        "Ajustes de tamaño y espaciado de texto",
        "Modos de alto contraste",
        "Filtros para daltonismo",
        "Fuentes amigables para dislexia",
        "Navegación por teclado",
        "Optimización para lectores de pantalla",
        "Indicadores de enfoque",
        "Gestión de texto alternativo",
      ],
    },
    cta: {
      title: "Haz tu sitio web accesible para todos",
      description:
        "Únete a miles de sitios web que usan 301 Accessibility para crear experiencias digitales inclusivas.",
      button: "Comienza Hoy",
    },
  },
}

export default function AccessibilityPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const t = content[language]

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToHome}
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center p-4 bg-accent/10 rounded-2xl">
              <Shield className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">{t.hero.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                {t.hero.cta}
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.features.title}</h2>
            <p className="text-lg text-muted-foreground text-balance">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.features.list.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-balance">{t.benefits.title}</h2>
              <ul className="space-y-4">
                {t.benefits.list.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accessibility Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-balance">{t.useCases.title}</h2>
              <ul className="space-y-4">
                {t.useCases.list.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">{t.cta.title}</h2>
            <p className="text-lg mb-8 opacity-90 text-balance">{t.cta.description}</p>
            <Button size="lg" variant="secondary" className="text-base">
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
