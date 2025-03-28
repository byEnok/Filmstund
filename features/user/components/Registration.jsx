'use client'

// DB FUNCTION FOR USERS
import userDB from '../server/db/tmdbActions'
// UI COMPONENTS
import HeroBanner from '@/components/core/HeroBanner'
// import { URLPattern } from 'next/server'
// import MoviePartners from '@/components/core/MoviePartners'

// LIBRARIES & UTILS
import { cn } from '@/lib/utils/tailwUtil'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function Registration() {
  const [userHasToken, setUserHasToken] = useState(false)
  // const [requestToken, setRequestToken] = useState()

  const tmdbFunctions = [
    'Bygg og vedlikehold en personlig se-liste',
    'Hold oversikt over dine favorittfilmer og TV-serier',
    'Vurder filmer for oversikt over dine personlige favoritter',
    'Få anbefalinger basert på dine favorittfilmer og TV-serier',
    'Importer lister, vurderinger og favoritter fra IMDb',
    'Finn noe å se på fra dine abonnerte strømmetjenester',
    'Loggfør filmer og TV-serier du har sett',
    'Lag egendefinerte blandede lister (filmer og TV)',
    'Delta i diskusjoner om filmer og TV-serier',
    // 'Bidra til og forbedre informasjonen i databasen vår',
  ]

  const guestFunctions = ['Bygg og vedlikehold en personlig se-liste', 'Hold oversikt over dine favorittfilmer', 'Vurder filmer for oversikt over dine personlige favoritter']

  const guestRegistration = () => {
    const session = userDB.createGuestSession()

    // TODO - use server action to register user and create session
  }

  const tmdbRegistration = async () => {
    const tokenObject = await userDB.getNewUserToken()
    const requestToken = await tokenObject.request_token
    // setRequestToken(tokenCode)
    // change path of redirect
    // if (requestToken) window.open(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://www.filmstund.no/approved`)
    // const sessionId = await userDB.newTmdbSession(requestToken)
    // if (sessionId) redirect('/home')
  }

  return (
    <div className="flex flex-col gap-6">
      {/* TMDB USER SESSION */}
      <span className="px-6 text-center text-lg ">
        Har du ikke en TMDB-konto? <br /> Opprett en på TMDBs nettside og koble den til Filmstund – eller registrer deg som gjest her med et enkelt klikk!
        {/* Hvis du ikke har en TMDB-konto, kan du opprette en på TMDB sin nettside og deretter koble den til Filmstund. <br /> Alternativt kan du opprette en TMDB-gjestekonto direkte fra Filmstund ved å registrere deg som gjest med knappen under. */}
      </span>
      <div className="flex justify-center gap-12">
        <div className="form-container bg-background border rounded p-2">
          <p className="title">Har du en TMDB konto?</p>
          {/* <form className="form" onSubmit={handleCodeRequest}> */}
          <button className="sign" onClick={tmdbRegistration}>
            Koble til TMDB
          </button>
          <div className="border-b-2 py-2"></div>
          {/* </form> */}
          <h3 className="pt-2 font-semibold italic">Medlemsfunksjoner</h3>
          <ul className="flex flex-col gap-1 pt-3 ">
            {tmdbFunctions.map((ability, index) => (
              <li key={index} className={cn('flex gap-2 p-2 font-roboto  rounded-t-none', { 'font-bold': index > 2, 'border-b pb-4 ': index === 2 })}>
                <span className="font-bold">✓</span> {ability}
              </li>
            ))}
          </ul>
        </div>
        {/* GUEST SESSION */}
        <div className="form-container bg-background border rounded p-2">
          <p className="title">Ingen TMDB konto?</p>
          {/* <form className="form" onSubmit={handleCodeRequest}> */}
          <button className="sign" onClick={guestRegistration}>
            Registrer TMDB-gjestekonto
          </button>
          <div className="border-b-2 py-2"></div>
          <h3 className="pt-2 font-semibold italic">Gjestefunksjoner</h3>
          <ul className="flex flex-col gap-1 pt-3 ">
            {guestFunctions.map((ability, index) => (
              <li key={index} className="flex gap-2 p-2 font-roboto rounded rounded-t-none">
                <span className="font-bold">✓</span> {ability}
              </li>
            ))}
          </ul>
          {/* </form> */}
        </div>
      </div>
      <div>
        <p className="text-center font-roboto">
          Lag en{' '}
          <a href="https://www.themoviedb.org/" className="underline font-light" target="_blank" rel="noopener noreferrer">
            TMDB
          </a>{' '}
          bruker{' '}
          <a href="https://www.themoviedb.org/signup" className="underline font-bold" target="_blank" rel="noopener noreferrer">
            her
          </a>
        </p>
      </div>
    </div>
  )
}
