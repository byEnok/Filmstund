import { EmailTemplate } from '@/components/core/EmailTemplate'
import Navbar from '@/components/core/Navbar'
import Profile from '@/features/user/components/Profile'

import MoviePartners from '@/features/user/components/MoviePartners'

function page({ params }) {
  const userId = params.userId
  const partners = ['Mariell', 'Lars', 'Mamma & Pappa']
  const user = {
    name: 'Simon',
    email: 'enoksenn@gmail.com',
    tmdbAccount: { true: 'Verifisert', false: 'Gjest' },
    folders: 5,
    folderMemberships: 3,
  }
  return (
    <div>
      <Navbar />
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
      {/* <Profile userId={params} /> */}
      {/* <div className="my-12 py-12 border-b"></div> */}
      {/* <EmailTemplate /> */}
      {/* <div className="my-12 py-12 border-b"></div> */}
    </div>
  )
}

export default page
