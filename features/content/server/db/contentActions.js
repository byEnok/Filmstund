'use server'
import { NextResponse } from 'next/server'

const apiKey = process.env.TMDB_API_KEY

// ------------ POPULAR MOVIES FOR FRONT PAGE ------------ //
// const getPopularMovies = async (pageNr = '1') => {
export async function getPopularMovies(pageNr = '1') {
  // const URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc`
  // const genreFilter = genre ? `&with_genres=${genre}` : ''
  const API_URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${pageNr}&sort_by=popularity.desc`
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status} and status text: ${response.statusText}`)
      // console.log(data) // This shows page & results
      // return NextResponse.json()
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Couldn't fetch popular movies! Error: ", error)
    return { error: 'Failed to fetch data' }
  }
}

// const getMoviesByGenre = async (genre, pageNr = '1') => {
export async function getMoviesByGenre(genre, pageNr = '1') {
  const API_URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${pageNr}&sort_by=popularity.desc&with_genres=${genre}`
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    if (response) {
      const data = await response.json()
      console.log(data)
      return new NextResponse(data, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    console.error(`Couldn't fetch ${genre} movies! Error: `, error)
  }
}

// const contentDB = { getPopularMovies, getMoviesByGenre }
// export default contentDB
