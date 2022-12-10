import './App.css';
import About from './components/About';
import Body from './components/Body';
import Home from './components/Home';
import {Link,Route,Routes} from "react-router-dom"

export default function App() {
  return (
    <div>
      
     <Link to="/Home">Name</Link>
     <Link to="/Body">mobile</Link>
     <Link to="/About">About</Link>
     <Routes>
      <Route path="/Home" element={< Home />}></Route>
      <Route path='/About' element={< About />}></Route>
      <Route path='/Body' element={<Body/>}></Route>
     </Routes>
    </div>
  );
}


