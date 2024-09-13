
import React, { useRef, useState } from 'react'
import Menu from '../navebar/Menu'
import Logo from '../navebar/Logo'
import Texts from './Texts'
import Text from '../center/Text'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function MenuRight({OpenMenu, setOpenMenu}) {

  const Textdata = [
    {t1:"follow",t2:"(arock@)"},
    {t1:"instagram",t2:"youtube"},
    {t1:"listen",t2:"(arock@)"},
    {t1:"spotify",t2:"mixcloud"},
    {t1:"get in",t2:"touch"},
  ]

  const texto = useRef(null)
  const [anime, setAnime] =  useState(false)
  
  const animation = ()=>{
    setAnime(prev => !prev)
  }

  useGSAP(()=>{
    if(anime){
      gsap.to(texto.current, {
        backgroundColor: '#111',    
        color: '#fff',               
        width: '100%',              
        duration: 0.5,              
        ease: 'power3.out',          
      });
    }
    else if(!anime){
      gsap.to(texto.current, {
        backgroundColor: '#fff',                  
        width: '0%',                
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  },[anime,setAnime])

  return (
    <div className='w-1/3 h-full text-white flex flex-col gap-7'>
      <div className='w-full text-end'>
        <Menu OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} text={'Close'}/>
      </div>
      <div className='w-full h-[90vh] flex flex-col items-start justify-between px-32'>
        <Logo />
        <Texts texts={['tejas','more','webdesigner','modern designer']}/>
        <div className='grid grid-cols-2 h-[40%] w-full'>
        {
         Textdata.map((item, index)=>(
          <div key={index}><Text t1={item.t1} t2={item.t2}/></div>
         ))
        }
        <div>
          <h2 ref={texto} onMouseOver={animation} className={`bg-white text-xs font-semibold uppercase cursor-pointer hover:${animation}`}> email</h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MenuRight