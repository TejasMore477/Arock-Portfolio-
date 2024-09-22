import React from 'react'
import { Tilt } from '@jdion/tilt-react'

function MenuLeft() {
  return (
    <div className='xl:w-2/3 md:w-[60%] sm:w-[50%] h-full py-14 xl:px-32 md:px-20 sm:px-5 relative sm:block hidden'>
      <Tilt className=' h-full w-full relative'>

        <img src='src/assets/images/menu_page_image.jpg' className='h-full w-full opacity-30 object-cover object-center absolute ' alt="image" />
        <img src='src/assets/images/menu_page_image.jpg' className='h-full w-full scale-[0.95]  opacity-40 object-cover object-center absolute ' alt="image" />
        <img src='src/assets/images/menu_page_image.jpg' className='h-full w-full scale-[0.85] opacity-50 object-cover object-center absolute ' alt="image" />
      
      </Tilt>
    </div>
  )
}

export default MenuLeft