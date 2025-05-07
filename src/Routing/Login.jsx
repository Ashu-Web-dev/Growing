import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios'
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [data,setdata]=useState("");
  const navigate=useNavigate();
  const handleChange=(e)=>{
    console.log(e.target)
    setdata({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    try {
      e.preventDefault();
      const dataa=await axios.post(`http://localhost:1111/login`,data)
     console.log(dataa,"dataaa")
      if(dataa.status===200){
        setdata(dataa.data)
        localStorage.setItem("userinfo",JSON.stringify(dataa.data))
      } else{
        toast.error(dataa.data.message)
      }
      console.log(dataa,"data coming");
      toast.success("successfull")
      navigate("/")
    
    } catch (error) {
      console.log(error,"error");
      
    }
  }
 
  return (
    <>
    <div className='loginbody'>
      <div className="login">
        <h4>Login</h4>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
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
          <input
            type="submit"
            value="LOGIN"
            className="btn"

          />
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;
