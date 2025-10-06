import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';



const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="logo">ShopEasy</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup"> Signup</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      
      </ul>
    </nav>
  
    </>
  );
}

export default Navbar;
