const mongoose =require("mongoose");
const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://user:Y7hL65Z6GBbrVBs3@cluster1.cpcrvum.mongodb.net/school");
};
module.exports= connectDB;