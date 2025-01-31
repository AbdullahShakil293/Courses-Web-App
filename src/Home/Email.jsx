import React from 'react'
import "../index.css"

const Email = () => {
  return (
    <div className='mt-32 px-6'>
      <div className='flex rounded-2xl flex-col text-center justify-center items-center max-w-[950px] py-16 gap-6 mx-auto bg-[#1a1a1a] border border-[#303030]'>
        <div>
          <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769cf437bd324e7458f0d65_CTA%20Image.png" className='max-w-16' alt="" />
        </div>
        <p className='text-[#fff9] text-3xl sm:text-5xl px-3'>Transform your workflow with Todo: Get early access</p>
        <div className="relative flex justify-center items-center mx-auto contact">
          <input className="inputt rounded-full w-[500px] pr-[155px] border bg-[#1a1a1a] py-4 px-3 border-[#7e7e7e] transition duration-500 focus:outline-none focus:border-white" placeholder="Enter Email Here" type="text" />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white font-medium text-lg text-black py-4 px-6 rounded-full hover:bg-[#fff9] duration-500 transition">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Email