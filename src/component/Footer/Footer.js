import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
 const Footer =() =>{
     return (
        <div >
            <div class="navbar">
            <nav> 
         <ul>
          <li> <Link to={"contactUs"}>Contact Us</Link></li>
          <li> <Link to={"AboutUS"}>About Us</Link></li> 
         </ul></nav></div>
        </div>
     );
 };
 export default Footer;