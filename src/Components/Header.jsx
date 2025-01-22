import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    const handleRedirect = () => {
        window.open('https://www.linkedin.com', '_blank', 'noopener noreferrer');
      };
  return (
    <>
    <div className='header'>
        <div className='leftHeader'>

        </div>
        <div className='rightHeader'>
            <Link style={{textDecoration:'none',cursor: 'pointer'}} to='/home'><p>Home</p></Link>
            <Link style={{textDecoration:'none',cursor: 'pointer'}} to='/'><p>Grid</p></Link>
            <p style={{cursor: 'pointer'}} onClick={handleRedirect}>LinkedIn</p>
        </div>
    </div>
    </>
  )
}

export default Header;