import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Button } from "./ui/button"
import { Globe, ArrowRight, Users } from "lucide-react"
import teamImage from "figma:asset/2246c86427cc15fa9bc75e3c6618d880f8769999.png"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Global Exchange • ICX Portfolio
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                🌍 AIESEC in GIKI
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                Incoming Exchange (ICX) Portfolio
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Empowering Youth Leadership through Global Opportunities
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building bridges between global youth and Pakistani organizations through meaningful exchange experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 h-auto"
                onClick={() => scrollToSection('partnerships')}
              >
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 h-auto"
                onClick={() => scrollToSection('team')}
              >
                <Users className="mr-2 w-5 h-5" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="AIESEC in GIKI ICX Portfolio Team"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-900 rounded-2xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-400 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}