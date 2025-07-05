import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'


const AddtoCart = () => {
  var [cartItems,setCartitems]=useState([])
    console.log("loc",location.state)
    useEffect(()=>{
        axios.get('http://localhost:3002/my-cart/'+user.id)
  .then((res)=>{
    setCartitems(res.data)
  })
  .catch((err)=> console.log(err));
      },[])
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
      
    </Card>
    </Grid>
     )
      })}
      </Grid>
    </div>
  )
}

export default AddtoCart