import React from 'react'
import { 
    FaFacebookSquare,
    FaYoutubeSquare,
    FaInstagramSquare,
    FaTwitter
 } from 'react-icons/fa'


import Container from '../components/Container'
import Logo from '../assets/logo.png'


function Footer() {
  return (
    <div className='bg-[#505050] relative'>
        <Container styles='lg:flex lg:items-center lg:justify-between'>
            <div className='px-[120px] py-[37px] lg:py-[69px] lg:px-0 text-center lg:text-start lg:flex lg:items-start lg:space-x-28'>
                <div className='text-white'>
                    <div className='w-[58px] h-[3px] bg-white rounded-[10px] mb-3 mx-auto lg:mx-0'></div>
                    <h1 className='text-white font-bold text-[14px] mb-3'>My Account</h1>
                    <ul className='space-y-2'>
                        <li className='text-[14px]'>Overview</li>
                        <li className='text-[14px]'>Order History</li>
                        <li className='text-[14px]'>Wishlist</li>
                        <li className='text-[14px]'>Account information</li>
                    </ul>
                </div>

                <div className='text-white hidden lg:block'>
                    <div className='w-[58px] h-[3px] bg-white rounded-[10px] mb-3'></div>
                    <h1 className='text-white font-bold text-[14px] mb-3'>Store</h1>
                    <ul className='space-y-2'>
                        <li className='text-[14px]'>Security Notice</li>
                        <li className='text-[14px]'>Location & Hours</li>
                        <li className='text-[14px]'>Rentals</li>
                        <li className='text-[14px]'>Privacy Notice</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='items-center h-fit space-x-3 mb-[30px] hidden lg:flex'>
                    <img src={Logo} alt="" />
                    <p className='text-[27px] lg:text-[30px] text-white'>
                        <span className='font-extrabold '>Central</span>Music
                    </p>
                </div>

                <div className='flex items-center space-x-5 w-fit mx-auto lg:w-auto'>
                    <FaYoutubeSquare size={27} color='white'/>
                    <FaTwitter size={27} color='white'/>
                    <FaInstagramSquare size={27} color='white'/>
                    <FaFacebookSquare size={27} color='white'/>
                </div>
            </div>
        </Container>
        <div className='bg-[#252525] text-white py-[10px] mt-[32px] lg:mt-0'>
                <p className='text-[18px] font-bold mx-auto w-fit'>©2021 Fred Fox...</p>
        </div>
    </div>
  )
}

export default Footer