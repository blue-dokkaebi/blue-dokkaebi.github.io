import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Lore from './pages/Lore'
import Schedule from './pages/Schedule'
import Projects from './pages/Projects'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  )
}

export default App
