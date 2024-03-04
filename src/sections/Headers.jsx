import React from 'react'
import Navbar from '../blocks/Navbar'
import HeroTop from '../blocks/HeroTop'

function Headers() {
  return (
    <>
      <div className='Headers bg-cover md:bg-cover 2xl:bg-cover'>
        <Navbar/>
        <HeroTop/>
      </div>
    </>
  )
}

export default Headers