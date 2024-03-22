import mongoose from "mongoose";

const postSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true,"please provide post title"],
        min:5
    },
    description:{
        type:String,
        required:true,
        max:2000
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Post =  mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;