import React from 'react'

function Text ({t1, t2}) {
  return (
        <h3 className='uppercase text-xs font-semibold hover:text-zinc-200 ease-in-out duration-200'>{t1} <br /> {t2}</h3>
  )
}

export default Text