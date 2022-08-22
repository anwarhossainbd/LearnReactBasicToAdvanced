import React,{useState} from 'react'

function AddDynamicInput() {

   
   const [name,setName] =useState("")
      const [name2,setName2] =useState("")


   const inputEvent=(e)=>{
    setName(e.target.value)
   }
   

   const clickHandele =()=>{
    setName2(name)
   }




  return (
    <div>
    

    <h2>Hello {name} </h2>

    <input type="text" placeholder="enter your name" value={name} onChange={inputEvent}  /> <br />
    <button onClick={clickHandele}> Submit</button>
    <p>{name2}</p>
    
    
    </div>
  )
}

export default AddDynamicInput