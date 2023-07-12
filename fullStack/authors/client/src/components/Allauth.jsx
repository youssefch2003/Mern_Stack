import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Deletebutton from './Deletebutton';

const Allauth = () => {
    const [authors, setauthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setauthors(res.data));
    }, [])
    
    const removeFromDom = authorId => {
        setauthors(authors.filter(author => author._id !== authorId))
    }
    return (
    <div>
        <Link to={"/new"}>add an auther </Link>
        <h2>We have quotes by:</h2>


<table className='table'>
    <thead>
        <tr>
            <th>Auther</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
            {authors.map((auther) => {
                return (
                    <tr key={auther._id}>
                            <td>{auther.name}</td>
                            <td>
                            <Link to={`/edit/${auther._id}`} >
                            Edit
                        </Link> ||
                        <Deletebutton AuthorId={auther._id} successCallback={()=>removeFromDom(auther._id)}/>
                            </td>
                        </tr>
                    
                )
            })}
            </tbody>
        </table>
        </div>
    )
}

export default Allauth