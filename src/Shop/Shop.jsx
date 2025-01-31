import React, { useEffect, useState } from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import Email from './Email'
import Footer from './Footer'

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems')
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const addToCart = (course) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.title === course.title)
      if (existingItem) {
        return prev.map(item => item.title === course.title ? { ...item, quantity: item.quantity + 1 } : item)
      } else {
        return [...prev, { ...course, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (title) => {
    setCartItems((prev) => prev.filter(item => item.title !== title))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cartItems')
  }

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '').replace(' USD', '')), 0)
      .toFixed(2)
  }

  const [loading, setLoading] = useState({})

  const handleAddToCart = (course) => {
    setLoading((prev) => ({ ...prev, [course.title]: true }))

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [course.title]: false }))
      addToCart(course)
    }, 2000)
  }

  const [showMessage, setShowMessage] = useState(false);

  const courseData = [
    {
      title: 'Sustainable Architecture: Integrating Green Technologies for Urban Spaces',
      price: '$ 42.00 USD',
      image: 'https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72f7_jason-goodman-DeoWFWz2pgQ-unsplash.jpg',
      categories: ['Game Dev', 'Design']
    },
    {
      title: 'Advanced Mobile App Design and User Experience Optimization',
      price: '$ 47.00 USD',
      image: 'https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72f3_Courses%2001.jpg',
      categories: ['Database Dev', 'Design']
    },
    {
      title: 'Strategic Business Analytics and Data-Driven Decision Making',
      price: '$ 52.00 USD',
      image: 'https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72f5_Courses%2003.jpg',
      categories: ['Database Dev', 'Design']
    },
    {
      title: 'Ethical Hacking and Cybersecurity Fundamentals',
      price: '$ 41.00 USD',
      image: 'https://cdn.prod.website-files.com/67698a590d75c7b9c60e7259/67698a590d75c7b9c60e72f4_Courses%2002.jpg',
      categories: ['Database Dev', 'Design']
    },
  ]

  return (
    <div>
      <div className="bg-[#121212]">
        <nav className='mt-8 px-8 fixed top-0 left-0 right-0 z-50'>
          <div className='flex justify-between items-center text-center max-w-[1350px] mx-auto bg-[#b0b0b00d] border border-[#444] rounded-full px-8 py-3 backdrop-blur-[20px] shadow-lg'>
            <a href="/"><img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/6769925dbf351486c2c71ea8_Todo%20Logo.svg" alt="Todo Logo" className="h-8 cursor-pointer" /></a>
            <div className="flex gap-[40px] font-medium nav ml-[28px]">
              <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/' }} className="text-[#fff9] texts hover:text-[#fff] transition">
                Home</Link>
              <Link to="/Features" onClick={(e) => { e.preventDefault(); window.location.href = '/Features' }} className="text-[#fff9] texts hover:text-[#fff] transition">Features</Link>
              <Link to="/About" onClick={(e) => { e.preventDefault(); window.location.href = '/About' }} className="text-[#fff9] texts hover:text-[#fff] transition">About</Link>
              <Link to="/Blog" onClick={(e) => { e.preventDefault(); window.location.href = '/Blog' }} className="text-[#fff9] texts hover:text-[#fff] transition">Blog</Link>
              <Link to="/Shop" onClick={(e) => { e.preventDefault(); window.location.href = '/Shop' }} className="text-[#fff] texts hover:text-[#fff] transition">Shop</Link>
            </div>
            <div className="flex items-center gap-10">
              <img src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e732a_Cart%20Icon.svg" alt='shop-icon' className="w-[26px] cursor-pointer mr-[-22px] shop" onClick={() => setIsMenuOpen(true)} />
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
      </div>

      <div className='flex flex-col mt-[140px] justify-center items-center text-center gap-3'>
        <div className="company-background"></div>
        <img className='max-w-14' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/676d8292996f1e982130c558_About%20Logo.svg" alt="" />
        <p className='text-[60px]'>Courses</p>
        <p className='text-[#fff9] px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris</p>
        <button className="bg-white font-medium text-lg mt-2 text-black py-2 px-6 rounded-full hover:bg-[#fff9] duration-500 transition">Start Learning</button>
      </div>
      <div className='max-w-[1300px] mx-auto mt-12 px-6'>
        <img className='rounded-2xl' src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7352_Shop%20Image%20Main.webp" alt="" />
      </div>
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
      </div>

      <div className='mt-[130px]'>
        <div className='grid grid-cols-3 max-w-[1350px] mx-auto gap-8 px-8 courses'>
          {courseData.map((course, index) => (
            <div key={index} className='rounded-xl border border-[#303030] bg-[#1c1c1c]'>
              <div>
                <img className='rounded-xl' src={course.image} alt="" />
              </div>
              <div className="flex flex-row gap-2 mt-3 px-5 text-[#fff9] text-base">
                {course.categories.map((category, i) => (
                  <p key={i} className="bg-[#1f1f1f] px-2 py-1 rounded-lg transition duration-300 hover:bg-[#3e3d3d] cursor-pointer">
                    {category}
                  </p>
                ))}
              </div>
              <p className='text-xl mt-3 px-5'>{course.title}</p>
              <div className='flex flex-row justify-between border-t border-[#303030] pt-3 px-5 pb-6 mt-3 buy'>
                <p className='text-[#fffc] text-xl mt-2'>{course.price}</p>
                <button
                  className="flex items-center gap-2 rounded-full bg-[#0d0d0e] px-6 py-2 text-xl transition duration-300 hover:bg-[#252526] cart"
                  onClick={() => {
                    handleAddToCart(course);
                    setTimeout(() => {
                      setIsMenuOpen(true);
                    }, 2000);
                  }}
                  disabled={loading[course.title]}>
                  <img src="https://img.icons8.com/forma-regular/48/FFFFFF/shopping-cart.png" alt="Shopping Cart" className="w-6 h-6" />
                  {loading[course.title] ? 'Adding to Cart...' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Email />
      <Footer />

      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 right-0 -mt-3 mx-auto z-50 rounded-2xl transition-all ${isMenuOpen ? "slide-left-container" : "slide-left-container-closing"}`}
          onClick={() => { setIsMenuOpen(false) }}>
          <div
            className={`fixed h-[90%] w-[1300px] bg-[#181818] p-6 shadow-lg transition-all transform rounded-lg border border-[#303030] add-section`}
            onClick={(e) => e.stopPropagation()}
            onTransitionEnd={(e) => {
              if (!isMenuOpen) {
                e.stopPropagation()
              }
            }}>
            <div className="pb-2 border-b border-[#303030]">
              <img
                src="https://cdn.prod.website-files.com/67698a590d75c7b9c60e7223/67698a590d75c7b9c60e7312_X%20Icon.svg"
                onClick={() => { setIsMenuOpen(false) }}
                className="w-4 h-4 absolute top-8 right-4 cursor-pointer"
                alt="close-icon" />
              <h2 className="text-3xl mb-4">Your Cart</h2>
            </div>

            <div className={`${cartItems.length > 0 ? 'bg-[rgb(24,24,24)]' : 'bg-[#131313]'} h-[92%] rounded-3xl transition-colors duration-300`}>
              <div className="grid grid-cols-2 justify-center text-center gap-2 h-[74vh] pb-20 px-6 py-6 overflow-auto coursess">
                {cartItems.length === 0 ? (
                  <div className='col-span-2 text-center flex justify-center flex-col items-center gap-5'>
                    <p className="text-[#fff9] text-[26px]">No items found.</p>
                    <button className="bg-white font-medium text-lg text-[#111] py-2 px-5 rounded-full border border-[#7e7e7e]">
                      Go Shop
                    </button>
                  </div>
                ) : (
                  cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 mb-4 flex-col">
                      <img src={item.image} alt={item.title} className="max-w-[100%] rounded-md" />
                      <div className='flex flex-col items-center gap-4'>
                        <p className="text-[#fff] text-lg lg:text-2xl">{item.title}</p>
                        <p className="text-[#fffc] text-lg">x{item.quantity}</p>
                        <div className='flex flex-row gap-5 items-center'>
                          <p className="text-[#fffc] text-lg">{item.price}</p>
                          <img
                            className='w-[30px] h-[18px] cursor-pointer'
                            src="https://img.icons8.com/?size=100&id=7837&format=png&color=FFFFFF"
                            alt="delete-icon"
                            onClick={() => removeFromCart(item.title)} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className='flex flex-col justify-center items-center gap-2 mt-[-80px] border-t border-[#303030] pt-4 relative bg-[rgb(24,24,24)] w-full px-4 sm:px-6 md:px-8'>
                  <div className='flex flex-row gap-4 items-center'>
                    <img
                      className='w-[25px] h-[15px] sm:w-[30px] sm:h-[18px] cursor-pointer'
                      src="https://img.icons8.com/?size=100&id=7837&format=png&color=FFFFFF"
                      onClick={clearCart}
                    />
                    <div className="text-xl sm:text-2xl text-[#fff]">Subtotal: ${calculateTotal()}</div>
                  </div>

                  <div className='flex flex-col items-center gap-3 w-full max-w-[600px]'>
                    <button
                      onClick={() => setShowMessage(true)}
                      className="flex items-center justify-center gap-2 -mt-1 rounded-full bg-[#0d0d0e] w-full sm:w-auto sm:px-20 md:px-32 lg:px-48 py-2 text-base sm:text-xl transition duration-300 hover:bg-[#252526] cart"
                    >
                      <img
                        src="https://img.icons8.com/forma-regular/48/FFFFFF/shopping-cart.png"
                        alt="Shopping Cart"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                      Checkout
                    </button>
                    {showMessage && (
                      <div className="text-red-500 text-xs font-semibold sm:text-base -mt-1">
                        Checkout is currently unavailable on this site
                      </div>
                    )}
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop