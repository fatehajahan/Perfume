import React, { useState } from 'react'
import logo from '../../../assets/homepage/logo1.png'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = ({ setCartOpen }) => {
  console.log("Navbar received setCartOpen:", typeof setCartOpen);
  const [profile, setProfile] = useState(false)
  const profileOpen = () => {
    setProfile(!profile)
  }

  return (
    <div className='py-[20px] fixed bg-white top-0 left-0 w-full z-50'>
      <div className="container">
        <div className='flex justify-between items-center'>
          <div className="leftNavitems flex items-center gap-x-[20px] font-urbanist text-[13px] cursor-pointer">
            <p>BUY PERFUMES</p>
            <p>EXCLUSIVE</p>
            <p>WOMEN</p>
            <p>MEN</p>
          </div>

          <Link to="/">
            <div className="middleLogo">
              <img src={logo} alt="" className='cursor-pointer' />
            </div>
          </Link>

          <div className="rightnavitems flex items-center gap-x-[20px] font-urbanist text-[13px] cursor-pointer">
            <p>ABOUT</p>
            <Link to="/contact">CONTACT</Link>
            <div className='flex items-center text-[25px] gap-x-[20px] cursor-pointer '>
              <FaCartArrowDown className='hover:text-[#6a6a6a] transition duration-300' onClick={() => {
                console.log(setCartOpen, "button")
                setCartOpen(true)
              }} />
              <FaCircleUser className='hover:text-[#6a6a6a] transition duration-300' onClick={profileOpen} />
              {
                profile && (
                  <div className='absolute right-[250px] top-[90px] z-50'>
                    <div className='bg-white flex flex-col gap-y-[30px] py-[30px] px-[20px] rounded-lg shadow-lg'>
                      <Link to="/login" className='bg-black text-white hover:bg-transparent hover:text-black transition duration-500 px-[15px] text-center'>Login</Link>
                      <Link to="/registration" className='bg-black text-white hover:bg-transparent hover:text-black transition duration-500 px-[15px] text-center'>Registration</Link>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar