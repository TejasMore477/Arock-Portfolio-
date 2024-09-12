import React from 'react'
import HeroText from './HeroText'
import TextBottom from './TextBottom'

function Center() {
  return (
    <div className='top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute'>
        <HeroText />
        <TextBottom />
    </div>
  )
}

export default Center