import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowLeft, Home, Heart, GraduationCap, Clock, MapPin, ExternalLink, CheckCircle2, Utensils, Bus } from "lucide-react"
import { useRouter } from "../../context/Router"
import { useEffect } from "react"
import { motion } from "framer-motion"

export function SabaTrustMOU() {
  const { navigate } = useRouter()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const opportunityUrl = "https://aiesec.org/opportunity/global-volunteer/1336201"

  const infoBlocks = [
    {
      icon: Heart,
      label: "Organization",
      description: "Saba Trust (Social Impact & Education NGO)"
    },
    {
      icon: GraduationCap,
      label: "Program",
      description: "Global Classroom (SDG 4 Quality Education)"
    },
    {
      icon: MapPin,
      label: "Location",
      description: "Pakistan"
    },
    {
      icon: Clock,
      label: "Duration",
      description: "6 Weeks (iGV Volunteer)"
    },
    {
      icon: Home,
      label: "Accommodation & Meals",
      description: "Host family placement & local meals"
    },
    {
      icon: ExternalLink,
      label: "AIESEC Portal",
      description: "View official opportunity listing",
      link: opportunityUrl
    }
  ]

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Navigation */}
      <motion.div 
        className="bg-white shadow-sm border-b sticky top-0 z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('home')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-all transform hover:scale-105 hover:bg-blue-50 px-4 py-2 rounded-lg"
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
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Banner */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mr-4">
              <Heart className="w-8 h-8 text-pink-700" />
            </div>
            <Badge className="bg-purple-600 text-white px-4 py-2 text-lg">IGV Program</Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            MOU of Saba Trust
          </h1>
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">
            Global Classroom Project
          </h2>
          
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Saba Trust is a dedicated non-profit organization focused on community development and education. Through the Global Classroom project, volunteers directly contribute toward upscaling literacy in basic mathematics, science, and languages using non-formal education methods in an intercultural environment.
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mb-16 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={opportunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Apply Now on AIESEC Portal
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Overview Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infoBlocks.map((block, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-6 h-6 text-purple-700" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-gray-900 mb-2">{block.label}</h3>
                  {block.link ? (
                    <a 
                      href={block.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-purple-700 font-semibold hover:underline text-sm"
                    >
                      {block.description}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Responsibilities & Highlights */}
        <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Program Highlights & Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Teach foundational mathematics, basic sciences, and language skills</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Utilize non-formal and interactive education methodology</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Create an engaging, intercultural learning environment for students</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Host family stay & authentic Pakistani cultural immersion</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Certificate of Volunteer Accomplishment from AIESEC in GIKI</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Local transportation and meal arrangements provided</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-6 bg-white border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions About This Opportunity?</h3>
          <p className="text-gray-600 mb-4">Get in touch with our ICX team for application guidance</p>
          <div className="space-y-2 text-blue-900">
            <p>📧 icx.giki@aiesec.net</p>
            <p>🌐 www.aiesec.org</p>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}
