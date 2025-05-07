import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./View.css";

const View = ({ }) => {
  const idd=useParams().id
  const [data,setdata]=useState(" ")
  const getData=async ()=>{
    try {
      const response=await axios.get(`http://localhost:1111/oneuser/${idd}`);
      console.log(response.data,"data");
      setdata(response.data)
    } catch (error) {
      console.log(error,"error");
      
    }
  }
  useEffect(()=>{
    getData()
  },[]) 
  return (
    <>
    <div className='profile-container'>
      <div className="profile-header">
        <h2 className="profile-name">{data?.name}</h2>
        <p className="profile-username">{data?.phoneno}</p>
        <p className="profile-bio">{data?.email}</p>
      </div>
    </div>
    </>
  );
}

export default View;
