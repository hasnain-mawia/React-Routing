import React from 'react'
import Img from '../img/home1.jpg'
import { Container,Box } from '@mui/material';


function Home() {
  return (
    <div className='home'>
<h1>Home Page</h1>
  <img src={Img} />
  <p>As schools continue to close across the country, I know many will be scrambling to set up ways for their students to continue their learning at home.  I’ve gathered a huge list of (now over 120) free educational websites for learning at home with resources and online activities you can easily assign to your students to do remotely. These websites are either always free or offer a free 30-day trial which is ideal for temporary distance learning.</p>
    </div>


  
  )
}

export default Home
