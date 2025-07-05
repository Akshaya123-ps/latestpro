import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{background:'rgb(113, 86, 122)'}}>
            <Toolbar>
                <Typography variant='h6' sx={{fontFamily:'Berlin Sans FB Demi', fontSize:40}}>Productapp</Typography>&nbsp;&nbsp;
                <Box sx={{flexGrow:1}}/>
                <Box>
                
                <Link to="/l" ><Button variant="contained" sx={{background:'rgb(160, 139, 192)'}}>Login</Button></Link>&nbsp;
                <Link to="/s" ><Button variant="contained" sx={{background:'rgb(160, 139, 192)'}}>Signup</Button>
                </Link>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar