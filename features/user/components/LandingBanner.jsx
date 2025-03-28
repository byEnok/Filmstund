function LandingBanner() {
  const features = [
    'Find something to watch on your subscribed streaming services',
    'Log the movies and TV shows you have watched',
    'Keep track of your favourite movies and TV shows and get recommendations from them',
    'Build and maintain a personal watchlist',
    'Build custom mixed lists (movies and TV)',
    'Take part in movie and TV discussions',
    'Contribute to, and improve the information in our database',
  ]
  return (
    <div className="">
      <h1>
        Koble til din bruker fra{' '}
        <a href="https://www.themoviedb.org/" className="font-bold underline hover:shadow-none">
          TMDB
        </a>
      </h1>
      {/* <h1 className="font-roboto text-center pt-8">Filmstund</h1> */}

      {/* <div className="flex flex-col pt-12">
        <h2 className="text-center border-b font-roboto">TMDB Features</h2>
        <div className="flex justify-evenly gap-9">
          {features.map((feature, index) => (
            <div key={index}>{feature}</div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default LandingBanner
