const express=require("express");
const app=express();
app.use("/",(req,res)=>{
    res.send("what is ");

});
app.use("/title",(req,res)=>{
    res.send("what is your name");

});
app.listen(3000,()=>{
    console.log("you server is listening from port 3000")
});