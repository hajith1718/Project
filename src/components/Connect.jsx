import React from 'react';
import styled from 'styled-components';
export default  function Connect(){
    return(
        <Section id="connect">
        <div className= 'Loginpage'>
            <div className='Bg1'>
                <img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670656147/227354_itb0zm.jpg" height={500} width={600} alt="1"></img>
                <img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670662870/92471_sfixfr.png" height={500} width={600} alt="2"></img>
            </div>
            <div className='Quote1'>
                <p className='Q1'><b>"Some beautiful paths<br></br>can’t be discovered without<br></br>getting lost..."</b></p>
            </div>
            <div className='Quote2'>
                <p className='Q2'><b>PROJECT : ACE ADVENTURES</b></p>
            </div>
            <div className='Quote3'>
                <p className='Q3'><b>TRAVEL ORGANIZATION AGENCY</b></p>
            </div>
            <div className='Quote4'>
                <p className='Q4'><b>Login to your Account</b></p>
            </div>
            <p className='Align1'>E-mail ID   :</p>
            <input className='Align2' type="text" placeholder="Enter E-mail ID" />
            <p className='Align3'>Password   :</p>
            <input className='Align4' type="text" placeholder="Enter password" />
            <button className='Align5'>Sign In</button>
            <button className='Align6'><img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670663907/image8-2_dklgit.webp" alt="3" height={23} width={55}></img>Sign up with Google</button>
            <p className='Align7'>Don't have an account?... Create one</p>
            <button className='Align8'>Create Account</button>
            <div className='Quote5'>
                <img className='Logo' alt ="4" src="https://res.cloudinary.com/dc8kig0rh/image/upload/v1670664258/Screenshot_20221125_215122-removebg-preview_qsizoz.png" height={80} width={80}></img>
                <p className='Logo'><b>ACE ADVENTURES</b></p>;
            </div>
        </div>
        </Section>
    )
}
const Section= styled.section`
.Bg1{
    position: absolute;
    opacity: 0.7;
    top : 13%;
    left: 12%;
  }
  .Bg2{
    position: absolute;
    top: 15%;
    left: 13%;
  }
  .Quote1 p.Q1{
    position: absolute;
    color: white;
    font-size: xx-large;
    top: 34%;
    left: 19%;
  }
  .Quote2 p.Q2{
    position: absolute;
    color: white;
    font-size: x-small;
    top: 75%;
    left: 13%;
  }
  .Quote3 p.Q3{
    position: absolute;
    color: white;
    font-size: xx-small;
    top: 78%;
    left: 13%;
  }
  .Quote4 p.Q4{
    position: absolute;
    color: black;
    font-size: xx-large;
    top: 15%;
    left: 60%;
    font-family: 'Times New Roman', Times, serif;
  }
  .Align1{
      position: absolute;
      color: black;
      font-size: large;
      top: 35%;
      left: 58%;
    }
  .Align2{
    position : absolute;
    left: 67%;
    top: 37%;
    border-radius: 5px;
    font-size: medium;
    padding: 5px 15px;
    }
  
    
  .Align3{
    position: absolute;
    color: black;
    font-size: large;
    top: 45%;
    left: 58%;
    }
  .Align4{
    position : absolute;
    left: 67%;
    top: 47%;
    border-radius: 5px;
    font-size: medium;
    padding: 5px 15px;
    }
  .Align5{
    position : absolute;
    left: 58%;
    top: 56%;
    font-size: medium;
    background-color: rgb(0, 0, 0);
    color: white;
    padding: 5px 158px;
    border-radius: 8px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    cursor: pointer;
  }
  .Align6{
    position : absolute;
    left: 58%;
    top: 63%;
    font-size: medium;
    background-color: white;
    color: black;
    padding: 5px 84px;
    border-radius: 8px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    cursor: pointer;
  }
  .Align7{
    position : absolute;
    left: 58%;
    top: 69%;
    font-size: small;
  }
  
  .Align8{
    position : absolute;
    left: 58%;
    top: 75%;
    font-size: medium;
    background-color: black;
    color: white;
    padding: 5px 130px;
    border-radius: 8px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    cursor: pointer;
  }
  .Quote5 img.Logo{
    position: relative;
    left: 12%;
    top: 12%;
  }
  .Quote5 p.Logo{
    position: absolute;
    left: 17%;
    top: 14%;
    color: white;
    font-size: small;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .Loginpage button:hover{
    transform: scale(1.1);
  }
  .Google{
    top:70%;
  }`;

