import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Sponsor from './components/Sponsor'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <Sponsor />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
