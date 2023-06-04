import React from 'react'
import Highcomp from './highcomp'

const Click = ({count , increment}) => {
  return (
    <>
    <div className='App'><span>→ Click Increment</span>{count}
    <button onClick={increment}></button></div>
    </>
  )
}
export default Highcomp(Click)
