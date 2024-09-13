import React, { useRef } from 'react'
import MenuRight from './MenuRight'
import MenuLeft from './MenuLeft'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function MenuPage({OpenMenu,setOpenMenu}) {
  const page = useRef()

  useGSAP(()=>{
    if(OpenMenu){
      gsap.to(page.current,{
        top:0,
        duration:0.5,
      })
    }else{
      gsap.to(page.current,{
        top:'100%',
        duration:0.5,
      })
    }
  },[OpenMenu,setOpenMenu])

  return (
    <div ref={page} className='h-screen w-full bg-zinc-900 fixed top-full left-0 z-50 flex p-4'>
      <MenuLeft/>
      <MenuRight OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
    </div>
  )
}

export default MenuPage