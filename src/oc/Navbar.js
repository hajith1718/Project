import React from 'react'
import "./styles.css";

function Navbar() {
  return (
    <div className='nav'>
      <a href ='/' className='site-title'>ACE ADVENTURES</a>
      <ul>
        <li className='active'>
          <a href='/Homepage'>Home</a>
        </li>
        <li className='active'>
          <a href='/Places'>Places</a>
        </li>
        <li className='active'>
          <a href="/qa">Q/A's</a>
        </li>
      </ul>
      <button>Connect</button>
    <Nav/>
  )
}

export default Navbar;
