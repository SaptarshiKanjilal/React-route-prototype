import React from "react";
import {IoSettings } from "react-icons/io5";
import {useLocation,useHistory} from 'react-router-dom'
const Navbar = () => {

  let path=useLocation()
  let history=useHistory()
  const handleClick=()=>{
        history.push('/settings')
  }

  return (
    <div className="navbar">
      <div className="container navbar-wrapper">
        <h1>Budget App</h1>
        <div className='settings-wrapper'>
        <h3>Logout</h3>
        {
          (path.pathname!=='/settings')?<h3 onClick={handleClick}><IoSettings/>Settings</h3>:''
        }
          
        </div>
        
  
      </div>
    </div>
  );
};

export default Navbar;
