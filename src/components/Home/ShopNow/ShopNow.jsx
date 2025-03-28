import React from 'react'
import shop from '../../../assets/homepage/shop.png'

const ShopNow = () => {
    return (
        <div className='pb-[100px] select-none'>
            <div className="container">
                <div className='bg-shop bg-cover bg-no-repeat bg-center h-screen flex justify-center bg-fixed relative'>
                    <div className="container pt-[97px]">
                        <p className='text-white text-[18px] font-cormot'>eau de toilette</p>
                        <p className='text-white text-[55px] w-[400px] font-cormot'>PERFUME REFLECTIVE EDITION</p>
                        <p className='text-white w-[250px] text-[13px] font-urbanist'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        <button className="font-cormot text-black bg-white py-2 px-6 w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-white border border-white transition duration-500 font-bold mt-6 tracking-wide">
                            SHOP NOW
                        </button>
                    </div>
                    <img src={shop} alt="" className='w-[299px] absolute bottom-[-30px] flex justify-center' />
                </div>
            </div>
        </div>
    )
}

export default ShopNow