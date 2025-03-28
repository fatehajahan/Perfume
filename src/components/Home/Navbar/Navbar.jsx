import React from 'react'
import logo from '../../../assets/homepage/logo1.png'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = ({ setCartOpen }) => {
  console.log("Navbar received setCartOpen:", typeof setCartOpen);
  
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
              <FaCircleUser className='hover:text-[#6a6a6a] transition duration-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar