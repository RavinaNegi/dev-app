const mongoose =require("mongoose");
const validator=require("validator");
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:67
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim :true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("email is not valid"+value);
            }}
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        validate(value)
        {
            if(!["male","female","others"].includes(value))
            {
                throw new Error("gender data is not valid")
            }
        }
    },
    age:{
        type:Number,
        min:18,
        max:80,
    },
    skills:{
        type:Array,
    },
    description:{
        type:String,
        default:"you are the user",
    },
    photoURL:{
        type:String,
        default:"fasljkfklahfkhf"

    }

},{
    timestamps:true
});

module.exports=mongoose.model("class12",userSchema);;