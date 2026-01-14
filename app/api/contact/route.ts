import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = contactSchema.parse(body)
    
    // Here you can integrate with your email service
    // For now, we'll log it and return success
    // You can integrate with Resend, SendGrid, Nodemailer, etc.
    
    console.log("Contact form submission:", validatedData)
    
    // TODO: Replace with actual email service integration
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'hello@301studio.com',
    //   subject: `New contact from ${validatedData.name}`,
    //   html: `<p>Name: ${validatedData.name}</p><p>Email: ${validatedData.email}</p><p>Message: ${validatedData.message}</p>`,
    // })
    
    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }
    
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
