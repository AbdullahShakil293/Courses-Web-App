import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Home/LandingPage'
import HeroSection from './Home/HeroSection'
import OurFeautures from './Home/OurFeatures'
import Testmonials from './Home/Testmonials'
import Email from './Home/Email'
import Footer from './Home/Footer'
import Features from './Features/Features'
import OurFeaturess from './Features/OurFeaturess'
import Connect from './Features/Connect'
import About from './About/About'
import Blog from './Blog/Blog'
import Shop from './Shop/Shop'
import LoadingSpinner from './LoadingSpinner'
import Contact from './Contact/Contact'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/HeroSection" element={<HeroSection />} />
      <Route path="/OurFeautures" element={<OurFeautures />} />
      <Route path="/Email" element={<Email />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/OurFeaturess" element={<OurFeaturess />} />
      <Route path="/Testmonials" element={<Testmonials />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App