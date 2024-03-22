"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const onAddPost = async () => {
    const response = await axios.post("http://localhost:3000/api/posts", post);
    console.log(response);
    router.push("/admin/posts");
  };
  return (
    <div className="flex flex-col items-center  p-4">
      <h1 className="text-gray-800 font-bold mb-4">ADD POST</h1>
      <label htmlFor="title">Post Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="border
            border-gray-400
            rounded-md
            focus:border-gray-600"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <label htmlFor="description">Post Description</label>
      <input
        type="text"
        name="description"
        id="description"
        className="border
            border-gray-400
            rounded-md
            focus:border-gray-600"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <button
        className="btn bg-gray-800 text-white rounded-md px-6 py-2 mt-5
         hover:bg-gray-400 transition-transform transform hover:scale-105"
        onClick={onAddPost}
      >
        ADD
      </button>
    </div>
  );
};

export default AddPost;
