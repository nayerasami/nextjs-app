import { NextResponse } from "next/server";
import schema from "./schema";
import Post from "@/app/models/post.model";
import { connectdb } from "@/app/db/dbConfig";

connectdb();

export async function GET(request){
    const posts = await Post.find();
    return NextResponse.json({status:"success",data:posts});
}

export async function POST(request){
    const body = await request.json();

    const validation  =  schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})

    const newPost = await Post.create({
       ...body
    });

    return NextResponse.json(newPost,{status:201});

}