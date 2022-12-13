import * as React from 'react';
import './app1.css';
import paris from './components/paris.jpg';
import colla from './components/collaseum.jpg';
import beach from './components/beach.jpg';

function Startup1(){
    return(
        <>
        <div className="main">
            <div className='homepage'>
                <h1 className="h11">Ace Adventures</h1>
                <div className='MainButtons'>
                <button className="button1" >Places</button>
                <button className="button2">Q/A's</button>
                <button className="button3">Contact Us</button>
                </div>
                <button className="signin">SIGN IN</button> 
            </div>
            <div className="country">
                <label><b>Select Country</b></label><br></br>
                <select country="Ind">
                    <option>🇮🇳</option>
                    <option>🇺🇸</option>
                    <option>🇨🇦</option>
                    <option>🇱🇰</option>
                    <option>🇸🇦</option>
                    <option>🇳🇵</option>
                </select>
            </div>
            <div className='homeLogolabel'>
                <p><b> Ace Adventures</b></p>
            </div>
            <div className="deals">
                <h4><i>Offer ends in 5 days</i></h4>
                <h2>"Make your dream trip happen with</h2><h2>Black Friday Deals"</h2>
            </div>
            <div className="where">
                <h1>Where Are You</h1>
                <h4>Going?</h4>
            </div>
            <div className='ImagesAtttach '>
            <div className="frontdownimage">
                <img src={paris} alt="paris"></img>
            </div>
            <div className="sideimage2">
                <img src={beach} alt="beach"></img> 
            </div>
            <div className="sideimage1">
                <img src={colla} alt="colla"></img>
            </div>
            </div>
            <div className="LogoHome">
                <img src={"https://res.cloudinary.com/dc8kig0rh/image/upload/v1670664258/Screenshot_20221125_215122-removebg-preview_qsizoz.png"} alt="logo" height={70} width={70}></img>
            </div>
        </div>
        </>
    )
}

export default Startup1;