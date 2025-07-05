import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h1>User Navbar</h1>
                <Box sx={{flexGrow:1}}/>
                
                <Link to="/v" ><Button variant="contained" sx={{background:'rgb(97, 34, 190)'}}>View</Button></Link>&nbsp;
               <Link to="/user" ><Button variant="contained" sx={{background:'rgb(97, 34, 190)'}}>Profile</Button></Link>&nbsp; 
                
            </Toolbar>
        </AppBar>
        

        </div>
  )
}

export default UserNavbar