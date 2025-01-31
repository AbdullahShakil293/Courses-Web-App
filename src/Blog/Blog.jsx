import React, { useState } from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import Email from './Email'
import Footer from './Footer'

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
            <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/' }} className="text-[#fff9] texts hover:text-[#fff] transition">
              Home</Link>

            <Link to="/Features" onClick={(e) => { e.preventDefault(); window.location.href = '/Features' }} className="text-[#fff9] texts hover:text-[#fff] transition">Features</Link>

            <Link to="/About" onClick={(e) => { e.preventDefault(); window.location.href = '/About' }} className="text-[#fff9] texts hover:text-[#fff] transition">About</Link>

            <Link to="/Blog" onClick={(e) => { e.preventDefault(); window.location.href = '/Blog' }} className="text-[#fff] texts hover:text-[#fff] transition">Blog</Link>

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

      <div className='flex flex-col justify-center items-center text-center mt-[144px] gap-6 blog'>
        <p className='text-white text-[60px] leading-none px-6'>Insights Unleashed: Navigating the Coding Cosmos</p>
        <p className='text-[#fff9] px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
      </div>
      <div className="glow-blog"></div>
      <div className='grid grid-cols-3 max-w-[1350px] mx-auto gap-10 px-6 mt-[150px] blog'>
        <div className='bg-[#1a1a1a] rounded-lg border border-[#303030] cursor-pointer transform transition-transform duration-300 hover:scale-105'>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72c3_Rectangle%25201841-p-500.jpg" alt="" className='w-full h-auto rounded-lg' />
          <div className='p-6'>
            <p className='text-[20px] text-white'>How to Build Strong Relationships in a Digital Age</p>
            <p className='text-[#fff9] mt-2 text-[20px]'>Aut omnis repudiandae et. Minima et deleniti et. Ut aut voluptatibus corporis aliquam in praesentium a officiis aut.</p>
          </div>
        </div>

        <div className='bg-[#1a1a1a] rounded-lg border border-[#303030] cursor-pointer transform transition-transform duration-300 hover:scale-105'>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72a9_Rectangle%201837.jpg" alt="" className='w-full h-auto rounded-lg' />
          <div className='p-6'>
            <p className='text-[20px] text-white'>14 Common Misconceptions About Web Design</p>
            <p className='text-[#fff9] mt-2 text-[20px]'>Cupiditate autem exercitationem numquam ipsum recusandae ducimus enim quaerat. Perferendis laboriosam recusandae voluptatem. Ut ullam doloribus</p>
          </div>
        </div>

        <div className='bg-[#1a1a1a] rounded-lg border border-[#303030] cursor-pointer transform transition-transform duration-300 hover:scale-105'>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e7290_Rectangle%201839.jpg" alt="" className='w-full h-auto rounded-lg' />
          <div className='p-6'>
            <p className='text-[20px] text-white'>10 Things Nobody Told You About Being a Web Designer</p>
            <p className='text-[#fff9] mt-2 text-[20px]'>Voluptates maxime nobis modi porro. Ea repellendus earum. Et rerum eos quas voluptat</p>
          </div>
        </div>

        <div className='bg-[#1a1a1a] rounded-lg border border-[#303030] cursor-pointer transform transition-transform duration-300 hover:scale-105'>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e725d_Rectangle%201836.jpg" alt="" className='w-full h-auto rounded-lg' />
          <div className='p-6'>
            <p className='text-[20px] text-white'>7 Ways To Improve Website Usability And Accessibility</p>
            <p className='text-[#fff9] mt-2 text-[20px]'>Aut omnis repudiandae et. Minima et deleniti et. Ut aut voluptatibus corporis aliquam in praesentium a officiis aut.</p>
          </div>
        </div>

        <div className='bg-[#1a1a1a] rounded-lg border border-[#303030] cursor-pointer transform transition-transform duration-300 hover:scale-105'>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e7277_Rectangle%201838.jpg" alt="" className='w-full h-auto rounded-lg' />
          <div className='p-6'>
            <p className='text-[20px] text-white'>10 Web Design Blogs You Can't Miss</p>
            <p className='text-[#fff9] mt-2 text-[20px]'>In non nobis maxime vel blanditiis. Consequatur tempore exercitationem.</p>
          </div>
        </div>

        <div className='bg-[#1a1a1a] rounded-lg border border-[#303030] cursor-pointer transform transition-transform duration-300 hover:scale-105'>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72dc_Rectangle%201840.jpg" alt="" className='w-full h-auto rounded-lg' />
          <div className='p-6'>
            <p className='text-[20px] text-white'>10 Great Examples of Responsive Websites</p>
            <p className='text-[#fff9] mt-2 text-[20px]'>Quis voluptatem placeat quasi. Ut vel non placeat enim tempora exercitationem tenetur. Quas qui consequuntur perspiciatis fugit deserunt quia exercitationem dolor qui.</p>
          </div>
        </div>
      </div>

      <Email />
      <Footer />

    </div>
  )
}

export default LandingPage