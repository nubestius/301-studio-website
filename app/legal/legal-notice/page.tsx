"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function LegalNoticePage() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Legal Notice",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "1. Company Information",
          content: "301 Studio is a software development company specializing in WordPress plugins, Perfex CRM modules, and custom solutions.",
        },
        {
          title: "2. Contact Information",
          content: "For any inquiries, please contact us at: Email: hello@301studio.com",
        },
        {
          title: "3. Intellectual Property",
          content:
            "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of 301 Studio and is protected by copyright and other intellectual property laws.",
        },
        {
          title: "4. Website Usage",
          content:
            "The use of this website is subject to the following conditions: The content of this website is for general information purposes only; We reserve the right to modify or discontinue any aspect of this website at any time; We do not guarantee that the website will be available at all times or that it will be free from errors or viruses.",
        },
        {
          title: "5. Limitation of Liability",
          content:
            "301 Studio shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or its content.",
        },
        {
          title: "6. External Links",
          content:
            "This website may contain links to external websites. 301 Studio is not responsible for the content or privacy practices of these external sites.",
        },
        {
          title: "7. Applicable Law",
          content:
            "This legal notice is governed by applicable laws. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts.",
        },
        {
          title: "8. Modifications",
          content:
            "301 Studio reserves the right to modify this legal notice at any time. Users are advised to review this notice periodically for any changes.",
        },
      ],
    },
    es: {
      title: "Aviso Legal",
      lastUpdated: "Última actualización:",
      sections: [
        {
          title: "1. Información de la Empresa",
          content:
            "301 Studio es una empresa de desarrollo de software especializada en plugins de WordPress, módulos de Perfex CRM y soluciones personalizadas.",
        },
        {
          title: "2. Información de Contacto",
          content: "Para cualquier consulta, por favor contáctenos en: Email: hello@301studio.com",
        },
        {
          title: "3. Propiedad Intelectual",
          content:
            "Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes y software, es propiedad de 301 Studio y está protegido por las leyes de derechos de autor y otras leyes de propiedad intelectual.",
        },
        {
          title: "4. Uso del Sitio Web",
          content:
            "El uso de este sitio web está sujeto a las siguientes condiciones: El contenido de este sitio web es solo para fines de información general; Nos reservamos el derecho de modificar o discontinuar cualquier aspecto de este sitio web en cualquier momento; No garantizamos que el sitio web esté disponible en todo momento o que esté libre de errores o virus.",
        },
        {
          title: "5. Limitación de Responsabilidad",
          content:
            "301 Studio no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente resultante del uso o la incapacidad de usar este sitio web o su contenido.",
        },
        {
          title: "6. Enlaces Externos",
          content:
            "Este sitio web puede contener enlaces a sitios web externos. 301 Studio no es responsable del contenido o las prácticas de privacidad de estos sitios externos.",
        },
        {
          title: "7. Ley Aplicable",
          content:
            "Este aviso legal se rige por las leyes aplicables. Cualquier disputa que surja del uso de este sitio web estará sujeta a la jurisdicción exclusiva de los tribunales competentes.",
        },
        {
          title: "8. Modificaciones",
          content:
            "301 Studio se reserva el derecho de modificar este aviso legal en cualquier momento. Se recomienda a los usuarios revisar este aviso periódicamente para cualquier cambio.",
        },
      ],
    },
  }

  const t = content[language]
  const currentDate = new Date().toLocaleDateString(language === "en" ? "en-US" : "es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h1>
            <p className="text-muted-foreground">
              {t.lastUpdated} {currentDate}
            </p>
          </div>

          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                {t.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}
