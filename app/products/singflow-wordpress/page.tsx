"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSignature, Check, Zap, Shield, Users, ArrowLeft, Lock, Code, BarChart3, FileText, Settings, Mail, Clock, Globe } from "lucide-react"
import Link from "next/link"

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Singflow for WordPress",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress",
  description:
    "Professional electronic signature solution for WordPress. Create, send, and manage legally binding electronic signatures with drag & drop editor, multi-signer support, and complete audit trails.",
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
    "Drag & Drop Document Editor with Zoom Controls",
    "11 Field Types: Signature, Initials, Text, Date, Checkbox, Dropdown, Name, Email, Company, Title, Label",
    "Unlimited Multi-Signer Support (Sequential or Parallel Workflows)",
    "Multiple File Format Support (PDF, PNG, JPG, DOC, DOCX)",
    "Signature Options: Draw, Type, or Upload Signature Images",
    "AES-256-GCM Document Encryption at Rest",
    "OTP Verification for eIDAS Advanced Compliance",
    "Time Stamp Authority (TSA) Integration",
    "Complete Audit Trail with IP, Geolocation, User Agent, Timestamps",
    "Automatic Certificate Generation with QR Codes",
    "Document Template System for Reusability",
    "REST API with Rate Limiting",
    "Advanced Analytics & Statistics Dashboard",
    "Automatic Email Notifications & Configurable Reminders",
    "Custom Branding (Logo, Colors) & Glassmorphism Interface",
    "Field-to-Signer Assignment",
    "Document Expiration & Decline Options",
    "PIN Code Protection",
    "Shareable Signing Links",
    "Mobile Responsive Design",
    "Multilingual Support (English & Spanish)",
    "GDPR & CCPA Compliant",
  ],
}

const content = {
  en: {
    backToHome: "Back to Home",
    hero: {
      title: "Singflow for WordPress",
      subtitle: "Digital Signatures for WordPress",
      description:
        "Professional electronic signature solution for WordPress. Create, send, and manage legally binding electronic signatures directly from your WordPress dashboard. Perfect for businesses, freelancers, and organizations that need to collect signatures on contracts, agreements, and other documents.",
      cta: "Get Started",
      ctaSecondary: "Contact Sales",
    },
    features: {
      title: "Key Features",
      subtitle: "Everything you need for professional document signing",
      list: [
        {
          icon: FileSignature,
          title: "Advanced Drag & Drop Document Editor",
          description:
            "Intuitive field placement with drag and drop interface. Support for PDF, PNG, JPG, DOC, and DOCX files. 11 field types available: Signature, Initials, Text, Date, Checkbox, Dropdown, Name, Email, Company, Title, and Label. Zoom controls and page navigation for precise field placement. Assign fields to specific signers with visual badges.",
        },
        {
          icon: Users,
          title: "Unlimited Multi-Signer Support",
          description:
            "Add unlimited signers with customizable signing order. Choose sequential (one after another) or parallel (simultaneous) signing workflows. Assign specific fields to individual signers. Track each signer's progress independently. Support for signer roles and permissions.",
        },
        {
          icon: Shield,
          title: "Enterprise-Grade Security & Compliance",
          description:
            "AES-256-GCM encryption for documents at rest. OTP (One-Time Password) verification for eIDAS Advanced compliance. Time Stamp Authority (TSA) integration for certified timestamps. Complete audit trail with IP addresses, geolocation, user agent, and timestamps. PIN code protection option. GDPR and CCPA compliant.",
        },
        {
          icon: Zap,
          title: "Signature Options & Automation",
          description:
            "Multiple signature input methods: draw with mouse/touch, type with custom fonts, or upload signature images. Automatic email notifications for signing requests, reminders, and completions. Configurable automatic reminders (1, 2, 3, 5, or 7 days). Document expiration settings. Decline option with reason tracking.",
        },
        {
          icon: FileText,
          title: "Document Template System",
          description:
            "Save frequently used documents as templates for quick reuse. Create new documents from templates with pre-configured fields and signers. Streamline repetitive document workflows. Template management with descriptions and organization.",
        },
        {
          icon: Code,
          title: "REST API for Integrations",
          description:
            "Complete REST API for custom integrations. Manage documents, signers, fields, and audit trails programmatically. Rate limiting for API security. Full CRUD operations for all entities. Perfect for CRM integrations, automation, and custom workflows.",
        },
        {
          icon: BarChart3,
          title: "Advanced Analytics & Statistics",
          description:
            "Comprehensive dashboard with document statistics. Track average signing time, conversion rates, and completion rates. Monthly document trends and busiest days analysis. Total signatures count and status breakdown. Export audit trails for compliance reporting.",
        },
        {
          icon: Lock,
          title: "Complete Audit Trail & Certificates",
          description:
            "Full tracking of all document activities with timestamps, IP addresses, geolocation, and user agent information. Automatic generation of completion certificates with QR codes for verification. Certificate includes all signers, signatures, and complete audit trail. Export audit trails in multiple formats.",
        },
      ],
    },
    benefits: {
      title: "Why Choose Singflow for WordPress?",
      list: [
        "Seamless integration with your existing WordPress site",
        "No need for external signature platforms or subscriptions",
        "Complete control over your document signing process",
        "Beautiful glassmorphism admin interface with modern design",
        "Custom branding (logo, colors) and email templates",
        "REST API for custom integrations and automation",
        "Mobile-responsive signing experience on all devices",
        "Multilingual support (English & Spanish included, easily extensible)",
        "All data stored locally on your server - complete privacy",
        "GDPR and CCPA compliant with proper consent mechanisms",
        "Enterprise-grade security with encryption and OTP verification",
        "Professional certificate generation with QR code verification",
        "Document template system for workflow efficiency",
        "Advanced analytics and reporting capabilities",
        "Shareable signing links for easy document distribution",
        "Field-to-signer assignment for complex workflows",
        "Automatic reminder system with configurable intervals",
        "Document expiration and decline handling",
        "Complete audit trail for legal compliance",
        "Time Stamp Authority (TSA) support for certified timestamps",
      ],
    },
    useCases: {
      title: "Perfect For",
      list: [
        "Contracts and Agreements",
        "Employment Documents",
        "Sales Proposals",
        "Non-Disclosure Agreements (NDAs)",
        "Rental/Lease Agreements",
        "Consent Forms",
        "Invoices and Quotes",
        "And much more...",
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
      subtitle: "Solución de Firma Electrónica para WordPress",
      description:
        "Solución profesional de firma electrónica para WordPress. Crea, envía y gestiona firmas electrónicas legalmente vinculantes directamente desde tu panel de WordPress. Perfecto para empresas, freelancers y organizaciones que necesitan recopilar firmas en contratos, acuerdos y otros documentos.",
      cta: "Comenzar",
      ctaSecondary: "Contactar Ventas",
    },
    features: {
      title: "Características Principales",
      subtitle: "Todo lo que necesitas para la firma profesional de documentos",
      list: [
        {
          icon: FileSignature,
          title: "Editor de Documentos Drag & Drop Avanzado",
          description:
            "Colocación intuitiva de campos con interfaz de arrastrar y soltar. Soporte para PDF, PNG, JPG, DOC y DOCX. 11 tipos de campos disponibles: Firma, Iniciales, Texto, Fecha, Casilla, Menú Desplegable, Nombre, Email, Empresa, Título y Etiqueta. Controles de zoom y navegación de páginas para colocación precisa de campos. Asigna campos a firmantes específicos con badges visuales.",
        },
        {
          icon: Users,
          title: "Soporte Multi-Firmante Ilimitado",
          description:
            "Añade firmantes ilimitados con orden de firma personalizable. Elige flujos de trabajo secuenciales (uno tras otro) o paralelos (simultáneos). Asigna campos específicos a firmantes individuales. Rastrea el progreso de cada firmante independientemente. Soporte para roles y permisos de firmantes.",
        },
        {
          icon: Shield,
          title: "Seguridad y Cumplimiento de Nivel Empresarial",
          description:
            "Encriptación AES-256-GCM para documentos en reposo. Verificación OTP (Contraseña de Un Solo Uso) para cumplimiento eIDAS Advanced. Integración con Time Stamp Authority (TSA) para timestamps certificados. Registro de auditoría completo con direcciones IP, geolocalización, user agent y marcas de tiempo. Opción de protección con código PIN. Cumplimiento GDPR y CCPA.",
        },
        {
          icon: Zap,
          title: "Opciones de Firma y Automatización",
          description:
            "Múltiples métodos de entrada de firma: dibujar con mouse/táctil, escribir con fuentes personalizadas, o subir imágenes de firma. Notificaciones automáticas por correo electrónico para solicitudes de firma, recordatorios y finalizaciones. Recordatorios automáticos configurables (1, 2, 3, 5 o 7 días). Configuración de expiración de documentos. Opción de rechazo con seguimiento de razones.",
        },
        {
          icon: FileText,
          title: "Sistema de Plantillas de Documentos",
          description:
            "Guarda documentos frecuentemente usados como plantillas para reutilización rápida. Crea nuevos documentos desde plantillas con campos y firmantes preconfigurados. Optimiza flujos de trabajo de documentos repetitivos. Gestión de plantillas con descripciones y organización.",
        },
        {
          icon: Code,
          title: "REST API para Integraciones",
          description:
            "API REST completa para integraciones personalizadas. Gestiona documentos, firmantes, campos y registros de auditoría programáticamente. Rate limiting para seguridad de API. Operaciones CRUD completas para todas las entidades. Perfecto para integraciones CRM, automatización y flujos de trabajo personalizados.",
        },
        {
          icon: BarChart3,
          title: "Analíticas y Estadísticas Avanzadas",
          description:
            "Panel completo con estadísticas de documentos. Rastrea tiempo promedio de firma, tasas de conversión y tasas de finalización. Tendencias mensuales de documentos y análisis de días más ocupados. Conteo total de firmas y desglose de estados. Exporta registros de auditoría para informes de cumplimiento.",
        },
        {
          icon: Lock,
          title: "Registro de Auditoría y Certificados Completos",
          description:
            "Seguimiento completo de todas las actividades del documento con marcas de tiempo, direcciones IP, geolocalización e información de user agent. Generación automática de certificados de finalización con códigos QR para verificación. El certificado incluye todos los firmantes, firmas y registro de auditoría completo. Exporta registros de auditoría en múltiples formatos.",
        },
      ],
    },
    benefits: {
      title: "¿Por Qué Elegir Singflow para WordPress?",
      list: [
        "Integración perfecta con tu sitio WordPress existente",
        "No necesitas plataformas de firma externas o suscripciones",
        "Control completo sobre tu proceso de firma de documentos",
        "Hermosa interfaz de administración con diseño glassmorphism moderno",
        "Marca personalizada (logo, colores) y plantillas de correo",
        "REST API para integraciones personalizadas y automatización",
        "Experiencia de firma adaptable a móviles en todos los dispositivos",
        "Soporte multilingüe (Inglés y Español incluidos, fácilmente extensible)",
        "Todos los datos almacenados localmente en tu servidor - privacidad completa",
        "Cumplimiento GDPR y CCPA con mecanismos de consentimiento apropiados",
        "Seguridad de nivel empresarial con encriptación y verificación OTP",
        "Generación profesional de certificados con verificación QR",
        "Sistema de plantillas de documentos para eficiencia en flujos de trabajo",
        "Capacidades avanzadas de analíticas e informes",
        "Enlaces de firma compartibles para fácil distribución de documentos",
        "Asignación de campos a firmantes para flujos de trabajo complejos",
        "Sistema automático de recordatorios con intervalos configurables",
        "Manejo de expiración y rechazo de documentos",
        "Registro de auditoría completo para cumplimiento legal",
        "Soporte Time Stamp Authority (TSA) para timestamps certificados",
      ],
    },
    useCases: {
      title: "Perfecto Para",
      list: [
        "Contratos y Acuerdos",
        "Documentos de Empleo",
        "Propuestas de Venta",
        "Acuerdos de No Divulgación (NDAs)",
        "Acuerdos de Alquiler/Arrendamiento",
        "Formularios de Consentimiento",
        "Facturas y Cotizaciones",
        "Y mucho más...",
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
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                {t.hero.description}
              </p>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {t.features.list.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
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
