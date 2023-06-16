import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  //display the navbar (called in App)
  return (
    <div id = "navbar-container">
      <nav className="navbar">
          <ul>
            <center>
              <li><a href="#hero-container">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#contact-div">Contact</a></li>
              <li><a href="#buy-now">Buy Now</a></li>
            </center>
         </ul>
      </nav>
    </div>
  )
}
