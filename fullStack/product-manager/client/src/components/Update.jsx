import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

function Update() {
    const {id} = useParams();
    const nav = useNavigate();
        const [title, setTitle] = useState("")
        const [price, setPrice] = useState(0)
        const [description, setDescrip] = useState("")
    
        useEffect(()=>{
            // go to the server and bring the show from DB
            axios.get("http://localhost:8000/"+id)
            .then((res)=>{
                // console.log(res.data.Show);
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescrip(res.data.description)
            })
            .catch((err)=>{
                console.log("❌❌❌ Something Went Wrong", err);
            })
        },[id])

        const handleForm = (e) =>{
            e.preventDefault();
            
            // console.log(title, genre, episodes);
            const updatedpro = {
                title,
                price,
                description
            }
            
            // send it to the server
            
            axios.put("http://localhost:8000/edit/"+id, updatedpro)
            .then((response)=>{
                console.log(response.data);
                nav("/")
            })
            .catch((err)=>{
                console.log("❌❌❌ Something Went Wrong", err);
            })
           }    
        
          return (
            <div>
                <h2>Edit Show</h2>
                {/* update form */}
                <form onSubmit={handleForm}>
                    Title: <input onChange={(e)=>{setTitle(e.target.value)}} value={title}/> <br />
                   price: <input type="number" onChange={(e)=>{setPrice(e.target.value)}}value={price}/> <br />
                    description: <input  onChange={(e)=>{setDescrip(e.target.value)}} value={description}/> <br />
                    <button>Update</button>
                </form>
            </div>
          )
        }
        
        export default Update