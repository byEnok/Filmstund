'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Button } from '@/components/shadcn/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="">
      <Button className="h-9 w-9  z-50" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="outline" size={'iconXL'}>
        {theme === 'dark' ? <Sun className={`hover:rotate-180 transition-transform duration-300 ease-in-out`} /> : <Moon className={` hover:rotate-45 transition-transform duration-500 ease-in-out `} />}
      </Button>
    </div>
  )
}
