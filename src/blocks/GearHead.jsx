import React from 'react'
import Container from '../components/Container'
import CardGear from '../components/CardGear'
import Gear1 from '../assets/gear1.png'
import Gear2 from '../assets/gear2.png'
import GearMan from '../assets/gearMan.png'
import GearMan2 from '../assets/gearMan2.png'
import Emplis from '../assets/emplis.png'


function GearHead() {
  return (
    <Container styles='my-[40px] lg:my-[88px]'>
        <div className='w-fit mx-auto mb-[24px] lg:mb-[48px]'>
            <div className='w-full h-[3px] bg-[#AB0433] rounded-[10px] mb-3'></div>
            <p className='text-[#505050] text-[25px] lg:text-[40px] font-semibold'>Gear Heads</p>
        </div>

        <div className='space-y-5 lg:flex items-center lg:space-y-0 lg:space-x-5 w-fit mx-auto'>
          <CardGear img={Gear1} title1='Article Title' title2='Article Subhead'/>
          <CardGear img={GearMan} title1='Article Title' title2='Article Subhead'/>
        </div>

        <div className='space-y-5 mt-[30px] lg:space-y-0 lg:flex items-center lg:space-x-5 w-fit mx-auto lg:mt-[48px]'>
          <CardGear img={GearMan2} title1='Article Title' title2='Article Subhead'/>
          <CardGear img={Emplis} title1='Article Title' title2='Article Subhead'/>
          <CardGear img={Gear2} title1='Article Title' title2='Article Subhead'/>
        </div>
    </Container>
  )
}

export default GearHead