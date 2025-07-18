"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const placeholderImages = [
  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  "https://images.pexels.com/photos/18105/pexels-photo.jpg",
];

const BlogCards = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
      {blogs.map((post, i) => (
        <div key={post.id} className="bg-white rounded-4xl transition-shadow h-[500px] w-80 mx-auto">
          <Image
            src={placeholderImages[i % placeholderImages.length]}
            alt={post.title}
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="p-6 h-60 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{post.body}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold">
                  U{post.userId}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">User {post.userId}</p>
                <p className="text-xs text-gray-500">Blog ID: {post.id}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCards;