import React from 'react'

export default function BlogHero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Latest news</h2>
        <h3 className="text-blue-600 text-3xl font-bold">Updates</h3>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">Lorem Ipsum is simply dummy text of the<br/> printing.</p>

        <div className="relative mt-4 max-w-xs mx-auto">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
          </span>
          <input
        type="text"
        placeholder="Search"
        className="pl-10 px-10 py-2 bg-gray-200 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-8">
            {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((tag, index) => (
            <button key={`${tag}-${index}`} className="bg-gray-100 text-blue-500 px-8 py-2 rounded-full text-sm hover:bg-blue-200">
              {tag}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
