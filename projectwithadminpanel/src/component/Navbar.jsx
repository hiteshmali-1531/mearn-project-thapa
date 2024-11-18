import { useEffect, useState} from 'react';
import { useAuth } from '../store/auth'
import './Navbar.css'
import {  NavLink  } from "react-router-dom"

function Navbar() {

 let [token, setToken] = useState("");
  let {isLoggedIn, storetokenInLS,LogoutUser} = useAuth();
  console.log(isLoggedIn)
  useEffect(() =>{
    // console.log("useEffect")
   setToken(localStorage.getItem('token'));
  },[LogoutUser,storetokenInLS]);

  return (
    <>
      <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink to="/">Hitesh Mali</NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/service">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {token && <li><NavLink to="/logout">Logout</NavLink></li>}
                    {!token && <><li><NavLink to="/register">Register</NavLink></li>
                     <li><NavLink to="/login">Login</NavLink></li></>}
                    
              
                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
