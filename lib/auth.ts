import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from './clients/prismaClient'
import { magicLink, username } from 'better-auth/plugins'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        try {
          const response = await fetch(`${process.env.BETTER_AUTH_URL}/api/send`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              subject: 'Logg inn med Magic Link',
              emailName: email.split('@')[0], // Extract first name from email
              magicLink: url, // Pass the magic link
              token, // if i want to create a custom url with the token
            }),
          })

          const result = await response.json()
          if (!response.ok) {
            console.error('Error sending email:', result)
          }
        } catch (error) {
          console.error('Failed to send magic link email:', error)
        }
      },
    }),
    username(),
  ],
})
