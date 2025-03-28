'use server'
// 'use client'
// Server Actions
import { getPopularMovies, getMoviesByGenre } from '@/features/content/server/db/contentActions'

// UI COMPONENTS
// import HeroBanner from '@/components/core/HeroBanner'
// import MovieGenres from '@/features/content/components/MovieGenres'
// import MoviePreviewCard from '@/features/content/components/MoviePreviewCard'
// import Pagination from '@/features/content/components/Pagination'
// import Navbar from '@/components/core/Navbar'
import LandingPage from '@/features/content/components/LandingPage'

// LIBRARIES
// import { revalidatePath } from 'next/cache'
// import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './Loading'
// import { useEffect, useState } from 'react'
import { revalidatePath } from 'next/cache'

export default async function page() {
  const data = await getPopularMovies()
  const dbMovies = data.results
  const page = data.page
  // console.log(dbMovies)

  // const [trendingMovies, setTrendingMovies] = useState([])
  // const [currentPageNr, setCurrentPageNr] = useState()
  // const [mounted, setMounted] = useState(false)

  // const data = contentDB.getPopularMovies()
  // const trendingMovies = data.results
  // const fetchMovies = async () => {
  // return res
  // }

  // // FETCHES MOVIES FROM API ROUTE
  // const getMovies = async () => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   return await res.json()
  // }

  // CALLING API ROUTE FETCHING WHEN CLIENT COMP
  // const fetchMovies = async () => {
  //   const dbMovies = await getMovies()
  //   const dbMovies = await contentDB.getPopularMovies()
  //   console.log(await dbMovies)
  //   console.log('OUTSIDE THE CLIENT FUNCTION', dbMovies)
  //   setTrendingMovies(dbMovies.results)
  //   setCurrentPageZNr(dbMovies.pages)
  // }

  // useEffect(() => {
  //   fetchMovies()
  //   setMounted(true)
  // }, [])
  // if (!mounted) return <Loading />

  return (
    <div className="flex flex-col justify-center bg-background">
      <LandingPage movies={dbMovies} page={page} />
      {/* <Pagination currentPageNr={currentPageNr} /> */}
      {/* <LandingPage /> */}
      {/* <Navbar />
      <HeroBanner />
      <MovieGenres /> */}
      {/* <h1 className="h-44 w-44 text-white text-4xl">{data.message}</h1> */}
      {/* <h1 className="text-4xl md:text-7xl text-center py-6">Trending Movies</h1>
      <div className="flex flex-wrap justify-evenly pt-12 gap-y-12 md:gap-x-28 lg:gap-x-32">{trendingMovies ? trendingMovies.map((movie, index) => <MoviePreviewCard key={index} movie={movie} />) : <Loading />}</div> */}
    </div>
  )
}
