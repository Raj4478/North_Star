import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-8xl mx-auto px-4 ju text-center grid-flow-col '>{children}</div>
  )
}

export default Container