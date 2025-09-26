import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowLeft, Home, Users, Utensils, Bus, DollarSign, Clock, GraduationCap, FileText, Download, ExternalLink } from "lucide-react"
import { useRouter } from "../../context/Router"

export function ShahInternationalMOU() {
  const { navigate } = useRouter()

  const infoBlocks = [
    {
      icon: Home,
      label: "Accommodation",
      description: "Host family placement with local families"
    },
    {
      icon: Utensils,
      label: "Meals Provided",
      description: "Three meals daily included in program"
    },
    {
      icon: Bus,
      label: "Transportation",
      description: "Local transport arrangements provided"
    },
    {
      icon: DollarSign,
      label: "Program Fee",
      description: "60 USD total program cost"
    },
    {
      icon: Clock,
      label: "Duration",
      description: "6 weeks comprehensive experience"
    },
    {
      icon: FileText,
      label: "Opportunity Booklet",
      description: "Discover the complete program details",
      link: "https://drive.google.com/file/d/1k8k0yDXN502RM4lRARs9lYHkVKsimuZw/view?usp=drive_link"
    }
  ]

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
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
              <GraduationCap className="w-8 h-8 text-blue-900" />
            </div>
            <Badge className="bg-blue-900 text-white px-4 py-2 text-lg">IGV Program</Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            MOU of Shah International School
          </h1>
          
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shah International School in Topi, Swabi is a private English-medium institution that focuses on modern classroom technology and strong exam performance. It serves students from early grades through secondary school, offering smart classes, interactive boards, and community events.
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mb-16">
          <Button 
            className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Apply Now - Join the Program
          </Button>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infoBlocks.map((block, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-6 h-6 text-blue-900" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-gray-900 mb-2">{block.label}</h3>
                  {block.link ? (
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
                      <a 
                        href={block.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group font-medium text-sm"
                      >
                        <Download className="w-4 h-4 group-hover:animate-bounce" />
                        View Booklet
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Highlights */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Program Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-blue-800">Networking Opportunities with local educators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-blue-800">Cultural Exchange with Pakistani families</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-blue-800">Professional teaching experience</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-blue-800">Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-blue-800">Language immersion experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-blue-800">Local sightseeing and cultural tours</span>
                </div>
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