import React,{useState} from 'react'

function AddDynamicInput() {

    const [state, setState] = useState(0)

    const incNumber=()=>{
        setState(state+1)
    }
   

  return (
    <div>
    

    <h1>{state}</h1>
    <button onClick={incNumber}>Click Me</button>
    
    
    </div>
  )
}

export default AddDynamicInput