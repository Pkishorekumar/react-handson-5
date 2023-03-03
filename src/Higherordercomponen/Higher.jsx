import React from 'react'
import { useState } from 'react'

const Higher = () => {
    const [count , setCount]=useState(0)
  return (
    <div className='counter'>
       <h2>{count}</h2>
          <button onClick={()=>{setCount(count +1)}} className='increment'>Increment</button>
          <button  onClick={()=>{setCount(count -1)}} className='decrement'>Decrement</button>
    </div>
  )
}

export default Higher
