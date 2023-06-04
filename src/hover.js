import React from 'react'
import Highcomp from './highcomp'

const Hover = ({count , increment}) => {
    return (
      <>
      <div className='App'>{count}
      <span className='span1'>→ On Hover Increment</span><button onMouseOver={increment} ></button></div>
      </>
    )
  }
export default Highcomp(Hover)
