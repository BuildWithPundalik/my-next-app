'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlogDescription from "@/components/sections/blog/blogDescription";
import BlogCards from "@/components/sections/blog/blogCards";
import BlogHero from "@/components/sections/blog/blogHero";
import Cta from "@/components/sections/cta";
import { useState,useEffect } from "react";


export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data.blogs);
    };
    fetchBlogs();
  }, []);
  

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      

      <BlogHero />
      <BlogDescription />
      <BlogCards blogs={blogs} />
      <Cta />

    </main>
  );
}
