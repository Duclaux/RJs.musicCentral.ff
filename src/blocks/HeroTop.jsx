import React from 'react'
import Container from '../components/Container'

function HeroTop() {
  return (
    <Container styles='text-white'>

        {/* block text */}
        <div className='py-[110px] lg:py-[180px]'>
            <p className='font-bold text-[32px] text-center lg:text-start lg:text-[56px]'>Fullfilling <br className='xl:hidden'/>dreams<br className='hidden xl:flex'/> with <br className='xl:hidden'/>strings<br className='hidden xl:flex'/>attached</p>
        </div>

        {/* block affiche */}
    </Container>
  )
}

export default HeroTop