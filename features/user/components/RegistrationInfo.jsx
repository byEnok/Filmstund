'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils/tailwUtil'

function RegistrationInfo({ text, extra, type }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className="flex flex-col gap-3 px-4">
      {type && (
        <button onClick={() => setShowInfo(!showInfo)} className="text-center underline">
          {showInfo ? `Mindre Om ${type}` : `Mer Om ${type}`}
        </button>
      )}
      {showInfo && (
        <div className={cn('transition-all duration-500 ease-in-out', { 'h-full': showInfo })}>
          <ul className="flex flex-col gap-3 pb-3 mb-3 border-b list-outside list-decimal">
            {text.map((line, index) => (
              <li key={index} className="transition-transform duration-200 ease-in-out">
                {line}
              </li>
            ))}
          </ul>
          {extra && <div>{extra}</div>}
        </div>
      )}
    </div>
  )
}

export default RegistrationInfo
