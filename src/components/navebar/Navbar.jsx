import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

function Navbar({OpenMenu,setOpenMenu}) {
  return (
    <div className='w-full px-7 flex items-center justify-between py-2'>
        <Logo />
        <Menu  OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
}

export default Navbar