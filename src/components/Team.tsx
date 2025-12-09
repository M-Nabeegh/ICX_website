import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Award, Users, Globe, Megaphone, Search, Handshake } from "lucide-react"
import nabeeghImage from "../assets/IMG_0441.JPG"
import zainabImage from "../assets/4aa8a9519eafae579d9deeac8164761137ca02a9.png"
import farheenImage from "../assets/c4675916b1b9678f657eaeab2746ec726656851f.png"
import aleenaImage from "../assets/13cffc912a0d242ca076019981ba64c244f0c497.png"
import deepakImage from "../assets/af886f5e40c195cdbdc098d59597d997e45ad2cf.png"
import lylaImage from "../assets/dfbc73ba95ea2150ebafbeb6a11db86c61dd362f.png"

export function Team() {
  const leadership = {
    name: "Muhammad Nabeegh",
    role: "Local Committee Vice President (LCVP) ICX",
    description:
      "Nabeegh leads the ICX portfolio with exceptional vision and unwavering dedication that has transformed AIESEC in GIKI's impact. His strategic leadership and relentless work ethic have made ICX one of the most productive portfolios in the organization's history. Under his guidance, ICX achieved record-breaking results including 15 opens, 20+ IR partnerships, and unprecedented international recognition. In 2025, he made history by winning the prestigious Impact & Innovation Award, the first ICX award for AIESEC in GIKI. His commitment to excellence and ability to inspire his team have established new benchmarks for success, making ICX a beacon of productivity and global engagement.",
    icon: Award
  }

  // Team Leads & Directors (with photos & descriptions)
  const teamLeadsAndDirectors = [
    {
      name: "Farheen Shaikh",
      role: "Team Leader B2B",
      description:
        "Farheen drives corporate outreach across Pakistan. She negotiates and signs MOUs with organizations, ensuring sustainable partnerships. Her work expands ICX's reach and establishes AIESEC in GIKI as a trusted partner for businesses and institutions nationwide.",
      icon: Handshake,
      image: farheenImage
    },
    {
      name: "Lyla Ahmad",
      role: "Team Leader Global Relations",
      description:
        "Lyla represents AIESEC in GIKI globally by conducting International Relations calls with AIESEC entities worldwide. She markets our projects, persuades international Exchange Participants to come to Pakistan, and builds strong global collaborations.",
      icon: Globe,
      image: lylaImage
    },
    {
      name: "Aleena Rizwan",
      role: "Director Global Relations",
      description:
        "Aleena strengthens our international partnerships alongside Lyla. She focuses on nurturing long-term relations with LCs worldwide, ensuring a steady flow of exchange participants into Pakistan.",
      icon: Users,
      image: aleenaImage
    },
    {
      name: "Zainab Khan",
      role: "Director Marketing",
      description:
        "Zainab crafts the digital voice of ICX. She designs campaigns, manages communications, and showcases the achievements of ICX to inspire trust and engagement—both locally and globally.",
      icon: Megaphone,
      image: zainabImage
    },
    {
      name: "Deepak Kumar",
      role: "Team Leader Partnership Facilitator",
      description:
        "Deepak streamlines B2B outreach by researching, curating, and approaching potential partners. His groundwork makes it easier for the B2B team to expand collaborations and strengthen ICX's corporate network.",
      icon: Search,
      image: deepakImage
    }
  ]

  // Team Members – names only, no photos
  const teamMembers = [
    { name: "Shanzay Zubair" },
    { name: "Batol Fazazal" },
    { name: "Zainab Malik" },
    { name: "Faizan" },
    { name: "Mahad" },
    { name: "Kashmala Amer" }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team – Trailblazers
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated leaders driving global exchange and creating meaningful impact
          </p>
        </div>

        {/* Leadership Section (smaller) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <Card className="p-5 bg-white border-blue-200 shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative overflow-hidden rounded-xl border-2 border-blue-900/10 shadow-md w-24 h-32">
                  <img
                    src={nabeeghImage}
                    alt="Muhammad Nabeegh - LCVP ICX"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                    <h4 className="text-2xl font-bold text-gray-900">{leadership.name}</h4>
                    <div className="bg-blue-100 p-1.5 rounded-lg">
                      <leadership.icon className="w-4 h-4 text-blue-900" />
                    </div>
                  </div>
                  <p className="text-blue-900 font-semibold">{leadership.role}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed text-justify sm:text-left">
                  {leadership.description}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Team Leads, Directors & Members */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Team Leads & Directors
          </h3>

          {/* Team Leads & Directors cards */}
          <div className="space-y-4 mb-10">
            {teamLeadsAndDirectors.map((member, index) => (
              <Card
                key={index}
                className="p-4 bg-white hover:shadow-lg transition-shadow duration-300 border-gray-200"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-16 h-16 object-cover rounded-xl bg-gray-50"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                        <member.icon className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <member.icon className="w-3 h-3 text-blue-900" />
                      </div>
                      <div className="text-left min-w-0">
                        <h4 className="font-bold text-gray-900 text-left">{member.name}</h4>
                        <p className="text-blue-900 font-medium text-left">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-left">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Team Members – names only */}
          <div className="mt-6">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Team Members
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {teamMembers.map((member, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-800"
                >
                  {member.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}
