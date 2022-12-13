import React from 'react'
import Hero from './components/Hero'
import Connect from './components/Connect'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import Places from './components/Places'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
export default function App() {
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/connect" element={<Connect/>}/>
      </Routes>
    </Router>
    </>
  );
}
