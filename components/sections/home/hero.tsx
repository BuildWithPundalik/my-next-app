import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="absolute top-20 right-20 w-20 h-20 bg-red-400 rounded-full opacity-80"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-1/3 w-12 h-12 bg-yellow-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 right-40 w-32 h-32 bg-green-400 rounded-full opacity-50"></div>
      <div className="absolute top-60 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Experienced <span className="text-blue-600">mobile and web</span>
              <br />
              applications and website
              <br />
              builders measuring.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Aenean TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
              measuring dozens of completed projects, we build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">Contact us</Button>
              <Button variant="outline" className="px-8 bg-transparent">
                Find more
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Person working on laptop"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default Hero;