import React, {useState} from 'react'
import axios from "axios"
import Allpro from './Allpro';
import { useNavigate } from 'react-router-dom';


function NewProduct() {
    const [title, settitle] = useState(""); 
    const [price, setPrice] = useState(1); 
    const [description, setdescription] = useState(""); 
    const nav = useNavigate();
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then((response)=>{
                console.log(response.data);
                nav("/")
            })
            .catch(err=>console.log(err))
    }
  return (
    
    <div>
    <form onSubmit={onSubmitHandler}>
        title :<input onChange={(e)=>settitle(e.target.value)} value={title} /> <br />
        price :<input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/> <br /> 
        description :<input  onChange={(e)=>setdescription(e.target.value)} value={description}/> <br />
        <input type="submit"/>
    </form>
    <hr />
    <Allpro/>
    </div>
    
)
}

export default NewProduct