import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Building, GraduationCap, Heart, MapPin, User, FileText } from "lucide-react"

export function Partnerships() {
  const partnerships = [
    {
      name: "Shah International Schools",
      type: "IGV",
      location: "Topi, KPK",
      signedBy: "Wajahat Shah",
      icon: GraduationCap,
      category: "Education"
    },
    {
      name: "HITMS University",
      type: "IGV",
      location: "Hyderabad Sindh",
      signedBy: "Saeed Uddin Shaikh",
      icon: GraduationCap,
      category: "Education"
    },
    {
      name: "IIUI School",
      type: "IGV",
      location: "Hyderabad Sindh",
      signedBy: "Marvie Musaddiq",
      icon: GraduationCap,
      category: "Education"
    },
    {
      name: "PakUraan Foundation",
      type: "IGV",
      location: "Hyderabad Sindh",
      signedBy: "Ghulam Mustafa",
      icon: Heart,
      category: "NGO"
    },
    {
      name: "Talpur Foundation",
      type: "IGV",
      location: "Hyderabad Sindh",
      signedBy: "Ghulam Mustafa",
      icon: Heart,
      category: "NGO"
    },
    {
      name: "iConsult",
      type: "IGT",
      location: "Peshawar, KPK",
      signedBy: "Muhammad Omer",
      icon: Building,
      category: "Corporate"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education":
        return "bg-blue-100 text-blue-900"
      case "NGO":
        return "bg-pink-100 text-pink-900"
      case "Corporate":
        return "bg-green-100 text-green-900"
      default:
        return "bg-gray-100 text-gray-900"
    }
  }

  const getTypeColor = (type: string) => {
    return type === "IGV" ? "bg-purple-100 text-purple-900" : "bg-orange-100 text-orange-900"
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnerships & MOUs</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong collaborations across Pakistan demonstrate the trust organizations place in ICX
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-900">6</div>
              <div className="text-blue-700 font-medium">Total MOUs Signed</div>
              <div className="text-sm text-blue-600">First Half of 2025</div>
            </div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-900">5</div>
              <div className="text-purple-700 font-medium">IGV Partnerships</div>
              <div className="text-sm text-purple-600">Social Impact Focus</div>
            </div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-900">1</div>
              <div className="text-orange-700 font-medium">IGT Partnership</div>
              <div className="text-sm text-orange-600">Professional Development</div>
            </div>
          </Card>
        </div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerships.map((partnership, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <partnership.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{partnership.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className={getTypeColor(partnership.type)}>
                    {partnership.type}
                  </Badge>
                  <Badge className={getCategoryColor(partnership.category)}>
                    {partnership.category}
                  </Badge>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {partnership.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    Signed by {partnership.signedBy}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="w-4 h-4 mr-2" />
                    MOU Active
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">Ready to Partner with Us?</h3>
            <p className="text-xl text-blue-100">
              Join our growing network of partners and make a meaningful impact through global exchange programs.
            </p>
            <div className="space-y-2">
              <p className="text-blue-200">📧 icx.giki@aiesec.net</p>
              <p className="text-blue-200">🌐 www.aiesec.org</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}