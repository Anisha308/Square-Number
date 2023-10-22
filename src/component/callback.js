import React,{useMemo,useState} from 'react'

function Callback() {
const [number,setNumber]=useState(0)

    const square = useMemo(() => {
        return number * number
    
    },[number])

    const handleclick = () => {
        setNumber(number+1)
    }
    return (
    <div>
          <p>number:{number}</p>
          <p>Square:{square}</p>
          <button onClick={handleclick}>number</button>
    </div>
  )
}

export default Callback
