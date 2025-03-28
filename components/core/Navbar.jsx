'use client'
import { authClient } from '@/lib/clients/auth-client'
import { cn } from '@/lib/utils/tailwUtil'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function Navbar() {
  // const { data, error } = authClient.getSession()
  // const userId = data.userId
  const userId = 15
  const url = usePathname()
  const [linkIndex, setLinkIndex] = useState()
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const userLinks = ['Hjem', 'Link TMDB', 'Profil']
  const strangerLinks = ['Hjem', 'Registrering']
  let paths = ['/', '/register', '/connect', `/profile/${userId}`]

  // if (!data.user) {
  //   paths = ['/', '/register']
  // }

  return (
    <div>
      <div className="flex justify-evenly py-3 text-lg border-b-2 ">
        {!userLoggedIn
          ? strangerLinks.map((link, index) => (
              <Link key={index} className={cn('font-bold hover:underline hover:text-textHover', { 'underline underline-offset-4': url === paths[index], hide: index === 2, hide: index === 3 })} href={paths[index]}>
                {/* <Link key={index} className={cn('font-bold hover:underline hover:text-textHover', { 'underline underline-offset-4': url === paths[index], hidden: userLoggedIn && index === 1, hidden: !userLoggedIn && index === 2 })} href={paths[index]}> */}
                {link}
              </Link>
            ))
          : userLinks.map((link, index) => (
              <Link key={index} className={cn('font-bold hover:underline hover:text-textHover', { 'underline underline-offset-4': url === paths[index] })} href={paths[index]}>
                {/* <Link key={index} className={cn('font-bold hover:underline hover:text-textHover', { 'underline underline-offset-4': url === paths[index], hidden: userLoggedIn && index === 1, hidden: !userLoggedIn && index === 2 })} href={paths[index]}> */}
                {link}
              </Link>
            ))}

        {userLoggedIn ? <button onClick={() => setUserLoggedIn(!userLoggedIn)}>Logg Ut</button> : <button onClick={() => setUserLoggedIn(!userLoggedIn)}>Logg Inn</button>}
      </div>
    </div>
  )
}

export default Navbar
