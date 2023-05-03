import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='min-h-screen bg-gray-900 text-white
    flex flex-wrap justify-center gap-1'>
        {children}
    </div>
  )
}
