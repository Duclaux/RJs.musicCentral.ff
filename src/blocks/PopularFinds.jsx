import React from 'react'

import Container from '../components/Container'
import Cable1 from '../assets/cable1.png'
import Cable2 from '../assets/cable2.png'
import Baffle from '../assets/baffle.png'
import CardProduct from '../components/CardProduct'

function PopularFinds() {
  return (
        <div className='bg-[#ECECEC] py-[48px] lg:py-[29px]'>
        <Container>
            <div className='w-fit mx-auto mt-[56px] lg:mt-[88px]'>
                <div className='w-full h-[3px] bg-[#AB0433] rounded-[10px] mb-3'></div>
                <p className='text-[#505050] text-[25px] lg:text-[40px] font-semibold'>Popular Finds</p>
            </div>

            <div className='space-y-16 mt-[35px] lg:space-y-0 lg:space-x-7 lg:flex items-center justify-between mb-[88px]'>
                <CardProduct img={Cable1} />
                <CardProduct img={Cable2} />
                <CardProduct img={Baffle} style='lg:hidden xl:block'/>
            </div>
        </Container>
        </div>
  )
}

export default PopularFinds