import React from 'react'
import new1 from '../../../assets/homepage/new1.jpg'
import new2 from '../../../assets/homepage/new2.jpg'
import new3 from '../../../assets/homepage/new3.jpg'
import new4 from '../../../assets/homepage/new4.jpg'

const NewArraival = () => {
    return (
        <div className='py-[130px]'>
            <div className="container">
                <div className='firstArraival flex justify-between items-center'>
                    <div className='relative ml-[115px]'>
                        <img src={new1} alt="" className='' />
                        <img src={new2} alt="" className='absolute top-[150px] left-[-140px] w-[274px]' />
                    </div>

                    <div className="text-right">
                        <p className="font-cormot font-bold text-base uppercase tracking-wide text-black">
                            Our original perfume
                        </p>
                        <h1 className="font-cormot text-[68px] md:text-[88px] leading-tight pt-[20px]">
                            The <br /> new <br /> fragrance
                        </h1>
                        <p className='w-[500px] font-urbanist py-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit quo vero vitae inventore excepturi eum quod debitis nulla architecto.</p>
                        <button className="font-cormot text-white bg-black py-2 px-6 w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-black border border-black transition duration-500 font-bold mt-6 tracking-wide">
                            SIGN UP NOW
                        </button>
                    </div>
                </div>



                <div className='SecondArraival flex justify-between items-center'>
                    <div className="text-left">
                        <p className="font-cormot font-bold text-base uppercase tracking-wide text-balck pt-[50px]">
                            eau de toilette
                        </p>
                        <h1 className="font-cormot text-[68px] md:text-[88px] leading-tight pt-[20px] w-[300px]">
                        instinctive and electric
                        </h1>
                        <p className='w-[500px] font-urbanist py-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit quo vero vitae inventore excepturi eum quod debitis nulla architecto.</p>
                        <button className="font-cormot text-white bg-black py-2 px-6 w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-black border border-black transition duration-500 font-bold mt-6 tracking-wide">
                            DISCOVER
                        </button>
                    </div>


                    <div className='relative mr-[115px]'>
                        <img src={new3} alt="" className=' bottom-[90px] right-[80px]' />
                        <img src={new4} alt="" className='absolute top-[150px] right-[-140px] w-[274px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArraival