'use client'
// UI COMPONENTS
import HeroBanner from '@/components/core/HeroBanner'
import MovieGenres from '@/features/content/components/MovieGenres'
import MoviePreviewCard from '@/features/content/components/MoviePreviewCard'
import Pagination from '@/features/content/components/Pagination'
import Navbar from '@/components/core/Navbar'

// LIBRARIES
// import { revalidatePath } from 'next/cache'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './Loading'
import { useEffect, useState } from 'react'
import { revalidatePath } from 'next/cache'

// this is the latest of the old pages.
// I could not manage to set a param from here and get it at the server component. Next try i will make a dynamic folder with movies. like we did with EBUY.
export default function LandingPage() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [currentPageNr, setCurrentPageNr] = useState()
  const [mounted, setMounted] = useState(false)

  const router = useRouter()
  const searchParams = new URLSearchParams()
  const url = new URL(`http://localhost:3000/`)

  // DETTE SETT QUERY PARAMS I URL'EN UTEN Å KRÆSJ SERVEREN ! ! ! ! ! ! ! ! ! ! !
  const updateQueries = (key, value) => {
    if (value) {
      searchParams.set(key, value)
    } else {
      searchParams.delete(key)
    }
    url.search = searchParams.toString()
    router.push(url.toString())
  }

  // searchParams.set('movies', 'true')
  // searchParams.set('language', 'en-US')
  // searchParams.set('page', currentPageNr)
  // searchParams.set('sort_by', 'popularity.desc')
  // searchParams.set('with_genres', "all")
  // url.search = searchParams.toString()
  // router.push(url.toString())

  // FETCHES MOVIES FROM API ROUTE
  const getMovies = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // This Shows all the movies!
    // console.log('MOVIES PAGES COMPONENT: ', res.json())
    return await res.json()
  }

  // CALLING API ROUTE FETCHING
  const fetchMovies = async () => {
    const dbMovies = await getMovies()
    // console.log('OUTSIDE THE CLIENT FUNCTION', dbMovies)
    setTrendingMovies(dbMovies.results)
    setCurrentPageNr(dbMovies.pages)
  }

  // HANDLE USER CATEGORY SELECTION
  const handleCategoryChange = async ({ genre }) => {
    const genreId = genre.id
    const genreName = genre.name
    searchParams.set('with_genres', genreName)
    url.search = searchParams.toString()
    // router.push(url.toString())

    const categoryMovies = await getMovies()
    setTrendingMovies(categoryMovies.results)
    setCurrentPageNr(categoryMovies.pages)
  }

  // HANDLE USER PAGE CHANGE
  const handlePageChange = async (pageNr) => {
    updateQueries('page', pageNr)
    // console.log('HANDLE PAGE CHANGE: ', pageNr)
    // searchParams.set('page', pageNr)
    // url.search = searchParams.toString()
    // router.push(url.toString())
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const movies = await res.json()

    // setTrendingMovies(undefined)
    // setTrendingMovies([])
    setTrendingMovies(await movies.results)
    setCurrentPageNr(await movies.pages)
    // router.refresh()
    // revalidatePath('/')
  }

  useEffect(() => {
    fetchMovies()
    setMounted(true)
  }, [])

  if (!mounted) return <Loading />

  // const partners = ['Mariell', 'Lars', 'Mamma & Pappa']
  // const categories = ['A24', 'Action', 'Animation', 'Comedy', 'Fantasy', 'Sci-Fi']
  return (
    <div className="flex flex-col justify-center bg-background">
      <Navbar />
      <HeroBanner />
      <MovieGenres handleCategoryChange={handleCategoryChange} />
      {/* <h1 className="h-44 w-44 text-white text-4xl">{data.message}</h1> */}
      <h1 className="text-4xl md:text-7xl text-center py-6">Trending Movies</h1>
      <div className="flex flex-wrap justify-evenly pt-12 gap-y-12 md:gap-x-28 lg:gap-x-32">{trendingMovies ? trendingMovies.map((movie, index) => <MoviePreviewCard key={index} movie={movie} />) : <Loading />}</div>
      <Pagination currentPageNr={currentPageNr} handlePageChange={handlePageChange} />
    </div>
  )
}
