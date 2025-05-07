import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const [data,setdata]=useState([]);
    const navigateData=useNavigate();
    const getdata=async()=>{
        try {
            const newdata=await axios.get(`http://localhost:1111/users`,data)
            setdata(newdata.data)
            console.log(newdata,"newdata");
            
        } catch (error) { 
            console.log(error,"error");
        }
    }
    useEffect(()=>{
       getdata()
    },[]

    )
    const viewpage=(id)=>{
      navigateData(`/view/${id}`)
      console.log(id ,"id")
    }
  return (
    <>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Firstname</th>
      <th scope="col">Phoneno</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    {data.map((e,item)=>(
    <tr>
      <td>{item+1}</td>
      <td>{e.name}</td>
      <td>{e.phoneno}</td>
      <td>{e.email}</td>
      <td><button type="button" class="btn btn-info" onClick={()=>viewpage(e._id)}>View</button></td>
      <td><button type="button" class="btn btn-success">Edit</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    ))}
    {/* <tr> */}
      {/* <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
  </tbody>
</table>
    </>
  );
}

export default Table;
