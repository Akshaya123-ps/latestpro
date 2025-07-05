var mongoose=require('mongoose');
var uschema=mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Phone:Number,
    userType:{type:String,enum:['admin','user'],default:"user"},
});
var UserModel=mongoose.model("user",uschema)
module.exports=UserModel