import HeroBanner from '@/components/core/HeroBanner'
import Navbar from '@/components/core/Navbar'
import contentDB from '@/features/content/server/db/contentActions'
import MovieGenres from '@/features/content/components/MovieGenres'
import { Suspense } from 'react'
import Loading from '@/app/Loading'

async function page(genre) {
  const data = await contentDB.getMoviesByGenre(genre.name)
  console.log(data)
  const dbMovies = await data.results
  const currentPage = await data.pages

  return (
    <div className="flex flex-col justify-center bg-background">
      <Navbar />
      <HeroBanner />
      <MovieGenres />
      {/* <Suspense fallback={<Loading />}> */}
      {/* <h1 className="h-44 w-44 text-white text-4xl">{data.message}</h1> */}
      <h1 className="text-4xl md:text-7xl text-center py-6">Trending {genre.name} Movies</h1>
      <div className="flex flex-wrap justify-evenly pt-12 gap-y-12 md:gap-x-28 lg:gap-x-32">{dbMovies && dbMovies.map((movie, index) => <MoviePreviewCard key={index} movie={movie} />)}</div>
      {/* <Pagination currentPageNr={currentPageNr} /> */}
      {/* </Suspense> */}
    </div>
  )
}

export default page
