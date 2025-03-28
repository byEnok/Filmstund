'use server'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// ------------ POPULAR MOVIES FOR FRONT PAGE ------------ //
// const URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc`

// export async function GET(request) {
export async function GET(request) {
  const apiKey = process.env.TMDB_API_KEY

  const { searchParams } = new URL(request.url) // Lager et URL-objekt fra request.url
  // const params = searchParams.get('page') || 1

  console.log('SERVER PARAMS: ', searchParams.has('page'))
  const language = searchParams.get('language') || 'en-US'
  const page = searchParams.get('page') || '1'
  const sortBy = searchParams.get('sort_By') || 'popularity.desc'
  const genre = searchParams.get('with_genres') || false
  console.log('SERVER PAGE: ', page)

  const genreFilter = genre ? `&with_genres=${genre}` : ''

  const API_URL = `https://api.themoviedb.org/3/discover/movie?language=${language}&page=${page}&sort_by=${sortBy}${genreFilter}`

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
      // MOVIES SHOW IN CONSOLE
      // console.log(data)
      revalidatePath('/')
      return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    console.error("Couldn't fetch popular movies! Error: ", error)
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 })
  }

  // const url = await URLSearchParams()
  // console.log('SERVER PARAMS: ', url)
  // const url = request
  // const action = url.get('a')
  // const query = url.get('q')
  // if (action === 'get') {
  //   if (query === 'q') {
  //     params = 'SUCCESS FROM APU'
  //     const data = { message: params }
  //     return NextResponse.json(data)
  //   }
  // }

  // const data = { message: params }
  // return NextResponse.json()

  // const genreFilter = genre ? `&with_genres=${genre}` : ''
  // const sortingParam = sortBy || 'popularity.desc'
  // const languageParam = language || 'en-US'

  // return new Response(data)
  // console.log(searchParams)
}
