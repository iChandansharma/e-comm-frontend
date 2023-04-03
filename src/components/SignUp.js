import React, { useEffect, useState } from "react";
import{Navigate, useNavigate} from 'react-router-dom';
const SignUp=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate();
 
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const collectData=async()=>{ 
    //  console.log(name,password,email)  
    let result=await fetch('http://localhost:5000/register',{
        method:"Post",
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
                 
      });
    //   console.log(result)
      result=await result.json();
    //   console.log(result);
      localStorage.setItem("user",JSON.stringify(result));
      if(result){
          navigate('/')
      }
    }
    return(
        <div className="register">
            <h1 >Register</h1>
            <input className="inputBox " type="text" 
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="appButton" type="button">SignUp</button>
        </div>
    )
}
export default SignUp;