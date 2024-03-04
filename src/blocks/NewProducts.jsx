import React from 'react'


import CardProduct from '../components/CardProduct'
import Container from '../components/Container'
import Guitar1 from '../assets/guitare1.png'
import Guitar2 from '../assets/guitar2.png'
import Guitar3 from '../assets/guitar3.png'

function NewProducts() {
  return (
    <Container>

        <div className='text-center bg-red-500 rounded-[10px] text-white -translate-y-12'>
            <div className=' space-y-[16px] w-full  affiche py-[18px] lg:py-[50px] rounded-[10px]'>
                <div className='space-y-[4px]'>
                    <h1 className='font-bold text-[21px] lg:text-[46px]'>FREE GUITARLESSONS!</h1>
                    <p className='font-semibold text-[10px] lg:text-[24px]'>Purchase any guitar over $499.99 and recieve<br /> a one-hour guitar lesson free. </p>
                </div>

                <button className='py-[8px] px-[12px] lg:px-[16px] rounded-full bg-[#FF753A]'>LEARN MORE</button>
            </div>
        </div>


        <div className='w-fit mx-auto mt-[56px] lg:mt-[88px]'>
            <div className='w-full h-[3px] bg-[#AB0433] rounded-[10px] mb-3'></div>
            <p className='text-[#505050] text-[25px] lg:text-[40px] font-semibold'>New Products</p>
        </div>

        <div className='space-y-16 mt-[35px] lg:space-y-0 lg:space-x-7 lg:flex items-center justify-between mb-[150px]'>
          <CardProduct img={Guitar1} />
          <CardProduct img={Guitar2} />
          <CardProduct img={Guitar3} style='lg:hidden xl:block'/>
        </div>

    </Container>
  )
}

export default NewProducts