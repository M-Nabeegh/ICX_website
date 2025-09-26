import { Card } from "./ui/card"
import { Globe, Users, Target } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const features = [
    {
      icon: Globe,
      title: "Global Connections",
      description: "Building bridges between international youth and Pakistani organizations"
    },
    {
      icon: Users,
      title: "Cross-Cultural Exchange",
      description: "Where global perspectives meet local challenges and opportunities"
    },
    {
      icon: Target,
      title: "Impact Creation",
      description: "Enabling meaningful contributions through volunteering and professional placements"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About ICX</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-900 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At AIESEC in GIKI, the Incoming Exchange (ICX) portfolio builds bridges between global youth and Pakistani organizations. We provide international exchange participants (EPs) with the opportunity to create impact in Pakistan—through volunteering or professional placements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              ICX ensures smooth collaboration with companies, NGOs, and schools across the country. We stand at the center of cross-cultural exchange, where global perspectives meet local challenges.
            </p>
          </motion.div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-700">
                  Connecting global talent with local opportunities to drive positive change and cultural understanding in Pakistan.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200 transform hover:scale-105">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}