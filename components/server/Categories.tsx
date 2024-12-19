import React from 'react'
import { CategorySelector } from '../client/CategorySelector'

export const Categories = () => {
  return (
    <section className='p-2 pb-4 mb-2 flex gap-4 overflow-auto'>
        {
            [0,1,2,3,4].map( category => (
                <CategorySelector
                key={category}
                active={category === 2}
                />
            ))
        }
    </section>
  )
}


