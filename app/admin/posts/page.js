"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then(function (response) {
        // handle success
        setPosts(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [posts]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      <div className="text-center">
        <h1 className="text-center text-2xl font-bold mb-4">Posts</h1>
        <button
          className="btn bg-gray-800 text-white rounded-md p-3
         hover:bg-gray-400 transition-transform transform hover:scale-105 "
        >
          <Link href='/admin/posts/add'>ADD Post</Link>
        </button>
      </div>

      {posts.map((post) => (
        <div key={post._id} className="border border-gray-300 rounded p-4">
          <h1 className="text-lg font-semibold mb-2">Title : {post.title}</h1>
          <p className="text-gray-600">Description: {post.description} </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
