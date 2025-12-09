import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Award, Trophy, Target, TrendingUp, Calendar, Star } from "lucide-react"
import awardImage from "figma:asset/7d030419-80e6-4fba-b268-f8042bdb6cee.JPG"

export function Achievements() {
  const milestones = [
    {
      icon: Award,
      title: "Impact & Innovation Award 2025",
      description: "Historic win by LCVP Muhammad Nabeegh",
      status: "First ICX award for AIESEC in GIKI"
    },
    {
      icon: Target,
      title: "6 MOUs Signed",
      description: "Record-breaking partnerships",
      status: "Q1 2025 Achievement"
    },
    {
      icon: TrendingUp,
      title: "Record of 15 Opens",
      description: "Highest volunteer participation",
      status: "Historic Numbers"
    },
    {
      icon: Trophy,
      title: "20+ IR Partners",
      description: "Professional exchange growth",
      status: "New Benchmark"
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our milestones and the impact we've created in 2025
          </p>
        </div>

        {/* Main Achievement Highlight */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-700" />
                </div>
                <Badge className="bg-yellow-600 text-white text-lg px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Historic Achievement
                </Badge>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  🏆 Impact & Innovation Award 2025
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our LCVP, Muhammad Nabeegh, won the prestigious Impact & Innovation Award in ICX, marking a historic milestone for AIESEC in GIKI.
                </p>
                <p className="text-yellow-700 font-semibold">
                  For the first time our portfolio brought home this recognition, solidifying our place as a high-performing and impactful team.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={awardImage}
                alt="Impact & Innovation Award 2025 ceremony with Muhammad Nabeegh and team"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </Card>

        {/* 2025 Milestones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our 2025 Milestones</h3>
            <p className="text-lg text-gray-600">
              In just the first six months of 2025, ICX achieved unprecedented success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <milestone.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                    <Badge variant="secondary" className="text-blue-900">
                      {milestone.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <Card className="p-8 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8" />
            </div>
            <blockquote className="text-2xl font-medium leading-relaxed">
              "2025 has been a year of breaking barriers and setting new standards. 
              Our team's dedication to excellence has put AIESEC in GIKI on the global map."
            </blockquote>
            <p className="text-blue-200">— ICX Portfolio Team</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
