'use server'
// DATABASE FUNCTIONS
import contentDB from '@/features/content/server/db/contentActions'

// UI COMPONENTS
import HeroBanner from '@/components/core/HeroBanner'
import MovieGenres from '@/features/content/components/MovieGenres'
import MoviePreviewCard from '@/features/content/components/MoviePreviewCard'
import Pagination from '@/features/content/components/Pagination'
import { revalidatePath } from 'next/cache'
import Navbar from '@/components/core/Navbar'
// import { URLPattern } from 'next/server'
// import MoviePartners from '@/components/core/MoviePartners'

export default async function LandingPage() {
  let newPageNr
  const dbMovies = await contentDB.getPopularMovies(newPageNr | 1)
  const trendingMovies = await dbMovies.results
  const currentPageNr = await dbMovies.page

  const categories = ['A24', 'Action', 'Animation', 'Comedy', 'Fantasy', 'Sci-Fi']
  const partners = ['Mariell', 'Lars', 'Mamma & Pappa']

  return (
    <div className="flex flex-col justify-center bg-background">
      <Navbar />
      <HeroBanner />
      <MovieGenres movieCategories={categories} />
      <h1 className="text-4xl md:text-7xl text-center py-6">Trending Movies</h1>
      <div className="flex flex-wrap justify-evenly pt-12 gap-y-12 md:gap-x-28 lg:gap-x-32">
        {trendingMovies.map((movie, index) => (
          <MoviePreviewCard key={index} movie={movie} />
        ))}
      </div>
      {currentPageNr && <Pagination currentPageNr={currentPageNr} />}
    </div>
  )
}
