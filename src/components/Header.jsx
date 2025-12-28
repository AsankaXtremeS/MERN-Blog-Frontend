import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

  // Close nav on resize if width > 800, open burger if < 800
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsNavShowing(true);
      } else {
        setIsNavShowing(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    }
  };

  const toggleNavHandler = () => {
    setIsNavShowing((prev) => !prev);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className={`nav__menu${isNavShowing ? ' show' : ''}`}>
          <li>
            <Link to="/profile/45" onClick={closeNavHandler}>
              Asanka Sampath
            </Link>
          </li>
          <li>
            <Link to="/create" onClick={closeNavHandler}>
              Create Post
            </Link>
          </li>
          <li>
            <Link to="/authors" onClick={closeNavHandler}>
              Authors
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={closeNavHandler}>
              Logout
            </Link>
          </li>
        </ul>
        <button className="nav__toggle-btn" onClick={toggleNavHandler} aria-label="Toggle navigation menu">
          {isNavShowing && window.innerWidth < 800 ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
