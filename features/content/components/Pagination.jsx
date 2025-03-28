// 'use client'
// import * as React from 'react'
// import { useSearchParams } from 'next/navigation'
// import { URLPattern } from 'next/server'

import { cn } from '@/lib/utils/tailwUtil'
// import { useEffect, useState } from 'react'

function Pagination({ currentPageNr = '1', getNewPageNr, handlePageChange }) {
  // const [clickedNr, setClickedNr] = useState()
  const allPages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  // const handleClick = async (nr) => {
  //   getNewPageNr(nr)
  //   setClickedNr(nr)
  // }

  // useEffect(() => {
  //   handleClick()
  // }, [clickedNr])
  return (
    <>
      <div className="flex justify-center gap-12 pt-12 pb-6 box-border">
        {allPages.map((nr, index) => (
          <div
            onClick={() => handlePageChange(nr)}
            className={cn('flex justify-center items-center h-24 w-12 text-lg text-center cursor-pointer transition-all duration-100 ease hover:text-2xl ', { 'underline font-extrabold text-2xl': nr === currentPageNr })}
            key={index}
          >
            {nr}
          </div>
        ))}
        {/* {newNr && } */}
        {/* <div>CLICKED THIS VALUE: {newNr}</div> */}
      </div>
    </>
  )
}

export default Pagination
