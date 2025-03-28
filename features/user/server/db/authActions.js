// User sign UP or IN with email from RESEND that contains a Magic Link from Better-Auth
const { data, error } = await authClient.signIn.magicLink({
  email: 'user@email.com',
  callbackURL: '/dashboard', //redirect after successful login (optional)
})
