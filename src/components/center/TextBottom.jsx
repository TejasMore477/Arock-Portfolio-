import React from 'react'
import Play from './Play'
import Creator from './Creator'

function TextBottom() {
  return (
    <div className='flex items-center justify-between w-full'>
        <Play />
        <Creator />
    </div>
  )
}

export default TextBottom