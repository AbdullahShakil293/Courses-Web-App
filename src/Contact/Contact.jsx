import React, { useState } from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import Email from './Email'
import Footer from './Footer'

const Contact = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
      <div className="pt-8">
        <nav className='mt-8 px-8 fixed  top-0 left-0 right-0 z-50'>
          <div className='flex justify-between items-center text-center max-w-[1350px] mx-auto bg-[#b0b0b00d] border border-[#444] rounded-full px-8 py-3 backdrop-blur-[20px] shadow-lg'>
            <a href="/"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769925dbf351486c2c71ea8_Todo%20Logo.svg" alt="Todo Logo" className="h-8 cursor-pointer" /></a>
            <div className="flex gap-[40px] font-medium nav ml-[28px]">
              <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/' }} className="text-[#fff9] texts hover:text-[#fff] transition">
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
      </div>
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
      <div className='flex flex-row items-center  max-w-[1350px] mx-auto mt-[150px] px-8 contact'>

        <div className='px-2'>
          <p className='text-[40px]'>Contact Us for Support be
            and Inquiries</p>
          <p className='text-[#fff9]'>Reach out and connect with the Todo Craft team. Whether you have questions, feedback, or partnership inquiries, we're here.</p>
        </div>

        <div className='bg-[#1a1a1a] border border-[#ffffff1f] px-8 py-8 rounded-lg w-[65%] h-[480px] boxo fullyy2'>
          <div className='flex flex-row gap-2'>
            <input className='bg-[#1a1a1a] border border-[#ffffff1f] px-2 py-2 rounded-lg focus:outline-none w-[50%]' type="text" placeholder='Your Email' />
            <input className='bg-[#1a1a1a] border border-[#ffffff1f] px-2 py-2 rounded-lg focus:outline-none w-[50%]' type="text" placeholder='Your full name' />
          </div>
          <div className='flex flex-col mt-3 gap-6 pb-3'>
            <textarea rows={5} className='bg-[#1a1a1a] border px-2 py-2 focus:outline-none border-[#ffffff1f] rounded-lg' placeholder='Message' name="" id=""></textarea>
            <button className="bg-white font-medium text-lg text-black py-2 px-6 rounded-lg hover:bg-[#fff9] duration-500 transition">
              Get Started</button>
          </div>
          <div className='flex flex-row justify-between border-t border-[#ffffff1f] pt-3 downn'>

            <div className='flex flex-col gap-2'>
              <p className='text-[#bdbdbd]'>hello@email.com</p>
              <p className='text-[#bdbdbd]'>+1-123-123-123</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[#bdbdbd]'>New York,</p>
              <p className='text-[#bdbdbd]'>420 West Lexington Avenue</p>
              <div className='flex flex-row gap-3 mt-3'>

                <div className='border rounded-full px-3 py-3'>
                  <a href="https://www.facebook.com/"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e72cd_Vectors-Wrapper.svg" alt="" /></a>
                </div>

                <div className='border rounded-full px-3 py-3'>
                  <a href="https://www.linkedin.com/"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7302_LinkedIn%20Icon.svg" alt="" /></a>
                </div>

                <div className='border rounded-full px-3 py-3'>
                  <a href="https://x.com/i/flow/login"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e72c7_Vectors-Wrapper.svg" alt="" /></a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </div>
  )
}

export default Contact