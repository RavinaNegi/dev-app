const express=require("express");
const connectDB=require("./config/database");
const app=express();
app.use(express.json())
const User=require("./models/user");
app.post("/signup",async (req,res)=>{
    console.log(req.body);
   
    const user=new User(req.body);
  
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


