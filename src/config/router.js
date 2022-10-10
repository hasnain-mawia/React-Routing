import React from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Profile from "../pages/profile";
import Contact from "../pages/contact";
import Notfound from "../pages/notfound";
import {BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom';


function AppRouter() {
  return (
  <Router>
    <div>
<Link to = '/'>Home</Link>
<Link to = 'About'>About</Link>
<Link to = 'Services'>Services</Link>
<Link to = 'Contact'>Contact</Link>
</div>
<Routes>
 <Route path="/" element={<Home/>}/>   
 <Route path="About" element={<About/>}/>   
 <Route path="Services" element={<Services/>}/>   
 <Route path="Profile" element={<Profile/>}/>   
 <Route path="Contact" element={<Contact/>}/>   
 <Route path="*" element={<Notfound/>}/>   
</Routes>    
  </Router>
  
    )
}

export default AppRouter
