import React from 'react'
import { dummyShowsData } from '../assets/assets' 
import MOvieCard from '../components/MOvieCard'
import BlurCircle from '../components/BlurCircle'

const Favorites = () => {
  return  dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

    <BlurCircle top='70px' left='80px' />
    <BlurCircle bottom='120px' right='80px'/>


      <h1 className='text-lg font-medium my-4'>Your favorite movies</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie) => (
          <MOvieCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1 className='text-3xl font-bold text-center'>No Movies Available</h1>
    </div>
  )
}

export default Favorites
