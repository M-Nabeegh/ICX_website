import { useRouter } from "../context/Router"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { Partnerships } from "./Partnerships"
import { About } from "./About"
import { Team } from "./Team"
import { Products } from "./Products"
import { Achievements } from "./Achievements"
import { Footer } from "./Footer"
import { ShahInternationalMOU } from "./mou-pages/ShahInternationalMOU"
import { PlushNaturalMOU } from "./mou-pages/PlushNaturalMOU"
import { SabaTrustMOU } from "./mou-pages/SabaTrustMOU"

export function AppRouter() {
  const { currentRoute } = useRouter()

  // Home page content
  const HomePage = () => (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Partnerships />
        <About />
        <Team />
        <Products />
        <Achievements />
      </main>
      <Footer />
    </div>
  )

  // Render based on current route
  switch (currentRoute) {
    case 'mou-shah':
      return <ShahInternationalMOU />
    case 'mou-plushnatural':
      return <PlushNaturalMOU />
    case 'mou-sabatrust':
      return <SabaTrustMOU />
    case 'home':
    default:
      return <HomePage />
  }
}