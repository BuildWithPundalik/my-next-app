import Image from "next/image"

export function FeatureSection1() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-600">Lorem Ipsum is simply dummy text</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Lorem Ipsum</span> is simply dummy
              <br />
              text of the printing.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Aenean TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
              measuring dozens of completed projects, we build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Mobile app mockup"
              width={300}
              height={400}
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection1;
