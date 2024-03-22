import { NextResponse } from "next/server";
import Post from "@/app/models/post.model";

export async function GET(request,{params}){
    const post=await Post.findById(params.postId)
    console.log(post)
    if(!post)
        return NextResponse.json({error:'post not found!'},{status:404})

    return NextResponse.json({status:"success",data:post})
}

export async function PATCH(request,{params}){
    const body = await request.json();
    const postId=params.postId;

    //check if post founded
    const post=await Post.findById(postId);
    if(!post)
        return NextResponse.json({error:'post not found!'},{status:404});

    // update
    const updatedPost= await Post.findByIdAndUpdate(
        postId,
        body,
        { new: true })
    return NextResponse.json({status:"success",data:updatedPost})

}

export async function DELETE(request,{params}){
    const postId=params.postId;
    const post=await Post.findById(postId);
    if(!post)
        return NextResponse.json({error:'post not found!'},{status:404});

    await Post.findByIdAndDelete(postId);
    return NextResponse.json({message:"deleted post successfully!"})
}