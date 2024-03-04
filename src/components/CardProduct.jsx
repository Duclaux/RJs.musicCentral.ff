import React from 'react'


function CardProduct(props) {
  return (
    <div className={`h-fit w-auto mx-auto min-[486px]:w-[450px] lg:w-[486px] lg:h-[417px] ${props.style}`}>
      <div className='bg-gradient-to-br from-[#FBFBFB] to-[#D3D3D3] rounded-t-[10px]'>
        <img src={props.img} alt="" className='-translate-y-9 lg:w-[314px] lg:h-[260px] mx-auto'/>
      </div>
      <div className='pt-[16px] pb-[24px] px-[24px] shadow-lg bg-white rounded-b-[10px]'>
        <div className='flex items-center justify-between text-[#252525] font-semibold text-[18px] mb-[6px]'>
          <h1>Brand Name</h1>
          <p>$2,995</p>
        </div>
        <h1>Product description here</h1>

        <button className='border-[1px] border-[#EAEAEA] text-[#505050] rounded-full px-[6px] py-[2px] mt-[50px]'>
          <span className='font-semibold'>0 </span>colors available
        </button>
      </div>
    </div>
  )
}

export default CardProduct