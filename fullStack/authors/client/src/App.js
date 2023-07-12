import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Allauth from './components/Allauth';
import NewAuth from './components/NewAuth';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
        <h1>ALL authors</h1>
      <Routes>
        <Route path='/' element={<Allauth />} />
         <Route path='/new' element={<NewAuth />} />
        <Route path='/edit/:id' element={<Update />} /> 
      </Routes>
    </div>
  );
}

export default App;
