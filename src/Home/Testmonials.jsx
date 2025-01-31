import React, { useRef, useState, useEffect } from 'react'

const Testimonials = () => {
  const testimonialsRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "This dashboard has completely <br /> transformed how I manage my <br /> daily tasks. The intuitive design <br /> and smart reminders keep me <br /> organized and productive!",
      img: "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769ca5244bb4535b0371ce6_Testimonial%20Image.svg",
    },
    {
      text: "This dashboard has completely <br /> transformed how I manage my <br /> daily tasks. The intuitive design <br /> and smart reminders keep me <br /> organized and productive!",
      img: "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6cc2cf41b964f0c9d94_Team%20(2).svg",
    },
    {
      text: "This dashboard has completely <br /> transformed how I manage my <br /> daily tasks. The intuitive design <br /> and smart reminders keep me <br /> organized and productive!",
      img: "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6c01fc22815018aa379_Team%20(1).svg",
    },
    {
        text: "This dashboard has completely <br /> transformed how I manage my <br /> daily tasks. The intuitive design <br /> and smart reminders keep me <br /> organized and productive!",
        img: "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6cc2cf41b964f0c9d94_Team%20(2).svg",
      },
      {
        text: "This dashboard has completely <br /> transformed how I manage my <br /> daily tasks. The intuitive design <br /> and smart reminders keep me <br /> organized and productive!",
        img: "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676da6c01fc22815018aa379_Team%20(1).svg",
      },
      {
        text: "This dashboard has completely <br /> transformed how I manage my <br /> daily tasks. The intuitive design <br /> and smart reminders keep me <br /> organized and productive!",
        img: "https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769ca5244bb4535b0371ce6_Testimonial%20Image.svg",
      },
  ]

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft = 0
    }
  }, [])

  const scrollForward = () => {
    if (testimonialsRef.current) {
      if (currentIndex < testimonials.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1)
        testimonialsRef.current.children[currentIndex + 1].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      } else {
        setCurrentIndex(0)
        testimonialsRef.current.children[0].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }

  const scrollReverse = () => {
    if (testimonialsRef.current) {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1)
        testimonialsRef.current.children[currentIndex - 1].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      } else {
        setCurrentIndex(testimonials.length - 1)
        testimonialsRef.current.children[testimonials.length - 1].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }

  return (
    <div className="mt-[140px]">
      <h1 className="text-[44px] flex justify-center items-center text-center">Testimonials</h1>
      <div className="mt-[150px] flex px-[15%] whitespace-nowrap gap-6 overflow-x-hidden overflow-y-hidden" ref={testimonialsRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`flex flex-col justify-center items-center text-center transition-opacity duration-500 px-8 ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'}`}>
            <div className="px-12 py-8 border border-[#ffffff1f] text-lg rounded-xl bg-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: testimonial.text }}/>
            <div className="testimonail-line"></div>
            <div className="bg-[#1f1f1f] border text-lg border-[#6d6d6d] px-3 py-3 rounded-xl left-1/2 top-[10px]">
              <img className="w-[55px]" src={testimonial.img} alt={`Testimonial ${index + 1}`} />
            </div>
            <p className="text-2xl mt-2">Sarah M.</p>
          </div>

        ))}

      </div>

      <div className="mt-[100px] flex max-w-[1350px] mx-auto items-start justify-start flex-row gap-4 px-6">

        <div className="px-2 py-2 bg-[#1b1b1b] border border-[#ffffff1f] rounded-lg cursor-pointer" onClick={scrollReverse}>
          <img src="https://img.icons8.com/?size=100&id=40217&format=png&color=FFFFFF" className="max-w-5"/>
        </div>

        <div className="px-2 py-2 bg-[#1b1b1b] border border-[#ffffff1f] rounded-lg cursor-pointer"onClick={scrollForward}>
          <img src="https://img.icons8.com/?size=100&id=7849&format=png&color=FFFFFF" className="max-w-5"/>
        </div>

      </div>
    </div>
  )
}

export default Testimonials