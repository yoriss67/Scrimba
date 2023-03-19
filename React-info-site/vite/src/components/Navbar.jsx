import React from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from '../assets/react-logo.png'


function Navbar() {
    return (
     <nav>
      <div className="navbar">
        <div className="navbar-title">
          <img src={reactLogo} alt="" />
          <h3>ReactFacts</h3>
        </div>
        <div className="navbar-text">
          <h4>React Course - Project 1</h4>
        </div>
      </div>
     </nav>
    )
  }
  

export default Navbar