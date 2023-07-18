import React from "react";
import { NavLink } from "react-router-dom";
import hed from '../../img/Re.png'




function Header(){
    return(
        <div id="header"> 
             <div className="container">
                <div className="header">
                        <img src={hed}></img>
                      <div className="header-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                      </div>
                     <div className="header-btn">
                        <button className="right">Sign in</button>
                        <button className="left">Request demo</button>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Header;
