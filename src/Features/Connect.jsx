import React, { useState } from 'react'
import "../index.css"

const Connect = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676c2eb95ede52691267c79f_Gallery.jpg", 
    "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67785bafca7d379bb094946f_Slider%2002.jpg", 
    "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67785baf62ba50749aded899_Slider%2003.jpg", 
  ]

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }

  return (
    <div className='mt-[230px]'>
        <div className='flex flex-col justify-center items-center text-center gap-3 px-6'>
            <h1 className='text-[35px]'>Todo Integrations: Seamlessly Connect Your Tools</h1>
            <p className='text-[#fff9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
        </div>
        <div className='mt-24 flex justify-between max-w-[1300px] mx-auto px-8 connect'>
            <div className='flex flex-col justify-center gap-6'>
                <img className='max-w-8' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7357_Chat.svg" alt="" />
                <p className='text-[#fff9] text-[25px]'>Connect and Conquer</p>
                <p className='text-[#fff9] pr-8'>Integrate your essential tools effortlessly with Genius. Our platform supports a wide range of integrations, allowing you to bridge gaps between apps and harness their collective power.</p>
            </div>
            <div className='relative'>
                <img 
                  src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7245_Left%20Arrow.svg" 
                  className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer ml-4 border rounded-full px-2 py-2 hover:bg-[#ffffff58] transform transition-transform duration-200 hover:scale-110"  
                  onClick={prevImage}/>
                
                <div className="flex justify-center gap-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className={`max-w-[100%] rounded-xl border border-[#3b3b3b] ${index === currentImage ? 'block' : 'hidden'}`}/>
                  ))}
                </div>

                <img 
                  src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e725f_Right%20Arrow.svg" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer mr-4 border rounded-full px-2 py-2 transform transition-transform duration-200 hover:scale-110 hover:bg-[#ffffff58]" 
                  onClick={nextImage}/>
            </div>
        </div>
    </div>
  )
}

export default Connect