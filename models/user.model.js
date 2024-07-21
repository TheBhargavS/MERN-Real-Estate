import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
     username:{
         type:String,
         required:true,
         unique:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
         type:String,
         required:true,
     },
     avatar:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.H3Xxvz-5yotdS4Xr6SfnmwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.7&pid=1.7"
     },

}, {timestamps:true} )

const User = mongoose.model('User', userSchema)

export default User
