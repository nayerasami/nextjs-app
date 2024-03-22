import mongoose from "mongoose";


export function connectdb(){
    mongoose.connect("mongodb://localhost/nextdb")
    .then(()=> console.log("connected to Mongodb..."))
    .catch((err)=> console.log("couldn't coneect to mongodb..",err))
}