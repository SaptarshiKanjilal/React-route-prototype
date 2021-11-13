import React,{useContext} from "react";
import {IoSettings } from "react-icons/io5";
import {useLocation,useHistory} from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState";




const Navbar = () => {

  let {settings}=useContext(GlobalContext)
  let path=useLocation()
  let history=useHistory()
  const handleClick=()=>{
        history.push('/settings')
  }
  
  let title=(settings.layout==='Expense')?'Budget App':'Fitness App'
  console.log(settings.layout);
  return (
    <div className="navbar">
      <div className="container navbar-wrapper">
        <h1>{title}</h1>
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
