import Image from 'next/image'
import BannerS from '@/app/assets/images/landscape/dune2.1.s.jpg'
import Dune from '@/app/assets/images/landscape/dune2.1.m.jpg'
// import Mickey from '@/app/assets/images/landscape/mickey17_m.jpg'
import Mickey from '@/app/assets/images/landscape/mickey_landscape.webp'
import Godzilla from '@/app/assets/images/landscape/godzilla.m.jpg'

function HeroBanner({ movies }) {
  const backdrop = movies[2].backdrop_path
  const poster = movies[2].poster_path
  const title = movies[0].title
  return (
    <div className="relative flex w-screen border-b-2 border-buttonBorder">
      {/* <span className="relative">
        <h1 className="absolute text-7xl text-bold text-textColorOpposite left-96 pl-[21.8rem] bottom-2 z-50 ">Filmstund</h1>
      </span> */}
      {/* Left Image - Dune */}
      {/* <div className="relative h-[20rem] w-1/2"> */}
      <div className="h-[15rem] w-1/2">
        {/* <Image src={Dune} placeholder="blur" priority={true} alt="Higlighted movie poster" quality={100} fill={true} className="object-cover select-none mask-left" /> */}
        <Image src={Dune} placeholder="blur" priority={true} alt="Higlighted movie poster" quality={100} className="select-none mask-left w-full h-full" sizes="50vw" />
      </div>

      {/* Right Image - Godzilla */}
      {/* <div className="h-[15rem] w-1/2 "> */}
      <div className="h-[15rem] w-1/2 ">
        {/* <div>{title}</div> */}
        {/* <Image src={`https://image.tmdb.org/t/p/w342/${backdrop}`} priority={true} alt="Higlighted movie poster" quality={100} height={400} width={800} className="select-none mask-right w-full h-full" /> */}
        {/* <Image src={`https://image.tmdb.org/t/p/w342/${poster}`} priority={true} alt="Higlighted movie poster" quality={100} height={400} width={800} className="select-none mask-right w-full h-full" /> */}
        <Image src={Godzilla} placeholder="blur" priority={true} alt="Higlighted movie poster" quality={100} className="select-none mask-right w-full h-full" sizes="50vw" />
        {/* <Image src={Mickey} placeholder="blur" priority={true} alt="Higlighted movie poster" quality={100} className="select-none mask-right w-full h-full" sizes="50vw" /> */}
      </div>

      {/* Middle Overlay for Blending */}
      {/* <div className="absolute inset-0 w-full  bg-gradient-to-r from-red-500 via-black/30 to-red-400 pointer-events-none" /> */}
      <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-black/30 to-transparent pointer-events-none" />
    </div>
  )
}

export default HeroBanner
