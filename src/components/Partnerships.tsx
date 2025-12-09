import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Building, GraduationCap, Heart, ExternalLink, Home, Car, Utensils } from "lucide-react"
import { useRouter } from "../context/Router"

export function Partnerships() {
  const { navigate } = useRouter()

  const partnerships = [
    {
      name: "Shah International Schools",
      type: "IGV",
      programName: "Global Classroom",
      icon: GraduationCap,
      category: "Education",
      route: "mou-shah"
    },
    {
      name: "HITMS University",
      type: "IGV",
      programName: "Global Classroom",
      icon: GraduationCap,
      category: "Education",
      route: "mou-hitms"
    },
    {
      name: "IIUI School",
      type: "IGV",
      programName: "Green Leaders",
      icon: GraduationCap,
      category: "Education",
      route: "mou-iiui"
    },
    {
      name: "PakUraan Foundation",
      type: "IGV",
      programName: "Global Classroom",
      icon: Heart,
      category: "NGO",
      route: "mou-pakuraan"
    },
    {
      name: "Talpur Foundation",
      type: "IGV",
      programName: "On the Map",
      icon: Heart,
      category: "NGO",
      route: "mou-talpur"
    },
    {
      name: "iConsult",
      type: "IGT",
      programName: "Consulting Intern",
      icon: Building,
      category: "Corporate",
      route: "mou-iconsult"
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
    <section id="partnerships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnerships</h2>
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
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200 cursor-pointer group hover:scale-105"
              onClick={() => navigate(partnership.route as any)}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <partnership.icon className="w-6 h-6 text-gray-700 group-hover:text-blue-900 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">{partnership.name}</h3>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
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

                {/* Program Details */}
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-800 mb-3">
                      {partnership.programName}
                    </div>
                    
                    {/* Program Icons or Salary Info */}
                    {partnership.name === "iConsult" ? (
                      <div className="text-lg font-bold text-green-600">
                        100,000 (PKR) salary
                      </div>
                    ) : (
                      <div className="flex justify-center gap-2 flex-wrap">
                        <Home className="w-5 h-5 text-blue-600" />
                        <Car className="w-5 h-5 text-purple-600" />
                        {partnership.name !== "Talpur Foundation" && partnership.name !== "IIUI School" && (
                          <Utensils className="w-5 h-5 text-orange-600" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-colors text-sm font-medium">
                    <span>View Program Details</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
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

        {/* Useful Links Section */}
        <Card className="mt-8 p-8 bg-white border-2 border-blue-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Some Useful Links</h3>
            <p className="text-lg text-gray-600 text-center mb-8">
              Explore these resources to learn more about Pakistan, visa requirements, and experiences from our exchange participants.
            </p>
            
            {/* Featured Resources - Highlighted Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Search Tool - Highlighted */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">🔍 Search Tool</h4>
                </div>
                <p className="text-purple-100 mb-6 text-lg">
                  Access our comprehensive search database to find detailed information about programs, partners, and opportunities.
                </p>
                <a 
                  href="https://docs.google.com/spreadsheets/d/1DEPpFn05jy4HLJc-_QhMGYR4pbsqBukd/edit?usp=drive_link&ouid=115439231599347009419&rtpof=true&sd=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors group"
                >
                  Open Search Tool
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* IR Booklets - Highlighted */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">📚 IR Booklets</h4>
                </div>
                <p className="text-green-100 mb-6 text-lg">
                  Download comprehensive IR (International Relations) booklets with detailed program information and guidelines.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1KNh7D5gsA0n-3vO9trvsOiu7ccv1KfgH/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors group"
                >
                  Download Booklets
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Visa & Legal Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">Visa & Legal</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">175 countries eligible for e-visa</p>
                    <a 
                      href="https://visa.nadra.gov.pk/electronic-travel-authorization-eta/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Visa Booklets</p>
                    <a 
                      href="https://drive.google.com/drive/folders/14iJmx3u4JlWo_c0oazXbgoCFd-_GOzxr?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                </div>
              </div>

              {/* Exchange Participant Experiences */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">EP Experiences</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">EP from Poland</p>
                    <a 
                      href="https://www.facebook.com/evazubeck/videos/289856915116502/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Egyptian EP</p>
                    <a 
                      href="https://www.facebook.com/dearalyne/videos/3043175425906577/UzpfSTEwMDAwMDY4MzkwMTQ0OToyODE5OTc3NjE0NzAxNjc0/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Indonesian EP</p>
                    <a 
                      href="https://www.youtube.com/watch?time_continue=5&v=KWCJXOtAcMU" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                </div>
              </div>

              {/* Pakistan Discovery */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">Discover Pakistan</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">How affordable is Pakistan</p>
                    <a 
                      href="https://www.facebook.com/dearalyne/videos/482780485921143/UzpfSTEwMDAxMzgxMjAzNTE5NDo3ODUzMDk5ODE5MzkzOTY/?id=100013812035194" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Tour Pakistan in 6 minutes</p>
                    <a 
                      href="https://www.youtube.com/watch?v=DHnHpHkwqs4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">This is Pakistan</p>
                    <a 
                      href="https://www.facebook.com/dearalyne/videos/3043175425906577/?v=3043175425906577" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                </div>
              </div>

              {/* Travel & Tourism */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">Travel & Tourism</h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Discover Pakistan - 5 Best Destinations</p>
                    <a 
                      href="https://www.youtube.com/watch?v=Nr0VVoJKWxg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Pakistan: top tourist destination for 2020</p>
                    <a 
                      href="https://www.youtube.com/watch?v=7Nzi1TQwDMQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">What is it like to travel Pakistan</p>
                    <a 
                      href="https://www.facebook.com/macart360/videos/2026224241017754/UzpfSTEwMDAxMzgxMjAzNTE5NDo3NzIzMDU2NzY1NzMxNjA/?id=100013812035194" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                </div>
              </div>

              {/* Culture & Scenery */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">Culture & Scenery</h4>
                <div className="space-y-3">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Pakistan scenery</p>
                    <a 
                      href="https://www.facebook.com/incrediblehunza/videos/851800471819030/?v=851800471819030" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Hospitality in Pakistan</p>
                    <a 
                      href="https://www.facebook.com/drewbinsky/videos/320858605282787/UzpfSTEwMDAxMzgxMjAzNTE5NDo3MjM4MDU5NDgwODk4MDA/?id=100013812035194" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">A Pakistan experience</p>
                    <a 
                      href="https://www.youtube.com/watch?v=Npl5MnTXOVk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                </div>
              </div>

              {/* GIKI & Local Attractions */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">GIKI & Local</h4>
                <div className="space-y-3">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Drone shots of GIKI</p>
                    <a 
                      href="https://www.youtube.com/watch?v=sf7faPrO3zY" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Tarbela dam</p>
                    <a 
                      href="https://www.youtube.com/watch?v=Q_wD7onwwE0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Pakistan destinations</p>
                    <a 
                      href="https://www.facebook.com/incrediblehunza/videos/1305331882938141/?v=1305331882938141" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                    >
                      Click here →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}