import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
  var [product,setproduct]=useState([])
  const user = JSON.parse(localStorage.getItem('user'));
   const navigate=useNavigate()
  //useEffect((=>{},[])) syntax
  useEffect(()=>{
  axios.get('http://localhost:3002/view')
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  })
  },[])
  const deleteproduct=(id)=>{
    console.log(id)
    axios.delete('http://localhost:3002/del/'+id)
    .then((res)=>{
       console.log(res.data.message)
       alert(res.data.message)
       window.location.reload() 
    })
  }
  const addTocart=(productId)=>{
    axios.post("https://localhost:3002/add-to-cart",{
      userId:user?.id,
      productId:productId
    }).then((res)=>{
      alert(res.data.message);
    })
  }
  const updateproduct=(val)=>{
    navigate("/a",{state:{val}})
  }
  return (
    <div>
      <Grid container spacing ={2}>
      {product.map((val)=>{
        return (
          
        <Grid xs={12} md={4} sm={6}>  
          <br /><br /><br />
        <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        component="img"
        alt="image"
        height="300"
        width="100"
        image={val.Image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{val.Pname} </Typography>
         <Typography  variant="h5" sx={{ color: 'text.secondary' }}>₹{val.price} </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}> {val.Disc} </Typography>
      </CardContent>
      <CardActions>
      {
     
        user?.userType ==="admin" ? ( 
       <>
        <Button size="small" variant='contained' color='success' onClick={()=>{updateproduct(val)}} >Update</Button>
        <Button size="small" variant='contained' color="error" onClick={()=>{deleteproduct(val._id)}}>Delete</Button>
      </>
      ) : (
       <Button size="small" variant='contained' color="primary" onClick={()=>{addTocart(val._id)}}>Add to cart</Button>
      )
    }
     </CardActions>
    </Card>
    </Grid>
     )
      })}
      </Grid>
    </div>
    
  )
}

export default View