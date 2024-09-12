import React, {useRef} from 'react'
import LoadentParent from './loading/LoadentParent'
import Home from './Landing/Home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Mother() {
    const pageRef = useRef() 
    const loadRef = useRef() 
    const tl = gsap.timeline()

    useGSAP(()=>{
        tl.to(loadRef.current, {
        width:'100%',
        duration:1.6,
        })
        tl.from(pageRef.current,{
            y:'100%',
            duration:1,
            opacity:0,
            scale:0.9,
        })
    })
  return (
    <div className='bg-[#111] h-screen overflow-hidden'>
        <div ref={loadRef}><LoadentParent/></div>
        <div ref={pageRef}> <Home /> </div>
    </div>
  )
}

export default Mother