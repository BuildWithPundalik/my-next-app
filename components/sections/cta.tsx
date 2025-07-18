import React from 'react'
import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <div>   {/* Final CTA */}
      <section className="bg-sky-50 py-25 text-center">
        <div className="max-w-4xl mx-auto px-8 ">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Lorem Ipsum is simply dummy <br />
            text of the printing.
          </h2>
          <div className="max-w-xl mx-auto mb-8 py-10">
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-black shadow-md shadow-t-md"
              />
              <Button className="bg-black hover:bg-gray-800 text-white text-xs px-7 py-6 rounded-lg shadow-md">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section></div>
  )
}
