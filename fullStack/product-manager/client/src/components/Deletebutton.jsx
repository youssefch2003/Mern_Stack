import React from "react";
import axios from "axios";

export default props => {
    const {itemId, successCallback} = props;
    const deleteitem =(e)=>{
        axios.delete("http://localhost:8000/delete/"+itemId)
        .then((res)=>{
            successCallback();
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err)
        })
    }
    return(
        <button onClick={deleteitem}>
        Delete
    </button>
    )
}