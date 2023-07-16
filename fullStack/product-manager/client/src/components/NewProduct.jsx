import React, {useState,useEffect} from 'react'
import axios from "axios"
import Allpro from './Allpro';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';


function NewProduct() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{ 
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])
    const nav = useNavigate();
    const onSubmitHandler = person  => {
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product/new',person )
            .then((response)=>{
                console.log(response.data);
                setProducts([...products, response.data]);
                nav("/")
            })
            .catch(err=>console.log(err))
    }
  return (
    
    <div>
    {/* <form onSubmit={onSubmitHandler}>
        title :<input onChange={(e)=>settitle(e.target.value)} value={title} /> <br />
        price :<input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/> <br /> 
        description :<input  onChange={(e)=>setdescription(e.target.value)} value={description}/> <br />
        <input type="submit"/>
    </form> */}
    <ProductForm  onSubmitProp={onSubmitHandler} initialtitle="" initialprice="1" initialdescription=""/>
    
    </div>
    
)
}

export default NewProduct