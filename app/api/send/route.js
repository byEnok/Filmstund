import { EmailTemplate } from '@/components/core/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { email, subject, emailName, magicLink } = await req.json() // Receive params from frontend

  try {
    const { data, error } = await resend.emails.send({
      from: 'Filmstund <velkommen@filmstund.no>',
      to: [email],
      subject: subject,
      react: EmailTemplate({ emailName, magicLink }),
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
