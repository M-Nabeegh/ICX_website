import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Team } from "./components/Team"
import { Products } from "./components/Products"
import { Achievements } from "./components/Achievements"
import { Partnerships } from "./components/Partnerships"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Products />
        <Achievements />
        <Partnerships />
      </main>
      <Footer />
    </div>
  )
}