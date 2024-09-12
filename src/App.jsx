import React from 'react'
import Navbar from './components/navebar/Navbar'
import Center from './components/center/Center'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 bg-cover bg-[center_top_45%] bg-no-repeat bg-hero-image text-white leading-none'>
      <Navbar />
      <Center />
    </div>
  )
}

export default App