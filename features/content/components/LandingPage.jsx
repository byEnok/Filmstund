'use client'
import { useState, useEffect } from 'react'

// UI COMPONENTS
import HeroBanner from '@/components/core/HeroBanner'
import MovieGenres from '@/features/content/components/MovieGenres'
import MoviePreviewCard from '@/features/content/components/MoviePreviewCard'
import Pagination from '@/features/content/components/Pagination'
import Navbar from '@/components/core/Navbar'

function LandingPage({ movies, page }) {
  // const [trendingMovies, setTrendingMovies] = useState([])
  // const [currentPageNr, setCurrentPageNr] = useState()
  // const [mounted, setMounted] = useState(false)
  return (
    <div className="flex flex-col justify-center bg-background">
      <Navbar />
      <HeroBanner movies={movies} />
      <MovieGenres />
      <h1 className="text-4xl md:text-7xl text-center py-12 font-lobster">Populære Filmer</h1>
      <div className="flex flex-wrap justify-evenly gap-y-12 md:gap-x-28 lg:gap-x-32">{movies ? movies.map((movie, index) => <MoviePreviewCard key={index} movie={movie} />) : <Loading />}</div>
      <Pagination currentPageNr={page} />
    </div>
  )
}

export default LandingPage
