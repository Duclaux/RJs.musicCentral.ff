import React from 'react'

function Container( {children, styles}) {
  return (
    <div className={`w-full px-[24px] md:w-[700px] md:px-0 md:mx-auto lg:w-[900px] xl:w-[1200px] 2xl:w-[1500px] ${styles}`}>{children}</div>
  )
}

export default Container