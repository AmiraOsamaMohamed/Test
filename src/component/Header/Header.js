import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

 const Header =() =>{
     return (
        <div>
          
           <div class="navbar">
    <nav> 
         <ul>
          <li> <Link to={'/'}>Home</Link></li>
          <li> <Link to={"Signup"}>Sign up</Link></li>
          <li> <Link to={"Login"}>log in</Link></li> 
         </ul></nav></div>
        </div>
     );
 };
 export default Header;
