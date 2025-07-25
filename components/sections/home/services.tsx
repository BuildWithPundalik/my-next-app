import { Card, CardContent } from "@/components/ui/card"
import { Globe, Search, Smartphone, Monitor } from "lucide-react"

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 border-0 shadow-sm bg-purple-50">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Application</h3>
              <p className="text-sm text-gray-600">Web application development</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-sm bg-green-50">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SEO</h3>
              <p className="text-sm text-gray-600">Search engine optimization</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-sm bg-blue-50">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">API/VS Solutions</h3>
              <p className="text-sm text-gray-600">API and VS solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-sm bg-orange-50">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Applications</h3>
              <p className="text-sm text-gray-600">Mobile app development</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default Services;