const express=require("express");
const connectDB=require("./config/database");
const app=express();
app.use(express.json())
const User=require("./models/user");
const { ReturnDocument } = require("mongodb");
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
app.get("/user", async (req,res)=>{
    const email=req.body.email;
    try{
   const users=  await  User.find({email:email});
   if(users.length===0)
   {
    res.status(400).send("user not found");

   }
    res.send(user);
    }catch(err){
        res.status(400).send("something went wrong");
        
    }
});
app.get("/feed", async (req,res)=>{
    
    try{
        const users=  await  User.find({});
          res.send(users);
    }catch(err){
        res.status(400).send("something went wrong");
        
    }
});
app.delete("/user", async (req,res)=>{
    const id=req.body.id;
    try{
      //const user=await User.findByIdAndDelete(id);//both will work
        const user=await User.findByIdAndDelete({_id:id});
        res.send("user delete successfully")
        console.log(user);

    }catch(err){
        res.status(400).send("something went wrong");
        
    }

});
app.patch("/user/:id", async (req,res)=>{
    const id=req.params?.id;
    const data=req.body;
    try{
        const AllowedUpdate=["photoURL","gender"]
        const isUpdateAllowed=Object.keys(data).every((k)=>{AllowedUpdate.includes(k)});
        if(!isUpdateAllowed)
        {
            throw new Error("update not allowed")
        }
        if(skills.length>10)
        {
            throw new Error("skills cannot be more than 10")
        }
      //const user=await User.findByIdAndDelete(id);//both will work
        const user=await User.findByIdAndUpdate({_id:id},data,{
            returnDocument:"before", runValidators:true});
        res.send("user updata successfully")
        console.log(user);

    }catch(err){
        res.status(400).send("update failed"+err.message);
        
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


