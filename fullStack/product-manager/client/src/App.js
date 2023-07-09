import { Routes, Route } from 'react-router-dom'
import './App.css';
import NewProduct from './components/NewProduct';
import Show from './components/Show';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
    <h1> PRODUCT </h1>
    <Routes>
        <Route path='/' element={ <NewProduct/>} />
        <Route path='/:id' element={<Show/>} />
        <Route path='/edit/:id' element={<Update/>} />
      </Routes>
    
    </div>
  );
}

export default App;
