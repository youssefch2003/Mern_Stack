import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Welcom from './components/Welcom';
import Number from './components/Number';
import String from './components/String';
import Deco from './components/Deco';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Welcom/>}/>
        <Route path='/:id' element={<Number/>}/>
        <Route path='/:word' element={<String/>}></Route>
        <Route path='/:word/:color1/:color2' element={<Deco/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
