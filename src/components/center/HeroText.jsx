import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function HeroText() {
  const arock = 'arock'
  const arr = arock.split('')

  // console.log(arr)

  const textRefs = useRef([])
  useGSAP(()=>{
    gsap.from(textRefs.current,{
      y:'10%',
      duration:1,
      stagger:0.2,
      delay:2,
      opacity:0,
      ease: "sine.out",
    })
  })
  return (
    <div className='flex overflow-hidden'>
      {arr.map((letter,index)=>(
        <h1 
        key={index}  
        ref={(el) => textRefs.current[index] = el} 
        className='font-black text-white lg:text-[22vw] md:text-[24vw] sm:text-[26vw] text-[26vw] tracking-tighter leading-none uppercase '>
          {letter}
        </h1>
      ))}
      <span className='text-[4vw] font-bold xl:pt-16 sm:pt-10 pt-5 ml-2'>®</span>
    </div>
  )
}

export default HeroText