"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "1. Introduction",
          content:
            "301 Studio ('we', 'our', or 'us') is committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) in the European Union and the California Consumer Privacy Act (CCPA) in the United States. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
        },
        {
          title: "2. Data Controller Information",
          content:
            "301 Studio is the data controller responsible for your personal data. If you have any questions about this Privacy Policy or our data practices, you can contact us at hello@301studio.com.",
        },
        {
          title: "3. Information We Collect",
          content:
            "We may collect the following categories of personal information: Identity Data (name, username, title), Contact Data (email address, phone number, postal address), Technical Data (IP address, browser type, device information, access times), Usage Data (how you use our website, pages visited, time spent), Marketing Data (preferences for receiving marketing communications), and Financial Data (payment information when you purchase our products or services). We collect this information through direct interactions (forms, emails), automated technologies (cookies, analytics), and third parties (payment processors, analytics providers). Note: When you purchase our products through Envato Market (CodeCanyon, ThemeForest, etc.), Envato processes your payment and purchase data. We receive limited information from Envato (purchase verification, license information) but do not receive your full payment details.",
        },
        {
          title: "4. Legal Basis for Processing (GDPR)",
          content:
            "Under GDPR, we process your personal data based on the following legal grounds: Consent (when you provide explicit consent), Contract Performance (to fulfill our contract with you), Legal Obligation (to comply with legal requirements), Legitimate Interests (for business operations, security, and improvement of our services), and Vital Interests (to protect your or another person's vital interests).",
        },
        {
          title: "5. How We Use Your Information",
          content:
            "We use the information we collect to: provide, operate, and maintain our website and services; process transactions and send related information; respond to your inquiries and provide customer support; send you marketing and promotional communications (with your consent); improve, personalize, and expand our website; understand and analyze how you use our website; develop new products, services, features, and functionality; detect, prevent, and address technical issues and fraud; and comply with legal obligations.",
        },
        {
          title: "6. Data Sharing and Disclosure",
          content:
            "We may share your personal information with: Service Providers (hosting, payment processing, analytics), Business Partners (with your consent), Legal Authorities (when required by law or to protect rights), and in connection with Business Transfers (mergers, acquisitions). We do not sell your personal information. All third parties are required to respect the security of your data and treat it in accordance with the law. Important: Our products are sold through Envato Market (CodeCanyon, ThemeForest, etc.). When you purchase our products through Envato, Envato acts as a data processor and handles payment processing, order fulfillment, and license management. Envato's privacy policy applies to data collected during the purchase process. We receive purchase verification and license information from Envato to provide support and updates, but we do not receive your complete payment information.",
        },
        {
          title: "7. International Data Transfers",
          content:
            "Your information may be transferred to and processed in countries outside the European Economic Area (EEA) or your country of residence. When we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, or adequacy decisions. For transfers to the United States, we rely on appropriate safeguards as required by GDPR.",
        },
        {
          title: "8. Data Retention",
          content:
            "We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Generally, we retain personal data for the duration of our business relationship plus applicable statutory retention periods.",
        },
        {
          title: "9. Your Rights Under GDPR (European Union)",
          content:
            "If you are located in the European Union, you have the following rights: Right of Access (obtain a copy of your personal data), Right to Rectification (correct inaccurate data), Right to Erasure ('right to be forgotten'), Right to Restrict Processing, Right to Data Portability (receive your data in a structured format), Right to Object (object to processing based on legitimate interests), and Right to Withdraw Consent (at any time). To exercise these rights, please contact us at hello@301studio.com. You also have the right to lodge a complaint with your local data protection authority.",
        },
        {
          title: "10. Your Rights Under CCPA (California, USA)",
          content:
            "If you are a California resident, you have the following rights: Right to Know (what personal information we collect, use, disclose, or sell), Right to Delete (request deletion of your personal information), Right to Opt-Out (opt-out of the sale of personal information - note: we do not sell personal information), Right to Non-Discrimination (we will not discriminate against you for exercising your rights), and Right to Correct (correct inaccurate personal information). To exercise these rights, please contact us at hello@301studio.com.",
        },
        {
          title: "11. Security of Your Information",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information, including: encryption of data in transit and at rest, access controls and authentication, regular security assessments, employee training on data protection, and incident response procedures. However, no method of transmission over the Internet or electronic storage is 100% secure.",
        },
        {
          title: "12. Cookies and Tracking Technologies",
          content:
            "We use cookies, web beacons, tracking pixels, and similar technologies to collect and store information about your preferences and browsing behavior. For detailed information about our use of cookies, please see our Cookie Policy. You can manage your cookie preferences through your browser settings.",
        },
        {
          title: "13. Children's Privacy",
          content:
            "Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
        },
        {
          title: "14. Third-Party Websites",
          content:
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.",
        },
        {
          title: "15. Changes to This Privacy Policy",
          content:
            "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last updated' date. We encourage you to review this Privacy Policy periodically.",
        },
        {
          title: "16. Contact Us and Data Protection Officer",
          content:
            "If you have questions, concerns, or wish to exercise your rights regarding this Privacy Policy or our data practices, please contact us at hello@301studio.com. For GDPR-related inquiries, you can also contact your local data protection authority.",
        },
      ],
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización:",
      sections: [
        {
          title: "1. Introducción",
          content:
            "301 Studio ('nosotros', 'nuestro' o 'nos') se compromete a proteger su privacidad y cumplir con las leyes de protección de datos aplicables, incluyendo el Reglamento General de Protección de Datos (GDPR) en la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA) en los Estados Unidos. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web.",
        },
        {
          title: "2. Información del Responsable del Tratamiento",
          content:
            "301 Studio es el responsable del tratamiento de sus datos personales. Si tiene preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, puede contactarnos en hello@301studio.com.",
        },
        {
          title: "3. Información que Recopilamos",
          content:
            "Podemos recopilar las siguientes categorías de información personal: Datos de Identidad (nombre, nombre de usuario, título), Datos de Contacto (dirección de correo electrónico, número de teléfono, dirección postal), Datos Técnicos (dirección IP, tipo de navegador, información del dispositivo, tiempos de acceso), Datos de Uso (cómo usa nuestro sitio web, páginas visitadas, tiempo empleado), Datos de Marketing (preferencias para recibir comunicaciones de marketing), y Datos Financieros (información de pago cuando compra nuestros productos o servicios). Recopilamos esta información a través de interacciones directas (formularios, correos electrónicos), tecnologías automatizadas (cookies, análisis), y terceros (procesadores de pago, proveedores de análisis). Nota: Cuando compra nuestros productos a través de Envato Market (CodeCanyon, ThemeForest, etc.), Envato procesa su pago y datos de compra. Recibimos información limitada de Envato (verificación de compra, información de licencia) pero no recibimos sus datos de pago completos.",
        },
        {
          title: "4. Base Legal para el Tratamiento (GDPR)",
          content:
            "Bajo el GDPR, tratamos sus datos personales basándonos en los siguientes fundamentos legales: Consentimiento (cuando proporciona consentimiento explícito), Ejecución de Contrato (para cumplir con nuestro contrato con usted), Obligación Legal (para cumplir con requisitos legales), Intereses Legítimos (para operaciones comerciales, seguridad y mejora de nuestros servicios), e Intereses Vitales (para proteger sus intereses vitales o los de otra persona).",
        },
        {
          title: "5. Cómo Usamos Su Información",
          content:
            "Usamos la información que recopilamos para: proporcionar, operar y mantener nuestro sitio web y servicios; procesar transacciones y enviar información relacionada; responder a sus consultas y proporcionar soporte al cliente; enviarle comunicaciones de marketing y promocionales (con su consentimiento); mejorar, personalizar y expandir nuestro sitio web; entender y analizar cómo usa nuestro sitio web; desarrollar nuevos productos, servicios, características y funcionalidades; detectar, prevenir y abordar problemas técnicos y fraudes; y cumplir con obligaciones legales.",
        },
        {
          title: "6. Compartir y Divulgación de Datos",
          content:
            "Podemos compartir su información personal con: Proveedores de Servicios (alojamiento, procesamiento de pagos, análisis), Socios Comerciales (con su consentimiento), Autoridades Legales (cuando sea requerido por ley o para proteger derechos), y en relación con Transferencias Comerciales (fusiones, adquisiciones). No vendemos su información personal. Todos los terceros están obligados a respetar la seguridad de sus datos y tratarlos de acuerdo con la ley. Importante: Nuestros productos se venden a través de Envato Market (CodeCanyon, ThemeForest, etc.). Cuando compra nuestros productos a través de Envato, Envato actúa como procesador de datos y maneja el procesamiento de pagos, el cumplimiento de pedidos y la gestión de licencias. La política de privacidad de Envato se aplica a los datos recopilados durante el proceso de compra. Recibimos verificación de compra e información de licencia de Envato para proporcionar soporte y actualizaciones, pero no recibimos su información de pago completa.",
        },
        {
          title: "7. Transferencias Internacionales de Datos",
          content:
            "Su información puede ser transferida y procesada en países fuera del Espacio Económico Europeo (EEE) o su país de residencia. Cuando transferimos datos fuera del EEE, nos aseguramos de que existan salvaguardas apropiadas, como las Cláusulas Contractuales Estándar aprobadas por la Comisión Europea, o decisiones de adecuación. Para transferencias a los Estados Unidos, nos basamos en salvaguardas apropiadas según lo requerido por el GDPR.",
        },
        {
          title: "8. Retención de Datos",
          content:
            "Solo conservaremos sus datos personales durante el tiempo necesario para cumplir con los propósitos para los que los recopilamos, incluyendo para satisfacer cualquier requisito legal, contable o de informes. Generalmente, conservamos datos personales durante la duración de nuestra relación comercial más los períodos de retención estatutarios aplicables.",
        },
        {
          title: "9. Sus Derechos Bajo el GDPR (Unión Europea)",
          content:
            "Si se encuentra en la Unión Europea, tiene los siguientes derechos: Derecho de Acceso (obtener una copia de sus datos personales), Derecho de Rectificación (corregir datos inexactos), Derecho al Olvido ('derecho al olvido'), Derecho a Restringir el Tratamiento, Derecho a la Portabilidad de Datos (recibir sus datos en un formato estructurado), Derecho de Oposición (oponerse al tratamiento basado en intereses legítimos), y Derecho a Retirar el Consentimiento (en cualquier momento). Para ejercer estos derechos, por favor contáctenos en hello@301studio.com. También tiene el derecho de presentar una queja ante su autoridad local de protección de datos.",
        },
        {
          title: "10. Sus Derechos Bajo el CCPA (California, EE.UU.)",
          content:
            "Si es residente de California, tiene los siguientes derechos: Derecho a Saber (qué información personal recopilamos, usamos, divulgamos o vendemos), Derecho a Eliminar (solicitar la eliminación de su información personal), Derecho a Optar por No Participar (optar por no participar en la venta de información personal - nota: no vendemos información personal), Derecho a No Discriminación (no lo discriminaremos por ejercer sus derechos), y Derecho a Corregir (corregir información personal inexacta). Para ejercer estos derechos, por favor contáctenos en hello@301studio.com.",
        },
        {
          title: "11. Seguridad de Su Información",
          content:
            "Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal, incluyendo: encriptación de datos en tránsito y en reposo, controles de acceso y autenticación, evaluaciones de seguridad regulares, capacitación de empleados en protección de datos, y procedimientos de respuesta a incidentes. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.",
        },
        {
          title: "12. Cookies y Tecnologías de Seguimiento",
          content:
            "Usamos cookies, web beacons, píxeles de seguimiento y tecnologías similares para recopilar y almacenar información sobre sus preferencias y comportamiento de navegación. Para información detallada sobre nuestro uso de cookies, consulte nuestra Política de Cookies. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.",
        },
        {
          title: "13. Privacidad de Menores",
          content:
            "Nuestro sitio web no está dirigido a menores de 16 años. No recopilamos conscientemente información personal de menores de 16 años. Si es padre o tutor y cree que su hijo nos ha proporcionado información personal, por favor contáctenos inmediatamente.",
        },
        {
          title: "14. Sitios Web de Terceros",
          content:
            "Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos terceros. Le recomendamos que revise sus políticas de privacidad antes de proporcionar cualquier información personal.",
        },
        {
          title: "15. Cambios a Esta Política de Privacidad",
          content:
            "Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio material publicando la nueva Política de Privacidad en esta página y actualizando la fecha de 'Última actualización'. Le recomendamos que revise esta Política de Privacidad periódicamente.",
        },
        {
          title: "16. Contáctenos y Oficial de Protección de Datos",
          content:
            "Si tiene preguntas, inquietudes o desea ejercer sus derechos con respecto a esta Política de Privacidad o nuestras prácticas de datos, por favor contáctenos en hello@301studio.com. Para consultas relacionadas con el GDPR, también puede contactar a su autoridad local de protección de datos.",
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
