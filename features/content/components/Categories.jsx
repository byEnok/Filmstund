'use client'

import { useTheme } from 'next-themes'
import { ModeToggle } from '../../../components/core/Mode-Toggle'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Categories() {
  const { theme, resolvedTheme } = useTheme()
  const [mount, setMount] = useState(false)

  const categories = ['A24', 'Action', 'Amimation', 'Comedy', 'Fantasy', 'Sci-Fi']

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <div className="flex items-center border-b-2 border-buttonBorder py-2 w-screen overflow-x-hidden">
      <div className="flex justify-evenly items-center text-2xl md:text-4xl w-full py-2">
        {categories.map((category, index) => (
          <Link key={index} href="#" className="hover:text-textHover">
            {category}
          </Link>
        ))}
      </div>
      {mount && <ModeToggle />}
    </div>
  )
}

export default Categories
