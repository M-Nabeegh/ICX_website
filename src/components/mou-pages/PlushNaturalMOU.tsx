import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowLeft, Home, Building, DollarSign, Clock, MapPin, Video, Award, ExternalLink, CheckCircle2, FileText, Download } from "lucide-react"
import { useRouter } from "../../context/Router"
import { useEffect } from "react"
import { motion } from "framer-motion"

export function PlushNaturalMOU() {
  const { navigate } = useRouter()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const opportunityUrl = "https://aiesec.org/opportunity/global-talent/1331934"
  const bookletUrl = "https://drive.google.com/file/d/1t-6WUq_V132_SE4YwZeEU4jtupXYIKkn/view?usp=share_link"

  const infoBlocks = [
    {
      icon: Building,
      label: "Organization",
      description: "Plush Natural (Skincare & Beauty)"
    },
    {
      icon: MapPin,
      label: "Location",
      description: "Lahore, Pakistan"
    },
    {
      icon: DollarSign,
      label: "Monthly Stipend / Salary",
      description: "90,000 PKR / month"
    },
    {
      icon: Clock,
      label: "Duration",
      description: "6 Weeks (iGT Internship)"
    },
    {
      icon: Video,
      label: "Core Focus",
      description: "Content Creation & Marketing"
    },
    {
      icon: FileText,
      label: "Opportunity Booklet",
      description: "Download full opportunity booklet",
      link: bookletUrl
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
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
              <Building className="w-8 h-8 text-orange-700" />
            </div>
            <Badge className="bg-orange-600 text-white px-4 py-2 text-lg">IGT Program</Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Plush Natural Partnership
          </h1>
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Content Creation & Marketing Intern
          </h2>
          
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plush Natural is a premier skincare brand based in Lahore, Pakistan. This Global Talent opportunity focuses on creating on-camera social media content, developing creative campaign concepts, filming UGC-style videos, and managing brand marketing.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-16 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={opportunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Apply Now on AIESEC Portal
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
          <a 
            href={bookletUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border-2 border-orange-600 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            View Opportunity Booklet
          </a>
        </div>

        {/* Overview Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infoBlocks.map((block, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-6 h-6 text-orange-700" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-gray-900 mb-2">{block.label}</h3>
                  {block.link ? (
                    <a 
                      href={block.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-orange-700 font-semibold hover:underline text-sm"
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
        <Card className="p-8 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">Role Responsibilities & Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Create & publish engaging on-camera social media content showcasing skincare products</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Develop creative concepts, scripts, and captions for digital platforms</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Film & edit high-converting UGC-style videos (CapCut, Premiere, etc.)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Manage posting schedules & build community engagement</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Collaborate with marketing teams to align content with brand goals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">Competitive monthly salary of 90,000 PKR over 6 weeks</span>
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
