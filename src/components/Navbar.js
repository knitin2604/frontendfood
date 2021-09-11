import './Navbar.css';

import React, { useState } from "react";
import Flip from 'react-reveal/Flip';
import "./Navbar.css";
import {

  FaInstagramSquare,
} from "react-icons/fa";
import {FaTwitterSquare} from 'react-icons/fa';
import {IoMdShuffle} from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";

import {BiChevronDown} from 'react-icons/bi';
import Slide from 'react-reveal/Slide';
import {Route, Switch,Link } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import logo2 from './images/logo2.png'
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';





const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <Slide right>  <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
      <Jello>  <img className="logo-img" src={logo2} alt="logo"/></Jello>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
          <Flip> <Link to = '/'> Home </Link></Flip>
            </li>
            <li>
         <Flip>  <Link to = "/signup">   Signup  </Link></Flip>
            </li>
          
           

            
      
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
              style={{color:"black"}}
                href=""
                target="">
               <Fade right> <FaTwitterSquare className="facebook" /></Fade>
              </a>
            </li>
            <li>
              <a
               style={{color:"black"}}
                href="https://www.instagram.com/"
                target="">
            <Fade left>   <FaInstagramSquare className="mail" /></Fade>
               
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                < IoMdShuffle className="shuffle" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav></Slide>


        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path = "/" component={Home}/>
        </Switch> 

    </>
  );
};

export default Navbar;