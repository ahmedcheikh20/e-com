import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import Registre from './pages/Registre'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home />}  />
   <Route path='/login' element={<Login />}  />
   <Route path='/registre' element={<Registre />}  />
   <Route path='*' element={<NotFound />}  />
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
