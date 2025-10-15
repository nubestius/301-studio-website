"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSignature, Check, Zap, Users, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

const content = {
  en: {
    backToHome: "Back to Home",
    hero: {
      title: "Singflow for Perfex CRM",
      subtitle: "Digital Signatures for Perfex CRM",
      description:
        "Enhance your Perfex CRM with powerful digital signature capabilities. Close deals faster with seamless document signing integrated directly into your CRM workflow.",
      disclaimer: "Not affiliated with DocuSign",
      cta: "Get Started",
      ctaSecondary: "Contact Sales",
    },
    features: {
      title: "Key Features",
      subtitle: "Streamline your CRM document workflow",
      list: [
        {
          icon: FileSignature,
          title: "CRM Integration",
          description:
            "Fully integrated with Perfex CRM. Send documents directly from proposals, contracts, and estimates.",
        },
        {
          icon: Users,
          title: "Client Management",
          description:
            "Automatically sync with your client database. Track signature status alongside customer records.",
        },
        {
          icon: FileText,
          title: "Template Library",
          description: "Create reusable document templates. Merge CRM data automatically into your documents.",
        },
        {
          icon: Zap,
          title: "Workflow Automation",
          description: "Trigger signatures from CRM events. Automate follow-ups and document completion workflows.",
        },
      ],
    },
    benefits: {
      title: "Why Choose Singflow for Perfex CRM?",
      list: [
        "Native integration with Perfex CRM",
        "Accelerate sales cycles with faster signatures",
        "Reduce manual data entry and errors",
        "Complete audit trail within CRM",
        "Customizable to match your brand",
        "Works with existing Perfex workflows",
      ],
    },
    useCases: {
      title: "Perfect For",
      list: [
        "Sales proposals and quotes",
        "Service contracts",
        "Client agreements",
        "Project approvals",
        "Vendor contracts",
        "Any CRM document requiring signatures",
      ],
    },
    cta: {
      title: "Ready to supercharge your Perfex CRM?",
      description: "Add powerful digital signature capabilities to your CRM and close deals faster.",
      button: "Contact Us",
    },
  },
  es: {
    backToHome: "Volver al Inicio",
    hero: {
      title: "Singflow para Perfex CRM",
      subtitle: "Firmas Digitales para Perfex CRM",
      description:
        "Mejora tu Perfex CRM con potentes capacidades de firma digital. Cierra tratos más rápido con firma de documentos integrada directamente en tu flujo de trabajo CRM.",
      disclaimer: "No afiliado con DocuSign",
      cta: "Comenzar",
      ctaSecondary: "Contactar Ventas",
    },
    features: {
      title: "Características Principales",
      subtitle: "Optimiza tu flujo de trabajo de documentos CRM",
      list: [
        {
          icon: FileSignature,
          title: "Integración CRM",
          description:
            "Totalmente integrado con Perfex CRM. Envía documentos directamente desde propuestas, contratos y presupuestos.",
        },
        {
          icon: Users,
          title: "Gestión de Clientes",
          description:
            "Sincroniza automáticamente con tu base de datos de clientes. Rastrea el estado de firmas junto con registros de clientes.",
        },
        {
          icon: FileText,
          title: "Biblioteca de Plantillas",
          description:
            "Crea plantillas de documentos reutilizables. Combina datos del CRM automáticamente en tus documentos.",
        },
        {
          icon: Zap,
          title: "Automatización de Flujos",
          description:
            "Activa firmas desde eventos del CRM. Automatiza seguimientos y flujos de finalización de documentos.",
        },
      ],
    },
    benefits: {
      title: "¿Por Qué Elegir Singflow para Perfex CRM?",
      list: [
        "Integración nativa con Perfex CRM",
        "Acelera ciclos de ventas con firmas más rápidas",
        "Reduce entrada manual de datos y errores",
        "Registro de auditoría completo dentro del CRM",
        "Personalizable para coincidir con tu marca",
        "Funciona con flujos de trabajo Perfex existentes",
      ],
    },
    useCases: {
      title: "Perfecto Para",
      list: [
        "Propuestas y cotizaciones de ventas",
        "Contratos de servicio",
        "Acuerdos con clientes",
        "Aprobaciones de proyectos",
        "Contratos con proveedores",
        "Cualquier documento CRM que requiera firmas",
      ],
    },
    cta: {
      title: "¿Listo para potenciar tu Perfex CRM?",
      description: "Añade potentes capacidades de firma digital a tu CRM y cierra tratos más rápido.",
      button: "Contáctanos",
    },
  },
}

export default function SingflowPerfexPage() {
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
              <FileSignature className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">{t.hero.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">{t.hero.description}</p>
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
  )
}
