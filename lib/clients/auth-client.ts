import { magicLinkClient, usernameClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'
export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000/api/auth',
  plugins: [magicLinkClient(), usernameClient()],
})
