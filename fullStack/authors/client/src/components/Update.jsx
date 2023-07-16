import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate,useParams } from 'react-router-dom';
const Update = () => {
    const [name,setName] = useState("")
    const nav = useNavigate("")
    //Create an array to store errors from the API
    const [errorss, setErrors] = useState([]); 
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {
                setName(res.data.name)
    });
    }, [id])

    // err.me?.response?.data?.error?.errors?.message;
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/update/'+id,{name})
        .then(res=>{
            console.log(res);
                nav('/');
        })
        .catch((err) => {
            console.log('Error:', err);
            const errorResponse = err.response.data.error.errors;
            console.log(errorResponse);
            const errorArr = [];
            if (errorResponse && typeof errorResponse === 'object') {
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key]?.message);
                }
            }
            setErrors(errorArr);
        });           
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
                    {errorss.map((err, index) => <p key={index}>{err}</p>)}
            </>
            <input type="submit" />
            <button  onClick={() => nav('/')}>Cancel</button>
        </form>
    </div>
  )
}


export default Update