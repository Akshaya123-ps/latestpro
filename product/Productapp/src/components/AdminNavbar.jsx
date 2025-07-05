import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
        <AppBar sx={{background:'rgb(154, 61, 216)'}}>
            <Toolbar>
                
                <h1>Admin Navbar</h1>
                <Box sx={{flexGrow:1}}/>
                <Link to="/a" ><Button variant="contained" sx={{background:'rgb(94, 36, 180)'}}>Add</Button></Link>&nbsp;
                <Link to="/v" ><Button variant="contained" sx={{background:'rgb(97, 34, 190)'}}>View</Button></Link>&nbsp;
                <Link to="/admin" ><Button variant="contained" sx={{background:'rgb(97, 34, 190)'}}>Profile</Button></Link>&nbsp;
            </Toolbar>
            </AppBar></div>
  )
}

export default AdminNavbar