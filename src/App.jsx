import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/services'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import { useState } from 'react'

const App = () => {
  const [category, setCategory] = useState('#home')
  return (
    <div>
      <Navbar category={category} setCategory={setCategory} />
      <Home setCategory={setCategory} category={category} />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
