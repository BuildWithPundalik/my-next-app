import { Button } from "@/components/ui/button"

export function CtaStart() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gray-100 p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lorem Ipsum is simply
              <br />
              dummy text.
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aenean TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
              measuring dozens of completed projects, we build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p>
            <Button variant="outline" className="border-gray-400 text-gray-700 bg-transparent">
              Find More
            </Button>
          </div>
          <div className="bg-blue-600 p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lorem Ipsum is simply
              <br />
              dummy text.
            </h3>
            <p className="mb-8 leading-relaxed opacity-90">
              Aenean TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
              measuring dozens of completed projects, we build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Contact us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CtaStart;