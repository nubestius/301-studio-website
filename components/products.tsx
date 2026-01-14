import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileSignature, Shield, ExternalLink } from "lucide-react"

interface ProductsProps {
  language: "en" | "es"
}

const content = {
  en: {
    title: "Our Products",
    subtitle: "Ready-made solutions to enhance your platforms",
    products: [
      {
        icon: FileSignature,
        name: "Singflow for WordPress",
        tagline: "Electronic Signature Solution for WordPress",
        description:
          "Professional electronic signature solution with drag & drop editor, multi-signer support, complete audit trails, and legally binding signatures. Perfect for contracts, agreements, and document signing workflows.",
        disclaimer: null,
        cta: "Learn More",
      },
      {
        icon: FileSignature,
        name: "Singflow for Perfex CRM",
        tagline: "Digital Signatures for Perfex CRM",
        description:
          "Integrate powerful digital signature functionality into Perfex CRM. Perfect for contracts, proposals, and any document requiring client signatures.",
        disclaimer: null,
        cta: "Learn More",
      },
      {
        icon: Shield,
        name: "301 Accessibility",
        tagline: "WordPress Accessibility Plugin",
        description:
          "Make your WordPress site accessible to everyone. Comprehensive accessibility features that help you meet WCAG standards and provide an inclusive experience.",
        disclaimer: null,
        cta: "Learn More",
      },
    ],
  },
  es: {
    title: "Nuestros Productos",
    subtitle: "Soluciones listas para mejorar tus plataformas",
    products: [
      {
        icon: FileSignature,
        name: "Singflow para WordPress",
        tagline: "Solución de Firma Electrónica para WordPress",
        description:
          "Solución profesional de firma electrónica con editor drag & drop, soporte multi-firmante, registros de auditoría completos y firmas legalmente vinculantes. Perfecto para contratos, acuerdos y flujos de trabajo de firma de documentos.",
        disclaimer: null,
        cta: "Más Información",
      },
      {
        icon: FileSignature,
        name: "Singflow para Perfex CRM",
        tagline: "Firmas Digitales para Perfex CRM",
        description:
          "Integra potentes funcionalidades de firma digital en Perfex CRM. Perfecto para contratos, propuestas y cualquier documento que requiera firmas de clientes.",
        disclaimer: null,
        cta: "Más Información",
      },
      {
        icon: Shield,
        name: "301 Accessibility",
        tagline: "Plugin de Accesibilidad para WordPress",
        description:
          "Haz que tu sitio WordPress sea accesible para todos. Características completas de accesibilidad que te ayudan a cumplir con los estándares WCAG y proporcionar una experiencia inclusiva.",
        disclaimer: null,
        cta: "Más Información",
      },
    ],
  },
}

export function Products({ language }: ProductsProps) {
  const t = content[language]
  const productLinks = ["/products/singflow-wordpress", "/products/singflow-perfex", "/products/301-accessibility"]

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground text-balance">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{product.description}</p>
                  {product.disclaimer && (
                    <p className="text-xs text-muted-foreground italic mb-4">{product.disclaimer}</p>
                  )}
                  <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                    <a href={productLinks[index]}>
                      {product.cta}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
