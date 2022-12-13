import React from 'react'
import styled from 'styled-components';
import {BsLinkedin , BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from  "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy;2022 AceAdventures.All rights reserved</span>
      <ul className='links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">ContactUs</a></li>
            <li><a href="#recommend">Places</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
        </ul>
        <ul className="social_links">
          <li>BsFacebook</li>
          <li>BsLinkedin</li>
          <li>AiFillInstagram</li>
        </ul>

    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
align-item:center;
display:flex;
padding:2.5rem;
background-color:#d08ff;
justify-content:space-evenly;
border-radius:0.5rem;
ul{
  display:flex;
  gap:2rem;
  list-style-type:none;
  li{
  a{
    text-decoration:none;
    color:black;

  }
}`;
