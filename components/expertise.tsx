import { Code2, Puzzle, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ExpertiseProps {
  language: "en" | "es"
}

const content = {
  en: {
    title: "Our Expertise",
    subtitle: "Specialized development services for modern platforms",
    services: [
      {
        icon: Code2,
        title: "WordPress Plugins",
        description:
          "Custom WordPress plugins built to extend functionality, improve workflows, and integrate seamlessly with your existing ecosystem.",
      },
      {
        icon: Puzzle,
        title: "Perfex CRM Modules",
        description:
          "Powerful extensions and modules for Perfex CRM that enhance capabilities, automate processes, and drive business efficiency.",
      },
      {
        icon: Wrench,
        title: "Custom Solutions",
        description:
          "Fully tailored development for both platforms. From complex integrations to unique features, we build exactly what you need.",
      },
    ],
  },
  es: {
    title: "Nuestra Experiencia",
    subtitle: "Servicios de desarrollo especializados para plataformas modernas",
    services: [
      {
        icon: Code2,
        title: "Plugins de WordPress",
        description:
          "Plugins personalizados de WordPress diseñados para extender funcionalidades, mejorar flujos de trabajo e integrarse perfectamente con tu ecosistema existente.",
      },
      {
        icon: Puzzle,
        title: "Módulos de Perfex CRM",
        description:
          "Extensiones y módulos potentes para Perfex CRM que mejoran capacidades, automatizan procesos e impulsan la eficiencia empresarial.",
      },
      {
        icon: Wrench,
        title: "Soluciones Personalizadas",
        description:
          "Desarrollo completamente adaptado para ambas plataformas. Desde integraciones complejas hasta características únicas, construimos exactamente lo que necesitas.",
      },
    ],
  },
}

export function Expertise({ language }: ExpertiseProps) {
  const t = content[language]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground text-balance">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border/50 hover:border-border transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col items-start">
                    <div className="mb-6 p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
