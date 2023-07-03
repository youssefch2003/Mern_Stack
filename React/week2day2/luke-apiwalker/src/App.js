import './App.css';
import React, { useState } from 'react'; 
import { Route,Routes,useNavigate } from 'react-router-dom';
import Display from './components/Display';

function App() {
  const [select,setSelect]=useState("")
  const [id,setId]=useState(1)
  const navigate = useNavigate();
  // const [search,setSearch] = useState([])
  const hundelForm = (e)=>{
    e.preventDefault();
    navigate(`${select}/${id}`)

  }
  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={ <> 
       <form onSubmit={hundelForm} >
          search for : <select name="" id=""  onChange={(e) => setSelect(e.target.value)}>
          <option selected  >select one item</option>
            <option  value="people" >people</option>
            <option value="planets">planets</option>
          </select> 
          id : <input type="number" onChange={(e) => { setId(e.target.value)}} />
          <button>SEARCH</button>
        </form>
        </> }/>
          <Route path=":select/:id" element={<Display/>}/>
          <Route path="/Error" element={ <h1>These aren't the droids you're looking for</h1> }/>
        </Routes>
       
    </div>
  );
}

export default App;
