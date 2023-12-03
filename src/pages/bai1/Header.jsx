import React from 'react'
import './bai1.scss';

export default function Header() {
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar'>
          <div className='navbar-site'>Example Site</div>
          <div>Home</div>
          <div>Link</div>
          <div>Drop-down <i className="fa-solid fa-caret-down"></i></div>
        </div>
      </div>
    </>
  )
}
