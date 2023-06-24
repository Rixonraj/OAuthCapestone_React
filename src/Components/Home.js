import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { myContext } from '../Context';
import axios from 'axios';

function Home() {
  const userObject = useContext(myContext);
const logout = () => {
  axios.get(`${process.env.development.REACT_APP_BACKENDURL}/auth/logout`,{withCredentials:true})
  .then((res)=>{
      if (res.data) {
        window.location.href = "/login"
      }
  })
}



  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
        <FontAwesomeIcon className='navbarIcon'icon={faCoffee} />
        <span className='navbarMain'> Hi {userObject.username}</span>
        </span>
        <button className='btn btn-light' onClick={logout}>Logout</button>
      </nav>

      <h1 className='homeText'>Welcome to Capestone Project !</h1>


    </div>
  )
}

export default Home