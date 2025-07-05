import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const user= JSON.parse(localStorage.getItem('user'));
const navigate=useNavigate()
const handleLogout=() =>{
    localStorage.removeItem('user')
    navigate("/l")
}
  return (
    <div>
        <br /><br />
        <h1>Admin</h1>
        <h2>name:{user.name}</h2>
        <h3>email:{user.email}</h3>
        <Button variant='contained' onClick={handleLogout}>Logout</Button>
    
    </div>
  )
}

export default Admin