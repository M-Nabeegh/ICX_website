import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Heart, Briefcase, ArrowRight, Users, Building } from "lucide-react"

export function Products() {
  const products = [
    {
      title: "IGV – Incoming Global Volunteer",
      description: "A social impact program where international volunteers contribute to NGOs, schools, and foundations in Pakistan. It creates meaningful cultural exchange while addressing pressing local challenges.",
      icon: Heart,
      category: "Social Impact",
      features: [
        "Partnership with NGOs and foundations",
        "Educational institutions collaboration",
        "Cultural exchange programs",
        "Community development projects"
      ],
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      textColor: "text-pink-900"
    },
    {
      title: "IGT – Incoming Global Talent",
      description: "A professional program connecting international graduates and young professionals with Pakistani companies, startups, and consultancies. It fosters innovation, global perspectives, and knowledge sharing.",
      icon: Briefcase,
      category: "Professional Development",
      features: [
        "Corporate partnerships",
        "Startup collaborations",
        "Professional skill development",
        "Innovation and knowledge transfer"
      ],
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-900"
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting global talent with local opportunities through our comprehensive exchange programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <Card key={index} className={`p-8 ${product.bgColor} border-gray-200 hover:shadow-xl transition-all duration-300`}>
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${product.iconBg} rounded-2xl flex items-center justify-center`}>
                      <product.icon className={`w-8 h-8 ${product.textColor}`} />
                    </div>
                    <div>
                      <Badge variant="secondary" className={`${product.textColor} font-medium mb-2`}>
                        {product.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-gray-600" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action - remove this entire section */}
                {/* // ... remove this code ... */}
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">2025 Impact</h3>
            <p className="text-blue-100">Making a difference through global exchange</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100">MOUs Signed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Record</div>
              <div className="text-blue-100">IGV Opens</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Historic</div>
              <div className="text-blue-100">IGT Numbers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}