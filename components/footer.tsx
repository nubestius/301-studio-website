import Link from "next/link"

interface FooterProps {
  language: "en" | "es"
}

const content = {
  en: {
    tagline: "Expert development for WordPress & Perfex CRM",
    rights: "All rights reserved.",
    services: "Services",
    wordpress: "WordPress Plugins",
    perfex: "Perfex CRM Modules",
    custom: "Custom Solutions",
    products: "Products",
    singflowWp: "Singflow for WordPress",
    singflowPerfex: "Singflow for Perfex CRM",
    accessibility: "301 Accessibility",
    legal: "Legal",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    legalNotice: "Legal Notice",
  },
  es: {
    tagline: "Desarrollo experto para WordPress y Perfex CRM",
    rights: "Todos los derechos reservados.",
    services: "Servicios",
    wordpress: "Plugins de WordPress",
    perfex: "Módulos de Perfex CRM",
    custom: "Soluciones Personalizadas",
    products: "Productos",
    singflowWp: "Singflow para WordPress",
    singflowPerfex: "Singflow para Perfex CRM",
    accessibility: "301 Accessibility",
    legal: "Legal",
    terms: "Términos y Condiciones",
    privacy: "Política de Privacidad",
    cookies: "Política de Cookies",
    legalNotice: "Aviso Legal",
  },
}

export function Footer({ language }: FooterProps) {
  const t = content[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">301 Studio</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">{t.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.services}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t.wordpress}</li>
              <li>{t.perfex}</li>
              <li>{t.custom}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.products}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t.singflowWp}</li>
              <li>{t.singflowPerfex}</li>
              <li>{t.accessibility}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/legal/terms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/cookies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.cookies}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/legal-notice"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t.legalNotice}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>
            © {currentYear} 301 Studio. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
