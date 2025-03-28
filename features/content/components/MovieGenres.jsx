'use client'
import Link from 'next/link'
import { ModeToggle } from '../../../components/core/Mode-Toggle'
import { useEffect, useState } from 'react'
import genreIDs from '@/lib/utils/genreIDs'

function MovieGenres({ handleCategoryChange }) {
  const [mount, setMount] = useState(false)
  const [genres, setGenres] = useState([])

  const tmdbGenres = genreIDs

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <div>
      {/* <form onSubmit="#" className="w-full "> */}
      <div className="flex flex-wrap justify-evenly gap-y-2">
        {tmdbGenres.slice(0, 10).map((genre, index) => (
          <Link
            href={`/discover/${genre.name}`}
            // onClick={(e) => (window.location.search = `?category=${e.target.value}&page=1`)}
            // onClick={() => handleCategoryChange(genre)}
            // defaultValue={genre.id}
            key={index}
            name={genre.name}
            className="transition-all ease-in-out text-xs border-2 border-t-0 border-buttonBorder  rounded-md py-1 px-1 md:px-2 md:text-xl font-semibold  hover:border-focusColor hover:bg-backgroundDarker "
          >
            {genre.name}
          </Link>
        ))}
      </div>
      {/* <div className="flex flex-wrap justify-evenly gap-y-2">
        {movieCategories.map((category, index) => (
          <button
            onClick={(e) => (window.location.search = `?category=${e.target.value}&page=1`)}
            defaultValue={category}
            key={index}
            name="category"
            className="text-xs border-2 border-t-0 border-buttonBorder rounded-md py-1 px-1 md:px-2 md:text-xl font-semibold hover:border-focusColor"
          >
            {category}
          </button>
        ))}
      </div> */}
      {/* </form> */}
      {/* <div className="border border-burronBorder h-fit rounded-lg md:mr-2">{mount && <ModeToggle />}</div> */}
    </div>
  )
}

export default MovieGenres
