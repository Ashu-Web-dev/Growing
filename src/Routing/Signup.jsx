import React, { useState } from 'react';
import "./Signup.css";
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const [data,setdata]=useState("")
  const navigate=useNavigate();
  const handleChange=(e)=>{
    console.log(e.target)
    setdata({...data,[e.target.name]:e.target.value})
  }


const handleSubmit=async(e)=>{
  try {
    e.preventDefault();
    const dataa=await axios.post(`http://localhost:1111/signup`,data)
   console.log(dataa.data,"dataaa")
    // console.log(dataa,"data coming");
    toast.success("successfull")
    navigate("/login")
  
  } catch (error) {
    console.log(error,"error");
    
  }
}
  return (
    <>
    <div className='loginbody'>
      <div className="login">
        <h4>SignUp</h4>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className="text_input"

            />
          </div>
          <input 
            type="submit"
            value="SIGNUP"
            className="btn"

          />
        </form>
      </div>
      </div>
    </>
  );
}

export default Signup;
