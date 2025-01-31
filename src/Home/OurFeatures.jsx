import React from 'react'
import "../index.css"

const OurFeautures = () => {
  return (
    <div className='mt-[14rem]'>
      <div className='flex flex-col justify-center items-center text-center gap-5 font-medium px-8'>
        <h1 className='text-5xl'>Our Features</h1>
        <p className='text-[#fff9] max-w-[1000px]'>Lorem ipsum dolor sit amet consectetur. In quis aliquet leo in vel pharetra pellentesque convallis. Cras aliquam a faucibus non enim tortor pellentesque. Volutpat venenatis massa at placerat lorem viverra nunc nec. Nulla volutpat nisl diam velit.</p>
      </div>
      <div className="max-w-[1350px] grid grid-cols-2 gap-5 mx-auto mt-24 text-center items-center px-8 lg:grid-cols-3 lg:grid one-col">
        
        <div className="bg-[#181818] px-3 py-12 border border-[#3b3b3b] rounded-xl boxes relative transform transition duration-300 hover:border-[#928f8f99] cursor-pointer">
            <div className="bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-[32px]">
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c543ddde8ecbaa549f1c_Feature%20Icon%20(6).svg" className="mx-auto" alt="" />
            </div>
            <p className="mt-[46px] text-lg">Seamless Task Organization</p>
            <p className="mt-3 text-[#fff9]">Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>
        
        <div className="bg-[#181818] px-3 py-12 border border-[#3b3b3b] rounded-xl boxes relative transform transition duration-300 hover:border-[#928f8f99] cursor-pointer">
            <div className="bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-[32px]">
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c5437c91632c0c038061_Feature%20Icon%20(1).svg" className="mx-auto" alt="" />
            </div>
            <p className="mt-[46px] text-lg">Personalized Progress Insights</p>
            <p className="mt-3 text-[#fff9]">Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>
        
        <div className="bg-[#181818] px-3 py-12 border border-[#3b3b3b] rounded-xl boxes relative transform transition duration-300 hover:border-[#928f8f99] cursor-pointer">
            <div className="bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-[32px]">
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c54391b2125900f506fa_Feature%20Icon%20(2).svg" className="mx-auto" alt="" />
            </div>
            <p className="mt-[46px] text-lg">Collaborative Task Sharing</p>
            <p className="mt-3 text-[#fff9]">Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>
        
        <div className="bg-[#181818] px-3 py-12 border border-[#3b3b3b] rounded-xl boxes relative transform transition duration-300 hover:border-[#928f8f99] cursor-pointer">
            <div className="bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-[32px]">
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c5449d949640483147cc_Feature%20Icon%20(3).svg" className="mx-auto" alt="" />
            </div>
            <p className="mt-[46px] text-lg">Flexible Task Scheduling</p>
            <p className="mt-3 text-[#fff9]">Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>
        
        <div className="bg-[#181818] px-3 py-12 border border-[#3b3b3b] rounded-xl boxes relative transform transition duration-300 hover:border-[#928f8f99] cursor-pointer">
            <div className="bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-[32px]">
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c5439d4f701cf228df20_Feature%20Icon%20(4).svg" className="mx-auto" alt="" />
            </div>
            <p className="mt-[46px] text-lg">Smart Reminders and Notifications</p>
            <p className="mt-3 text-[#fff9]">Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>
        
        <div className="bg-[#181818] px-3 py-12 border border-[#3b3b3b] rounded-xl boxes relative transform transition duration-300 hover:border-[#928f8f99] cursor-pointer">
            <div className="bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-[32px]">
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769c54444bb4535b0329a60_Feature%20Icon%20(5).svg" className="mx-auto" alt="" />
            </div>
            <p className="mt-[46px] text-lg">Customizable Dashboard Layout</p>
            <p className="mt-3 text-[#fff9]">Easily categorize and organize tasks, giving you a clear view of your priorities and deadlines.</p>
        </div>

        </div>
    </div>
  )
}

export default OurFeautures
