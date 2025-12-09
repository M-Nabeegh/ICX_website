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
import { HITMSMOU } from "./mou-pages/HITMSMOU"
import { IIUMOU } from "./mou-pages/IIUMOU"
import { PakUraanMOU } from "./mou-pages/PakUraanMOU"
import { TalpurMOU } from "./mou-pages/TalpurMOU"
import { IConsultMOU } from "./mou-pages/iConsultMOU"

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
    case 'mou-hitms':
      return <HITMSMOU />
    case 'mou-iiui':
      return <IIUMOU />
    case 'mou-pakuraan':
      return <PakUraanMOU />
    case 'mou-talpur':
      return <TalpurMOU />
    case 'mou-iconsult':
      return <IConsultMOU />
    case 'home':
    default:
      return <HomePage />
  }
}