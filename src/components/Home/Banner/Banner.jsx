import React from 'react'
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <div className='bg-banner bg-cover bg-no-repeat bg-center pt-[100px] pb-[80px] h-screen flex items-center justify-center bg-fixed'>
                <div className="container">
                    <p className='font-cormot font-bold text-[16px]'>Member's days</p>
                    <h1 className='font-cormot text-[88px] w-[670px] uppercase leading-[123.2px] animate__animated animate__fadeInLeft py-[50px]'>Your exclusive sitewide offer awaits</h1>
                    <div className='font-cormot text-white bg-black py-2 px-6 w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-black border border-black transition duration-500 font-bold mt-6 tracking-wide'>SIGNUP NOW</div>
                </div>
            </div>
        </div>
    )
}

export default Banner