import { useGSAP } from '@gsap/react'
import React, {useRef, useState} from 'react'
import gsap from 'gsap'

function Loader() {
    const loader = useRef()
    useGSAP(()=>{
        gsap.to(loader.current, {
            width:'100%',
            duration:1.8,
            delay:1,
        })
    })
  return (
    <div ref={loader} className='w-0 h-full bg-white rounded-r-xl'></div>
  )
}

export default Loader