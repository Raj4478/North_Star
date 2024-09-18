import React from 'react'
import myImage from "./IdeaNest.jpg"

function Logo({width = '100px'}) {
  return (
    <>
    <div  > <img src={myImage} alt="" width="60px" height='20px' className=' block left-0 m-2 bg-gradient-to-r from-slate-900 to-slate-800' />
    </div>
  
    </>
  )
}

export default Logo