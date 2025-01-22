import React, { useEffect } from 'react';
import './Secondpage.css';
import profileImg from '../assets/images/profileImg.jpeg';
import kanche from '../assets/images/kanche.jpg';
import ladder from '../assets/images/Ladder.webp';
import bedroom from '../assets/images/Bedroom.jpeg';
import firstsoldier from '../assets/images/firstsoldier.png'
import middleoldier from '../assets/images/middlesoldier.png'
import lastsoldier from '../assets/images/lastsoldier.png'



const Secondpage = () => {

  useEffect(()=>{
    const background1 = document.querySelector('.secondPage');

    background1.style.backgroundImage = `url(${bedroom})`;
    background1.style.backgroundSize = 'cover';
    background1.style.backgroundPosition = 'center';
    console.log(background1);
  },[]);

  const handleRedirect = () => {
    window.open('https://www.instagram.com/samar_burnwal/', '_blank', 'noopener noreferrer');
  };
  return (
    <>
        <div className='secondPage'>
            <div className="soldier firstSoldier">
                <img className='' src={firstsoldier} alt="" />
            </div>
            <div className="myInfo">
                <div className="imagePr"><img className='profileImg' src={profileImg} alt="" /></div>
                <p>SAMAR</p>
                <p>20233247</p>
                <button onClick={handleRedirect}>Lets Play</button>
            </div>
            <div className="soldier secondSoldier">
                <img src={lastsoldier} alt="" />
            </div>
        </div>
    </>
  )
}

export default Secondpage