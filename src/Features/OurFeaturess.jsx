import React, { useState } from 'react'
import "../index.css"

const OurFeatures = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }

  return (
    <div className='mt-[100px]'>
      <div className='flex flex-col justify-center items-center text-center gap-3 px-6'>
        <h1 className='text-[40px]'>Our Features</h1>
        <p className='text-[#fff9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
      </div>
      
      <div className='flex flex-row justify-center mx-auto max-w-[1350px] gap-5 mt-20 px-8 tablee'>
        <div className={`flex flex-col gap-5 cursor-pointer relative ${activeTab === 1 ? 'text-[#fff] opacity-100' : 'text-[#888] opacity-50'}`} onClick={() => handleTabClick(1)}>
          <div className='bg-[#3e3e3e66] px-4 py-4 border rounded-md border-[#3b3b3b] absolute'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e72b4_Eye.svg" alt="Overview" />
          </div>
          <p className='text-3xl mt-24 lg:text-4xl'>Overview</p>
          <p className='text-[#fff9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
          <div className='w-full h-[3px] rounded-3xl bg-[#292929]'>
            <div className={`h-full rounded-3xl bg-[#ffa048] transition-all duration-700 shadow-[0_5px_16px_#ffa048] ${activeTab === 1 ? 'scale-x-100' : 'scale-x-0'}`}></div>
          </div>
        </div>

        <div className={`flex flex-col gap-5 cursor-pointer relative ${activeTab === 2 ? 'text-[#fff] opacity-100' : 'text-[#888] opacity-50'}`} onClick={() => handleTabClick(2)}>
          <div className='bg-[#3e3e3e66] px-4 py-4 border rounded-md border-[#3b3b3b] absolute'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7356_Knowledge.svg" alt="Full Customized" />
          </div>
          <p className='text-3xl mt-24 lg:text-4xl'>Full Customized</p>
          <p className='text-[#fff9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
          <div className='w-full h-[3px] rounded-3xl bg-[#292929]'>
            <div className={`h-full rounded-3xl bg-[#ffa048] transition-all duration-700 shadow-[0_5px_16px_#ffa048] ${activeTab === 2 ? 'scale-x-100' : 'scale-x-0'}`}></div>
          </div>
        </div>

        <div className={`flex flex-col gap-5 cursor-pointer relative ${activeTab === 3 ? 'text-[#fff] opacity-100' : 'text-[#888] opacity-50'}`} onClick={() => handleTabClick(3)}>
          <div className='bg-[#3e3e3e66] px-4 py-4 border rounded-md border-[#3b3b3b] absolute'>
            <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7354_CC%20Icon.svg" alt="One Price" />
          </div>
          <p className='text-3xl mt-24 lg:text-4xl'>One Price</p>
          <p className='text-[#fff9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
          <div className='w-full h-[3px] rounded-3xl bg-[#292929]'>
            <div className={`h-full rounded-3xl bg-[#ffa048] transition-all duration-700 shadow-[0_5px_16px_#ffa048] ${activeTab === 3 ? 'scale-x-100' : 'scale-x-0'}`}></div>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className={`transition-all duration-700 ${activeTab === 1 ? 'opacity-100' : 'opacity-0'}`}>
          {activeTab === 1 && (
            <div className="text-center">
              <img className='max-w-[1350px] pics mx-auto px-8' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67699645c0491ed84a3ef30d_Hero%20Image.png" alt="Overview" />
            </div>
          )}
        </div>

        <div className={`transition-all duration-700 ${activeTab === 2 ? 'opacity-100' : 'opacity-0'}`}>
          {activeTab === 2 && (
            <div className="text-center">
              <img className='max-w-[1350px] pics mx-auto px-8' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67785b911e5592b1dec1221e_Tab%2002.png" alt="Full Customized" />
            </div>
          )}
        </div>

        <div className={`transition-all duration-700 ${activeTab === 3 ? 'opacity-100' : 'opacity-0'}`}>
          {activeTab === 3 && (
            <div className="text-center">
              <img className='max-w-[1350px] pics mx-auto px-8' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67785b92ed9411b4281c4ddd_Tab%2003.png" alt="One Price" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OurFeatures