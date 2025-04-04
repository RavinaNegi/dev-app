const express=require("express");
const connectDB=require("./config/database");
const app=express();
const User=require("./models/user");
app.post("/signup",async (req,res)=>{
   
    const user=new User({
        firstName:"ram",
        lastName:"ram",
        email:"ram@ayo.com",
        password:"ramram"

    });
    try{
    await user.save();
    res.send("user added successfully")
    }catch(err)
    {
        res.status(400).send("error saving the error")
    }
});
connectDB()
.then(()=>{
    console.log("connetion to database successfully");
    app.listen(3000,()=>{
        console.log("you server is listening from port 3000")
    });


})
.catch(err=>{
    console.err("connection failed")
})


