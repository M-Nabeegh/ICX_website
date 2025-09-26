import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowLeft, Home, Users, Clock, DollarSign, Building, Briefcase, Network, TrendingUp } from "lucide-react"
import { useRouter } from "../../context/Router"

export function IConsultMOU() {
  const { navigate } = useRouter()

  const infoBlocks = [
    {
      icon: Clock,
      label: "Duration",
      description: "8-12 weeks intensive program"
    },
    {
      icon: DollarSign,
      label: "Intern Salary",
      description: "PKR 100,000 per month"
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
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
              <Building className="w-8 h-8 text-green-700" />
            </div>
            <Badge className="bg-green-700 text-white px-4 py-2 text-lg">IGT Program</Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            iConsult MOU
          </h1>
          
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            iConsult, also known as International Consulting Associates, is a management consulting firm with a presence in Peshawar and other cities. It provides advisory services in finance, renewable energy, telecom/IT, and risk management, along with professional training.
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mb-16">
          <Button 
            className="bg-green-700 hover:bg-green-800 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Apply Now - Join the Program
          </Button>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {infoBlocks.map((block, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{block.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Development Highlights */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-green-100 border-green-200 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Professional Development Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-green-800">Business Consulting</h4>
                    <p className="text-green-700 text-sm">Real client projects and strategic planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                    <Network className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-green-800">Professional Networking</h4>
                    <p className="text-green-700 text-sm">Connect with industry leaders and experts</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-green-800">Skill Development</h4>
                    <p className="text-green-700 text-sm">Advanced business and analytical skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-green-800">Corporate Experience</h4>
                    <p className="text-green-700 text-sm">Immersive corporate environment exposure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Program Benefits */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-green-100 border-green-200 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Program Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-green-800">Mentorship from industry professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-green-800">Project-based learning approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-green-800">Professional certification opportunities</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-green-800">Cross-cultural business insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-green-800">Career development workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-green-800">Alumni network access</span>
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
                <Building className="w-5 h-5" />
                <span>Peshawar, KPK</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Signed by Muhammad Omer</span>
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