import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {
  
  return (
    <div className='contact'>
<h1>Contact Page</h1>
<h3>Submit a Quiery</h3>
<TextField sx={{width:500 ,marginBottom:3}}id="outlined-basic" label="Full Name" variant="outlined" />
<TextField sx={{width:500 ,marginBottom:3}}id="outlined-basic" label="Email" variant="outlined" />
<TextField sx={{width:500 ,marginBottom:2}}id="outlined-basic" label="Message" variant="outlined" />
<Button variant="contained" onClick={()=> alert("Are you looking to contact any person")} sx={{width:500}}>Submit</Button>

    </div>
  )
}

export default Contact