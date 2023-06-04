import React, { useState } from 'react'
import Click  from './click'
import Hover from './hover'
import Purecomp from './purecomp'
import './App.css'

export default function App() {

  const [count,setCount] = useState(0)

  const increase = ()=>
  {
    setCount(count+1)
  }
  return (
    <>
    <div className='container'> 
    <h1>Handson 5</h1>
    <Click/>
    <Hover/>
    <div className='App'>
    <span className='span2'>→ Increment On Pure Comp</span><Purecomp count={count} />
    <button onClick={increase} className='pure'></button></div>
    </div>
    </>
  )
}
