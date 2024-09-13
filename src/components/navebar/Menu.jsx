import React from 'react'

function Menu({OpenMenu,setOpenMenu,text='Menu'}) {
  console.log(OpenMenu, setOpenMenu)
  return (
    <h4 onClick={()=>(setOpenMenu(prev=>!prev))} className='text-xs cursor-pointer'>{text}</h4>
  )
}

export default Menu