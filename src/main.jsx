import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Fleet from './pages/Fleet.jsx'
import FleetDetail from './pages/FleetDetail.jsx'
import Services from './pages/Services.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/fleet/:id" element={<FleetDetail />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </BrowserRouter>
)
