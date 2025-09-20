import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Award, Users, Globe, Megaphone, Search, Handshake } from "lucide-react"
import nabeeghImage from "figma:asset/68d654ae0a626144c3670131a01cb64405aadb57.png"

export function Team() {
  const leadership = {
    name: "Muhammad Nabeegh",
    role: "Local Committee Vice President (LCVP) ICX",
    description: "Nabeegh leads the ICX portfolio with vision and resilience. Under his guidance, ICX achieved record-breaking results and international recognition. In 2025, he made history by winning the Impact & Innovation Award, the first ICX award for AIESEC in GIKI.",
    icon: Award
  }

  const teamMembers = [
    {
      name: "Farheen Shaikh",
      role: "Team Leader B2B",
      description: "Farheen drives corporate outreach across Pakistan. She negotiates and signs MOUs with organizations, ensuring sustainable partnerships. Her work expands ICX's reach and establishes AIESEC in GIKI as a trusted partner for businesses and institutions nationwide.",
      icon: Handshake
    },
    {
      name: "Lyla Ahmad",
      role: "Team Leader Global Relations",
      description: "Lyla represents AIESEC in GIKI globally by conducting International Relations calls with AIESEC entities worldwide. She markets our projects, persuades international Exchange Participants to come to Pakistan, and builds strong global collaborations.",
      icon: Globe
    },
    {
      name: "Aleena Rizwan",
      role: "Director Global Relations",
      description: "Aleena strengthens our international partnerships alongside Lyla. She focuses on nurturing long-term relations with LCs worldwide, ensuring a steady flow of exchange participants into Pakistan.",
      icon: Users
    },
    {
      name: "Zainab Khan",
      role: "Director Marketing",
      description: "Zainab crafts the digital voice of ICX. She designs campaigns, manages communications, and showcases the achievements of ICX to inspire trust and engagement—both locally and globally.",
      icon: Megaphone
    },
    {
      name: "Deepak Kumar",
      role: "Team Leader Partnership Facilitator",
      description: "Deepak streamlines B2B outreach by researching, curating, and approaching potential partners. His groundwork makes it easier for the B2B team to expand collaborations and strengthen ICX's corporate network.",
      icon: Search
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated leaders driving global exchange and creating meaningful impact
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <Card className="p-8 bg-white border-blue-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <img
                    src={nabeeghImage}
                    alt="Muhammad Nabeegh - LCVP ICX"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-900 text-white">
                      <Award className="w-4 h-4 mr-1" />
                      Award Winner
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <leadership.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{leadership.name}</h4>
                    <p className="text-lg text-blue-900 font-medium">{leadership.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{leadership.description}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Team Leads & Directors */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Team Leads & Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <member.icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                      <p className="text-blue-900 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}