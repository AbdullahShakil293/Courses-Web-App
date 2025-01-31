import React, { useState } from 'react'
import "../index.css"
import HeroSection from './HeroSection'
import OurFeautures from './OurFeatures'
import Email from './Email'
import Footer from './Footer'
import Testmonials from './Testmonials'
import { Link } from 'react-router-dom'

const LandingPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className='mt-8 px-8 fixed  top-0 left-0 right-0 z-50'>
        <div className='flex justify-between items-center text-center max-w-[1350px] mx-auto bg-[#b0b0b00d] border border-[#444] rounded-full px-8 py-3 backdrop-blur-[20px] shadow-lg'>
          <a href="/"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769925dbf351486c2c71ea8_Todo%20Logo.svg" alt="Todo Logo" className="h-8 cursor-pointer" /></a>
          <div className="flex gap-[40px] font-medium nav ml-[28px]">
            <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/' }} className="text-[#fff] texts hover:text-[#fff] transition">
              Home</Link>
            <Link to="/Features" onClick={(e) => { e.preventDefault(); window.location.href = '/Features' }} className="text-[#fff9] texts hover:text-[#fff] transition">Features</Link>
            <Link to="/About" onClick={(e) => { e.preventDefault(); window.location.href = '/About' }} className="text-[#fff9] texts hover:text-[#fff] transition">About</Link>
            <Link to="/Blog" onClick={(e) => { e.preventDefault(); window.location.href = '/Blog' }} className="text-[#fff9] texts hover:text-[#fff] transition">Blog</Link>
            <Link to="/Shop" onClick={(e) => { e.preventDefault(); window.location.href = '/Shop' }} className="text-[#fff9] texts hover:text-[#fff] transition">Shop</Link>
          </div>
          <div className="flex items-center gap-10">
            <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" className={`menu hidden max-w-5 cursor-pointer ${menuOpen ? "" : ""}`} onClick={toggleMenu} />
            <button className="bg-white font-medium buttoon text-lg text-black py-2 px-6 rounded-full hover:bg-[#fff9] duration-500 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <div className={`fixed menu  inset-0 bg-black backdrop-blur-sm bg-opacity-80 z-50 flex flex-col px-5 pt-28 text-white transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}>
        <button className="absolute mt-[-62px] right-0 px-16 text-2xl font-bold text-white" onClick={toggleMenu}><img src="https://img.icons8.com/material-rounded/24/FFFFFF/multiply--v1.png" className="max-w-9" alt="" /></button>
        <ul className="space-y-6 text-lg text-[rgb(198,207,228)] font-medium px-3">
          <li><Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/' }} className="text-[#fff9] texts border-b border-gray-600 flex">Home</Link></li>
          <li><Link to="/Features" onClick={(e) => { e.preventDefault(); window.location.href = '/Features' }} className="text-[#fff9] texts border-b border-gray-600 flex">Features</Link></li>
          <li><Link to="/About" onClick={(e) => { e.preventDefault(); window.location.href = '/About' }} className="text-[#fff9] texts border-b border-gray-600 flex">About</Link></li>
          <li><Link to="/Blog" onClick={(e) => { e.preventDefault(); window.location.href = '/Blog' }} className="text-[#fff9] texts border-b border-gray-600 flex">Blog</Link></li>
          <li><Link to="/Shop" onClick={(e) => { e.preventDefault(); window.location.href = '/Shop' }} className="text-[#fff9] texts border-b border-gray-600 flex">Shop</Link></li>
          <li><Link to="/Contact" onClick={(e) => { e.preventDefault(); window.location.href = '/Contact' }} className="text-[#fff9] texts border-b border-gray-600 flex">Contact</Link></li>
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center text-center mt-[11rem] gap-8'>
        <h1 className="font-semibold text-white text-4xl sm:text-5xl px-6 text-center">Achieve More with Smart Task Management</h1>
        <p className='text-[#7e7e7e] px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
        <a href="/Contact"><button className="bg-[#111] font-medium text-lg text-[#7e7e7e] py-2 px-6 rounded-full border border-[#7e7e7e]">Get Started</button></a>
        <img className='mt-12 max-w-[1350px] px-8 pics' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67699645c0491ed84a3ef30d_Hero%20Image.png" alt="" />
      </div>
      <HeroSection />
      <OurFeautures />
      <Testmonials />
      <Email />
      <Footer />

    </div>
  )
}

export default LandingPage