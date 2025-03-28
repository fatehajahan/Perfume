import React from 'react'
import catagory1 from '../../../assets/homepage/catagory1.jpg'
import catagory2 from '../../../assets/homepage/catagory2.jpg'
import catagory3 from '../../../assets/homepage/catagory3.jpg'
// import logo from '../../assets/homepage/logo2.png'


const Catagory = () => {
    return (
        <div className='pb-[100px]'>
            <div className="container">
                <div className="title text-center font-cormot">
                    <p className='text-[17px]'>New perfumes</p>
                    <h2 className='font-cormot text-[55px]'>Shop by Category</h2>
                    <div className='bg-black w-[45px] h-[1.5px] mx-auto mt-[20px]'></div>
                </div>

                <div className="catagories flex justify-between gap-x-[20px] mt-[40px]">
                    <div className='w-1/3 relative'>
                        <img src={catagory1} alt="" className='w-full' />
                        <div className='bg-[#fff] opacity-[80%] hover:opacity-[100%] transition duration-300 py-[10px] w-[400px] absolute bottom-[30px] left-[10px] text-center cursor-pointer'>
                            <p className='font-cormot text-[16px]  font-bold'>EXCLUSIVE</p>
                            <p className='text-[12px] font-urbanist'>6 Products</p>
                        </div>
                    </div>

                    <div className='w-1/3 relative'>
                        <img src={catagory2} alt="" className='w-full' />
                        <div className='bg-[#fff] opacity-[80%] hover:opacity-[100%] transition duration-300 py-[10px] w-[400px] absolute bottom-[30px] left-[10px] text-center cursor-pointer'>
                            <p className='font-cormot text-[16px]  font-bold'>MEN</p>
                            <p className='text-[12px] font-urbanist'>6 Products</p>
                        </div>
                    </div>

                    <div className='w-1/3 relative'>
                        <img src={catagory3} alt="" className='w-full' />
                        <div className='bg-[#fff] opacity-[80%] hover:opacity-[100%] transition duration-300 py-[10px] w-[400px] absolute bottom-[30px] left-[10px] text-center cursor-pointer'>
                            <p className='font-cormot text-[16px]  font-bold'>WOMEN</p>
                            <p className='text-[12px] font-urbanist'>6 Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory