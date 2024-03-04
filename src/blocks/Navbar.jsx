import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaUser, FaMarker } from 'react-icons/fa'


import Container from '../components/Container'
import Logo from '../assets/logo.png'

function Navbar() {

    const [ nav, setNav ] = useState(false)
    const Close = () =>{
        setNav(!nav)
    }

    const liens = [
        'Guitars',
        'Accessories',
        'Storage',
        'Lessons',
        'Repairs',
    ]

  return (
    <Container styles='flex items-center justify-between text-white py-[38px] lg:pt-[53px] h-fit'>

        {/* block logo */}
        <div className='flex items-center h-fit space-x-3'>
            <img src={Logo} alt="" />
            <p className='text-[27px] lg:text-[30px]'>
                <span className='font-extrabold '>Central</span>Music
            </p>
        </div>

        {/* liens en plein ecran */}
        <div className='h-fit hidden lg:flex w-[56%] xl:w-[70%]'>
            <ul className='flex items-center space-x-5 xl:space-x-16'>
                {
                    liens.map((lien) => (
                        <li className='font-semibold text-[20px]'>{lien}</li>
                    ))
                }
            </ul>
        </div>

        {/* block des icones */}
        <div className=''>
            {/* icon market et user */}
            <div className='hidden lg:flex items-center space-x-6'>
                <FaUser size={20} color='white'/>
                <FaUser size={20} color='white'/>
            </div>

            {/* icon menu hambergur*/}
            <div onClick={Close} className='lg:hidden'>
                { nav ? <AiOutlineClose size={34} color='white' className='transition-all duration-700'/> : <AiOutlineMenu size={34} color='white' />}

                {/* liens en responsive */}
                <ul className={ !nav ? `text-white absolute -top-full w-full text-center pb-8 left-0 transition-all duration-1000` : `text-white absolute top-24 w-full text-center pb-8 left-0 transition-all duration-700`}>
                    {
                        liens.map((lien, index) => (
                            <li key={index} className='mt-8 font-semibold text-[20px]'>{lien}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Navbar