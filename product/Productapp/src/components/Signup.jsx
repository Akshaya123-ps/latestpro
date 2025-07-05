import axios from 'axios'
import React, { useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

const Signup = () => {
   var[uinput,usetinput]=useState({Name:'',Email:'',Password:'',Phone:""}) 

     const inputHandler=(e)=>{
    usetinput({...uinput,[e.target.name]:e.target.value})
    console.log(uinput)
  }
      const adduser=()=>{

    axios.post('http://localhost:3002/uadd',uinput)
    .then((res)=>{
      alert(res.data.message)
      console.log(res.data.message)
      })
    }
  return (
    <div>
         
         <Box
      sx={{
        width: 300,
        margin: '100px auto',
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
        backgroundColor: '#e8f5e9',
        
      }}
    >
        <br /><br />
        <Typography variant='h4'>Signup</Typography>
        <TextField variant='outlined'  label='name' name='Name' value={uinput.Name} onChange={inputHandler}/><br /><br />
        <TextField variant='outlined'  label='email' name="Email" value={uinput.Email} onChange={inputHandler}/><br /><br />
        <TextField variant='outlined'  label='password' name="Password" value={uinput.Password} onChange={inputHandler}/><br /><br />
        <TextField variant='outlined'  label='phone' name="Phone" value={uinput.Phone} onChange={inputHandler}/><br /><br />
        <Button variant='contained' onClick={()=>{adduser()}}>Signup</Button>
        <br /><br /><br />
        </Box>
    </div>
  )
}

export default Signup