import Image from "next/image";
import React from "react";

export default function BlogDescription() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white max-w-6xl mx-auto p-8 gap-8">
      {/* Left Image */}
      <div className="md:w-1/2 w-full py-10">
        <img
          src="https://picsum.photos/id/0/600/400"
          alt="Laptop"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the .
        </p>

        {/* Author Info + Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://picsum.photos/id/64/40/40"
              alt="Person"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="text-gray-800 font-semibold">Name here</p>
              <p className="text-gray-500">20.12.2020</p>
            </div>
          </div>

          <a href="#" className="text-blue-500 hover:underline text-sm font-medium">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
