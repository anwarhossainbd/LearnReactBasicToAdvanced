import React,{useState} from 'react'

function AddDynamicInput() {

   
  const [name,setName]=useState({
    "fname":"",
    "lname":""
  })
 

const inputEvent =(e)=>{

  const value=e.target.value;
  const name= e.target.name;

   setName((preValue)=>{
    if(name==="fname"){
      return{
        fname:value,
        lname:preValue.lname
      }
    }
    else if(name==="lname"){
      return{
        fname:preValue.fname,
        lname:value
      }
    }
  })
}
  
const onSubmit=(e)=>{
  e.preventDefault();

  console.log(name.fname)
  alert("Form submit")
}




  return (
    <div>
    
    <h1>Enter Your Details </h1>

    <form onSubmit={onSubmit}>  
    <input type="text" value={name.fname} name="fname" onChange={inputEvent} /> <br />
    <input type="text" value={name.lname} name="lname" onChange={inputEvent} /> <br />


    <button >Submit</button>

    </form>

     <br />
   
    
    
    </div>
  )
}

export default AddDynamicInput