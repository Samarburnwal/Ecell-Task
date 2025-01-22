import React, { useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import threeLine from '../assets/images/pngegg.png';
import cross from '../assets/images/cancel.png'


const Header = () => {
    const handleRedirect = () => {
        window.open('https://www.linkedin.com/in/samar-burnwal-387144288/', '_blank', 'noopener noreferrer');
      };
    const handleNav = ()=>{
      const thr = document.querySelector('.threeLine');
      const cr = document.querySelector('.cross');
      const sidebar = document.querySelector('.sidebar');
      thr.style.display = 'none';
      cr.style.display = 'block';
      sidebar.style.display = 'block';
    }
    const handleNav1 = ()=>{
      const thr = document.querySelector('.threeLine');
      const cr = document.querySelector('.cross');
      const sidebar = document.querySelector('.sidebar');
      thr.style.display = 'block';
      cr.style.display = 'none';
      sidebar.style.display = 'none';
    }
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
    <img src={threeLine} className='threeLine' onClick={handleNav} alt="" />
    <img src={cross} className='cross' onClick={handleNav1} alt="" />
    <div className='sidebar'>
      <Link style={{textDecoration:'none',cursor: 'pointer'}} to='/home'><p>Home</p></Link>
      <Link style={{textDecoration:'none',cursor: 'pointer'}} to='/'><p>Grid</p></Link>
      <p style={{cursor: 'pointer'}} onClick={handleRedirect}>LinkedIn</p>
    </div>

    </>
  )
}

export default Header;