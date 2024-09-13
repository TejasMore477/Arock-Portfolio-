import React , {useRef} from 'react'
import Navbar from '../navebar/Navbar'
import Center from '../center/Center'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home({OpenMenu,setOpenMenu}) {
  const backRef = useRef() 
  useGSAP(()=>{

      gsap.fromTo(
        backRef.current,
        { backgroundSize: '120%' }, 
        { backgroundSize: '100%', duration: 2, ease: "power2.out", delay:1.5, } 
      );
      
  })
  return (
        <div ref={backRef} className='w-full h-screen bg-cover bg-[center_top_45%] bg-no-repeat bg-hero-image text-white leading-none relative'>
            <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
            <Center />
        </div> 
  )
}

export default Home