import genreIDs from '@/lib/utils/genreIDs'

// ------------ GET MOVIE GENRES | Movie ID's compared with local static file ------------ //
export const GetMovieGenres = (ids) => {
  // console.log('THIS IS IDS IN API', ids)
  let categories = []
  for (let index = 0; index < ids.length; index++) {
    const id = ids[index]
    let category = genreIDs.find((genreId) => id === genreId.id)
    categories.push(category.name)
  }
  // console.log('CATEGORIES API:', categories)
  return categories
}
