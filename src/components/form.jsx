import React,{useState} from "react";
import { Button } from "react-bootstrap";


import styles from "./form.module.css";





const MyForm = () => {
 const[inputs,setInputs]=useState([{
    firstName:'',
    lastName:'',
    email:'',
    password:''
 }])
   
const handleForm=((index,event)=>{
  
    const data=[...inputs];
    data[index][event.target.name]=event.target.value;
  
    setInputs(data);
})

const addNew=(e)=>{
  e.preventDefault();
    const newField={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    setInputs([...inputs,addNew]);
}

const submit=(e)=>{
    e.preventDefault();
    console.log(inputs);
}

const remove=(index)=>{

  const data=[...inputs];
  data.splice(index,1);
  setInputs(data);
}

  return (
    <>
   {inputs.map((input,index)=>{

return(
<form className={styles.form}  key={index}>
   
   <h1>Login</h1>
     <form-group><label htmlFor="Fname">First name</label><input autoFocus type="text" value={input.firstName} onChange={event=>handleForm(index,event)}  name="firstName" id="Fname"  className="form-control" />
  
     </form-group>
     <form-group><label htmlFor="lname">Last name</label><input  type="text" value={input.lastName} onChange={event=>handleForm(index,event)}  name="lastName" id="lname"  className="form-control" /></form-group>
     <form-group><label htmlFor="email">Email</label><input type="text" value={input.email} onChange={event=>handleForm(index,event)}  name="email" id="email"   className="form-control" /></form-group>
     <form-group><label htmlFor="password">Password</label><input type="text" value={input.password} onChange={event=>handleForm(index,event)}  name="password" id="password"   className="form-control" /></form-group> <br /> 
     <Button type="submit" onClick={submit}>Submit</Button> &nbsp;&nbsp;&nbsp;&nbsp;
     <Button variant="danger" onClick={()=>remove(index)}>Remove</Button>

   </form>
    
)


   })

   }
  
  <form-group><Button  onClick={(e)=>addNew(e)}>Add more...</Button></form-group><br /> <br /> 
   
    </>
  )
}

export default MyForm