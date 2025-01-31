import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-40'>
      <div className='flex justify-between mx-auto max-w-[1300px] px-8 py-12 border-b border-[#2b2b2b] gap-10 footer'>
        <div>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769925dbf351486c2c71ea8_Todo%20Logo.svg" alt="" />
          <p className='text-[#fff9] mt-3 '>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
        </div>
        <div className='flex flex-row gap-20 font-medium rap'>
          <div className='flex flex-col gap-1'>
            <p>COMPANY</p>
            <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="text-white hover:text-[#fff9] transition">Home</Link>
            <Link to="/Features" onClick={(e) => { e.preventDefault(); window.location.href = '/Features'; }} className="text-white hover:text-[#fff9] transition">Features</Link>
            <Link to="/About" onClick={(e) => { e.preventDefault(); window.location.href = '/About'; }} className="text-white hover:text-[#fff9] transition">About</Link>
            <Link to="/Blog" onClick={(e) => { e.preventDefault(); window.location.href = '/Blog'; }} className="text-white hover:text-[#fff9] transition">Blog</Link>
            <Link to="/Shop" onClick={(e) => { e.preventDefault(); window.location.href = '/Shop'; }} className="text-white hover:text-[#fff9] transition">Shop</Link>
            <Link to="/Shop" onClick={(e) => { e.preventDefault(); window.location.href = '/Contact'; }} className="text-white hover:text-[#fff9] transition">Contact</Link>
          </div>
          <div className='flex flex-col gap-1'>
            <ruby>SOCIAL MEDIA</ruby>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Instagram</a>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Facebook</a>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>LinkedIn</a>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Twitter</a>
          </div>
          <div className='flex flex-col gap-1'>
            <ruby>WEBFLOW STUFF</ruby>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Style Guide</a>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Licensing</a>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Instructions</a>
            <a href="#" className='transition duration-300 text-white cursor-pointer hover:text-[#fff9]'>Change Log</a>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1300px] px-8 py-10 flex justify-between flex-wrap gap-6'>
        <p className='text-[#fff9]'>CREATE BY <span className='transition duration-300 underline text-white cursor-pointer hover:text-[#fff9]'>ABDULLAH</span></p>
        <p className='text-[#fff9]'>POWERED BY <span className='transition duration-300 underline text-white cursor-pointer hover:text-[#fff9]'>WEBFLOW</span></p>
      </div>
    </div>
  )
}

export default Footer
