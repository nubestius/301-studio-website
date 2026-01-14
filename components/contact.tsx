"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface ContactProps {
  language: "en" | "es"
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})

type ContactFormData = z.infer<typeof contactSchema>

const content = {
  en: {
    title: "Get in Touch",
    subtitle: "Have a project in mind? Let's discuss how we can help.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell us about your project...",
    submit: "Send Message",
    submitting: "Sending...",
    or: "or email us directly at",
    success: "Message sent successfully! We'll get back to you soon.",
    error: "Failed to send message. Please try again or email us directly.",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    messageRequired: "Message is required",
  },
  es: {
    title: "Contáctanos",
    subtitle: "¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte.",
    namePlaceholder: "Tu Nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
    submit: "Enviar Mensaje",
    submitting: "Enviando...",
    or: "o envíanos un email directamente a",
    success: "¡Mensaje enviado con éxito! Te responderemos pronto.",
    error: "Error al enviar el mensaje. Por favor intenta de nuevo o envíanos un email directamente.",
    nameRequired: "El nombre es requerido",
    emailRequired: "El email es requerido",
    messageRequired: "El mensaje es requerido",
  },
}

export function Contact({ language }: ContactProps) {
  const t = content[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        reset()
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
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
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">{t.success}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-800 dark:text-red-200">{t.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    placeholder={t.namePlaceholder}
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder={t.messagePlaceholder}
                    rows={6}
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <MessageSquare className="h-4 w-4" />
                      {t.submit}
                    </>
                  )}
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
