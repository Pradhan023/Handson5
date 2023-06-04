import React, { useState } from "react"

const Highcomp = (Highorder) => {
    const Newho = ()=>{

        const [count,setCount] = useState(0)

        const increment = () =>{
            setCount(count+1)
        }

        return <Highorder count={count} increment={increment}/>
    }
    return Newho
}

export default Highcomp
