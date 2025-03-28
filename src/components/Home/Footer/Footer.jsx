import React from 'react'
import logo from '../../../assets/homepage/logo2.png'

const Footer = () => {
    return (
        <div className='bg-black pt-[80px] text-white select-none'>
            <div className="container">
                <div className='flex'>
                    <div className="left w-1/3">
                        <img src={logo} alt="" />
                        <p className='w-[280px] text-[14px] font-urbanist pt-[43px]'>Lorem ipsum dolor sit amet, conseoriosam, dolore a, earum qui excepturi, Dolorem officiis natus nemo nam beatae incidunt mollitia!</p>
                    </div>

                    <div className="left w-1/3">
                        <p className='font-cormot font-bold'>customer care</p>
                        <div className='font-cormot '>
                            <p className='w-[280px] text-[14px] font-urbanist pt-[43px]'>Need help? We're always here for you, and ready to help.</p>
                            <div className='pt-[28px]'>
                                <p>Email:info@gmail.com</p>
                                <p>Phone:+1234567890</p>
                                <p>Address:123 Fifth Aveneu, New Yourk, NY 10160</p>
                            </div>
                        </div>
                    </div>

                    <div className="left w-1/3">
                        <p className='font-cormot font-bold'>follow us</p>
                        <div className='pt-[43px] font-cormot'>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>YouTube</p>
                            <p>Pinterest</p>
                            <p>Twitter</p>
                        </div>
                    </div>

                    <div className="left w-1/3">
                        <p className='font-cormot font-bold'>useful links</p>
                        <div className='pt-[43px] font-cormot'>
                            <p>Returns & Exchange</p>
                            <p>FAQ</p>
                            <p>Shipping Information</p>
                            <p>Affiliates</p>
                            <p>Wholesale</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[30px] text-center border border-[#ffffff8a] mt-[40px] font-cormot'>
                <p>Copyright © 2025 Innesa Perfumes | Powered by Innesa Perfumes</p>
            </div>
        </div>
    )
}

export default Footer