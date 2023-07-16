import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialtitle, initialprice,initialdescription,onSubmitProp } = props;
    const [title, settitle] = useState(initialtitle); 
    const [price, setPrice] = useState(initialprice); 
    const [description, setdescription] = useState(initialdescription); 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price,description});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>title</label><br />
                <input onChange={(e)=>settitle(e.target.value)} value={title} /> <br />
            </div>
            <div>
                <label> price :</label><br />
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/> <br />
            </div>
            <div>
                <label> description :</label><br />
                <input  onChange={(e)=>setdescription(e.target.value)} value={description}/> <br />
            </div>

            <input type="submit" />
        </form>
    )
}