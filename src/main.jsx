import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Results from './pages/Results/'
import Freelances from './pages/Freelances/'
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Freelances" element={<Freelances />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </StrictMode>,
)
