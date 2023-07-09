import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function Allpro (){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setProducts(serverResponse.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[])
     // delete function
     const deleteproduct = (id) =>{
        axios.delete("http://localhost:8000/delete/"+id)
        .then((res)=>{
            setProducts(products.filter((oneShow) => oneShow._id !== id));
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err)
        })
    }
  return (
    <div>
        <h2>product list</h2>
        <ul>
            {products.map((onepro)=>{
                return(
                    // <li> <Link >{onepro.title}</Link>  </li>
                    <li key={onepro._id}><Link to={`/${onepro._id}`} >{onepro.title}</Link> <button> <Link to={`edit/${onepro._id}`} > edit </Link></button>
                    <button onClick={()=>deleteproduct(onepro._id)}>  delete </button> </li>
                )
            })}

        </ul>
        </div>
    
  )
}

export default Allpro