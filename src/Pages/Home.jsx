import React, { useEffect } from 'react';
import './Home.css';
import Ecell_logo from '../assets/images/ecellLogo.jpeg';

const Home = () => {
    let seq = [];
    const changeColor = (id,color)=>{
        const smallGr = document.querySelector(`.smallGrids${id}`);
        smallGr.style.backgroundColor = color;
        seq.push(id);
        
    }
    const changeColor1 = (id,color)=>{
        const smallGr = document.querySelector(`.smallGrids${id}`);
        smallGr.style.backgroundColor = color;
    }
    const lastB = async ()=>{
        while(seq.length > 0){
            changeColor1(seq[seq.length-1],'#00407A');
            seq.pop();
            await sleep(1000);
        }
    }



  return (
    <>
        <div className='home'>
            <div className="homeDiv gradient"></div>
            <div className="homeDiv logo">
                <img src={Ecell_logo} alt="" />
            </div>
            <div className="homeDiv grids">
            <div className="gridContainer">
                <div onClick={()=>{changeColor(1,'#7A0000')}} className="smallGrids smallGrids1"></div>
                <div onClick={()=>{changeColor(2,'#7A0000')}} className="smallGrids smallGrids2"></div>
                <div onClick={()=>{changeColor(3,'#7A0000')}} className="smallGrids smallGrids3"></div>
                <div onClick={()=>{changeColor(4,'#7A0000')}} className="smallGrids smallGrids4"></div>
                <div onClick={()=>{changeColor(5,'#7A0000')}} className="smallGrids smallGrids5"></div>
                <div onClick={()=>{changeColor(6,'#7A0000')}} className="smallGrids smallGrids6"></div>
                <div onClick={()=>{changeColor(7,'#7A0000')}} className="smallGrids smallGrids7"></div>
                <div onClick={()=>{changeColor(8,'#7A0000')}} className="smallGrids smallGrids8"></div>
                <div onClick={lastB} className="smallGrids smallGrids9" ></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home