import './App.css';
import './sb-admin-2.css'
import Login from './Components/Login';
import {BrowserRouter,Routes,Route, Link, Navigate} from 'react-router-dom'
import Home from './Components/Home';
import Product from './Components/Product';
import { useContext } from 'react';
import { myContext } from './Context';

function App() {
  const user = false;
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={userObject ? <Home/> : <Navigate to ='/login'/>}></Route>
      <Route path='/login' element={userObject ? <Navigate to ='/'/>:<Login/>}></Route>
      <Route path='/product' element={userObject ? <Product/> : <Navigate to ='/login'/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
