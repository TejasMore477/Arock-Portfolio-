import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

function Navbar() {
  return (
    <div className='w-full px-7 flex items-center justify-between py-2'>
        <Logo />
        <Menu />
    </div>
  )
}

export default Navbar