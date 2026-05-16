import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Pillars } from './components/sections/Pillars'
import { Thesis } from './components/sections/Thesis'
import { Criteria } from './components/sections/Criteria'
import { Operator } from './components/sections/Operator'
import { Markets } from './components/sections/Markets'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Thesis />
        <Criteria />
        <Operator />
        <Markets />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
