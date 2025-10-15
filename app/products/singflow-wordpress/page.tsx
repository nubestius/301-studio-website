"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSignature, Check, Zap, Shield, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Singflow for WordPress",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress",
  description:
    "Digital signature solution for WordPress. Transform your WordPress site into a powerful document signing platform with DocuSign-style capabilities.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
  },
  featureList: [
    "Easy Document Upload",
    "Multiple Signers Support",
    "Bank-level Security",
    "Automated Workflows",
    "Mobile Responsive",
    "Audit Trails",
  ],
}

const content = {
  en: {
    backToHome: "Back to Home",
    hero: {
      title: "Singflow for WordPress",
      subtitle: "Digital Signatures for WordPress",
      description:
        "Transform your WordPress site into a powerful document signing platform. Singflow brings DocuSign-style digital signature capabilities directly to your WordPress environment.",
      disclaimer: "Not affiliated with DocuSign",
      cta: "Get Started",
      ctaSecondary: "Contact Sales",
    },
    features: {
      title: "Key Features",
      subtitle: "Everything you need for professional document signing",
      list: [
        {
          icon: FileSignature,
          title: "Easy Document Upload",
          description:
            "Upload PDFs and documents directly from your WordPress dashboard. Support for multiple file formats.",
        },
        {
          icon: Users,
          title: "Multiple Signers",
          description: "Send documents to multiple recipients with customizable signing order and permissions.",
        },
        {
          icon: Shield,
          title: "Secure & Compliant",
          description: "Bank-level encryption and audit trails. Meet legal requirements for electronic signatures.",
        },
        {
          icon: Zap,
          title: "Automated Workflows",
          description: "Set up automatic reminders, expiration dates, and completion notifications.",
        },
      ],
    },
    benefits: {
      title: "Why Choose Singflow for WordPress?",
      list: [
        "Seamless integration with your existing WordPress site",
        "No need for external signature platforms",
        "Complete control over your document signing process",
        "Customizable branding and email templates",
        "Detailed analytics and reporting",
        "Mobile-responsive signing experience",
      ],
    },
    useCases: {
      title: "Perfect For",
      list: [
        "Contracts and agreements",
        "NDAs and legal documents",
        "Client onboarding forms",
        "Service agreements",
        "Consent forms",
        "Any document requiring signatures",
      ],
    },
    cta: {
      title: "Ready to streamline your document signing?",
      description: "Get started with Singflow for WordPress today and transform how you handle signatures.",
      button: "Contact Us",
    },
  },
  es: {
    backToHome: "Volver al Inicio",
    hero: {
      title: "Singflow para WordPress",
      subtitle: "Firmas Digitales para WordPress",
      description:
        "Transforma tu sitio WordPress en una poderosa plataforma de firma de documentos. Singflow trae capacidades de firma digital estilo DocuSign directamente a tu entorno WordPress.",
      disclaimer: "No afiliado con DocuSign",
      cta: "Comenzar",
      ctaSecondary: "Contactar Ventas",
    },
    features: {
      title: "Características Principales",
      subtitle: "Todo lo que necesitas para la firma profesional de documentos",
      list: [
        {
          icon: FileSignature,
          title: "Carga Fácil de Documentos",
          description:
            "Sube PDFs y documentos directamente desde tu panel de WordPress. Soporte para múltiples formatos de archivo.",
        },
        {
          icon: Users,
          title: "Múltiples Firmantes",
          description: "Envía documentos a múltiples destinatarios con orden de firma y permisos personalizables.",
        },
        {
          icon: Shield,
          title: "Seguro y Conforme",
          description:
            "Encriptación de nivel bancario y registros de auditoría. Cumple con requisitos legales para firmas electrónicas.",
        },
        {
          icon: Zap,
          title: "Flujos de Trabajo Automatizados",
          description: "Configura recordatorios automáticos, fechas de vencimiento y notificaciones de finalización.",
        },
      ],
    },
    benefits: {
      title: "¿Por Qué Elegir Singflow para WordPress?",
      list: [
        "Integración perfecta con tu sitio WordPress existente",
        "No necesitas plataformas de firma externas",
        "Control completo sobre tu proceso de firma de documentos",
        "Marca y plantillas de correo personalizables",
        "Análisis e informes detallados",
        "Experiencia de firma adaptable a móviles",
      ],
    },
    useCases: {
      title: "Perfecto Para",
      list: [
        "Contratos y acuerdos",
        "NDAs y documentos legales",
        "Formularios de incorporación de clientes",
        "Acuerdos de servicio",
        "Formularios de consentimiento",
        "Cualquier documento que requiera firmas",
      ],
    },
    cta: {
      title: "¿Listo para optimizar la firma de tus documentos?",
      description: "Comienza con Singflow para WordPress hoy y transforma cómo manejas las firmas.",
      button: "Contáctanos",
    },
  },
}

export default function SingflowWordPressPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const t = content[language]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
                <FileSignature className="h-12 w-12 text-accent" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">{t.hero.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">{t.hero.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                {t.hero.description}
              </p>
              <p className="text-sm text-muted-foreground italic mb-8">{t.hero.disclaimer}</p>
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

        {/* Benefits & Use Cases Section */}
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

              {/* Use Cases */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-balance">{t.useCases.title}</h2>
                <ul className="space-y-4">
                  {t.useCases.list.map((useCase, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{useCase}</span>
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
    </>
  )
}
