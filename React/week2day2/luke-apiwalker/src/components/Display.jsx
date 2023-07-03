import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Display(props) {
    const {select} = useParams();
    const {id} = useParams();
    console.log({select},{id});
    const [data,setData]= useState(null)
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        const url = `https://swapi.dev/api/${select}/${id}`;
        console.log(url);
        axios.get(url)
        .then((res)=>{setData(res.data);
            console.log(res);})
        .catch((err)=>{
                navigate("/Error")
        })
    },[select,id]);
    

    console.log(data);


    return (
        <div>
          {data && data.name ? (
            <div>
            
            <h1>{data.name}</h1>
            {select === "planets" ? <><p>Climate: {data.climate}</p><p>Terrain: {data.terrain}</p><p>Surface Water: {data.surface_water}</p><p>Population: {data.population}</p></> : ""}
            {select === "people" ? <><p>Height: {data.height}</p><p>Mass: {data.mass}</p><p>Hair Color: {data.hair_color}</p><p>Skin Color: {data.skin_color}</p></> : ""}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )
}

export default Display