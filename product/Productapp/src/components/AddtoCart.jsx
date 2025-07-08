import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const AddtoCart = () => {
  const user= JSON.parse(localStorage.getItem('user'));
  var [cartItems,setCartitems]=useState([])
    console.log("loc",location.state)
    useEffect(()=>{
        axios.get('http://localhost:3002/my-cart/'+user.id)
  .then((res)=>{
    setCartitems(res.data)
  })
  .catch((err)=> console.log(err));
      },[])
       const handleRemove = (cartItemId) => {
        axios.delete(`http://localhost:3002/delcart/${cartItemId}`)
      .then((res) => {
        console.log(res.data.message)
       alert(res.data.message)
       
        setCartitems(prevItems => prevItems.filter(item => item._id !== cartItemId));
      })
      .catch((err) => {
        console.log(err);
        // You might want to add user feedback here
      });
  };
  return (
    <div>
      <Grid container spacing ={2}>
      {cartItems.map((item)=>{
        return (
          
        <Grid item xs={12} md={4} sm={6} key={item._id}>  
          <br /><br /><br />
        <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        component="img"
        alt="image"
        height="300"
        width="100"
        image={item.productId.Image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{item.productId.Pname} </Typography>
         <Typography  variant="h5" sx={{ color: 'text.secondary' }}>₹{item.productId.price} </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}> {item.productId.Disc} </Typography>
       
      </CardContent>
       <Button variant='contained' color="error"onClick={() => handleRemove(item._id)} sx={{ margin: 2 }}>Remove</Button>
    </Card>
    </Grid>
     )
      })}
      </Grid>
    </div>
  )
}

export default AddtoCart
