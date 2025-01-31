import React, { useState } from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import Email from './Email'
import Footer from './Footer'
import Testmonials from './Testmonials'


const About = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
      <div className="bg-[#121212]">
        <nav className='mt-8 px-8 fixed  top-0 left-0 right-0 z-50'>
          <div className='flex justify-between items-center text-center max-w-[1350px] mx-auto bg-[#b0b0b00d] border border-[#444] rounded-full px-8 py-3 backdrop-blur-[20px] shadow-lg'>
            <a href="/"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769925dbf351486c2c71ea8_Todo%20Logo.svg" alt="Todo Logo" className="h-8 cursor-pointer" /></a>
            <div className="flex gap-[40px] font-medium nav ml-[28px]">
              <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/' }} className="text-[#fff9] texts hover:text-[#fff] transition">
                Home</Link>

              <Link to="/Features" onClick={(e) => { e.preventDefault(); window.location.href = '/Features' }} className="text-[#fff9] texts hover:text-[#fff] transition">Features</Link>

              <Link to="/About" onClick={(e) => { e.preventDefault(); window.location.href = '/About' }} className="text-[#fff] texts hover:text-[#fff] transition">About</Link>

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
      <div className='flex flex-col justify-center items-center text-center mt-[186px] gap-6 px-6'>
        <p className='text-[#fff9] text-4xl sm:text-5xl leading-none'>Unlock the Full Potential of the Process of organizing</p>
        <p className='text-[#fff9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
        <img className='mt-[19.5rem]' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676d8292996f1e982130c558_About%20Logo.svg" alt="" />
      </div>
      <div className='flex flex-col justify-center items-center text-center mt-14 px-6'>
        <p className='text-4xl'>Our Team</p>
        <p className='text-[#fff9]'>Meet the Passionate Professionals Committed to Innovating Task Management and Empowering You to Achieve Your Goals.</p>
      </div>
      <div className='flex flex-row justify-center items-center max-w-[1300px] mx-auto gap-8 mt-10 px-8 wrapping'>

        <div className='flex flex-col justify-center items-center text-center gap-3 bg-[#1a1a1a] border cursor-pointer border-[#ffffff1f] rounded-2xl px-8 py-12 transform transition duration-300 hover:border-[#928f8f99] hover:border boxes'>
          <div className='px-3 py-3 bg-[#262629] border border-[#ffffff1f] rounded-md'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c543ddde8ecbaa549f1c_Feature%20Icon%20(6).svg" alt="" />
          </div>
          <p className='text-[20px]'>Seamless Task Organization</p>
          <p className='text-[#fff9]'>Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center gap-3 bg-[#1a1a1a] border border-[#ffffff1f] rounded-2xl px-8 py-12 transform transition duration-300 hover:border-[#928f8f99] hover:border boxes cursor-pointer'>
          <div className='px-3 py-3 bg-[#262629] border border-[#ffffff1f] rounded-md'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c5437c91632c0c038061_Feature%20Icon%20(1).svg" alt="" />
          </div>
          <p className='text-[20px]'>Personalized Progress Insights</p>
          <p className='text-[#fff9]'>Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center gap-3 bg-[#1a1a1a] border border-[#ffffff1f] rounded-2xl px-8 py-12 transform transition duration-300 hover:border-[#928f8f99] hover:border boxes cursor-pointer'>
          <div className='px-3 py-3 bg-[#262629] border border-[#ffffff1f] rounded-md'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c54391b2125900f506fa_Feature%20Icon%20(2).svg" alt="" />
          </div>
          <p className='text-[20px]'>Collaborative Task Sharing</p>
          <p className='text-[#fff9]'>Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>
      </div>
      <div className='max-w-[1300px] flex justify-between mx-auto items-center mt-56 gap-5 px-8 ways'>

        <div className='flex flex-col gap-3 pr-6'>
          <p className='text-[42px] leading-none'>The best way to improve your users' experience</p>
          <p className='text-[#fff9]'>"Leveraging Data-Driven Insights and User-Centric Design to Foster Seamless Interactions, Enhance Satisfaction, and Build Lasting Relationships with Your Audience."</p>
        </div>

        <div className='bg-[#1a1a1a] px-10 py-[60px] flex flex-col justify-center gap-14 rounded-2xl boxo w-[67%] fullyy'>

          <div className='flex flex-row items-center text-center gap-5'>
            <div className='px-3 py-3 bg-[#1b1b1b] border border-[#ffffff1f] rounded-2xl boxo'>
              <img className='max-w-[50px]' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676991c64fe820e4c956d093_Fav.svg" alt="" />
            </div>
            <p className='text-[#fff9] text-xl sm:text-2xl'>Use Todo</p>
          </div>

          <div className='flex flex-row items-center gap-5'>
            <div className='px-3 py-3 bg-[#1b1b1b] border border-[#ffffff1f] rounded-2xl boxo'>
              <img className='max-w-[50px]]' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676991c64fe820e4c956d093_Fav.svg" alt="" />
            </div>
            <p className='text-[#fff9] text-xl sm:text-2xl'>Simplify Tasks</p>
          </div>

          <div className='flex flex-row items-center gap-5'>
            <div className='px-3 py-3 bg-[#1b1b1b] border border-[#ffffff1f] rounded-2xl boxo'>
              <img className='max-w-[50px]' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676991c64fe820e4c956d093_Fav.svg" alt="" />
            </div>
            <p className='text-[#fff9] text-xl sm:text-2xl'>Experience Easy Workflow</p>
          </div>

        </div>

      </div>

      <div className='flex flex-col justify-center items-center text-center mt-56 px-6'>
        <p className='text-[55px]'>Our Team</p>
        <p className='text-[#fff9]'>Meet the Passionate Professionals Committed to Innovating Task Management and Empowering You to Achieve Your Goals.</p>
      </div>

      <div className='flex flex-row justify-center gap-10 items-center mx-auto mt-16 px-8 flex-wrap'>

        <div className='flex flex-col justify-center items-center text-center px-3 py-10 gap-1 bg-[#1a1a1a] rounded-xl w-[300px] boxo'>
          <div>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6cc2cf41b964f0c9d94_Team%20(2).svg" alt="" />
          </div>
          <p className='text-[#fff9] text-[20px]'>Jack B.</p>
          <p className='text-[#fff9] text-[18px]'>Project Lead</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center px-3 py-10 gap-1 bg-[#1a1a1a] rounded-xl w-[300px] boxo'>
          <div>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6ca6b8d7df0adba0441_Team%20(3).svg" alt="" />
          </div>
          <p className='text-[#fff9] text-[20px]'>Jack B.</p>
          <p className='text-[#fff9] text-[18px]'>Project Lead</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center px-3 py-10 gap-1 bg-[#1a1a1a] rounded-xl w-[300px] boxo'>
          <div>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6c01fc22815018aa379_Team%20(1).svg" alt="" />
          </div>
          <p className='text-[#fff9] text-[20px]'>Jack B.</p>
          <p className='text-[#fff9] text-[18px]'>Project Lead</p>
        </div>

      </div>
      <Testmonials />
      <Email />
      <Footer />

    </div>
  )
}

export default About
