import React, {useRef, useState} from 'react'
import LoadentParent from './loading/LoadentParent'
import Home from './Landing/Home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import MenuPage from './main/MenuPage'

function Mother() {

  const  [OpenMenu, setOpenMenu] =  useState(false)

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
        <div ref={pageRef}> <Home OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/> </div>
        <MenuPage OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
    </div>
  )
}

export default Mother