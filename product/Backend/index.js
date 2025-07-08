//import
const express =require("express")
require("./connection")
var proModel=require("./model/product")
var cors = require('cors')
var userModel=require('./model/User')
const CartModel=require('./model/Cart')
//initilize
const app = express()

//mid
app.use(express.json());
app.use(cors());
//api crearion

app.get('/', (req, res) => {
  res.send('Hello World')
})
//api add
app.post('/add',async(req,res)=>{
    try {
        await proModel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})
app.post('/add-to-cart',async(req,res)=>{
    try {
        await CartModel(req.body).save()
        res.send({message:"Added to cart"})
    } catch (error) {
        console.log(error);
        res.send({message:"Failed to add to cart"})
    }
})

// user api add
app.post('/uadd',async(req,res)=>{
try {
    await userModel(req.body).save()
    res.send({message:"Signed up!!"})
} catch (error) {
    console.log(error)
}
})
// user view api
app.get('/uview', async(req, res) => {
 try {
    var data=await userModel.find()
    res.send(data)
 } catch (error) {
    console.log(error)
 }
})
app.get('/my-cart/:userId', async(req, res) => {
 try {
    const cartItems =await CartModel.find({userId:req.params.userId}).populate("productId");
    res.send(cartItems)
 } catch (err) {
    res.send({message:"Error fetching cart"})
    
 }
})
// api view
app.get('/view',async(req,res)=>{
    try {
       var data= await proModel.find() 
       res.send(data)
    } catch (error) {
        console.log(error)
    }
})
//login
app.post("/login",async(req,res)=>{
    try {
        var user =await userModel.findOne({Email:req.body.Email});
        if(!user){
            return res.send({message:"user not found"});
        }
        if(user.Password===req.body.Password){
            return res.send({message:"Logged in successfully",
                userType:user.userType,
                name:user.Name,
                email:user.Email,
                userId:user._id,
            });
        }
        else
        {
           return res.send({message:"Invalid credential"}); 
        }
    } catch (error) {
        console.log(error)
        return res.send("Error occured");
    }
})
//api delete
app.delete('/del/:id',async(req,res)=>{
    try {
        await proModel.findByIdAndDelete(req.params.id)
       res.send({message:"data deleted"})
    } catch (error) {
        console.log(error)
    }
});
app.delete('/delcart/:id', async(req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.send({message: "Item removed from cart"});
  } catch (error) {
   console.log(error)
  }
});
//api update
app.put('/up/:id',async(req,res)=>{
    try {
        await proModel.findByIdAndUpdate(req.params.id,req.body)
       res.send({message:"data updated"})
    } catch (error) {
        console.log(error)
    }
})
//port setting
app.listen(3002,()=>{
    console.log("port is running at 3002")
})
