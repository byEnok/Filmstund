'use client'
import { useState, useEffect } from 'react'
import MoviePartners from './MoviePartners'

function Profile({ params }) {
  // Temp code from ChatGPT
  // const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)

  const userId = params
  const partners = ['Mariell', 'Lars', 'Mamma & Pappa']
  const user = {
    name: 'Simon',
    email: 'enoksenn@gmail.com',
    tmdbAccount: { true: 'Verifisert', false: 'Gjest' },
    folders: 5,
    folderMemberships: 3,
  }

  // Temp code from ChatGPT
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const res = await fetch(`/api/users/${userId}`) // Fetch user data from API
  //     const data = await res.json()
  //     setUser(data)
  //     setLoading(false)
  //   }

  //   fetchUserData()
  // }, [userId])

  return (
    <div className="flex flex-col justify-center bg-background gap-4">
      {/* <Navbar /> */}
      <h1>Profil</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>Brukernavn: {user.name} </div>
        <div>User ID: {userId}</div>
        <div>Email: {user.email}</div>
        <div>TMDB konto: {user.tmdbAccount.true}</div>
        <div>Antall mapper: {user.folders} </div>
        <div>Delte mapper: {user.folderMemberships} </div>
      </div>
      {/* FOLDERS ON THE LEFT SIDE */}
      <div className="flex flex-col  items-center  border  rounded p-5 gap-4">
        <h2>Delte Mapper</h2>
        <MoviePartners partners={partners} />
      </div>
    </div>
  )
}

export default Profile
