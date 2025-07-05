import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField, Typography } from '@mui/material'

const Login = () => {
   const[linput,lsetinput]=useState({Email:'',Password:''}) 
   const navigate=useNavigate()

   const inputHandler=(e)=>{
    lsetinput({...linput,[e.target.name]:e.target.value})
    console.log(linput)
  }
   const loginHandler=()=>{
     axios.post('http://localhost:3002/login',linput)
    .then((res)=>{
      alert(res.data.message)
      console.log(res.data.message)
      if(res.data.message==="Logged in successfully"){
        localStorage.setItem('user', JSON.stringify({
          email:res.data.email,
          name:res.data.name,
          userType:res.data.userType,
          id:res.data.userId
        }))
       if(res.data.userType=== "admin"){
        navigate("/admin")
       }
       else{
        navigate("/user")
       }
      }
      })
      .catch((err)=>{
        console.log("Login error",err)
        alert("An error occured during login")
      })
    }
    

  return (
    <div>
    
         <Box
      sx={{
        width: 200,
        margin: '100px auto',
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
        backgroundColor: '#f3e5f5',
      }}
    >
        <Typography variant='h4'>Login</Typography>
        <TextField variant='outlined'  label='email' name='Email' value={linput.Email} onChange={inputHandler}/><br /><br />
        
        <TextField variant='outlined'  label='password' name='Password'value={linput.Password} onChange={inputHandler}/><br /><br />
        
        <Button variant='contained' onClick={()=>{loginHandler()}}>Login</Button>
        </Box>
    </div>
  )
}

export default Login