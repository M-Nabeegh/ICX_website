import { Button } from "./ui/button"
import { Globe, ArrowRight, Users } from "lucide-react"
import { motion } from "framer-motion"
import teamImage from "../assets/2246c86427cc15fa9bc75e3c6618d880f8769999.png"

// Animation variants for mobile optimization
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

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
          <motion.div
            className="space-y-6 md:space-y-8"
            {...fadeInLeft}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Globe className="w-4 h-4 mr-2" />
              Global Exchange • ICX Portfolio
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                🌍 AIESEC in GIKI
              </motion.h1>
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-blue-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Incoming Exchange (ICX) Portfolio
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Connecting global youth with Pakistani organizations through meaningful volunteer and professional exchange experiences
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl transform transition-all hover:scale-105"
                onClick={() => scrollToSection('partnerships')}
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                Explore Partnerships
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-xl transform transition-all hover:scale-105"
                onClick={() => scrollToSection('team')}
              >
                <Users className="mr-2 w-5 h-5" />
                Meet Our Team
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform transition-all hover:scale-105">
              <img
                src={teamImage}
                alt="AIESEC in GIKI ICX Portfolio Team"
                className="w-full h-auto object-contain"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-900 rounded-2xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-gray-400 rounded-2xl opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}