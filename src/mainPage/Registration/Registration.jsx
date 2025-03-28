import React from 'react'
import reg from '../../assets/registration/registration.png'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div className='flex items-center overflow-hidden h-screen bg-[linear-gradient(90deg,#AE8625,#F7EF8A,#D2AC47,#EDC967)]'>
            <div className="w-[70%] flex flex-col items-center justify-center">
                <div className='bg-white w-[60%] py-[70px] px-[40px] rounded-2xl'>
                    <div className='text-center'>
                        <p className='font-cormot text-[20px] font-bold'>Let's Start a New Journey..!</p>
                        <p className='font-cormot text-[50px] font-bold text-[#c2155b]'>Sign Up</p>
                    </div>

                    <div className='flex flex-col gap-y-[30px] mt-[20px]'>
                        <input type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full placeholder:text-[14px]' placeholder='Give Your Email id' />
                        <input type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full placeholder:text-[14px]' placeholder='Give Your Name' />
                        <input type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full placeholder:text-[14px]' placeholder='Create a password' />
                    </div>

                    <div className="submitBtn mt-[30px] text-center">
                        <Link>
                            <p className='bg-[#c2155b] w-[150px] text-center py-[5px] mx-auto cursor-pointer font-urbanist font-bold text-white hover:bg-transparent hover:text-black transition duration-500'>Sign Up</p>
                        </Link>

                        <div className='pt-[20px]'>
                            <Link to="/login" className='font-urbanist'>Already Have An Account? <span className='text-[#c2155b] font-bold'>Log In</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%]">
                <img src={reg} alt="" />
            </div>
        </div>
    )
}

export default Registration