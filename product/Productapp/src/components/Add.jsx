import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var[input,setinput]=useState({Pname:'',Price:'',Desc:'',Image:""})
var navigate=useNavigate()
var location=useLocation()
console.log("loc",location.state)

  const inputHandler=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }
//update
  useEffect(()=>{
    if(location.state !==null){
      setinput({...input,Pname:location.state.val.Pname,
        Price:location.state.val.price,
        Desc:location.state.val.Disc,
        Image:location.state.val.Image,

      })
    }
  },[])
  const addproduct=()=>{
if (location.state !==null) {
    axios.put('http://localhost:3002/up/'+location.state.val._id,input)
    .then((res)=>{
      alert(res.data.message)
      navigate('/v')})
} else {
  axios.post('http://localhost:3002/add',input)
    .then((res)=>{
      alert(res.data.message)
      navigate('/view')
    
    })
  }
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
        
      }}>
        {/* <br /><br /><br /><br /> */}
        <Typography variant='h4'>Add product</Typography>
        <TextField variant='outlined'  label='Product name' name='Pname' value={input.Pname} onChange={inputHandler}/><br /><br />
        <TextField variant='outlined'  label='Price' name='Price' value={input.Price} onChange={inputHandler}/><br /><br />
        <TextField variant='outlined'  label='Description' name='Desc' value={input.Desc} onChange={inputHandler}/><br /><br />
        <TextField variant='outlined'  label='image' name='Image' value={input.Image} onChange={inputHandler}/><br /><br />
        
        <Button variant='contained' onClick={()=>{addproduct()}} >Add</Button>
        <br /><br /><br />
        </Box>
    </div>
  )
}

export default Add