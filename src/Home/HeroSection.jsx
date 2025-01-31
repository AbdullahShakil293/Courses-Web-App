import React from 'react'
import "../index.css"

const HeroSection = () => {
  return (
    <div className='mt-[130px]'>
     <div className='flex flex-col justify-center items-center text-center gap-8 px-2'>
      <p className='text-[#fff9] font-semibold'>3,250+ Organization Barca</p>
      <div className='flex flex-row gap-10 justify-center items-center text-center px-2 flex-wrap'>
      <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7247_Logo%2001.svg" alt="" />
      <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7248_Logo%2005.svg" alt="" />
      <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7243_Logo%2003.svg" alt="" />
      <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7250_Logo%2002.svg" alt="" />
      <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7241_Logo%2004.svg" alt="" />
      <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7247_Logo%2001.svg" alt="" />
      </div>
     </div>
     <div className='flex flex-row task mx-auto px-6 max-w-[1350px] mt-[10rem] font-semibold'>
            <div className='pr-6 flex flex-col justify-center '>
                <div className='bg-[#3e3e3e66] relative w-[45px] px-2 py-2 border border-[#3b3b3b] rounded-md'>
                <img className='max-w-10' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67699f8f8b7e384f00f8f043_Mail.svg" alt="" />
                </div>
                <h2 className='mt-8 text-xl sm:text-4xl'>Task Prioritization and Deadlines</h2>
                <p className='text-[#fff9] mt-2'>Easily set priorities for each task and assign due dates to stay on top of your deadlines. Get reminders and alerts to ensure nothing falls through the cracks.</p>
                <div className='flex flex-col gap-4 text-[#fff9] pt-8'>
                <div className='flex gap-3'>
                    <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769a36d113f4cd47e88fc0c_Check%20icon.svg" alt="" />
                    <p>Customizable layouts for efficient tasking.</p>
                </div>
                <div className='flex gap-3'>
                    <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769a36d113f4cd47e88fc0c_Check%20icon.svg" alt="" />
                    <p>Font preferences to match your style.</p>
                </div>
                <div className='flex gap-3'>
                    <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769a36d113f4cd47e88fc0c_Check%20icon.svg" alt="" />
                    <p>Create multiple profiles for versatility.</p>
                </div>
                </div>
        </div>
        <div className='max-w-[50%] fully'>
            <div className='bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-3xl flex justify-center items-center text-center'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769fbd51c77af547831d26e_Feature%20Task%2002.png" alt="" />
            </div>
        </div>
     </div>
     <div className='flex flex-row-reverse task mx-auto px-8 max-w-[1350px] mt-[10rem] gap-10 font-semibold'>
            <div className='pr-6 flex flex-col justify-center '>
                <div className='bg-[#3e3e3e66] relative w-[45px] px-2 py-2 border border-[#3b3b3b] rounded-md'>
                <img className='max-w-10' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67699f8f8b7e384f00f8f043_Mail.svg" alt="" />
                </div>
                <h2 className='mt-8 text-xl sm:text-4xl'>Progress Tracking & Completion Stats</h2>
                <p className='text-[#fff9] mt-2'>Easily set priorities for each task and assign due dates to stay on top of your deadlines. Get reminders and alerts to ensure nothing falls through the cracks.</p>
                <div className='flex flex-col gap-4 text-[#fff9] pt-8'>
                <div className='flex gap-3'>
                    <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769a36d113f4cd47e88fc0c_Check%20icon.svg" alt="" />
                    <p>Choose from a variety of themes.</p>
                </div>
                <div className='flex gap-3'>
                    <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769a36d113f4cd47e88fc0c_Check%20icon.svg" alt="" />
                    <p>Reduce eye strain with customization.</p>
                </div>
                <div className='flex gap-3'>
                    <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769a36d113f4cd47e88fc0c_Check%20icon.svg" alt="" />
                    <p>Create your tasking ambiance effortlessly.</p>
                </div>
                </div>
        </div>
        <div className='max-w-[50%] fully'>
            <div className='bg-[#3e3e3e66] px-2 py-2 border border-[#3b3b3b] rounded-3xl flex justify-center items-center text-center'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769fbe9a12ed088b9612747_Feature%20Task%2001.png" alt="" />
            </div>
        </div>
     </div>
    </div>
  )
}

export default HeroSection