import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
function Show() {
    const [oneproduct,setproduct]= useState({})
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/"+id)
        .then((serverResponse)=>{
            console.log(serverResponse);
            setproduct(serverResponse.data)

        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])
    

    
  return (
    <div>
        <h1>About {oneproduct.title}</h1>
        <ul>
            <li>Price: {oneproduct.price}</li>
            <li>Description: {oneproduct.description}</li>
        </ul>
  </div>

  )
}

export default Show