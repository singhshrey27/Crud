const mongoose=require('mongoose')

// creating a schema in database

const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    completed:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports=mongoose.model("Todo",TodoSchema);

// This line exports the Mongoose model for the "Todo" schema. It allows other parts of your Node.js application to access and use this model for performing database operations. The model is named "Todo," and it's based on the "TodoSchema" that you defined earlier.