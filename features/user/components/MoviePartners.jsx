import Link from 'next/link'

function MoviePartners({ partners }) {
  return (
    <div className="flex items-baseline gap-5 ml-2">
      {partners.map((partner, index) => (
        // <div key={index} className="flex flex-col border border-buttonBorder w-full rounded-md   hover:bg-backgroundDarker">
        <Link key={index} href={`/filmstund`} className="w-16 p-1 rounded-md text-center flex flex-col border border-buttonBorder hover:bg-backgroundDarker">
          <span className="material-symbols-outlined text-center text-3xl w-full">folder_open</span>
          {partner.split(' ').map((name, index) => (
            <span className="block" key={index}>
              {name}
            </span>
          ))}
        </Link>
        // </div>
      ))}
    </div>
  )
}

export default MoviePartners
