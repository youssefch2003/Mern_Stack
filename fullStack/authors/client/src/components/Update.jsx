import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate,useParams } from 'react-router-dom';
const Update = () => {
    const [name,setName] = useState("")
    const nav = useNavigate("")
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {
                setName(res.data.name)
    });
    }, [id])


    const onSubmitHandler =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/update/'+id,{name})
        .then(res=>{
            console.log(res);
                nav('/');
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            
      }
      
  return (
    <div>
        
          <form onSubmit={onSubmitHandler}>
            <>
                <label>Auther Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} /> <br />
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
            </>
            <input type="submit" />
            <button  onClick={() => nav('/')}>Cancel</button>
        </form>
    </div>
  )
}


export default Update