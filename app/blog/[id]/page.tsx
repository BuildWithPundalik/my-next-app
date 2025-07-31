// app/blog/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface ApiResponse {
  blog: Blog | null;
}

const placeholderImages = [
  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  "https://images.pexels.com/photos/18105/pexels-photo.jpg",
];

async function getBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status}`);
    }
    
    const data: ApiResponse = await res.json();
    return data.blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { id } = await params;
  
  if (!id) {
    return (
      <main className="bg-white text-gray-900 min-h-screen">
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-200">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              LOGO
            </Link>
            <nav className="space-x-8 hidden md:flex items-center">
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                About us
              </Link>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <Link href="/blog" className="text-sm font-medium text-blue-600">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                Contact us
              </Button>
            </nav>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">No blog ID provided.</p>
        </div>
      </main>
    );
  }

  const blog = await getBlog(id);

  if (!blog) {
    return (
      <main className="bg-white text-gray-900 min-h-screen">
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-200">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              LOGO
            </Link>
            <nav className="space-x-8 hidden md:flex items-center">
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                About us
              </Link>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <Link href="/blog" className="text-sm font-medium text-blue-600">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                Contact us
              </Button>
            </nav>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Blog Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist or couldn't be loaded.</p>
        </div>
      </main>
    );
  }

  // Select placeholder image based on blog ID
  const imageIndex = (blog.id - 1) % placeholderImages.length;

  return (
    <main className="bg-white text-gray-900 min-h-screen">

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto p-8">
        <article className="prose prose-lg max-w-none">
          {/* Blog Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src={placeholderImages[imageIndex]}
              alt={blog.title}
              width={800}
              height={800}
              className="w-80 h-96 object-center rounded-lg"
            />
          </div>

          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    U{blog.userId}
                  </span>
                </div>
                <span>User {blog.userId}</span>
              </div>
              <span>•</span>
              <span>Blog ID: {blog.id}</span>
              <span>•</span>
              <span>Published on {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Blog Body */}
          <div className="text-gray-600 leading-relaxed text-lg">
            {blog.body}
          </div>

          {/* Back to Blogs Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to All Blogs
            </Link>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 px-2 py-5">
        <div className="max-w-6xl mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-md font-extrabold text-blue-600">LOGO</div>
              <p className="text-sm text-gray-600 text-justify leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium natus ab corrupti?
              </p>
              <p className="text-gray-600">@lorem</p>
            </div>

            {/* About Us */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900">About us</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900">Contact</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis iusto fugit distinctio
                  </p>
                </li>
                <li>
                  <p>+908 89097 890</p>
                </li>
              </ul>
            </div>

            {/* Placeholder to balance grid */}
            <div></div>
          </div>

          <div className="flex justify-end mt-8">
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-gray-600 hover:text-pink-600"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              Copyright © 2020 and All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}