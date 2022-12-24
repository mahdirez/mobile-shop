import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showIcon , setShowIcon] = useState(false);

  const toggleMenu = () => {
    setShowIcon(!showIcon);
  }
  
  window.addEventListener("scroll",()=>{
    setShowIcon(false,window.screenY > 0)
  })
  return (
    <nav className="navbar container">
      <div className="menu">
        <ul className="nav-links" id={showIcon  ? "show-links-mobile" : "show-links-mobile-hide" }>
          <Link to={'/'}><li>خانه</li></Link>
          <li><a href="#features">محصولات</a></li>
          <li><a href="#download">دانلود</a></li>
          <li><a href="#subscribe">مشترک شوید</a></li>
        </ul>
      </div>
      <div className="logo">
        <p className='logo-text'>
          ST<SiAnaconda color="#fff" size={30} />RE
          <span>MOBILE</span>
        </p>
      </div>

      <div className="menu-icons" onClick={toggleMenu}>
        {
          showIcon ? 
          <RiCloseLine size={35} color={"#fff"} cursor={"pointer"}/>
          :
          <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} />
           
        }
      </div>
    </nav>
  );
};

export default Navbar;
