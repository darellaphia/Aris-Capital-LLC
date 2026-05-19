import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Pillars } from './components/sections/Pillars'
import { Operator } from './components/sections/Operator'
import { Process } from './components/sections/Process'
import { Criteria } from './components/sections/Criteria'
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
        <Operator />
        <Process />
        <Criteria />
        <Markets />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
