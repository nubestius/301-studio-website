"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiesPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "1. What Are Cookies",
          content:
            "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be 'persistent' (remain on your device until deleted or expired) or 'session' cookies (deleted when you close your browser).",
        },
        {
          title: "2. Legal Basis for Using Cookies (GDPR)",
          content:
            "Under the GDPR, we require your consent before placing non-essential cookies on your device. Essential cookies that are necessary for the website to function do not require consent. For all other cookies, we will obtain your explicit consent before placing them. You can withdraw your consent at any time by adjusting your cookie preferences.",
        },
        {
          title: "3. Types of Cookies We Use",
          content:
            "We use the following categories of cookies: Essential Cookies (strictly necessary for the website to function - these cannot be disabled), Performance/Analytics Cookies (help us understand how visitors interact with our website - require consent), Functionality Cookies (allow the website to remember your choices and preferences - require consent), and Marketing/Targeting Cookies (used to deliver relevant advertisements and track campaign effectiveness - require consent).",
        },
        {
          title: "4. Specific Cookies We Use",
          content:
            "Essential cookies include: session management, security, and load balancing. Performance cookies may include: Google Analytics (if used), website analytics tools. Functionality cookies may include: language preferences, theme preferences, and user interface customization. Marketing cookies may include: advertising networks, social media integration, and remarketing tools. For a detailed list of all cookies we use, please contact us at hello@301studio.com.",
        },
        {
          title: "5. Third-Party Cookies",
          content:
            "In addition to our own cookies, we may use third-party cookies from trusted partners such as analytics providers, payment processors, and service providers. These third parties may use cookies to collect information about your online activities across different websites. We ensure that all third-party cookies comply with GDPR requirements and that appropriate data processing agreements are in place.",
        },
        {
          title: "6. Managing Your Cookie Preferences",
          content:
            "You have the right to accept or reject cookies. You can manage your cookie preferences through: Our Cookie Consent Banner (when available), Your Browser Settings (most browsers allow you to refuse or accept cookies), and Third-Party Opt-Out Tools (for specific advertising networks). Please note that blocking essential cookies may impact your ability to use certain features of our website.",
        },
        {
          title: "7. Your Rights Regarding Cookies (GDPR)",
          content:
            "Under GDPR, you have the right to: Be informed about cookies we use, Give or withdraw consent for non-essential cookies, Access information about cookies placed on your device, Request deletion of cookie data, and Object to processing of cookie data. You can exercise these rights by contacting us at hello@301studio.com or by adjusting your browser settings.",
        },
        {
          title: "8. Cookie Consent and Withdrawal",
          content:
            "When you first visit our website, we will ask for your consent to use non-essential cookies. You can give or withdraw consent at any time. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal. You can manage your preferences through our cookie settings or your browser preferences.",
        },
        {
          title: "9. Data Retention for Cookies",
          content:
            "Different cookies have different retention periods: Session cookies are deleted when you close your browser, Persistent cookies remain until their expiration date (which varies by cookie type), and Analytics cookies typically have retention periods as specified by the analytics provider. We review and update our cookie retention periods regularly to ensure compliance with data protection laws.",
        },
        {
          title: "10. International Transfers and Cookies",
          content:
            "Some of our cookie providers may be located outside the European Economic Area (EEA). When we transfer cookie data internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions, in compliance with GDPR requirements.",
        },
        {
          title: "11. Changes to This Cookie Policy",
          content:
            "We may update this Cookie Policy from time to time to reflect changes in technology, legislation (including GDPR and ePrivacy Directive updates), or our business operations. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the 'Last updated' date.",
        },
        {
          title: "12. Contact Us",
          content:
            "If you have any questions about our use of cookies, wish to exercise your rights, or need assistance managing your cookie preferences, please contact us at hello@301studio.com. For GDPR-related cookie inquiries, you can also contact your local data protection authority.",
        },
      ],
    },
    es: {
      title: "Política de Cookies",
      lastUpdated: "Última actualización:",
      sections: [
        {
          title: "1. Qué Son las Cookies",
          content:
            "Las cookies son pequeños archivos de texto que se colocan en su computadora o dispositivo móvil cuando visita un sitio web. Se usan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionar información a los propietarios del sitio web. Las cookies pueden ser 'persistentes' (permanecen en su dispositivo hasta que se eliminen o expiren) o cookies de 'sesión' (se eliminan cuando cierra su navegador).",
        },
        {
          title: "2. Base Legal para el Uso de Cookies (GDPR)",
          content:
            "Bajo el GDPR, requerimos su consentimiento antes de colocar cookies no esenciales en su dispositivo. Las cookies esenciales que son necesarias para que el sitio web funcione no requieren consentimiento. Para todas las demás cookies, obtendremos su consentimiento explícito antes de colocarlas. Puede retirar su consentimiento en cualquier momento ajustando sus preferencias de cookies.",
        },
        {
          title: "3. Tipos de Cookies que Usamos",
          content:
            "Usamos las siguientes categorías de cookies: Cookies Esenciales (estrictamente necesarias para que el sitio web funcione - estas no se pueden desactivar), Cookies de Rendimiento/Análisis (nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web - requieren consentimiento), Cookies de Funcionalidad (permiten que el sitio web recuerde sus elecciones y preferencias - requieren consentimiento), y Cookies de Marketing/Segmentación (usadas para entregar anuncios relevantes y rastrear la efectividad de campañas - requieren consentimiento).",
        },
        {
          title: "4. Cookies Específicas que Usamos",
          content:
            "Las cookies esenciales incluyen: gestión de sesiones, seguridad y balanceo de carga. Las cookies de rendimiento pueden incluir: Google Analytics (si se usa), herramientas de análisis del sitio web. Las cookies de funcionalidad pueden incluir: preferencias de idioma, preferencias de tema y personalización de la interfaz de usuario. Las cookies de marketing pueden incluir: redes publicitarias, integración de redes sociales y herramientas de remarketing. Para una lista detallada de todas las cookies que usamos, por favor contáctenos en hello@301studio.com.",
        },
        {
          title: "5. Cookies de Terceros",
          content:
            "Además de nuestras propias cookies, podemos usar cookies de terceros de socios confiables como proveedores de análisis, procesadores de pagos y proveedores de servicios. Estos terceros pueden usar cookies para recopilar información sobre sus actividades en línea en diferentes sitios web. Nos aseguramos de que todas las cookies de terceros cumplan con los requisitos del GDPR y que existan acuerdos de procesamiento de datos apropiados.",
        },
        {
          title: "6. Gestión de Sus Preferencias de Cookies",
          content:
            "Tiene el derecho de aceptar o rechazar cookies. Puede gestionar sus preferencias de cookies a través de: Nuestro Banner de Consentimiento de Cookies (cuando esté disponible), Configuración de Su Navegador (la mayoría de los navegadores le permiten rechazar o aceptar cookies), y Herramientas de Exclusión de Terceros (para redes publicitarias específicas). Tenga en cuenta que bloquear cookies esenciales puede afectar su capacidad para usar ciertas características de nuestro sitio web.",
        },
        {
          title: "7. Sus Derechos Respecto a las Cookies (GDPR)",
          content:
            "Bajo el GDPR, tiene el derecho de: Ser informado sobre las cookies que usamos, Dar o retirar consentimiento para cookies no esenciales, Acceder a información sobre cookies colocadas en su dispositivo, Solicitar eliminación de datos de cookies, y Oponerse al procesamiento de datos de cookies. Puede ejercer estos derechos contactándonos en hello@301studio.com o ajustando la configuración de su navegador.",
        },
        {
          title: "8. Consentimiento de Cookies y Retiro",
          content:
            "Cuando visite nuestro sitio web por primera vez, le pediremos su consentimiento para usar cookies no esenciales. Puede dar o retirar consentimiento en cualquier momento. Retirar el consentimiento no afecta la legalidad del procesamiento basado en consentimiento antes de su retiro. Puede gestionar sus preferencias a través de nuestra configuración de cookies o las preferencias de su navegador.",
        },
        {
          title: "9. Retención de Datos para Cookies",
          content:
            "Diferentes cookies tienen diferentes períodos de retención: Las cookies de sesión se eliminan cuando cierra su navegador, Las cookies persistentes permanecen hasta su fecha de expiración (que varía según el tipo de cookie), y Las cookies de análisis típicamente tienen períodos de retención según lo especificado por el proveedor de análisis. Revisamos y actualizamos nuestros períodos de retención de cookies regularmente para asegurar el cumplimiento con las leyes de protección de datos.",
        },
        {
          title: "10. Transferencias Internacionales y Cookies",
          content:
            "Algunos de nuestros proveedores de cookies pueden estar ubicados fuera del Espacio Económico Europeo (EEE). Cuando transferimos datos de cookies internacionalmente, nos aseguramos de que existan salvaguardas apropiadas, como Cláusulas Contractuales Estándar o decisiones de adecuación, en cumplimiento con los requisitos del GDPR.",
        },
        {
          title: "11. Cambios a Esta Política de Cookies",
          content:
            "Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en la tecnología, la legislación (incluyendo actualizaciones del GDPR y la Directiva ePrivacy), o nuestras operaciones comerciales. Le notificaremos de cualquier cambio material publicando la nueva Política de Cookies en esta página y actualizando la fecha de 'Última actualización'.",
        },
        {
          title: "12. Contáctenos",
          content:
            "Si tiene alguna pregunta sobre nuestro uso de cookies, desea ejercer sus derechos, o necesita asistencia para gestionar sus preferencias de cookies, por favor contáctenos en hello@301studio.com. Para consultas relacionadas con cookies del GDPR, también puede contactar a su autoridad local de protección de datos.",
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
