import Navbar from '@/components/core/Navbar'
import Footer from '@/components/core/Footer'
import RegistrationInfo from '@/features/user/components/RegistrationInfo'

function Register() {
  // const magicLinkTextExtra = 'Når verifikasjonen er fullført, kan du koble brukeren din til din TMDB-konto eller registrere en TMDB gjestebruker på Connect TMDB siden '
  const magicLinkTextExtra = 'Når verifikasjonen er fullført, kan du på siden "Link TMDB" koble til TMDB-kontoen din eller registrere en TMDB-gjestebruker.'
  const magicLinkText = [
    'Etter registrering mottar du en mail',
    'Klikk på lenken for å verifisere brukeren og logge inn',
    'Hvis du logger ut og ønsker å logge inn igjen, bruker du den oppgitte e-postadressen på logg inn siden. Du vil da motta en lenke for å logge inn på nytt',
  ]

  const handleRegistration = async () => {
    'use server'
    console.log('COMING SOON!')
    // TO-DO register user and then send email with magic link
  }
  return (
    <div>
      <Navbar />
      <h1 className="p-5">Registrering</h1>
      <div className="flex flex-wrap items-baseline justify-center gap-6">
        <h2 className="w-full">
          Registrer deg enten med <span className="font-bold ">Brukernavn & Passord</span> eller <span className="font-bold">Email</span>{' '}
        </h2>
        {/* Brukernavn & Passord Registrering */}
        <div className="form-container flex flex-col relative bg-background border rounded p-2">
          {/* <div className="absolute right-2 bottom-1 underline">Hva er dette?</div> */}
          <div className="text-3xl text-center">Standard - Kommer Snart</div>
          <form className="form" action={handleRegistration}>
            <div className="input-group">
              <label htmlFor="name">Navn</label>
              <input disabled={true} type="text" name="name" id="name" placeholder="Murl" />
            </div>
            <div className="input-group">
              <label htmlFor="username">Brukernavn</label>
              <input disabled={true} type="text" name="username" id="username" placeholder="MovieGeek88" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Passord</label>
              <input disabled={true} type="password" name="password" id="password" placeholder="Minimum 4 tegn og må inneholde 1 stor bokstav" />
            </div>
            <div className="input-group">
              <label htmlFor="passwordConfirm">Bekreft Passord</label>
              <input disabled={true} type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Minimum 4 tegn og må inneholde 1 stor bokstav" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input disabled={true} type="email" name="email" id="email" placeholder="hei@example.com" />
              <div className="forgot"></div>
            </div>
            <button className="sign">Registrer</button>
          </form>
          <RegistrationInfo />
        </div>

        {/* Magic Link Registrering */}
        <div className="form-container flex flex-col relative bg-background border rounded p-2">
          {/* <div className="absolute right-2 bottom-1 underline">Hva er dette?</div> */}
          <div className="text-3xl text-center">Magisk Link</div>
          <form className="form" action={handleRegistration}>
            {/* <div className="input-group">
              <label htmlFor="username">Brukernavn</label>
              <input type="text" name="username" id="username" placeholder="MovieGeek88" />
              </div> */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="hei@example.com" />
              <div className="forgot"></div>
            </div>
            <button className="sign">Registrer</button>
          </form>
          <RegistrationInfo text={magicLinkText} extra={magicLinkTextExtra} type={'Magisk Link'} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
