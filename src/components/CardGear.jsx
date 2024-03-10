import React from 'react'

function CardGear(props) {
  return (
    <div className='w-fit mx-auto lg:mx-0'>
        <div>
            <img src={props.img} alt="" />
        </div>

        <div className='w-auto bg-[#252525] rounded-b-[10px] text-white px-[32px] py-[32px]'>
            <p className='text-[24px] font-bold'>{props.title1}</p>
            <p className='text-[#C4C4C4] text-[18px]'>{props.title2}</p>
        </div>
    </div>
  )
}

export default CardGear