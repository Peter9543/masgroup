import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/layout/ThemeProvider'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Safety from './pages/Safety'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white text-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/manpower" element={<Services />} />
            <Route path="/services/contracting" element={<Services />} />
            <Route path="/services/trading" element={<Services />} />
            <Route path="/services/transportation" element={<Services />} />
            <Route path="/services/corporate" element={<Services />} />
            <Route path="/services/facility" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App