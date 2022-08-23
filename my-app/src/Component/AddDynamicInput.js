import React,{useState} from 'react'

const AddDynamicInput = () => {


  const [inrormation ,setInformation]=useState({
     
     name:"",
     email:"",
     password:"",
  })

  const inputHandler =(e)=>{
    const name= e.target.name
    const value= e.target.value

    setInformation((val)=>{
      if(name==="name"){
        return {
          name:value,
          email:val.email,
          password:val.password
        }
      }
      else if(name==="email"){
        return{
          name:val.name,
          email:value,
          password:val.password
        }
      }

      else if(name==="password"){
        return{
          name:val.name,
          email:val.email,
          password:value,
        }
      }
    })

  }


  const subMitHandler=(e)=>{
    e.preventDefault()
    console.log(inrormation)

  }

  return (
    <div>
    
    <form onSubmit={subMitHandler}>
    
    <input type="text" value={inrormation.name} onChange={inputHandler} name="name" /> <br />
    <input type="email" value={inrormation.email} onChange={inputHandler} name="email" /><br />
    <input type="password" value={inrormation.password} onChange={inputHandler} name="password" /><br />

    <button>Submit</button>

    </form>
    
    
    </div>
  )
}

export default AddDynamicInput