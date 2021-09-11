import './Footer.css';

import React from 'react'
import FiFacebook from 'react-icons/fi'
import Slide from 'react-reveal/Slide';


function Footer() {
    return (
        <div>
         <Slide left>  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>General</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">Sign up</a></li>
  	 				<li><a href="#">About Meal</a></li>
  	 				<li><a href="#">Contact us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Features</h4>
  	 			<ul>
  	 				<li><a href="#">Tasty Products</a></li>
  	 				<li><a href="#">Food Map</a></li>
  	 				<li><a href="#">Vegan News</a></li>
  	 				<li><a href="#">Vegetarian</a></li>
  	 				<li><a href="#">fraud awareness</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Promos</h4>
  	 			<ul>
  	 				<li><a href="#">Food Bloggers</a></li>
  	 				<li><a href="#">Feed the poor</a></li>
  	 				<li><a href="#">Free Products</a></li>
  	 				<li><a href="#">term of use</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i  className="fab FiFacebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>  </Slide>
        </div>
    )
}

export default Footer;
