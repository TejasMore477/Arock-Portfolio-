import React from 'react'
import { IoMdPlay } from "react-icons/io";
import Text from './Text'

function Play() {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>
        <div className='text-md p-2 border-[1px] inline-block rounded-full text-center'> <IoMdPlay /></div>
        <Text t1={'play'} t2={'the film'}/>
    </div>

  )
}

export default Play