import React from 'react'
import { Tilt } from '@jdion/tilt-react'

function MenuLeft() {
  return (
    <div className='w-2/3 h-full py-14 px-32 relative'>
      <Tilt className=' h-full w-full relative'>

        <img src='src/assets/images/menu_page_image.jpg' className='h-full w-full opacity-30 object-cover object-center absolute ' alt="image" />
        <img src='src/assets/images/menu_page_image.jpg' className='h-full w-full scale-[0.95]  opacity-40 object-cover object-center absolute ' alt="image" />
        <img src='src/assets/images/menu_page_image.jpg' className='h-full w-full scale-[0.85] opacity-50 object-cover object-center absolute ' alt="image" />
      
      </Tilt>
    </div>
  )
}

export default MenuLeft