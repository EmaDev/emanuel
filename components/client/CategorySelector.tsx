import React from 'react'

interface Props {
    active?: boolean;
}
export const CategorySelector = ({active = false}:Props) => {
  return (
    <div className={`h-6 min-w-24 rounded-lg border-2 flex items-center justify-center 
    border-gray-700 dark:border-gray-400 ${active ? "text-white bg-black dark:text-black dark:bg-white" : ""}`}>
        <span className='text-center text-sm'>Ushuaia</span>
    </div>
  )
}
