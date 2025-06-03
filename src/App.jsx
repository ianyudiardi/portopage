import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ProjectDetail from './components/ProjectDetails'

//pages
import Home from './pages/Home'
import Project from './pages/Project'
import Duelist from './pages/Duelist'
import ProjectDetails from './components/ProjectDetails'
import DuelistDetail from './components/DuelistDetails'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<Project />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/duel" element={<Duelist/>} />
        <Route path="/duelist/:duelistId" element={<DuelistDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
