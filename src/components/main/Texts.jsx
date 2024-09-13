import React from 'react'

function Texts({texts}) {
    console.log(texts)
  return (
    <div>
            {texts.map((item,index)=>(
        <div key={index} className='text-4xl font-semibold tracking-tighter leading-none uppercase'>{item}</div>
    ))}
    </div>
  )
}

export default Texts