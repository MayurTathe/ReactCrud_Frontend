
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Employees from './components/Employees';
import NewEmployee from './components/NewEmployee';
import {ToastContainer, toast} from 'react-toastify';
import Search from './components/Search';


function App() {
  return (
    <div>
      <NavBar/>
      <ToastContainer/>
      <Routes>
        <Route exact path='/employees' element={<Employees/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/addemployee' element={<NewEmployee/>} />
        <Route exact path='/search' element={<Search/>} />
      </Routes>
       
      
      
    </div>
  );
}

export default App;
