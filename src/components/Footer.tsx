import { Mail, Globe, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iJ5umUMIDZYbyfdIG7y5wZVE82O_cuycx7EQdY58hHC3MpZd_VXpABahjlgF8t_Oug&usqp=CAU"
                alt="AIESEC Logo"
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-2xl font-bold">AIESEC in GIKI</h3>
                <p className="text-gray-400">ICX Portfolio</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Youth Leadership through Global Opportunities. Building bridges between global youth and Pakistani organizations.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto: aleena.rizwan@aiesec.net" className="text-gray-300 hover:text-white transition-colors">
                  aleena.rizwan@aiesec.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <a href="https://www.aiesec.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  www.aiesec.org
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lc.giki?igsh=MTkyandtaHFtM2ZjMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aiesecxgiki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected with our latest updates and achievements
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 AIESEC in GIKI – All Rights Reserved
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for Global Youth Leadership and by iCX 26.27
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
