import React from 'react'
import axios from 'axios';
const Deletebutton = (props) => {
    const { AuthorId, successCallback } = props;
    
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/delete/' + AuthorId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}

export default Deletebutton