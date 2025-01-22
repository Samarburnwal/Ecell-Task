import React from 'react';
import './Secondpage.css';
import profileImg from '../assets/images/Seong_Gihun.webp'


const Secondpage = () => {
  return (
    <>
        <div className='secondPage'>
            <div className="myInfo">
                <div className="imagePr"><img className='profileImg' src={profileImg} alt="" /></div>
                <p>Name</p>
                <p>Registration Number</p>
                <button>Lets Play</button>
            </div>
        </div>
    </>
  )
}

export default Secondpage