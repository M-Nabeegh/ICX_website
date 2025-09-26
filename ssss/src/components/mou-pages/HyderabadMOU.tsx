import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowLeft, Home, Users, Bus, PartyPopper, MapPin, DollarSign, Clock, GraduationCap, Heart } from "lucide-react"
import { useRouter } from "../../context/Router"

interface HyderabadMOUProps {
  title: string
  description: string
  icon: React.ElementType
  category: "Education" | "NGO"
  signedBy: string
  programFee?: string
}

export function HyderabadMOU({ title, description, icon: IconComponent, category, signedBy, programFee = "105 USD total program cost" }: HyderabadMOUProps) {
  const { navigate } = useRouter()

  const infoBlocks = [
    {
      icon: Users,
      label: "Accommodation",
      description: "Comfortable lodging arrangements provided"
    },
    {
      icon: Bus,
      label: "Transportation",
      description: "Local transport and transfers included"
    },
    {
      icon: PartyPopper,
      label: "Exclusive Cultural Invitation",
      description: "Special cultural events and celebrations"
    },
    {
      icon: MapPin,
      label: "City Visit",
      description: "Guided tours of Hyderabad's landmarks"
    },
    {
      icon: DollarSign,
      label: "Program Fee",
      description: programFee
    },
    {
      icon: Clock,
      label: "Duration",
      description: "6 weeks comprehensive experience"
    }
  ]

  const getCategoryColor = () => {
    return category === "Education" ? "bg-blue-900 text-white" : "bg-pink-600 text-white"
  }

  const getCategoryIcon = () => {
    return category === "Education" ? GraduationCap : Heart
  }

  const CategoryIcon = getCategoryIcon()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('home')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <Button
              onClick={() => navigate('home')}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className={`w-16 h-16 ${category === "Education" ? "bg-blue-100" : "bg-pink-100"} rounded-2xl flex items-center justify-center mr-4`}>
              <CategoryIcon className={`w-8 h-8 ${category === "Education" ? "text-blue-900" : "text-pink-600"}`} />
            </div>
            <Badge className={`${getCategoryColor()} px-4 py-2 text-lg`}>
              IGV Program - {category}
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mb-16">
          <Button 
            className={`${category === "Education" ? "bg-blue-900 hover:bg-blue-800" : "bg-pink-600 hover:bg-pink-700"} text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            Apply Now - Join the Program
          </Button>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infoBlocks.map((block, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${category === "Education" ? "bg-blue-100" : "bg-pink-100"} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <block.icon className={`w-6 h-6 ${category === "Education" ? "text-blue-900" : "text-pink-600"}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{block.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Highlights */}
        <Card className={`p-8 bg-gradient-to-r ${category === "Education" ? "from-blue-50 to-blue-100 border-blue-200" : "from-pink-50 to-pink-100 border-pink-200"} mb-8`}>
          <div className="text-center">
            <h3 className={`text-2xl font-bold ${category === "Education" ? "text-blue-900" : "text-pink-600"} mb-4`}>Program Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${category === "Education" ? "bg-blue-900" : "bg-pink-600"} rounded-full`}></div>
                  <span className={`${category === "Education" ? "text-blue-800" : "text-pink-700"}`}>Networking Opportunities with local professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${category === "Education" ? "bg-blue-900" : "bg-pink-600"} rounded-full`}></div>
                  <span className={`${category === "Education" ? "text-blue-800" : "text-pink-700"}`}>Cultural Exchange with Hyderabad community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${category === "Education" ? "bg-blue-900" : "bg-pink-600"} rounded-full`}></div>
                  <span className={`${category === "Education" ? "text-blue-800" : "text-pink-700"}`}>Professional development experience</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${category === "Education" ? "bg-blue-900" : "bg-pink-600"} rounded-full`}></div>
                  <span className={`${category === "Education" ? "text-blue-800" : "text-pink-700"}`}>Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${category === "Education" ? "bg-blue-900" : "bg-pink-600"} rounded-full`}></div>
                  <span className={`${category === "Education" ? "text-blue-800" : "text-pink-700"}`}>Language and cultural immersion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${category === "Education" ? "bg-blue-900" : "bg-pink-600"} rounded-full`}></div>
                  <span className={`${category === "Education" ? "text-blue-800" : "text-pink-700"}`}>Historical and cultural site visits</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Partner Information */}
        <Card className="p-6 bg-white border-gray-200 mb-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Details</h3>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Hyderabad, Sindh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Signed by {signedBy}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-6 bg-white border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-4">Get in touch with our ICX team for more information</p>
          <div className="space-y-2 text-blue-900">
            <p>📧 icx.giki@aiesec.net</p>
            <p>🌐 www.aiesec.org</p>
          </div>
        </Card>
      </div>
    </div>
  )
}