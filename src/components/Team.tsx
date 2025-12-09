import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Award, Users, Globe, Megaphone, Search, Handshake } from "lucide-react"
import nabeeghImage from "IMG_0441.JPG"
import zainabImage from "figma:asset/4aa8a9519eafae579d9deeac8164761137ca02a9.png"
import farheenImage from "figma:asset/c4675916b1b9678f657eaeab2746ec726656851f.png"
import aleenaImage from "figma:asset/13cffc912a0d242ca076019981ba64c244f0c497.png"
import deepakImage from "figma:asset/af886f5e40c195cdbdc098d59597d997e45ad2cf.png"
import lylaImage from "figma:asset/dfbc73ba95ea2150ebafbeb6a11db86c61dd362f.png"

export function Team() {
  const leadership = {
    name: "Muhammad Nabeegh",
    role: "Local Committee Vice President (LCVP) ICX",
    description:
      "Nabeegh leads the ICX portfolio with exceptional vision and unwavering dedication that has transformed AIESEC in GIKI's impact. His strategic leadership and relentless work ethic have made ICX one of the most productive portfolios in the organization's history. Under his guidance, ICX achieved record-breaking results including 15 opens, 20+ IR partnerships, and unprecedented international recognition. In 2025, he made history by winning the prestigious Impact & Innovation Award, the first ICX award for AIESEC in GIKI. His commitment to excellence and ability to inspire his team have established new benchmarks for success, making ICX a beacon of productivity and global engagement.",
    icon: Award
  }

  // Team Leads & Directors (same design as before)
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

  // New Team Members (names only, no photos)
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team – Trailblazers
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated leaders driving global exchange and creating meaningful impact
          </p>
        </div>

     {/* Leadership Section */}
<div className="mb-16">
  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
  <Card className="p-6 bg-white border-blue-200 shadow-md">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      <div className="lg:col-span-1">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border-4 border-blue-900/15 shadow-lg w-64 mx-auto">
            <img
              src={nabeeghImage}
              alt="Muhammad Nabeegh - LCVP ICX"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <leadership.icon className="w-5 h-5 text-blue-900" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">{leadership.name}</h4>
            <p className="text-md text-blue-900 font-medium">{leadership.role}</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          {leadership.description}
        </p>
      </div>
    </div>
  </Card>
</div>
</div>

        {/* Team Leads, Directors & Members */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Team Leads & Directors
          </h3>

          {/* Team Leads & Directors cards (same as before) */}
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

          {/* Team Members – names only, under same section */}
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
      </div>
    </section>
  )
}
