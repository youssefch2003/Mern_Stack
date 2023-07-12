import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const NewAuth = () => {
    const [name,setName] = useState("")
    const nav = useNavigate("")
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 
   

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new',{name})
        .then(res=>{
                setName('');
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

export default NewAuth