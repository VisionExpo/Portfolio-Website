// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import About from './sections/About'
// import Projects from './sections/Projects'
// import Skills from './sections/Skills'
import Contact from './sections/Contact'
// import './App.css'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        {/* <section id="home">
          <Hero />
        </section> */}
        <h1 style={{ textAlign: 'center', padding: '20px' }}>Portfolio System Online</h1>
        <section id="about">
          <About />
        </section>
        {/* <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section> */}
        <Contact />
      </main>
    </>
  )
}

export default App
