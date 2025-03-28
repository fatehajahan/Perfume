import React from 'react'
import { Link } from 'react-router-dom'
import login from '../../assets/login/login.png'

const Login = () => {
    return (
        <div className='bg-[linear-gradient(90deg,#AE8625,#F7EF8A,#D2AC47,#EDC967)] flex items-center justify-center h-screen'>
            <div className="w-[70%] flex flex-col items-center justify-center">
                <div className='bg-white w-[60%] py-[70px] px-[40px] rounded-2xl'>
                    <div className='text-center'>
                        <p className='font-Dafoe text-[14px] text-[#7b462b] font-bold'>Enchant Your Senses-Shop Fragrance, Shop Elegance!</p>
                        <p className='font-cormot text-[50px] font-bold text-[#c6866b]'>Log In</p>
                    </div>

                    <div className='flex flex-col gap-y-[30px] mt-[20px]'>
                        <input type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full placeholder:text-[14px]' placeholder='Give Your Email id' />

                        <input type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full placeholder:text-[14px]' placeholder='Create a password' />
                    </div>

                    <div className="submitBtn mt-[30px] text-center">
                        <Link>
                            <p className='bg-[#c6866b] w-[150px] text-center py-[5px] mx-auto cursor-pointer font-urbanist font-bold hover:bg-transparent hover:text-black text-white transition duration-500'>Log In</p>
                        </Link>

                        <div className='pt-[20px]'>
                            <Link to="/registration" className='font-urbanist'>Didn't Registered Yet? What are you waiting for..? <span className='text-[#c6866b] font-bold'>Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[50%] flex flex-col items-center justify-center ml-[-250px]'>
                <img src={login} alt="" />
            </div>

        </div>
    )
}

export default Login