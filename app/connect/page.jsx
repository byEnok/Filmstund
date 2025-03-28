import Navbar from '@/components/core/Navbar'
import Registration from '@/features/user/components/Registration'

export default function Connect() {
  return (
    <>
      <Navbar />
      <h1>
        Koble til{' '}
        <a href="https://www.themoviedb.org/" className="font-bold underline hover:shadow-none" target="_blank">
          TMDB
        </a>
      </h1>
      <Registration />
    </>
  )
}
