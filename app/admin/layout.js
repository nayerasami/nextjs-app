import Link from "next/link";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <aside className="m-4 h-96 rounded-md w-64 bg-gray-900 text-gray-100">
        
        <nav className="mt-4">
          <Link href="/admin" className="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white">Dashboard</Link>
          <Link href="/admin/posts" className="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white">Posts</Link>
          <Link href="/admin/users" className="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white">Users</Link>
          <Link href="/admin/feedbacks" className="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white">FeedBacks</Link>
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
