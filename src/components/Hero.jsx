import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'; 
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
      <img src={"https://res.cloudinary.com/dc8kig0rh/image/upload/v1670653002/pexels-francesco-ungaro-2835436_yjbywk.jpg"} height={570} alt="homeimage" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p> Some travel to learn more while some travel to take a break from their life.
            </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go?</label>
            <input type="text" placeholder='search'/>
          </div>
          <div className="container">
            <label htmlFor="">From</label>
            <input type="date" value="2022-12-13"/>
          </div>
          <div className="container">
            <label htmlFor="">Till</label>
            <input type="date" value="2022-12-17"/>
          </div>
          <button><Link to="/places">Explore Now </Link> </button>
        </div>
      </div>
    </Section>
  )
}
const Section = styled.section`
position:relative;
margin-top:2rem;
width:100%;
height:100%;
.background{
  img{
    width:100%;
    }
}
.content{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  z-index:3;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:1rem;
  .title{
    color:white;
    h1{
      color:black;
      font-size:3rem;
      letter-spacing:0.2rem;
    }
    p{
      text-align:center;
      padding:0 30vw;
      margin-top:0.5rem;
      font-size:1.2rem;
    }
  }
  .search{
    display:flex;
    background-color:white;
    padding:0.5rem;
    border-radius:0.5rem;
    button{
      a{
        color:white;
        text-decoration:none;
      }
    }
    .container{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:;
      padding:0 1.5rem;
      label{
        font-size:1.1rem;
        color:#03045e;
      }
      input{
        background-color:transparent;
        border:none;
        text-align:center;
        color:black;
        &[type="date"]{
          padding-left:3rem;
        }
        &::placeholder{
          color:black;
        }
        &:focus{
          outline:none;
        }
      }
    }
    button{
      padding:1rem;
      cursor:pointer;
      border-radius:0.3rem;
      border:none;
      color:white;
      background-color:#4361ee;
      font-size:1.1rem;
      text-transform:uppercase;
      transition:0.3s ease-in-out;
      &:hover{
        color:#4361ee;
        background-color:black;
      }
    }
    }
  }
}
@media screen and (min-width:280px) and (max-width:980px){
  height:25rem;
  .background{
    img[
      height:100%;
    ]
  }
  .content{
    .title{
      h1{
        font-size:1rem;
      }
      p{
        font-size:0.8rem;
        padding:1vw
      }
    }
    .search{
      flex-direction:column;
      padding:0.8rem;
      gap:0.8rem;
      .container{
        padding:0 0.8rem;
        input[type="date"]{
          padding-left:1rem;
        }
      }
      button{
        padding:1rem;
        font-size:1rem;
      }
    }
    }
  }

`;