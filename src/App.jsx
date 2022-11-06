import React from 'react'
import About from './components/About'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skill from './components/Skill'
import Testimonials from './components/Testimonials'



const App = () => {
  return (
    <div >
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skill />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <div style={{height: '2000px'}}></div> */}
    </div>
  )
}

export default App