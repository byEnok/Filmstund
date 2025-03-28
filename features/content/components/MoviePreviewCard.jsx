'use client'
//  Libraries
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/tailwUtil'
// Components
import genreIDs from '@/lib/utils/genreIDs'
import { GetMovieGenres } from '@/lib/utils/genreUtil'
import contentDB from '../server/db/contentActions'

function MoviePreviewCard({ movie }) {
  const [mounted, setMounted] = useState(false)
  const [descriptionVisible, setDescriptionVisible] = useState(false)
  // const [movieOptions, setMovieOptions] = useState(false)
  // const [opacityHigh, setOpacityHigh] = useState(false)
  const [showHoverEffects, setShowHoverEffects] = useState(false)
  // const hoverActive = useRef(null)
  const hoverStartCounter = useRef(null)
  const hoverEndCounter = useRef(null)

  // ---------------- Movie Content ------------------
  // Movie Genres
  const incomingGenres = GetMovieGenres(movie.genre_ids)
  // Checking for long titles
  const title = movie.title.split(':').splice(0, 1)
  const subTitleCheck = movie.title.includes(':') ? true : false
  const subTitle = subTitleCheck ? movie.title.split(':').splice(1) : false
  // Changing 'Science-Fiction' to 'Sci-Fi'
  const updatedGenres = incomingGenres.map((genre) => (genre === 'Science Fiction' ? 'Sci-Fi' : genre))
  const imageURL = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`

  // ---------------- Movie Content ------------------

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowHoverEffects(true)
    }, 800)
    // if (hoverEndCounter.current) {
    //   clearTimeout(hoverEndCounter.current)
    //   hoverEndCounter.current = null
    // }
    // hoverStartCounter.current = setTimeout(() => {
    //   hoverStartCounter.current = true
    //   setShowHoverEffects(true)
    // }, 800)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowHoverEffects(false)
    }, 1000)
    // if (hoverStartCounter.current && showHoverEffects) {
    //   hoverEndCounter.current = setTimeout(() => {
    //     hoverEndCounter.current = null
    //   }, 1000)
    // clearTimeout(hoverStartCounter.current)
    // hoverStartCounter.current = null
    // }
    // if (!showHoverEffects) {
    //   hoverStartCounter.current = null
    //   hoverEndCounter.current = null
    // }
  }

  useEffect(() => {
    setMounted(true)
    return () => {
      if (hoverStartCounter.current) clearTimeout(hoverStartCounter.current)
      if (hoverEndCounter.current) clearTimeout(hoverEndCounter.current)
    }
  })

  return (
    <>
      {mounted && (
        // MOVIE CARD CONTAINER
        <div className="flex flex-col max-w-[230px] hover:scale-[1.03] transition-all duration-100 ease-in-out" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* IMAGE CONTAINER */}
          {/* <div className="flex relative hover:shadow-lg hover:shadow-gray-500 transition-all duration-100 ease-in-out"> */}
          <div className="flex relative hover:shadow-lg hover:shadow-gray-500 transition-all duration-100 ease-in-out bg-purple-400">
            <Image
              src={imageURL}
              alt={movie.title}
              // fill
              width={230}
              height={230}
              // width={280}
              // height={280}
              // layout="fill"
              className="object-contain rounded-t-lg border border-b-0"
              // layout="responsive"
              // sizes="(max-width: 768px) 140px,
              // (max-width: 1200px) 200px, 300px"
              sizes="100vw"
              quality={100}
            />
            {showHoverEffects && (
              <div className="absolute top-0 right-0 left-0 z-50 font-semibold  w-full ">
                <div className="flex justify-between  ">
                  <div
                    className={cn('flex justify-center items-center transition-transform  translate-x-3 pb-1 bg-red-400  w-1/4 h-5 text-[1rem] rounded border cursor-pointer opapcity-0 hover:animate-add scale-105 hover:translate-x-2 hover:rotate-6', {
                      'opacity-100  animate-fade-right animate-once animate-duration-[800ms] animate-ease-in-out': showHoverEffects,
                    })}
                  >
                    ✗
                  </div>
                  <div
                    // className={cn('absolute text-center top-0 right-0       pb-2  bg-green-400  w-1/4 h-4 text-[1.8rem] rounded border cursor-pointer  hover:scale-105 hover:transition-transform  hover:-translate-x-2 hover:-rotate-6 ', {
                    className={cn('flex justify-center items-center transition-transform -translate-x-3 pb-1 bg-green-400 w-1/4 h-5 text-[1.2rem] rounded border cursor-pointer opacity-0 hover:animate-add scale-105  hover:-translate-x-2 hover:-rotate-6 ', {
                      'opacity-100   animate-fade-left animate-once animate-duration-[800ms] animate-ease-in-out': showHoverEffects,
                    })}
                  >
                    ✓
                  </div>
                </div>
              </div>
            )}
            {/* {descriptionVisible && <span className="absolute top-0 -right-36 bg-backgroundDarker max-w-36 p-1 text-balance">{movie.overview}</span>} */}
          </div>

          {/* MOVIE INFO: TITLE, GENRES & DESC */}
          <div className="flex flex-col justify-between p-1 gap-y-1 bg-backgroundDarker rounded-b-lg border border-t-0 z-10 hover:shadow-none">
            {/* TITLE */}
            <div className="flex flex-wrap justify-between items-center max-w-[230px]">
              <div className="font-bold text-md md:text-xl">
                {/* <span className="text-md md:text-xl">{movie.title.split(': ').splice(0, 1)}</span> */}
                {/* <span className="text-md md:text-xl">{movie.title.split(': ')}</span> */}
                <span className="text-md md:text-xl">{title}</span>
                {subTitle && <span className="text-sm md:text-md italic">:{subTitle}</span>}
              </div>
              {/* <div className="w-fit italic font-semibold ">{movie.release_date.slice(0, 4)}</div> */}
            </div>

            {/* CATEGORIES */}
            <span className="flex text-xs italic h-fit">{updatedGenres.splice(0, 3).join(', ')}</span>

            {/* DESCRIPTION */}
            <div className="flex justify-between">
              <div className="italic font-semibold ">{movie.release_date.slice(0, 4)}</div>
              <div onClick={() => setDescriptionVisible(!descriptionVisible)} className="cursor-pointer underline hover:bg-transparent hover:text-textHover">
                Mer Info
                {/* <span className="rotate-45 text-2xl">‹</span> */}
              </div>
            </div>
            {descriptionVisible && <span className="bg-backgroundDarker max-w-[230px] p-1">{movie.overview}</span>}
            {/* {descriptionVisible && <span className="absolute top-6 right-0 w-80  bg-purple-400">{movie.overview}</span>} */}
          </div>
        </div>
      )}
    </>
  )
}

export default MoviePreviewCard
