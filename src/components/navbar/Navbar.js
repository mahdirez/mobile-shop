import React, { useContext, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./Navbar.css";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);

  const toggleMenu = () => {
    setShowIcon(!showIcon);
  };

  window.addEventListener("scroll", () => {
    setShowIcon(false, window.screenY > 0);
  });

  const [data , setData , handleAddCart , cart] = useContext(Context)
  return (
    <nav className="navbar container">
      <div className="menu">
        <ul
          className="nav-links"
          id={showIcon ? "show-links-mobile" : "show-links-mobile-hide"}
        >
          <Link to={"/"}>
            <li>خانه</li>
          </Link>
          <Link to={"/product"}>
            <li>محصولات</li>
          </Link>
          <Link to={"/cart"}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>{cart.length}
            </li>
          </Link>
        </ul>
      </div>
      <div className="logo">
        <p className="logo-text">
          ST
          <SiAnaconda color="#fff" size={30} />
          RE
          <span>MOBILE</span>
        </p>
      </div>

      <div className="menu-icons" onClick={toggleMenu}>
        {showIcon ? (
          <RiCloseLine size={35} color={"#fff"} cursor={"pointer"} />
        ) : (
          <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
