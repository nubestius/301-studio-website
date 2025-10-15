"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

interface ContactProps {
  language: "en" | "es"
}

const content = {
  en: {
    title: "Get in Touch",
    subtitle: "Have a project in mind? Let's discuss how we can help.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell us about your project...",
    submit: "Send Message",
    or: "or email us directly at",
  },
  es: {
    title: "Contáctanos",
    subtitle: "¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte.",
    namePlaceholder: "Tu Nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
    submit: "Enviar Mensaje",
    or: "o envíanos un email directamente a",
  },
}

export function Contact({ language }: ContactProps) {
  const t = content[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground text-balance">{t.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {t.submit}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-2">{t.or}</p>
                <a
                  href="mailto:hello@301studio.com"
                  className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">hello@301studio.com</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
